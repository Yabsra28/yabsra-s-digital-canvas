import { useState } from "react";
import { ExternalLink, Database, Bot, Users, Github, Sparkles, Layers, ArrowRight, X, CheckCircle2, Cpu } from "lucide-react";

interface ProjectItem {
  id: string;
  icon: any;
  category: "pipeline" | "ai" | "analytics";
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  architecture?: string[];
  impact?: string;
  githubUrl?: string;
}

const projects: ProjectItem[] = [
  {
    id: "prime-ai",
    icon: Sparkles,
    category: "ai",
    title: "Prime AI – Math Assistant",
    subtitle: "RAG-Powered AI Tutor & Teacher Assistant",
    description: "Architected a comprehensive RAG platform for Ethiopian Grade 11 Mathematics students and teachers, integrating OpenAI GPT-4o, ChromaDB vector search, multimodal OCR for scanned diagrams, and an interactive FastAPI & Streamlit app.",
    highlights: [
      "Curriculum-grounded conversational math tutor with multi-turn step-by-step Q&A",
      "Multimodal ingestion: PyMuPDF native text + GPT-4o Vision OCR for scanned pages & geometric graphs",
      "Automated lesson notes, Bloom's taxonomy lesson plans, adaptive quizzes, and Ethiopian real-life context applications",
    ],
    architecture: [
      "Curriculum PDF Ingestion -> PyMuPDF Text + GPT-4o Vision OCR & Diagram Interpreter",
      "Semantic Chunking & text-embedding-3-large -> ChromaDB Vector Database",
      "FastAPI Backend Service with async endpoints for notes, quizzes, and RAG chat",
      "Streamlit UI with interactive problem solving, step-by-step proofs, and lesson planners",
    ],
    impact: "Bridges the STEM educational resource gap by empowering students and teachers with instant, curriculum-accurate math guidance and automated lesson preparation.",
    tags: ["RAG", "OpenAI GPT-4o", "ChromaDB", "FastAPI", "Streamlit", "Python", "Vector Search"],
    githubUrl: "https://github.com/yabsra28/prime-math-ai",
  },
  {
    id: "scm-pipeline",
    icon: Database,
    category: "pipeline",
    title: "SCM Real-Time Data Pipeline",
    subtitle: "End-to-End Streaming & Analytics Engine",
    description: "Built a robust, distributed pipeline for supply chain management data ingestion, automated preprocessing, and live analytical monitoring.",
    highlights: [
      "Streamlit dashboard for real-time inventory monitoring and alerts",
      "AI-powered chatbot assistant for executive insights and supply forecasting",
      "Frequency-based analysis combined with ML fallback strategies for missing sensors",
    ],
    architecture: [
      "IoT / Warehouse Data Simulation -> Kafka Cluster Ingestion",
      "Apache Airflow orchestrates periodic validation and aggregation DAGs",
      "Containerized microservices via Docker for reproducible runs",
      "Streamlit front-end with live metric polling and chatbot dialog interface",
    ],
    impact: "Streamlined data turnaround from multi-hour batch cycles into sub-minute streaming updates, enabling prompt inventory decision-making.",
    tags: ["Kafka", "Airflow", "Docker", "Streamlit", "Python", "ETL"],
    githubUrl: "https://github.com/yabsra28",
  },
  {
    id: "basecamp-ai",
    icon: Bot,
    category: "ai",
    title: "Basecamp Smart Reply & AI App",
    subtitle: "Automated Communication & Recommendation Tool",
    description: "Developed an intelligent workplace AI assistant to generate context-aware reply suggestions and personalized content recommendations for daily team operations.",
    highlights: [
      "Integrated offline LLM for zero-cloud latency and complete data privacy",
      "Automated reply generation and scheduled thread summaries using Python APIs",
      "Streamlined daily team communication workflows within Basecamp workspace",
    ],
    architecture: [
      "Basecamp API Webhook Receiver -> FastAPI Microservice",
      "Local quantized LLM inference engine with prompt templating",
      "Response evaluator with deterministic filtering for professional tone",
      "Direct API dispatch with human-in-the-loop approval mechanism",
    ],
    impact: "Cut repetitive message composition time by an estimated 40% while preserving team member privacy through local inference.",
    tags: ["LLM", "Python", "FastAPI", "Prompt Eng", "Automation"],
    githubUrl: "https://github.com/yabsra28",
  },
  {
    id: "talent-analytics",
    icon: Users,
    category: "analytics",
    title: "Talent Acquisition Analytics",
    subtitle: "Semantic Recruitment & Candidate Matching Engine",
    description: "Designed end-to-end data pipelines in Microsoft Azure Cosmos DB for candidate profiling, CV parsing, and intelligent job matching.",
    highlights: [
      "Automated multi-format CV parsing and structured JSON semantic extraction",
      "Job description enrichment and embedding-based candidate matching via Azure OpenAI",
      "Interactive recruitment dashboards visualizing applicant funnel metrics",
    ],
    architecture: [
      "Resume Ingestion -> Azure Blob Storage & Document Intelligence",
      "Azure OpenAI embeddings compute similarity score with open requisitions",
      "Azure Cosmos DB stores structured profiles and search indices",
      "Analytics UI visualizes candidate match scores and department hiring funnels",
    ],
    impact: "Eliminated manual CV pre-screening hours, boosting qualified candidate matching accuracy across engineering departments.",
    tags: ["Azure", "Azure OpenAI", "Cosmos DB", "Analytics", "Python"],
    githubUrl: "https://github.com/yabsra28",
  },
];

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "pipeline" | "ai" | "analytics">("all");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedFilter === "all"
    ? projects
    : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 relative bg-secondary/15 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            Portfolio Showcase
          </span>
          <h2 className="section-title mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Practical, scalable data and AI solutions engineered with modern infrastructure, streaming message brokers, and large language models.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedFilter === "all"
                  ? "bg-primary text-primary-foreground font-semibold shadow-[0_0_20px_-3px_hsl(var(--primary)/0.6)]"
                  : "bg-card/70 text-muted-foreground border border-border/50 hover:text-foreground"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setSelectedFilter("pipeline")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedFilter === "pipeline"
                  ? "bg-primary text-primary-foreground font-semibold shadow-[0_0_20px_-3px_hsl(var(--primary)/0.6)]"
                  : "bg-card/70 text-muted-foreground border border-border/50 hover:text-foreground"
              }`}
            >
              Data Pipelines & Streaming
            </button>
            <button
              onClick={() => setSelectedFilter("ai")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedFilter === "ai"
                  ? "bg-primary text-primary-foreground font-semibold shadow-[0_0_20px_-3px_hsl(var(--primary)/0.6)]"
                  : "bg-card/70 text-muted-foreground border border-border/50 hover:text-foreground"
              }`}
            >
              AI & LLM Apps
            </button>
            <button
              onClick={() => setSelectedFilter("analytics")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedFilter === "analytics"
                  ? "bg-primary text-primary-foreground font-semibold shadow-[0_0_20px_-3px_hsl(var(--primary)/0.6)]"
                  : "bg-card/70 text-muted-foreground border border-border/50 hover:text-foreground"
              }`}
            >
              Cloud & Analytics
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="card-glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 
                         glow-box-hover group flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                        aria-label="GitHub Repository"
                        title="GitHub Profile & Code"
                      >
                        <Github size={18} />
                      </a>
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/60 transition-colors"
                        aria-label="View Project Architecture & Details"
                        title="View Architecture Details"
                      >
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-xs text-primary font-mono mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-mono text-primary bg-primary/10 rounded border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="w-full py-2.5 rounded-xl bg-secondary/70 hover:bg-primary hover:text-primary-foreground text-xs font-medium text-foreground flex items-center justify-center gap-1.5 transition-all group/btn"
                  >
                    <span>Architecture & Details</span>
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fade-in">
          <div className="card-glass max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 rounded-3xl border border-primary/40 shadow-2xl relative">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-secondary/80 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-primary/10">
                <activeModalProject.icon className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-primary font-mono">
                  {activeModalProject.subtitle}
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {activeModalProject.description}
            </p>

            {/* Architecture Flow */}
            {activeModalProject.architecture && (
              <div className="mb-6 p-4 rounded-2xl bg-secondary/30 border border-border/50">
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Cpu size={14} className="text-primary" />
                  Architecture & Data Flow
                </h4>
                <div className="space-y-2">
                  {activeModalProject.architecture.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <span className="w-5 h-5 rounded-full bg-primary/20 text-primary font-mono text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Impact */}
            {activeModalProject.impact && (
              <div className="mb-6 p-4 rounded-2xl bg-primary/5 border border-primary/20">
                <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 flex items-center gap-2">
                  <Sparkles size={14} />
                  Engineered Impact
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {activeModalProject.impact}
                </p>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Technologies Utilized
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono bg-primary/10 text-primary rounded-lg border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/50">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-full bg-secondary/80 text-foreground text-xs font-medium hover:bg-secondary transition-colors"
              >
                Close
              </button>
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:shadow-[0_0_25px_-3px_hsl(var(--primary)/0.6)] transition-all"
              >
                <Github size={14} />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
