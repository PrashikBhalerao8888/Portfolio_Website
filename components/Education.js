function Education() {
  try {
    return (
      <section 
        id="education" 
        className="py-20"
        style={{background: 'var(--secondary-color)'}}
        data-name="education" 
        data-file="components/Education.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Education & Leadership
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{background: 'var(--primary-color)'}}></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-dark fade-in">
                <div 
                  className="w-16 h-16 mb-6 rounded-full flex items-center justify-center"
                  style={{background: 'rgba(59, 130, 246, 0.1)'}}
                >
                  <div className="icon-graduation-cap text-2xl" style={{color: 'var(--primary-color)'}}></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Academic Background</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold" style={{color: 'var(--accent-color)'}}>
                      Post-Graduation (2025)
                    </h4>
                    <p style={{color: 'var(--text-secondary)'}}>
                      Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold" style={{color: 'var(--accent-color)'}}>
                      Graduation (2023)
                    </h4>
                    <p style={{color: 'var(--text-secondary)'}}>
                      Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card-dark fade-in" style={{animationDelay: '0.2s'}}>
                <div 
                  className="w-16 h-16 mb-6 rounded-full flex items-center justify-center"
                  style={{background: 'rgba(59, 130, 246, 0.1)'}}
                >
                  <div className="icon-users text-2xl" style={{color: 'var(--primary-color)'}}></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Leadership Roles</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold" style={{color: 'var(--accent-color)'}}>
                      Head at MindBend
                    </h4>
                    <p style={{color: 'var(--text-secondary)'}}>
                      Co-Curricular Affairs Council, SVNIT
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold" style={{color: 'var(--accent-color)'}}>
                      Advisor at Sparsh
                    </h4>
                    <p style={{color: 'var(--text-secondary)'}}>
                      Cultural Affairs Council, SVNIT Surat
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold" style={{color: 'var(--accent-color)'}}>
                      NIT Powerlifting Representative
                    </h4>
                    <p style={{color: 'var(--text-secondary)'}}>
                      All NIT Powerlifting Tournament
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Education component error:', error);
    return null;
  }
}
