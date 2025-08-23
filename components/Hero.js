function Hero() {
  try {
    const scrollToProjects = () => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    const downloadResume = () => {
      // Create a temporary link for resume download
      const link = document.createElement('a');
      link.href = '#'; // Replace with actual resume URL
      link.download = 'Prashik_Bhalerao_Resume.pdf';
      link.click();
    };
    
    return (
      <section 
        id="home" 
        className="min-h-screen flex items-center pt-20"
        data-name="hero" 
        data-file="components/Hero.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="mb-6">
                <span 
                  className="text-sm font-medium px-3 py-1 rounded-full border"
                  style={{
                    color: 'var(--accent-color)',
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                    background: 'rgba(59, 130, 246, 0.1)'
                  }}
                >
                  Available for Projects
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Helping Businesses
                <span className="block text-gradient">
                  Transform Data
                </span>
                Into Insights
              </h1>
              
              <p className="text-xl mb-8" style={{color: 'var(--text-secondary)'}}>
                Data Engineer skilled in Python, SQL, PySpark, AWS, and Generative AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToProjects}
                  className="btn-primary"
                >
                  View My Projects
                </button>
                <button 
                  onClick={downloadResume}
                  className="btn-secondary"
                >
                  Download Resume
                </button>
              </div>
            </div>
            
            <div className="slide-in-right lg:flex justify-center">
              <div className="relative">
                <div 
                  className="w-80 h-80 rounded-full border-4 overflow-hidden"
                  style={{borderColor: 'var(--primary-color)'}}
                >
                  <img
                   
                   
                   
                   src="https://app.trickle.so/storage/app/Gemini_Generated_Image_sa8amksa8amksa8a.png" alt="Prashik Bhalerao" className="w-full h-full object-cover"/>
                </div>
                <div 
                  className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center"
                  style={{background: 'var(--primary-color)'}}
                >
                  <div className="icon-database text-2xl text-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}