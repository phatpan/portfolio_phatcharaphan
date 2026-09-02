function Portfolio() {
  try {
    const projects = [
      {
        title: "Drama Video Streaming Platform",
        company: "PRINTCODE COMPANY LIMITED",
        tech: "Angular, Node.js, Flutter",
        description: "End-to-end scalable streaming platform with cross-platform mobile app and ad insertion features."
      },
      {
        title: "Pharmacy Digital Platform",
        company: "ARINCARE Co., Ltd.",
        tech: "Vue.js, React, PHP Laravel, Python, AI Agent",
        description: "Advanced platform for pharmacists with AI chatbot, inventory management, and 30% latency reduction."
      },
      {
        title: "Payroll Service Application",
        company: "TPH Global",
        tech: "React, TypeScript, Node.js, React Native",
        description: "Comprehensive payroll management system with mobile app and real-time notifications."
      },
      {
        title: "TMB One App (Banking)",
        company: "TMBThanachart Bank",
        tech: "Swift, Kotlin, Spring Boot, React",
        description: "Mobile banking platform with personalization features for financial transaction management."
      },
      {
        title: "GO by Krungsri Auto",
        company: "Krungsri Bank",
        tech: "Swift, Kotlin, Spring Boot",
        description: "Car loan services mobile app with exclusive privileges and partner API integrations."
      },
      {
        title: "SafeBsc Finance Portfolio",
        company: "Blockchain Project",
        tech: "React, Node.js, Web3, MetaMask",
        description: "Blockchain-based portfolio management with wallet integration and DeFi features."
      }
    ];

    return (
      <section data-name="portfolio" data-file="components/Portfolio.js" className="py-12 section-fade">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Featured Projects</h2>
            <div className="portfolio-grid">
              {projects.map((project, index) => (
                <div key={index} className="portfolio-card">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-purple-300 text-sm mb-3">{project.company}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.split(', ').map((tech, techIndex) => (
                      <span key={techIndex} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Portfolio component error:', error);
    reportError(error);
  }
}
