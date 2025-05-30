function ContactInfo() {
  try {
    const contactItems = [
      { icon: 'fas fa-phone', text: '(781) 921-7869', href: 'tel:+17819217869' },
      { icon: 'fas fa-envelope', text: 'phat.pan@gmail.com', href: 'mailto:phat.pan@gmail.com' },
      { icon: 'fab fa-linkedin', text: 'LinkedIn Profile', href: 'https://linkedin.com/in/phatcharaphan-a-570967a3/' },
      { icon: 'fas fa-map-marker-alt', text: '2C, 535 w 135th st, New York, NY 10031, United States 10310', href: null }
    ];

    return (
      <section data-name="contact-info" data-file="components/ContactInfo.js" className=" section-fade">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text text-center">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 hover-glow p-4 rounded-lg">
                  <i className={`${item.icon} text-purple-400 text-xl`}></i>
                  <div>
                    {item.href ? (
                      <a href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-300 text-sm">{item.text}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ContactInfo component error:', error);
    reportError(error);
  }
}
