#!/usr/bin/env python3
"""Inline images into portfolio.src.html -> portfolio.html as data URIs.

Placeholders in the source look like:  {{IMG:slug}}
The manifest below maps slug -> (source path, target width, jpeg quality).
Images are resized with `sips` into build/ and base64-inlined.
"""
import base64, os, shutil, subprocess, sys, re

SP = os.path.dirname(os.path.abspath(__file__))
KEY = os.path.join(SP, "key", "Data")
DOCX = os.path.join(SP, "docx", "word", "media")
BUILD = os.path.join(SP, "build")
os.makedirs(BUILD, exist_ok=True)

PREP = os.path.join(SP, "prep")

# slug -> (abs source path, max width px, jpeg quality 1-100)
MANIFEST = {}


def add(slug, width=1200, quality=68, name=None):
    MANIFEST[slug] = (os.path.join(PREP, (name or slug) + ".png"), width, quality)


# slug -> abs path of a video file, inlined as a data: URI
VIDEOS = {
    "nicha": os.path.join(SP, "media", "nicha.mp4"),
    "nicha_line": os.path.join(SP, "media", "nicha_line.mp4"),
}

add("telepharmacy", 1280, 74)
add("ttbtouch",     1120, 60)
add("krungsrigo",   1180, 60)
add("fundplus",     1180, 60)   # hero — Techsauce launch image, pharmacist console
add("nicha_poster",  980, 62)   # first frame, shown if video cannot play
add("nicha_line_poster", 560, 62)
add("juztbooking",   980, 60)
add("rakthai",       980, 58)
add("nitithainy",    980, 58)
add("shabyar",       980, 58)
add("minchap",       980, 62)
add("agripro",      1080, 62)
add("titanic",       480, 58)
add("smarttv",       480, 58)
add("xjapan",        380, 58)
add("mraz",          380, 58)
add("pos11",         480, 58)


def resize(slug, src, width, quality):
    ext = ".jpg"
    out = os.path.join(BUILD, slug + ext)
    # sips: resample to max width, convert to jpeg with quality
    q = "normal"
    if quality >= 80:
        q = "best"
    elif quality >= 65:
        q = "high"
    elif quality >= 45:
        q = "normal"
    else:
        q = "low"
    subprocess.run(
        ["sips", "-s", "format", "jpeg", "-s", "formatOptions", q,
         "--resampleWidth", str(width), src, "--out", out],
        check=True, capture_output=True)
    return out


def data_uri(path):
    with open(path, "rb") as f:
        b = f.read()
    return "data:image/jpeg;base64," + base64.b64encode(b).decode("ascii")


def build_external(out_dir):
    """Emit index.html + assets/ for static hosting (GitHub Pages).

    No CSP to work around there, so real files beat data URIs: smaller HTML,
    cacheable, and the repo stays diffable.
    """
    assets = os.path.join(out_dir, "assets")
    os.makedirs(assets, exist_ok=True)
    with open(os.path.join(SP, "portfolio.src.html"), encoding="utf-8") as f:
        html = f.read()

    for slug in sorted(set(re.findall(r"\{\{VID:([a-z0-9_-]+)\}\}", html))):
        dest = os.path.join(assets, slug + ".mp4")
        shutil.copyfile(VIDEOS[slug], dest)
        html = html.replace("{{VID:%s}}" % slug, "assets/%s.mp4" % slug)
        print("  assets/%s.mp4  %6.0f KB" % (slug, os.path.getsize(dest) / 1024))

    for slug in sorted(set(re.findall(r"\{\{IMG:([a-z0-9_-]+)\}\}", html))):
        src, width, quality = MANIFEST[slug]
        tmp = resize(slug, src, width, quality)
        dest = os.path.join(assets, slug + ".jpg")
        shutil.copyfile(tmp, dest)
        html = html.replace("{{IMG:%s}}" % slug, "assets/%s.jpg" % slug)
        print("  assets/%s.jpg  %6.0f KB" % (slug, os.path.getsize(dest) / 1024))

    page = (
        '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width,initial-scale=1">\n'
        '<meta name="description" content="Phatcharaphan Ananpreechakun — senior full-stack engineer, 14+ years across Thai banking, capital markets, telecom and a Thai FDA-approved telepharmacy platform.">\n'
        '<style>*,*::before,*::after{box-sizing:border-box}body{margin:0}</style>\n'
        + html + "\n</body>\n</html>\n"
    )
    # the source has <title>/<link> at the top; they belong in <head>
    page = page.replace("<style>*,*::before,*::after{box-sizing:border-box}body{margin:0}</style>\n<title>",
                        "<style>*,*::before,*::after{box-sizing:border-box}body{margin:0}</style>\n<title>")
    head_end = page.index("<style>\n  /* ====")
    page = page[:head_end] + "</head>\n<body>\n" + page[head_end:]

    dest = os.path.join(out_dir, "index.html")
    with open(dest, "w", encoding="utf-8") as f:
        f.write(page)
    print("index.html: %.0f KB" % (os.path.getsize(dest) / 1024))


def main():
    if len(sys.argv) > 2 and sys.argv[1] == "--external":
        build_external(sys.argv[2])
        return
    src_html = os.path.join(SP, "portfolio.src.html")
    with open(src_html, encoding="utf-8") as f:
        html = f.read()

    used = sorted(set(re.findall(r"\{\{IMG:([a-z0-9_-]+)\}\}", html)))
    missing = [u for u in used if u not in MANIFEST]
    if missing:
        print("MISSING from manifest:", missing, file=sys.stderr)
        sys.exit(1)

    total = 0

    for slug in sorted(set(re.findall(r"\{\{VID:([a-z0-9_-]+)\}\}", html))):
        if slug not in VIDEOS:
            print("MISSING video from manifest:", slug, file=sys.stderr)
            sys.exit(1)
        path = VIDEOS[slug]
        with open(path, "rb") as f:
            uri = "data:video/mp4;base64," + base64.b64encode(f.read()).decode("ascii")
        total += len(uri)
        html = html.replace("{{VID:%s}}" % slug, uri)
        print("%-22s %6.0f KB  (video)" % (slug, len(uri) / 1024))

    for slug in used:
        src, width, quality = MANIFEST[slug]
        if not os.path.exists(src):
            print("MISSING FILE:", slug, src, file=sys.stderr)
            sys.exit(1)
        out = resize(slug, src, width, quality)
        uri = data_uri(out)
        size = len(uri)
        total += size
        html = html.replace("{{IMG:%s}}" % slug, uri)
        print("%-22s %6.0f KB  (%s)" % (slug, size / 1024, os.path.basename(src)))

    dest = os.path.join(SP, "portfolio.html")
    with open(dest, "w", encoding="utf-8") as f:
        f.write(html)
    print("---")
    print("images inlined: %d, base64 payload: %.2f MB" % (len(used), total / 1024 / 1024))
    print("final file: %.2f MB -> %s" % (os.path.getsize(dest) / 1024 / 1024, dest))


if __name__ == "__main__":
    main()
