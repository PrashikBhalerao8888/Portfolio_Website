function Navigation({ activeSection }) {
  try {
    const [isScrolled, setIsScrolled] = React.useState(false);
    
    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    const navItems = [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'education', label: 'Education' },
      { id: 'contact', label: 'Contact' }
    ];
    
    return (
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md border-b' : ''
        }`}
        style={{
          background: isScrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
          borderColor: isScrolled ? 'var(--border-color)' : 'transparent'
        }}
        data-name="navigation" 
        data-file="components/Navigation.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div 
              className="text-2xl font-bold cursor-pointer"
              style={{color: 'var(--primary-color)'}}
              onClick={() => scrollToSection('home')}
            >
              PB
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[var(--primary-color)] ${
                    activeSection === item.id ? 'text-[var(--primary-color)]' : 'text-[var(--text-secondary)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navigation component error:', error);
    return null;
  }
}