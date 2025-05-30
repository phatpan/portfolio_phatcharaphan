function PortfolioProjects() {
  try {
    const [activeCategory, setActiveCategory] = React.useState('bankingAndFinance');

    const corporateProjects = [
      {
        title: "3forfun.com",
        company: "BECi Corporation",
        tech: "PHP, MySQL, HTML, CSS",
        description: "Entertainment website with content management system for news and media content."
      },
      {
        title: "ThaiTV3.com",
        company: "BECi Corporation", 
        tech: "PHP, MySQL, HTML, CSS",
        description: "Television channel website with news management system and video content delivery."
      },
      {
        title: "Krobkruakao.com",
        company: "BECi Corporation",
        tech: "PHP, MySQL, HTML, CSS", 
        description: "News and media portal with dynamic content management and user engagement features."
      },
      {
        title: "Junior MasterChef Thailand",
        company: "BECi Corporation",
        tech: "PHP, MySQL, HTML, CSS",
        description: "Official website for cooking show with contestant profiles and episode management."
      },
      {
        title: "Titanic Exhibition",
        company: "BECi Corporation",
        tech: "PHP, MySQL, HTML, CSS",
        description: "Event promotion website with ticket booking and exhibition information system."
      },
      {
        title: "Disney On Ice 2012",
        company: "BECi Corporation",
        tech: "PHP, MySQL, HTML, CSS",
        description: "Event website with interactive features and ticket sales integration."
      },
      {
        title: "X Japan 2011",
        company: "BECi Corporation",
        tech: "PHP, MySQL, HTML, CSS",
        description: "Concert event website with fan engagement and promotional content features."
      }
    ];

    const facebookApps = [
      {
        title: "Disney On Ice 2013 Facebook App",
        company: "BECi Corporation",
        tech: "Facebook API, PHP, JavaScript",
        description: "Interactive Facebook application for event promotion and user engagement."
      },
      {
        title: "Pitbull Concert Facebook App", 
        company: "BECi Corporation",
        tech: "Facebook API, PHP, JavaScript",
        description: "Concert promotion app with social sharing and ticket information features."
      },
      {
        title: "Phantom of the Opera Facebook App",
        company: "BECi Corporation", 
        tech: "Facebook API, PHP, JavaScript",
        description: "Musical show promotion with interactive content and social engagement."
      },
      {
        title: "L'Arc-en-Ciel Facebook App",
        company: "BECi Corporation",
        tech: "Facebook API, PHP, JavaScript",
        description: "Japanese rock band concert promotion with fan interaction features."
      },
      {
        title: "Maroon 5 Concert Facebook App",
        company: "BECi Corporation",
        tech: "Facebook API, PHP, JavaScript", 
        description: "Concert event app with fan interaction and promotional content features."
      },
      {
        title: "Thailand Open 2012 Facebook App",
        company: "BECi Corporation",
        tech: "Facebook API, PHP, JavaScript",
        description: "Sports event application with tournament updates and fan engagement."
      },
      {
        title: "Jason Mraz Concert Facebook App",
        company: "BECi Corporation",
        tech: "Facebook API, PHP, JavaScript",
        description: "Music concert promotion app with social media integration and fan activities."
      }
    ];

    const newsApps = [
      {
        title: "Breaking News App - Family News 3",
        company: "BECi Corporation",
        tech: "Facebook API, PHP, MySQL",
        description: "Real-time breaking news application for ThaiTV3 Facebook fanpage."
      },
      {
        title: "News Archive App - Family News 3",
        company: "BECi Corporation",
        tech: "Facebook API, PHP, MySQL",
        description: "Historical news browsing application with search and categorization features."
      },
      {
        title: "Samsung Smart TV News App",
        company: "BECi Corporation",
        tech: "JavaScript, Samsung TV SDK",
        description: "News application for Samsung Smart TV platform with real-time content updates."
      },
      {
        title: "LG Smart TV News App", 
        company: "BECi Corporation",
        tech: "JavaScript, LG TV SDK",
        description: "Television news app for LG Smart TV with interactive news browsing."
      },
      {
        title: "Samsung Smart TV ThaiTV3 App",
        company: "BECi Corporation",
        tech: "JavaScript, Samsung TV SDK",
        description: "Official ThaiTV3 application for Samsung Smart TV with video streaming."
      },
      {
        title: "LG Smart TV ThaiTV3 App",
        company: "BECi Corporation",
        tech: "JavaScript, LG TV SDK",
        description: "Official ThaiTV3 application for LG Smart TV with live broadcasting features."
      }
    ];

    const freelanceProjects = [
      {
        title: "Chacha Sunflower Seeds Contest",
        company: "Freelance",
        tech: "Facebook API, PHP, MySQL",
        description: "Contest application with prize management and user participation tracking."
      },
      {
        title: "Blood Type Fortune Telling App",
        company: "Freelance",
        tech: "Facebook API, PHP, JavaScript",
        description: "Entertainment app for fortune telling based on blood type with social sharing."
      },
      {
        title: "Cake Shop Management System",
        company: "Student Project",
        tech: "PHP, MySQL, HTML, CSS",
        description: "Complete e-commerce system for cake shop with order management and inventory."
      },
      {
        title: "University Advisor System",
        company: "Mae Jo University",
        tech: "PHP, MySQL, JavaScript",
        description: "Online advisor consultation system for computer science students."
      },
      {
        title: "iBCTH88 Website",
        company: "Freelance",
        tech: "PHP, MySQL, HTML, CSS",
        description: "Business website with content management and user interaction features."
      },
      {
        title: "Airline Space Decision Support System",
        company: "Freelance",
        tech: "PHP, MySQL, JavaScript",
        description: "Decision support system for air cargo space rental management."
      }, 
      {
        title: "Website for ThaiTerrace restaurant",
        company: "Freelance",
        tech: "WordPress, PHP, MySQL",
        description: "Restaurant website with menu management and online reservation features. You can find it at https://thaiterracesac.com/"
      }
    ];

    const bankingAndFinance = [
      {
        title: "ONE Krungthai Intranet Application",
        company: "Krung Thai Bank",
        tech: "Angular, Java Spring Boot",
        description: "Comprehensive internal tool for employees to access daily updates and resources."
      },
      {
        title: "KTB Merchant Management System",
        company: "Krung Thai Bank",
        tech: "Angular, Java Spring Boot, Android",
        description: "Redesigned merchant system with improved performance and mobile capabilities."
      },
      {
        title: "SET Trading Platform",
        company: "Stock Exchange of Thailand",
        tech: "React, TypeScript, Node.js, JSP",
        description: "Capital market platform for SMEs and startups fund raising with high-volume data handling."
      },
      {
        title: "Streaming Fund+ Mobile App",
        company: "Stock Exchange of Thailand",
        tech: "Swift, Spring Boot",
        description: "Mutual fund trading mobile application for iOS with real-time market data."
      },
      {
        title: "SET IPO Platform",
        company: "Stock Exchange of Thailand",
        tech: "Go programming language, React",
        description: "Web platform for Initial Public Offering with scalable backend architecture."
      },
    ];

    const telecommunicationsProjects = [
      {
        title: "DTAC Support Tools",
        company: "Total Access Communication",
        tech: "AngularJS, Java Spring, Go, Robot Framework",
        description: "Tools to support DTAC Hall and Call Center staff with automated testing."
      },
      {
        title: "Shrimp Pond Monitoring App",
        company: "Freelance for True Digital Group",
        tech: "Swift, Kotlin Spring Boot",
        description: "Real-time pond monitoring with instant notifications for anomaly detection."
      },
      {
        title: "CCTV Cloud Management System",
        company: "Freelance for True Living Tech",
        tech: "Django, Python",
        description: "Web application for managing cloud-based CCTV service configurations."
      },
      {
        title: "AIS Customer Service App",
        company: "Freelance for AIS",
        tech: "Swift",
        description: "Mobile application with Mobile ID and NDID functionalities for AIS customers."
      }
    ];

    const healthcareAndOther = [
      {
        title: "Dementia Prevention App",
        company: "Freelance for Odd-e Tokyo",
        tech: "React Native, TypeScript, GoLang",
        description: "Mobile application with cognitive exercises and monitoring tools for dementia prevention."
      },
      {
        title: "Trade Intelligence Platform",
        company: "Freelance",
        tech: "jQuery, PHP, JavaScript, Node.js",
        description: "Web application focused on trade intelligence and negotiation strategies."
      }
    ];

    const fintechAndStartups = [
      {
        title: "Somjai Home Loan Platform",
        company: "DTAC Accelerate",
        tech: "Angular, React Native, PHP Laravel, AWS",
        description: "Award-winning mobile and web application for property developers' home loan services."
      }
    ];

    const categories = [
      { id: 'bankingAndFinance', label: 'Bankoing & Finance', projects: bankingAndFinance },
      { id: 'telecommunications', label: 'Telecommunications', projects: telecommunicationsProjects },
      { id: 'healthcareAndOther', label: 'Healthcare & Others', projects: healthcareAndOther },
      { id: 'fintechAndStartups', label: 'Fintech & Startups', projects: fintechAndStartups },
      { id: 'corporate', label: 'Corporate Websites', projects: corporateProjects },
      { id: 'facebook', label: 'Facebook Applications', projects: facebookApps },
      { id: 'news', label: 'News & Smart TV Apps', projects: newsApps },
      { id: 'freelance', label: 'Freelance & Academic', projects: freelanceProjects }
    ];

    return (
      <section data-name="portfolio-projects" data-file="components/PortfolioProjects.js" className="py-12 section-fade">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Complete Portfolio Archive</h2>
            
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
    console.error('PortfolioProjects component error:', error);
    reportError(error);
  }
}
