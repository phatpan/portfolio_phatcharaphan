function App() {
  try {
    React.useEffect(() => {
      // Add staggered animation delays
      const sections = document.querySelectorAll('.section-fade');
      sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.2}s`;
      });
    }, []);

    return (
      <div data-name="app" data-file="app.js" className="min-h-screen">
        <Header />
        <ContactInfo />
        <Summary />
        <Skills />
        <Experience />
        <Portfolio />
        <PortfolioProjects />
        <AdditionalProjects />
        <Education />
        <Speaking />
        <Awards />
        <Navigation />
        
        <footer className="py-8 text-center text-gray-400">
          <div className="max-w-6xl mx-auto px-6">
            <p>&copy; 2024 Phatcharaphan Ananpreechakun. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    reportError(error);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
