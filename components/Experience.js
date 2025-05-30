function Experience() {
  try {
    const experiences = [
      {
        title: "Senior Software Engineer",
        company: "PRINTCODE COMPANY LIMITED",
        location: "Bangkok, Thailand",
        period: "Oct 2024 - Current",
        description: "Spearheaded end-to-end development of scalable drama video streaming platform with Angular frontend, Node.js backend, and Flutter mobile app."
      },
      {
        title: "Senior Software Engineer (Part-time)",
        company: "ARINCARE Co., Ltd.",
        location: "Bangkok, Thailand", 
        period: "Oct 2024 - Current",
        description: "Designed advanced digital platform for pharmacists, implemented AI Agent system for chatbot interactions, reduced system latency by 30%."
      },
      {
        title: "Senior Software Engineer (Part-time)",
        company: "TPH Global",
        location: "Melbourne, Australia",
        period: "Oct 2023 - April 2024",
        description: "Led comprehensive payroll service application development with React TypeScript frontend and Node.js backend."
      },
      {
        title: "Senior Software Engineer",
        company: "Odd-e (Thailand) Co Ltd.",
        location: "Bangkok, Thailand",
        period: "April 2021 - Oct 2024",
        description: "Consulted for major Thai banks (TTB, Krungsri, KTB) and SET, developing mobile banking apps and trading platforms."
      },
      {
        title: "Software Developer",
        company: "Odd-e (Thailand) Co Ltd.",
        location: "Bangkok, Thailand",
        period: "Oct 2016 - April 2021",
        description: "Developed financial applications for SET and KTB, built merchant management systems and automated testing frameworks."
      },
      {
        title: "Programmer Analyst",
        company: "BECi Corporation Co., Ltd",
        location: "Bangkok, Thailand",
        period: "Aug 2011 - Aug 2014",
        description: "Developed comprehensive websites for ThaiTV3 and Krobkruakao, built Smart TV applications and Facebook integrations."
      }
    ];

    return (
      <section data-name="experience" data-file="components/Experience.js" className="py-12 section-fade">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Professional Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="hover-glow p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-lg text-purple-300 mb-1">{exp.company}</h4>
                    <p className="text-gray-400 text-sm mb-2">{exp.location} | {exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Experience component error:', error);
    reportError(error);
  }
}
