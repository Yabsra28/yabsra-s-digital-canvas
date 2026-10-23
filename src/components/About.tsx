import { Brain, Database, Code, Zap, CheckCircle2, Cpu, Globe2, Compass } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "LLM fine-tuning, retrieval-augmented generation (RAG), prompt engineering, and scikit-learn models.",
    tags: ["LLM Training", "Prompt Eng", "OpenAI", "scikit-learn"],
  },
  {
    icon: Database,
    title: "Data Engineering & Streaming",
    description: "Real-time ETL/ELT pipelines, distributed compute, and streaming ingestion architectures.",
    tags: ["Kafka", "Apache Airflow", "PySpark", "Cosmos DB"],
  },
  {
    icon: Code,
    title: "Full-Stack AI Solutions",
    description: "High-performance microservices with Python, FastAPI, React.js, and interactive analytics dashboards.",
    tags: ["Python", "FastAPI", "React.js", "REST APIs"],
  },
  {
    icon: Zap,
    title: "Cloud & MLOps",
    description: "Scalable cloud deployments on Azure, containerization with Docker, and automated CI/CD pipelines.",
    tags: ["Azure Cloud", "Docker", "Git / GitHub", "CI/CD"],
  },
];

const principles = [
  { title: "Real-Time Over Batch", desc: "Favor low-latency streaming pipelines for operational agility." },
  { title: "Deterministic Fallbacks", desc: "Pair generative AI with heuristics and deterministic validation." },
  { title: "End-to-End Ownership", desc: "From raw data ingestion and model training to production dashboards." },
  { title: "Measurable Business Value", desc: "Translate complex data architecture into tangible business outcomes." },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              Background & Expertise
            </span>
            <h2 className="section-title mt-3">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />

            <p className="text-lg text-muted-foreground text-center leading-relaxed mt-6 max-w-3xl mx-auto">
              I am an AI and Data Engineer with hands-on experience designing end-to-end machine learning pipelines, fine-tuning LLMs, and architecting distributed data systems. With a strong engineering foundation, I bridge the gap between complex data science and robust, production-ready software solutions.
            </p>
          </div>

          {/* 4 Core Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 
                         hover:-translate-y-1.5 glow-box-hover group flex flex-col justify-between"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4
                                group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-secondary/80 text-muted-foreground group-hover:text-primary transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Engineering Approach & Background Banner */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Quick Profile Info */}
            <div className="card-glass p-6 rounded-2xl border-border/60">
              <div className="flex items-center gap-2 mb-4">
                <Globe2 className="text-primary" size={20} />
                <h4 className="font-semibold text-foreground text-sm">Quick Snapshot</h4>
              </div>
              <ul className="space-y-3 text-xs text-muted-foreground">
                <li className="flex justify-between items-center pb-2 border-b border-border/30">
                  <span className="font-medium text-foreground">Location</span>
                  <span>Addis Ababa, Ethiopia</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-border/30">
                  <span className="font-medium text-foreground">Education</span>
                  <span className="text-foreground font-mono text-[11px]">BSc Software Eng (AASTU)</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-border/30">
                  <span className="font-medium text-foreground">Current Role</span>
                  <span className="text-primary">AI & Data Engineer</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-border/30">
                  <span className="font-medium text-foreground">Primary Focus</span>
                  <span>Real-Time ETL & GenAI</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium text-foreground">Availability</span>
                  <span className="text-emerald-400 font-mono">Open to Roles</span>
                </li>
              </ul>
            </div>

            {/* Engineering Principles */}
            <div className="md:col-span-2 card-glass p-6 rounded-2xl border-border/60">
              <div className="flex items-center gap-2 mb-4">
                <Compass className="text-accent" size={20} />
                <h4 className="font-semibold text-foreground text-sm">Engineering Principles</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {principles.map((p) => (
                  <div key={p.title} className="p-3 rounded-xl bg-secondary/30 border border-border/30">
                    <div className="flex items-center gap-2 text-xs font-semibold text-foreground mb-1">
                      <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                      <span>{p.title}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed pl-5">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
