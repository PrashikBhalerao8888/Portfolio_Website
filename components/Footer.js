function Footer() {
  try {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    const quickLinks = [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' }
    ];
    
    return (
      <footer 
        className="py-12 border-t"
        style={{
          background: 'var(--bg-darker)',
          borderColor: 'var(--border-color)'
        }}
        data-name="footer" 
        data-file="components/Footer.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <div 
                className="text-2xl font-bold mb-2 cursor-pointer"
                style={{color: 'var(--primary-color)'}}
                onClick={() => scrollToSection('home')}
              >
                Prashik Bhalerao
              </div>
              <p style={{color: 'var(--text-muted)'}}>
                Data Engineer & AI Enthusiast
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-6">
                {quickLinks.map(link => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm hover:text-[var(--primary-color)] transition-colors"
                    style={{color: 'var(--text-secondary)'}}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p style={{color: 'var(--text-muted)'}}>
                © 2025 Prashik Bhalerao. All rights reserved.
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center" style={{borderColor: 'var(--border-color)'}}>
            <p style={{color: 'var(--text-muted)'}}>
              Built with passion for data and innovation
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}