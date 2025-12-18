import { 
  Code, Database, Brain, Cloud, Terminal, 
  FileJson, Server, Workflow, BarChart3, Cpu,
  GitBranch, Container, Sparkles, MessageSquare
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: [
      { name: "Python", icon: Terminal },
      { name: "TypeScript", icon: FileJson },
      { name: "JavaScript", icon: Code },
      { name: "FastAPI", icon: Server },
      { name: "RESTful APIs", icon: Workflow },
    ],
  },
  {
    title: "Frontend",
    icon: BarChart3,
    skills: [
      { name: "React.js", icon: Code },
      { name: "Streamlit", icon: BarChart3 },
      { name: "Plotly", icon: BarChart3 },
    ],
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: [
      { name: "Kafka", icon: Workflow },
      { name: "Airflow", icon: Workflow },
      { name: "Pandas", icon: Database },
      { name: "PySpark", icon: Cpu },
      { name: "ETL", icon: Database },
    ],
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: [
      { name: "scikit-learn", icon: Brain },
      { name: "TensorFlow", icon: Cpu },
      { name: "PyTorch", icon: Sparkles },
      { name: "LLM Fine-tuning", icon: MessageSquare },
      { name: "Prompt Engineering", icon: MessageSquare },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Azure", icon: Cloud },
      { name: "Docker", icon: Container },
      { name: "Git", icon: GitBranch },
      { name: "Cosmos DB", icon: Database },
    ],
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

        <div className="max-w-5xl mx-auto grid gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="card-glass p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="text-primary" size={20} />
                <h3 className="text-lg font-semibold text-primary">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 border border-border/50 rounded-full text-sm
                             hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default group"
                  >
                    <skill.icon size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    {skill.name}
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
