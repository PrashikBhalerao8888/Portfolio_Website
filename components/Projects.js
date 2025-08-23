function Projects() {
  try {
    const projects = [
      {
        title: "Smart Logistics Data Platform",
        subtitle: "Real-Time Fleet Analytics & Monitoring",
        description: "Built a complete big data pipeline using PySpark, AWS Glue, and Redshift for shipment, GPS, and sensor data. Created ML models to predict delays and interactive dashboards that improved operational decisions.",
        technologies: ["PySpark", "AWS Glue", "Redshift", "MLlib", "Power BI", "Lambda"],
        outcomes: [
          "Reduced reporting lag from hours to minutes",
          "Improved delivery time predictions by 85%",
          "Optimized fuel consumption through route analysis"
        ]
      },
      {
        title: "GenAI-Powered Data Analytics",
        subtitle: "Tata Group Virtual Experience",
        description: "Applied Generative AI to financial risk profiling and decision-making. Built classification models for risk assessment and created proactive strategies using AI-driven insights.",
        technologies: ["Python", "Generative AI", "Classification Models", "Power BI"],
        outcomes: [
          "Identified key risk predictors with 92% accuracy",
          "Automated risk profiling workflows",
          "Designed proactive intervention strategies"
        ]
      },
      {
        title: "Educational Analytics Platform",
        subtitle: "Edignite Educational Trust (Volunteer)",
        description: "Designed automated reporting systems with SQL and dashboards for student enrollment tracking. Helped staff monitor outcomes and implement data-driven interventions.",
        technologies: ["SQL", "Dashboard Design", "Automated Reporting"],
        outcomes: [
          "Improved student retention rates",
          "Reduced reporting time to under 30 minutes",
          "Enabled early intervention for at-risk students"
        ]
      }
    ];
    
    return (
      <section 
        id="projects" 
        className="py-20"
        data-name="projects" 
        data-file="components/Projects.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{background: 'var(--primary-color)'}}></div>
            <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--text-secondary)'}}>
              Real-world projects where I've applied data engineering principles to solve business challenges
            </p>
          </div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="card-dark fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-lg" style={{color: 'var(--accent-color)'}}>
                        {project.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-lg mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide" style={{color: 'var(--text-muted)'}}>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="skill-tag text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4" style={{color: 'var(--primary-color)'}}>
                      Key Outcomes
                    </h4>
                    <ul className="space-y-3">
                      {project.outcomes.map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="flex items-start">
                          <div 
                            className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                            style={{background: 'var(--primary-color)'}}
                          ></div>
                          <span style={{color: 'var(--text-secondary)'}}>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}