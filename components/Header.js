function Header() {
  try {
    return (
      <header data-name="header" data-file="components/Header.js" className="text-center py-16 section-fade">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Phatcharaphan Ananpreechakun
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Senior Full-Stack Developer
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            14+ years of experience crafting scalable solutions across web, mobile, and cloud platforms
          </p>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    reportError(error);
  }
}
