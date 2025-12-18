import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "AI & Data Engineer",
    company: "IE Network Solutions",
    period: "Aug 2025 – Present",
    description: [
      "Built Talent Acquisition analytics with Azure services, CV parsing, and job matching workflows",
      "Developed real-time SCM data pipelines with Kafka, Airflow, and Docker",
      "Created dashboards for inventory analytics using Streamlit and Plotly",
      "Implemented AI chatbot for inventory insights and executive recommendations",
    ],
  },
  {
    type: "work",
    title: "AI GTP Trainee",
    company: "IE Network Solutions",
    period: "Feb 2025 – Aug 2025",
    description: [
      "Designed and trained ML models for regression, classification, and clustering",
      "Completed hands-on projects with data cleaning, preprocessing, and feature engineering",
    ],
  },
  {
    type: "work",
    title: "Graduate in Trainee",
    company: "East Africa Bottling Share Company",
    period: "Nov 2023 – Oct 2024",
    description: [
      "Gained practical experience in industrial operations and data handling",
    ],
  },
  {
    type: "education",
    title: "Software Engineering",
    company: "Addis Ababa Science and Technology University",
    period: "2018 – 2023",
    description: ["GPA: 3.71/4.00"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">
          Experience & <span className="gradient-text">Education</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-background border-2 border-primary 
                              flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="card-glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 glow-box-hover">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${exp.type === 'education' ? 'bg-accent/10' : 'bg-primary/10'}`}>
                      {exp.type === "education" ? (
                        <GraduationCap className="text-accent" size={24} />
                      ) : (
                        <Briefcase className="text-primary" size={24} />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <span className="text-sm text-primary font-mono">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground mb-3">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
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
