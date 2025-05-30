function Education() {
  try {
    const education = [
      {
        school: "EC Boston English Language School",
        degree: "Upper Intermediate level",
        location: "United States",
        period: "12 Nov 2024 - Present"
      },
      {
        school: "Greystone College",
        degree: "Certificate III in Business",
        location: "Melbourne, Australia",
        period: "5 Dec 2022 - 23 Feb 2024"
      },
      {
        school: "Impact English College",
        degree: "Upper Intermediate level",
        location: "Melbourne, Australia",
        period: "7 Aug - 8 Sep 2023"
      },
      {
        school: "ILSC Language Schools",
        degree: "Ending Level of I1(Intermediate)",
        location: "Melbourne, Australia",
        period: "3 March - 14 Oct 2022"
      },
      {
        school: "Maejo University",
        degree: "Bachelor of Science, Computer Science",
        location: "Chiang Mai, Thailand",
        period: "25 May 2007 - 20 June 2011"
      }
    ];

    return (
      <section data-name="education" data-file="components/Education.js" className="py-12 section-fade">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Education & Qualifications</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="hover-glow p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-2">{edu.school}</h3>
                    <h4 className="text-lg text-purple-300 mb-1">{edu.degree}</h4>
                    <p className="text-gray-400 text-sm">{edu.location} | {edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Education component error:', error);
    reportError(error);
  }
}
