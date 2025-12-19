import { 
  Code, Database, Brain, Cloud, Terminal, 
  FileJson, Server, Workflow, BarChart3, Cpu,
  GitBranch, Container, Sparkles, MessageSquare,
  Braces, Globe, Layers, Zap
} from "lucide-react";

const allSkills = [
  { icon: Terminal, name: "Python" },
  { icon: Code, name: "TypeScript" },
  { icon: FileJson, name: "FastAPI" },
  { icon: Server, name: "RESTful APIs" },
  { icon: Workflow, name: "Airflow" },
  { icon: BarChart3, name: "Pandas" },
  { icon: Database, name: "Kafka" },
  { icon: Cpu, name: "PySpark" },
  { icon: Brain, name: "scikit-learn" },
  { icon: Sparkles, name: "LLM Training" },
  { icon: MessageSquare, name: "Prompt Eng" },
  { icon: Cloud, name: "Azure" },
  { icon: Container, name: "Docker" },
  { icon: GitBranch, name: "Git" },
  { icon: Braces, name: "React.js" },
  { icon: Globe, name: "APIs" },
  { icon: Layers, name: "ETL" },
  { icon: Zap, name: "TensorFlow" },
];

const Skills = () => {
  // Duplicate for seamless loop
  const duplicatedSkills = [...allSkills, ...allSkills];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-16 rounded-full" />
      </div>

      {/* Sliding Skills Container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient masks for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* First row - slides right */}
        <div className="flex animate-slide-right mb-8">
          {duplicatedSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-4 group cursor-pointer"
              >
                <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 
                              hover:border-primary/50 hover:bg-primary/10 transition-all duration-300
                              hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]">
                  <Icon 
                    size={24} 
                    className="text-primary transition-colors duration-300" 
                  />
                  <span className="text-foreground font-medium whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second row - slides right (slower) */}
        <div className="flex animate-slide-right-slow">
          {[...duplicatedSkills].reverse().map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-4 group cursor-pointer"
              >
                <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 
                              hover:border-primary/50 hover:bg-primary/10 transition-all duration-300
                              hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]">
                  <Icon 
                    size={24} 
                    className="text-primary transition-colors duration-300" 
                  />
                  <span className="text-foreground font-medium whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
