const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "TypeScript", "JavaScript", "FastAPI", "RESTful APIs", "JSON/XML"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "API Integration", "Streamlit", "Plotly"],
  },
  {
    title: "Data Engineering",
    skills: ["Apache Kafka", "Apache Airflow", "Pandas", "PySpark", "ETL", "Data Validation"],
  },
  {
    title: "AI & ML",
    skills: ["scikit-learn", "TensorFlow", "PyTorch", "LLM Fine-tuning", "Prompt Engineering"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Azure", "Docker", "Git", "GitHub/GitLab", "Cosmos DB"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

        <div className="max-w-5xl mx-auto grid gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="card-glass p-6 rounded-2xl"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-background/50 border border-border/50 rounded-full text-sm
                             hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                    style={{
                      animationDelay: `${(categoryIndex * 5 + skillIndex) * 50}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
