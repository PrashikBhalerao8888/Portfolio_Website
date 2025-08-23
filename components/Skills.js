function Skills() {
  try {
    const skillCategories = [
      {
        title: "Programming Languages",
        skills: ["Python", "SQL"]
      },
      {
        title: "Big Data & Analytics",
        skills: ["PySpark", "Spark SQL", "MLlib", "Spark Streaming"]
      },
      {
        title: "Cloud Platforms (AWS)",
        skills: ["S3", "Glue", "Lambda", "EMR", "Redshift", "Athena", "CloudWatch"]
      },
      {
        title: "ETL & Data Warehousing",
        skills: ["Data Pipelines", "Data Warehouse Design", "Optimization"]
      },
      {
        title: "Data Visualization",
        skills: ["Power BI", "Matplotlib", "Tableau"]
      },
      {
        title: "Other Technologies",
        skills: ["Git/GitHub", "Agile (Jira)", "Generative AI", "Prompt Engineering"]
      }
    ];
    
    return (
      <section 
        id="skills" 
        className="py-20"
        style={{background: 'var(--secondary-color)'}}
        data-name="skills" 
        data-file="components/Skills.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{background: 'var(--primary-color)'}}></div>
            <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--text-secondary)'}}>
              Here are the technologies and tools I use to build robust data solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="card-dark fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h3 className="text-xl font-semibold mb-4" style={{color: 'var(--primary-color)'}}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center fade-in">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="text-2xl font-bold mb-2" style={{color: 'var(--primary-color)'}}>
                  Languages
                </h4>
                <div className="space-y-2" style={{color: 'var(--text-secondary)'}}>
                  <p>English (Fluent)</p>
                  <p>Hindi (Fluent)</p>
                  <p>Marathi (Native)</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold mb-2" style={{color: 'var(--primary-color)'}}>
                  Soft Skills
                </h4>
                <div className="space-y-2" style={{color: 'var(--text-secondary)'}}>
                  <p>Team Collaboration</p>
                  <p>Problem Solving</p>
                  <p>Communication</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold mb-2" style={{color: 'var(--primary-color)'}}>
                  Practices
                </h4>
                <div className="space-y-2" style={{color: 'var(--text-secondary)'}}>
                  <p>Agile Development</p>
                  <p>Continuous Learning</p>
                  <p>Time Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}