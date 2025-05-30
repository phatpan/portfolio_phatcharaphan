function AdditionalProjects() {
  try {
    const [activeCategory, setActiveCategory] = React.useState('business');

    const businessSystems = [
      {
        title: "TheBeautyTH.com",
        company: "Freelance", 
        tech: "HTML, Bootstrap, CSS",
        description: "E-commerce website for cosmetics with responsive design and product catalog."
      },
      {
        title: "ThaiBizWisdom.com",
        company: "Freelance",
        tech: "PHP, MySQL",
        description: "Business wisdom and knowledge sharing platform with content management."
      },
      {
        title: "Room Management System",
        company: "Freelance",
        tech: "PHP, Angular, MySQL",
        description: "Hotel room booking and management system with real-time availability."
      },
      {
        title: "Point of Sale System",
        company: "Team Project",
        tech: "Angular, Go, Java, MySQL",
        description: "Retail POS system with inventory management and sales reporting."
      },
      {
        title: "Hospital Management System",
        company: "Team Project",
        tech: "React, Go, MongoDB",
        description: "Patient management system with appointment scheduling and billing features."
      },
      {
        title: "Ementerprise.co.th",
        company: "Freelance",
        tech: "PHP, MySQL",
        description: "Corporate website with business information and service portfolio."
      }
    ];

    const specializedApps = [
      {
        title: "Emerson Electric Scanner App",
        company: "Emerson Electric Thailand",
        tech: "VB.NET, SQL Server",
        description: "Barcode scanner application for inventory management and leak detection tracking."
      },
      {
        title: "Thong Nuea Gao Character App",
        company: "Freelance",
        tech: "Facebook API, PHP, JavaScript",
        description: "Entertainment Facebook app for character matching based on Thai drama series."
      },
      {
        title: "KB Sport Management",
        company: "Freelance",
        tech: "PHP, MySQL, JavaScript",
        description: "Football sports management website with team and player information."
      },
      {
        title: "RS Enhancement & World Cup SMS",
        company: "Contract Work",
        tech: "PHP, Sugar CRM",
        description: "SMS notification system for World Cup updates using Sugar CRM platform."
      },
      {
        title: "NSS Bank Gateway",
        company: "Contract Work", 
        tech: "PHP, Sugar CRM",
        description: "Banking gateway integration system built on Sugar CRM framework."
      }
    ];

    const categories = [
      { id: 'business', label: 'Business Systems', projects: businessSystems },
      { id: 'specialized', label: 'Specialized Applications', projects: specializedApps }
    ];

    return (
      <section data-name="additional-projects" data-file="components/AdditionalProjects.js" className="py-12 section-fade">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Additional Projects & Systems</h2>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="portfolio-grid">
              {categories.find(cat => cat.id === activeCategory)?.projects.map((project, index) => (
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
    console.error('AdditionalProjects component error:', error);
    reportError(error);
  }
}
