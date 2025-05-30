function Skills() {
  try {
    const skillCategories = [
      {
        title: "Programming Languages",
        skills: ["Java", "Kotlin", "Swift", "TypeScript", "JavaScript", "Python", "Go", "PHP", "Visual Basic"]
      },
      {
        title: "Mobile Development",
        skills: ["Android (Java, Kotlin)", "iOS (Swift)", "Flutter", "React Native"]
      },
      {
        title: "Web Development",
        skills: ["HTML", "CSS", "JavaScript", "Angular", "React", "Vue.js", "Node.js"]
      },
      {
        title: "Frameworks & Libraries",
        skills: ["Spring Boot", "Laravel", "Angular", "React", "Vue.js", "Node.js", "Robot Framework"]
      },
      {
        title: "Cloud & DevOps",
        skills: ["AWS", "Google Cloud Platform", "Docker", "Kubernetes", "Jenkins", "GitLab CI"]
      },
      {
        title: "Database & Data Management",
        skills: ["MySQL", "PostgreSQL", "Oracle", "MongoDB", "DynamoDB", "SQL Server"]
      }
    ];

    return (
      <section data-name="skills" data-file="components/Skills.js" className="py-12 section-fade">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-300">{category.title}</h3>
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
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    reportError(error);
  }
}
