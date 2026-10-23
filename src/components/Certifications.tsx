import { useState } from "react";
import { Award, BadgeCheck, ExternalLink, ShieldCheck, CheckCircle } from "lucide-react";

interface CertItem {
  title: string;
  issuer: string;
  date: string;
  verified: boolean;
  category: "datacamp" | "specialized";
  skillsLearned: string[];
}

const certifications: CertItem[] = [
  {
    title: "Data Engineer Associate",
    issuer: "DataCamp Certified",
    date: "Sep 2025",
    verified: true,
    category: "datacamp",
    skillsLearned: ["Data Pipeline Design", "SQL & Database Management", "Data Warehousing", "ETL Processing"],
  },
  {
    title: "AI Engineer for Developers Associate",
    issuer: "DataCamp Certified",
    date: "Aug 2025",
    verified: true,
    category: "datacamp",
    skillsLearned: ["LLM Integration", "API Development", "Vector Search", "Model Deployment"],
  },
  {
    title: "Data Engineer",
    issuer: "DataCamp Certified",
    date: "Sep 2025",
    verified: true,
    category: "datacamp",
    skillsLearned: ["Distributed Systems", "Cloud Storage Architecture", "PySpark", "Data Validation"],
  },
  {
    title: "AI Engineer for Data Scientists Associate",
    issuer: "DataCamp",
    date: "Jun 2025",
    verified: true,
    category: "datacamp",
    skillsLearned: ["Model Evaluation", "Fine-Tuning", "Deep Learning Foundations", "Prompt Optimization"],
  },
  {
    title: "Demera AI Foundation",
    issuer: "Percipio",
    date: "May 2025",
    verified: true,
    category: "specialized",
    skillsLearned: ["AI Fundamentals", "Machine Learning Lifecycle", "Enterprise AI Strategy"],
  },
  {
    title: "Python Programming",
    issuer: "Orange Digital Center Ethiopia",
    date: "Dec 2022",
    verified: true,
    category: "specialized",
    skillsLearned: ["Object-Oriented Programming", "Algorithms", "Data Structures", "Scripting Automation"],
  },
];

const Certifications = () => {
  const [filter, setFilter] = useState<"all" | "datacamp" | "specialized">("all");

  const filteredCerts = filter === "all"
    ? certifications
    : certifications.filter((c) => c.category === filter);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            Validated Competence
          </span>
          <h2 className="section-title mt-3">
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Professional certifications affirming verified expertise across data engineering, generative AI, and modern software development.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                filter === "all"
                  ? "bg-primary text-primary-foreground font-semibold shadow-[0_0_20px_-3px_hsl(var(--primary)/0.6)]"
                  : "bg-card/70 text-muted-foreground border border-border/50 hover:text-foreground"
              }`}
            >
              All Credentials ({certifications.length})
            </button>
            <button
              onClick={() => setFilter("datacamp")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                filter === "datacamp"
                  ? "bg-primary text-primary-foreground font-semibold shadow-[0_0_20px_-3px_hsl(var(--primary)/0.6)]"
                  : "bg-card/70 text-muted-foreground border border-border/50 hover:text-foreground"
              }`}
            >
              DataCamp Certified
            </button>
            <button
              onClick={() => setFilter("specialized")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                filter === "specialized"
                  ? "bg-primary text-primary-foreground font-semibold shadow-[0_0_20px_-3px_hsl(var(--primary)/0.6)]"
                  : "bg-card/70 text-muted-foreground border border-border/50 hover:text-foreground"
              }`}
            >
              Specialized Programs
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert, index) => (
            <div
              key={index}
              className="card-glass p-5 rounded-2xl hover:border-primary/50 transition-all duration-300 
                       hover:-translate-y-1 glow-box-hover group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Award className="text-primary" size={22} />
                  </div>
                  {cert.verified && (
                    <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <BadgeCheck size={13} />
                      Verified
                    </span>
                  )}
                </div>

                <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  <span>{cert.issuer}</span>
                </p>
                <p className="text-xs text-primary font-mono mt-1 font-medium">{cert.date}</p>

                {/* Key Skills */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-border/30">
                  {cert.skillsLearned.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[10px] bg-secondary/80 text-muted-foreground font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
