import { ExternalLink, Database, Bot, Users } from "lucide-react";

const projects = [
  {
    icon: Database,
    title: "SCM Real-Time Data Pipeline",
    description: "Built a robust pipeline for supply chain data ingestion, preprocessing, and analytics using Kafka, Airflow, Docker, and Python.",
    highlights: [
      "Streamlit dashboard for inventory monitoring",
      "AI-powered chatbot for executive insights",
      "Frequency-based analysis with ML fallback strategies",
    ],
    tags: ["Kafka", "Airflow", "Docker", "Streamlit", "AI"],
  },
  {
    icon: Bot,
    title: "Basecamp Smart Reply & AI App",
    description: "Developed an AI tool to generate reply suggestions and personalized content recommendations.",
    highlights: [
      "Integrated offline LLM for local inference",
      "Automated workflows using Python and APIs",
      "Streamlined daily Basecamp operations",
    ],
    tags: ["LLM", "Python", "API", "Automation"],
  },
  {
    icon: Users,
    title: "Talent Acquisition Analytics",
    description: "Designed end-to-end data pipelines in Azure Cosmos DB for candidate data processing.",
    highlights: [
      "Automated CV parsing and semantic extraction",
      "Job enrichment and matching using Azure OpenAI",
      "Dashboards for recruitment metrics visualization",
    ],
    tags: ["Azure", "OpenAI", "Cosmos DB", "Analytics"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 
                       glow-box-hover group flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="text-primary" size={24} />
                </div>
                <ExternalLink 
                  className="text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" 
                  size={20} 
                />
              </div>

              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {project.description}
              </p>

              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">▹</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 rounded"
                  >
                    {tag}
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

export default Projects;
