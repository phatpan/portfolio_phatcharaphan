function Navigation() {
  try {
    const [activeSection, setActiveSection] = React.useState('header');

    React.useEffect(() => {
      const handleScroll = () => {
        const sections = ['header', 'contact-info', 'summary', 'skills', 'experience', 'portfolio', 'portfolio-projects', 'additional-projects', 'education', 'speaking', 'awards'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.querySelector(`[data-name="${section}"]`);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionName) => {
      const element = document.querySelector(`[data-name="${sectionName}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const navItems = [
      { id: 'header', icon: 'fas fa-home', label: 'Home' },
      { id: 'contact-info', icon: 'fas fa-address-card', label: 'Contact' },
      { id: 'summary', icon: 'fas fa-user', label: 'Summary' },
      { id: 'skills', icon: 'fas fa-code', label: 'Skills' },
      { id: 'experience', icon: 'fas fa-briefcase', label: 'Experience' },
      { id: 'portfolio', icon: 'fas fa-star', label: 'Featured' },
      { id: 'portfolio-projects', icon: 'fas fa-folder-open', label: 'Archive' },
      { id: 'additional-projects', icon: 'fas fa-plus-circle', label: 'More Projects' },
      { id: 'education', icon: 'fas fa-graduation-cap', label: 'Education' },
      { id: 'speaking', icon: 'fas fa-microphone', label: 'Speaking' },
      { id: 'awards', icon: 'fas fa-trophy', label: 'Awards' }
    ];

    return (
      <nav data-name="navigation" data-file="components/Navigation.js" className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="glass-effect rounded-full p-2 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group relative ${
                activeSection === item.id 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-purple-600/20'
              }`}
              title={item.label}
            >
              <i className={item.icon}></i>
              <span className="absolute right-full mr-3 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navigation component error:', error);
    reportError(error);
  }
}
