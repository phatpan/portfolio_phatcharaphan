function Awards() {
  try {
    const awards = [
      {
        title: "Best Performing Startup Award",
        organization: "DTAC Accelerate",
        project: "Somjai Home Loan Web Application",
        description: "Recognized for outstanding performance in developing innovative fintech solution for property developers."
      }
    ];

    const languages = [
      {
        language: "English",
        proficiency: "Competent in speaking, listening, and writing"
      },
      {
        language: "Thai",
        proficiency: "Native Language - Fluent"
      }
    ];

    return (
      <section data-name="awards" data-file="components/Awards.js" className="py-12 section-fade">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Awards & Languages</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-purple-300 mb-6">Awards & Achievements</h3>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <div key={index} className="portfolio-card">
                      <h4 className="text-lg font-semibold text-white mb-2">{award.title}</h4>
                      <p className="text-purple-300 text-sm mb-2">{award.organization}</p>
                      <p className="text-gray-300 text-sm mb-2">{award.project}</p>
                      <p className="text-gray-400 text-xs">{award.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-purple-300 mb-6">Languages</h3>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="portfolio-card">
                      <h4 className="text-lg font-semibold text-white mb-2">{lang.language}</h4>
                      <p className="text-gray-300 text-sm">{lang.proficiency}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Awards component error:', error);
    reportError(error);
  }
}
