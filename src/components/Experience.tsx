import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "AI & Data Engineer",
    company: "IE Network Solutions",
    period: "Aug 2025 – Present",
    description: "Building Talent Acquisition analytics with Azure, real-time SCM pipelines, and AI-powered dashboards.",
  },
  {
    title: "AI GTP Trainee",
    company: "IE Network Solutions",
    period: "Feb 2025 – Aug 2025",
    description: "Trained ML models for regression, classification, and clustering with hands-on data preprocessing.",
  },
  {
    title: "Graduate in Trainee",
    company: "East Africa Bottling Share Company",
    period: "Nov 2023 – Oct 2024",
    description: "Industrial operations experience and data handling in manufacturing environment.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-background border-2 border-primary 
                              flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="card-glass p-5 rounded-2xl hover:border-primary/50 transition-all duration-300 glow-box-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-primary/10">
                      <Briefcase className="text-primary" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                        <h3 className="font-semibold">{exp.title}</h3>
                        <span className="text-xs text-primary font-mono">{exp.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
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
