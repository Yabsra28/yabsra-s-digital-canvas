import { Brain, Database, Code, Zap } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI & ML",
    description: "LLM training, fine-tuning, and prompt engineering",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "ETL pipelines with Kafka, Airflow, and PySpark",
  },
  {
    icon: Code,
    title: "Full-Stack",
    description: "Python, FastAPI, React, and RESTful APIs",
  },
  {
    icon: Zap,
    title: "Cloud & DevOps",
    description: "Azure, Docker, Git, and CI/CD workflows",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

          <p className="text-lg text-muted-foreground text-center leading-relaxed mb-16">
            Passionate AI and Data Engineer with hands-on experience in machine learning, 
            data pipelines, LLM training, and full-stack development. Skilled in designing 
            end-to-end data and AI solutions, integrating AI-powered insights, and deploying 
            scalable pipelines, APIs, and dashboards. Adept at translating business needs 
            into technical solutions and leveraging data-driven insights to enhance system 
            efficiency and innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 
                         hover:transform hover:scale-105 glow-box-hover group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4
                              group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
