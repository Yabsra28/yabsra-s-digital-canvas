import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, GraduationCap } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  isEducation?: boolean;
  description: string;
  achievements: string[];
  techStack: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "AI & Data Engineer",
    company: "IE Network Solutions",
    location: "Addis Ababa, Ethiopia",
    period: "Aug 2025 – Present",
    isCurrent: true,
    description: "Spearheading the design and deployment of enterprise AI applications and real-time streaming data architectures.",
    achievements: [
      "Engineered Talent Acquisition Analytics system with automated CV parsing and semantic matching using Azure OpenAI & Cosmos DB.",
      "Architected end-to-end real-time Supply Chain Management (SCM) data pipeline utilizing Apache Kafka, Docker, and Apache Airflow.",
      "Built interactive Streamlit intelligence dashboards and AI-assisted conversational bots for executive decision-makers.",
    ],
    techStack: ["Azure OpenAI", "Cosmos DB", "Kafka", "Airflow", "Docker", "Python", "Streamlit"],
  },
  {
    title: "AI GTP Trainee (Graduate Trainee Program)",
    company: "IE Network Solutions",
    location: "Addis Ababa, Ethiopia",
    period: "Feb 2025 – Aug 2025",
    description: "Underwent intensive practical training in machine learning modeling, statistical analysis, and end-to-end data pipelines.",
    achievements: [
      "Trained and evaluated classical ML models (regression, classification, clustering) using scikit-learn and Pandas.",
      "Performed feature engineering, outlier detection, and data preprocessing across disparate datasets.",
      "Collaborated with senior engineers on model deployment strategies and API integration best practices.",
    ],
    techStack: ["Python", "scikit-learn", "Pandas", "NumPy", "Data Preprocessing", "APIs"],
  },
  {
    title: "Graduate in Trainee",
    company: "East Africa Bottling Share Company (Coca-Cola Beverages Africa)",
    location: "Addis Ababa, Ethiopia",
    period: "Nov 2023 – Oct 2024",
    description: "Gained comprehensive industrial engineering experience in large-scale beverage manufacturing operations.",
    achievements: [
      "Managed production line operational data, downtime metrics, and efficiency reporting.",
      "Conducted root cause analysis to reduce operational bottlenecks and optimize throughput.",
      "Collaborated with cross-functional engineering teams to maintain high quality control standards.",
    ],
    techStack: ["Industrial Operations", "Process Optimization", "Data Logging", "Quality Assurance"],
  },
  {
    title: "BSc in Software Engineering",
    company: "Addis Ababa Science and Technology University (AASTU)",
    location: "Addis Ababa, Ethiopia",
    period: "2018 – 2023",
    isEducation: true,
    description: "Earned a Bachelor of Science degree in Software Engineering with academic distinction (GPA: 3.71 / 4.00).",
    achievements: [
      "Graduated with High Distinction with a cumulative GPA of 3.71 / 4.00.",
      "In-depth focus on algorithms, distributed computing, database management, and system architecture.",
      "Completed foundational coursework and capstone engineering in applied computer science and intelligent systems.",
    ],
    techStack: ["Software Architecture", "Algorithms", "Database Systems", "OOP", "Data Structures"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            Career & Education Timeline
          </span>
          <h2 className="section-title mt-3">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Practical industry experience and engineering education spanning software architecture, real-time data streaming, and applied AI systems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 md:pl-20 group">
                {/* Timeline Dot Indicator */}
                <div className={`absolute left-2.5 md:left-6.5 top-5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  exp.isCurrent
                    ? "bg-primary border-primary ring-4 ring-primary/20 animate-pulse"
                    : exp.isEducation
                    ? "bg-accent/40 border-accent group-hover:bg-accent"
                    : "bg-background border-border group-hover:border-primary group-hover:bg-primary/20"
                }`} />

                {/* Content Card */}
                <div className={`card-glass p-6 rounded-2xl border transition-all duration-300 glow-box-hover ${
                  exp.isCurrent
                    ? "border-primary/40 bg-card/70 shadow-lg shadow-primary/5"
                    : exp.isEducation
                    ? "border-accent/30 bg-card/60"
                    : "border-border/60 hover:border-primary/40"
                }`}>
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            Current
                          </span>
                        )}
                        {exp.isEducation && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-accent/15 text-accent border border-accent/30 flex items-center gap-1">
                            <GraduationCap size={12} />
                            Degree (GPA: 3.71)
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                        <span className="font-medium text-foreground/90 flex items-center gap-1">
                          {exp.isEducation ? (
                            <GraduationCap size={13} className="text-accent" />
                          ) : (
                            <Building2 size={13} className="text-primary" />
                          )}
                          {exp.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/60 border border-border/40 text-xs text-primary font-mono self-start">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Key Achievements Bullet Points */}
                  <div className="space-y-2 mb-5">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                        <CheckCircle2 size={14} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono text-foreground/80 bg-secondary/80 rounded-md border border-border/40 group-hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
