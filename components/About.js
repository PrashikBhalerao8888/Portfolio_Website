function About() {
  try {
    return (
      <section 
        id="about" 
        className="py-20"
        data-name="about" 
        data-file="components/About.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                About Me
              </h2>
              
              <div className="w-24 h-1 mx-auto mb-8" style={{background: 'var(--primary-color)'}}></div>
              
              <div className="text-lg leading-relaxed mb-8" style={{color: 'var(--text-secondary)'}}>
                <p className="mb-6">
                  Hi, I'm <span className="text-gradient font-semibold">Prashik Bhalerao</span>, 
                  a passionate Data Engineer with expertise in building scalable data pipelines 
                  and solving complex data challenges.
                </p>
                
                <p className="mb-6">
                  I specialize in creating end-to-end data solutions using modern technologies 
                  like Python, PySpark, and AWS cloud services. My experience spans across 
                  real-time data processing, machine learning model deployment, and creating 
                  interactive dashboards for data-driven decision making.
                </p>
                
                <p>
                  I'm particularly excited about leveraging Generative AI to enhance data 
                  interaction and automate analytics workflows, helping businesses transform 
                  raw data into actionable insights.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{background: 'rgba(59, 130, 246, 0.1)'}}
                  >
                    <div className="icon-code text-2xl" style={{color: 'var(--primary-color)'}}></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                  <p style={{color: 'var(--text-muted)'}}>
                    Writing maintainable and efficient data pipelines
                  </p>
                </div>
                
                <div className="text-center">
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{background: 'rgba(59, 130, 246, 0.1)'}}
                  >
                    <div className="icon-cloud text-2xl" style={{color: 'var(--primary-color)'}}></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Cloud Native</h3>
                  <p style={{color: 'var(--text-muted)'}}>
                    Leveraging AWS services for scalable solutions
                  </p>
                </div>
                
                <div className="text-center">
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{background: 'rgba(59, 130, 246, 0.1)'}}
                  >
                    <div className="icon-brain text-2xl" style={{color: 'var(--primary-color)'}}></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
                  <p style={{color: 'var(--text-muted)'}}>
                    Incorporating AI for smarter data processing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}