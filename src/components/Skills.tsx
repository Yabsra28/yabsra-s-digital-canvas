import { useState } from "react";
import { 
  Code, Database, Brain, Cloud, Terminal, 
  FileJson, Server, Workflow, BarChart3, Cpu,
  GitBranch, Container, Sparkles, MessageSquare,
  Braces, Layers, Zap, CheckCircle2, ShieldCheck, Flame
} from "lucide-react";

type SkillCategory = "all" | "ai_ml" | "data_eng" | "backend" | "cloud_devops";

interface SkillItem {
  name: string;
  category: "ai_ml" | "data_eng" | "backend" | "cloud_devops";
  icon: any;
  level: "Advanced" | "Proficient" | "Production";
  highlight?: string;
}

const detailedSkills: SkillItem[] = [
  // AI & ML
  { icon: Sparkles, name: "RAG & ChromaDB", category: "ai_ml", level: "Production", highlight: "Vector search & textbook retrieval" },
  { icon: Brain, name: "GPT-4o & Multimodal OCR", category: "ai_ml", level: "Production", highlight: "Diagram analysis & document vision" },
  { icon: Sparkles, name: "LLM Fine-Tuning", category: "ai_ml", level: "Production", highlight: "Local inference & domain adaptation" },
  { icon: MessageSquare, name: "Prompt Engineering", category: "ai_ml", level: "Advanced", highlight: "System prompts & chain-of-thought" },
  { icon: Brain, name: "scikit-learn", category: "ai_ml", level: "Advanced", highlight: "Classification, regression, clustering" },
  { icon: Zap, name: "TensorFlow", category: "ai_ml", level: "Proficient", highlight: "Neural network architectures" },
  { icon: Sparkles, name: "Azure OpenAI", category: "ai_ml", level: "Production", highlight: "GPT embeddings & completions" },

  // Data Engineering
  { icon: Database, name: "Apache Kafka", category: "data_eng", level: "Production", highlight: "Real-time streaming & event ingestion" },
  { icon: Workflow, name: "Apache Airflow", category: "data_eng", level: "Production", highlight: "DAG orchestration & scheduling" },
  { icon: Cpu, name: "PySpark", category: "data_eng", level: "Advanced", highlight: "Large-scale data transformations" },
  { icon: Layers, name: "ETL / ELT Pipelines", category: "data_eng", level: "Production", highlight: "Automated data flow & validation" },
  { icon: BarChart3, name: "Pandas & NumPy", category: "data_eng", level: "Advanced", highlight: "Data cleaning & statistical analysis" },
  { icon: Database, name: "Azure Cosmos DB", category: "data_eng", level: "Production", highlight: "NoSQL document storage" },

  // Backend & Full-Stack
  { icon: Terminal, name: "Python", category: "backend", level: "Advanced", highlight: "Core scripting, automation & ML" },
  { icon: FileJson, name: "FastAPI", category: "backend", level: "Production", highlight: "High throughput async REST APIs" },
  { icon: Server, name: "RESTful APIs", category: "backend", level: "Production", highlight: "OpenAPI specs, auth & rate limiting" },
  { icon: Code, name: "TypeScript", category: "backend", level: "Proficient", highlight: "Type-safe frontend & tooling" },
  { icon: Braces, name: "React.js", category: "backend", level: "Advanced", highlight: "Interactive SPAs & UI components" },

  // Cloud & DevOps
  { icon: Cloud, name: "Microsoft Azure", category: "cloud_devops", level: "Production", highlight: "Cloud services, VMs & data stores" },
  { icon: Container, name: "Docker", category: "cloud_devops", level: "Production", highlight: "Containerization & compose files" },
  { icon: GitBranch, name: "Git & GitHub", category: "cloud_devops", level: "Advanced", highlight: "Branching workflows & version control" },
  { icon: Workflow, name: "CI/CD Pipelines", category: "cloud_devops", level: "Proficient", highlight: "Automated testing & deployments" },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "ai_ml", label: "AI & Machine Learning" },
  { id: "data_eng", label: "Data Engineering" },
  { id: "backend", label: "Backend & Full-Stack" },
  { id: "cloud_devops", label: "Cloud & DevOps" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const filteredSkills = activeCategory === "all"
    ? detailedSkills
    : detailedSkills.filter((s) => s.category === activeCategory);

  // Skills for the infinite sliding marquee
  const marqueeSkills = detailedSkills;
  const duplicatedSkills = [...marqueeSkills, ...marqueeSkills];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-secondary/10">
      {/* Glow lights */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            Tech Arsenal
          </span>
          <h2 className="section-title mt-3">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the languages, frameworks, distributed data architectures, and AI stacks I leverage for production engineering.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as SkillCategory)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_-3px_hsl(var(--primary)/0.6)] font-semibold scale-105"
                    : "bg-card/60 text-muted-foreground border border-border/50 hover:text-foreground hover:border-primary/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="card-glass p-4 rounded-xl border border-border/50 hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 glow-box-hover group flex flex-col justify-between"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium ${
                    skill.level === "Production"
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      : "bg-primary/10 text-primary border border-primary/20"
                  }`}>
                    {skill.level}
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h4>
                  {skill.highlight && (
                    <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2">
                      {skill.highlight}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Infinite Dynamic Marquee Ribbon */}
      <div className="relative w-full overflow-hidden pt-4 pb-2 border-y border-border/40 bg-card/20 backdrop-blur-sm">
        {/* Gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Slides right */}
        <div className="flex animate-slide-right hover:[animation-play-state:paused] mb-4">
          {duplicatedSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-3 group cursor-pointer"
              >
                <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card/70 backdrop-blur-md border border-border/40 
                              hover:border-primary/60 hover:bg-primary/10 transition-all duration-300
                              hover:shadow-[0_0_25px_hsl(var(--primary)/0.3)]">
                  <Icon size={18} className="text-primary" />
                  <span className="text-foreground text-xs font-medium whitespace-nowrap font-mono">
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2 - Slides right slower in reverse */}
        <div className="flex animate-slide-right-slow hover:[animation-play-state:paused]">
          {[...duplicatedSkills].reverse().map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-3 group cursor-pointer"
              >
                <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card/70 backdrop-blur-md border border-border/40 
                              hover:border-accent/60 hover:bg-accent/10 transition-all duration-300
                              hover:shadow-[0_0_25px_hsl(var(--accent)/0.3)]">
                  <Icon size={18} className="text-accent" />
                  <span className="text-foreground text-xs font-medium whitespace-nowrap font-mono">
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
