import { useState, useEffect, useRef } from "react";
import { 
  Bot, Send, X, Sparkles, MessageSquare, User, 
  ExternalLink, Minimize2, Maximize2, ArrowRight, GraduationCap 
} from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  suggestedActions?: { label: string; href?: string; query?: string }[];
}

const KNOWLEDGE_BASE = {
  name: "Yabsra Fekadu",
  role: "AI & Data Engineer",
  pronouns: "she/her",
  gender: "female",
  location: "Addis Ababa, Ethiopia (Open to Remote, Hybrid & Relocation)",
  email: "yabsrafekadu28@gmail.com",
  linkedin: "https://www.linkedin.com/in/yabsra-fekadu",
  github: "https://github.com/yabsra28",
  
  education: {
    degree: "Bachelor of Science (BSc) in Software Engineering",
    university: "Addis Ababa Science and Technology University (AASTU)",
    period: "2018 – 2023",
    gpa: "3.71 / 4.00",
    honors: "Graduated with High Academic Distinction",
    coreFocus: [
      "Software Architecture & Design Patterns",
      "Data Structures & Advanced Algorithms",
      "Distributed Systems & Networking",
      "Database Management Systems & SQL",
      "Object-Oriented Programming & System Modeling",
      "Applied Machine Learning & Computing Capstone",
    ],
  },

  projects: {
    primeAi: {
      name: "Prime AI – Grade 11 Mathematics Assistant",
      summary: "A RAG-powered AI tutor and teaching assistant platform built for Ethiopian Grade 11 students and educators. It integrates OpenAI GPT-4o, ChromaDB vector database, FastAPI, and Streamlit.",
      features: [
        "Curriculum-grounded conversational tutoring with multi-turn step-by-step problem solving",
        "Multimodal ingestion: PyMuPDF extracts text, while GPT-4o Vision OCRs scanned pages, geometric diagrams, and graphs",
        "Automated lesson notes generation with formulas, objectives, and worked examples",
        "Adaptive quiz generator with easy/medium/hard difficulties and instant answer validation",
        "Teacher lesson planner structured with Bloom's taxonomy objectives and timing allocations",
        "Ethiopian real-life context applications bridging math concepts to local scenarios",
      ],
      techStack: ["OpenAI GPT-4o", "ChromaDB", "FastAPI", "Streamlit", "Python", "PyMuPDF", "text-embedding-3-large", "Docker"],
      github: "https://github.com/yabsra28/prime-math-ai",
    },
    scmPipeline: {
      name: "SCM Real-Time Data Pipeline",
      summary: "Real-time supply chain data ingestion, automated preprocessing, and analytics pipeline with an interactive Streamlit inventory dashboard and AI chatbot.",
      techStack: ["Apache Kafka", "Apache Airflow", "Docker", "Streamlit", "Python", "Machine Learning"],
      impact: "Replaced multi-hour batch cycles with sub-minute streaming updates and automatic ML fallbacks.",
    },
    talentAcquisition: {
      name: "Talent Acquisition Analytics",
      summary: "End-to-end recruitment pipeline in Azure Cosmos DB with Azure OpenAI semantic embeddings for automated CV parsing and candidate-job matching.",
      techStack: ["Azure OpenAI", "Cosmos DB", "Azure Blob", "Python", "Streamlit"],
    },
    basecampAi: {
      name: "Basecamp Smart Reply & AI App",
      summary: "Workplace communication assistant leveraging an offline quantized LLM for zero-cloud latency and complete data privacy, generating suggested replies and thread summaries.",
      techStack: ["Offline LLM", "Python", "FastAPI", "Prompt Engineering"],
    },
  },

  skills: {
    ai_ml: ["RAG Architectures", "ChromaDB", "OpenAI GPT-4o & Vision OCR", "LLM Fine-Tuning", "Prompt Engineering", "scikit-learn", "TensorFlow", "Azure OpenAI", "PySpark"],
    data_eng: ["Apache Kafka", "Apache Airflow", "ETL / ELT Pipelines", "Pandas", "NumPy", "Azure Cosmos DB", "Data Preprocessing", "Stream Processing"],
    backend_fullstack: ["Python", "FastAPI", "RESTful APIs", "TypeScript", "React.js", "Docker", "Git / GitHub", "Streamlit"],
    cloud_devops: ["Microsoft Azure", "Docker", "CI/CD Workflows", "Vector Databases", "Linux"],
  },

  experience: [
    {
      role: "AI & Data Engineer",
      company: "IE Network Solutions",
      period: "Aug 2025 – Present (Current)",
      highlights: "Architecting real-time SCM streaming pipelines with Kafka and Airflow; developing Talent Acquisition analytics using Azure OpenAI & Cosmos DB; building executive Streamlit dashboards.",
    },
    {
      role: "AI GTP Trainee",
      company: "IE Network Solutions",
      period: "Feb 2025 – Aug 2025",
      highlights: "Trained classical machine learning models (regression, classification, clustering) using scikit-learn, Pandas, and exploratory data analysis.",
    },
    {
      role: "Graduate in Trainee",
      company: "East Africa Bottling Share Company (Coca-Cola Beverages Africa)",
      period: "Nov 2023 – Oct 2024",
      highlights: "Managed industrial operations data, downtime metrics, root cause analysis, and quality assurance in manufacturing.",
    },
  ],

  certifications: [
    "DataCamp Certified: Data Engineer Associate (Sep 2025)",
    "DataCamp Certified: AI Engineer for Developers Associate (Aug 2025)",
    "DataCamp Certified: Data Engineer (Sep 2025)",
    "DataCamp: AI Engineer for Data Scientists Associate (Jun 2025)",
    "Percipio: Demera AI Foundation (May 2025)",
    "Orange Digital Center: Python Programming (Dec 2022)",
  ],
};

const SUGGESTED_QUERIES = [
  "🎓 Where did Yabsra study?",
  "📐 Tell me about Prime AI",
  "⚡ What are her data engineering skills?",
  "💼 What is her work experience?",
  "🏆 What certifications does she hold?",
  "📬 How can I contact or hire her?",
];

export const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "👋 Hi! I'm **Yabsra's AI Assistant**. I've extracted all facts, projects, academic background, and industry experience directly from her portfolio.\n\nAsk me anything about her **education at AASTU**, the **Prime AI** math tutor, her **real-time Kafka pipelines**, or how to collaborate with her!",
      timestamp: "Just now",
      suggestedActions: [
        { label: "🎓 Education & Degree", query: "Where did Yabsra study and what?" },
        { label: "📐 Prime AI Project", query: "Tell me about the Prime AI project" },
        { label: "⚡ Data Engineering Stack", query: "What are her core data engineering skills?" },
        { label: "💼 Current Role", query: "What is her current role at IE Network Solutions?" },
      ],
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpenEvent = () => {
      setIsOpen(true);
      setIsMinimized(false);
    };
    window.addEventListener("open-ai-chat", handleOpenEvent);
    return () => window.removeEventListener("open-ai-chat", handleOpenEvent);
  }, []);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isMinimized, isTyping]);

  const generateAnswer = (userQuery: string): { text: string; actions?: { label: string; href?: string; query?: string }[] } => {
    const q = userQuery.toLowerCase().trim();

    // 1. Education / Studies Questions (where did she study, what did she study, university, college, degree, aastu, gpa)
    if (
      q.includes("study") || 
      q.includes("studied") || 
      q.includes("studying") || 
      q.includes("education") || 
      q.includes("university") || 
      q.includes("college") || 
      q.includes("degree") || 
      q.includes("aastu") || 
      q.includes("gpa") || 
      q.includes("academic") || 
      q.includes("school") || 
      q.includes("graduate from") ||
      q.includes("where did she")
    ) {
      const edu = KNOWLEDGE_BASE.education;
      return {
        text: `### 🎓 Education & Academic Background\n\n` +
          `Yabsra earned her **${edu.degree}** from **${edu.university}** (2018 – 2023).\n\n` +
          `**Academic Highlights:**\n` +
          `• **Degree**: Bachelor of Science (BSc) in Software Engineering\n` +
          `• **University**: Addis Ababa Science and Technology University (AASTU), Ethiopia\n` +
          `• **Academic Standing**: Graduated with **High Distinction** with a cumulative **GPA of ${edu.gpa}**\n` +
          `• **Period**: 2018 – 2023\n\n` +
          `**Foundational Engineering Training:**\n` +
          `Her curriculum provided deep theoretical and practical training in:\n` +
          `• Advanced Data Structures & Algorithms\n` +
          `• Distributed Computing & System Architecture\n` +
          `• Database Management Systems (relational & non-relational)\n` +
          `• Object-Oriented Software Design & API Engineering\n\n` +
          `This rigorous engineering background forms the backbone of her current work designing high-throughput data streaming pipelines and production GenAI systems.`,
        actions: [
          { label: "View Experience & Education", href: "#experience" },
          { label: "Explore Her Skills", href: "#skills" },
          { label: "Ask about Prime AI", query: "Tell me about Prime AI" },
        ],
      };
    }

    // 2. Who is Yabsra / Who is yab / Identity / Background
    if (
      q === "who is yab" || 
      q === "who is yabsra" || 
      q.includes("who is yab") || 
      q.includes("who is yabsra") || 
      q.includes("who is she") || 
      q.includes("tell me about yab") || 
      q.includes("tell me about herself") ||
      q.includes("about yabsra")
    ) {
      return {
        text: `### 👩‍💻 Who is Yabsra Fekadu?\n\n` +
          `**Yabsra Fekadu** is an **AI & Data Engineer** and Software Engineering graduate from Addis Ababa, Ethiopia. She specializes in building distributed real-time data pipelines, RAG systems, and generative AI solutions.\n\n` +
          `**Snapshot of Her Profile:**\n` +
          `• **Current Role**: AI & Data Engineer at **IE Network Solutions**, building real-time supply chain streaming architectures and AI talent analytics.\n` +
          `• **Education**: **BSc in Software Engineering** from **AASTU** (GPA: **3.71 / 4.00**, High Distinction).\n` +
          `• **Flagship Creation**: Creator of **Prime AI**, an intelligent RAG educational platform with GPT-4o multimodal vision for Ethiopian Grade 11 Mathematics.\n` +
          `• **Core Stack**: Python, Apache Kafka, Apache Airflow, PySpark, FastAPI, Azure OpenAI, ChromaDB, and Docker.\n` +
          `• **Certifications**: 6+ industry credentials including DataCamp Certified Data Engineer and AI Engineer.\n\n` +
          `She brings an end-to-end engineering philosophy—from raw data ingestion to production model inference.`,
        actions: [
          { label: "Where did she study?", query: "Where did she study and what?" },
          { label: "Tell me about Prime AI", query: "Tell me about Prime AI" },
          { label: "Contact Yabsra", href: "#contact" },
        ],
      };
    }

    // 3. Prime AI Questions
    if (q.includes("prime") || q.includes("math") || q.includes("grade 11") || q.includes("tutor") || q.includes("ethiopian")) {
      const p = KNOWLEDGE_BASE.projects.primeAi;
      return {
        text: `### 📐 Prime AI – Grade 11 Mathematics Assistant\n\n` +
          `**Prime AI** is one of Yabsra's flagship AI applications. She architected it as a comprehensive **RAG-powered conversational math tutor and teaching assistant** tailored specifically for the Ethiopian Grade 11 mathematics curriculum.\n\n` +
          `**Key Architectural Highlights:**\n` +
          `• **Multimodal Ingestion**: Combines **PyMuPDF** text extraction with **GPT-4o Vision OCR** to read scanned textbook pages, complex diagrams, and geometric graphs.\n` +
          `• **Vector Search**: Embeds content via \`text-embedding-3-large\` stored in **ChromaDB** with topic-filtered metadata.\n` +
          `• **Backend & UI**: High-throughput **FastAPI** microservice coupled with an interactive **Streamlit** front-end.\n` +
          `• **Core Tools**: Generates automated lesson notes, Bloom's taxonomy lesson plans, adaptive multi-tier quizzes, and Ethiopian real-world applications.\n\n` +
          `**Impact**: Bridges the STEM educational gap by delivering instant, curriculum-grounded math explanations to students and time-saving preparation tools for teachers.`,
        actions: [
          { label: "Explore Projects Section", href: "#projects" },
          { label: "View Prime AI GitHub", href: p.github },
          { label: "Ask about SCM Pipeline", query: "Tell me about the SCM data pipeline" },
        ],
      };
    }

    // 4. Data Engineering & Pipelines
    if (q.includes("data eng") || q.includes("kafka") || q.includes("airflow") || q.includes("pipeline") || q.includes("spark") || q.includes("etl") || q.includes("scm") || q.includes("streaming")) {
      return {
        text: `### ⚡ Data Engineering & Streaming Architecture\n\n` +
          `Yabsra possesses deep expertise across distributed data engineering and event streaming:\n\n` +
          `• **Message Streaming**: Production experience deploying **Apache Kafka** clusters for sub-minute real-time ingestion.\n` +
          `• **Workflow Orchestration**: Scheduling and managing resilient DAGs via **Apache Airflow**.\n` +
          `• **Distributed Processing**: Large-scale data transformations using **PySpark** and **Pandas**.\n` +
          `• **Storage & Databases**: **Azure Cosmos DB** (NoSQL), Azure Blob Storage, and relational stores.\n` +
          `• **Flagship Pipeline**: She built the **SCM Real-Time Data Pipeline**, shifting multi-hour batch inventory updates to real-time streaming with automated ML fallback mechanisms for sensor drops.\n\n` +
          `She holds both the **Data Engineer Associate** and **Data Engineer** certifications from DataCamp.`,
        actions: [
          { label: "View Skills Section", href: "#skills" },
          { label: "View Experience", href: "#experience" },
          { label: "Ask about AI/LLM skills", query: "What are her GenAI & LLM skills?" },
        ],
      };
    }

    // 5. Current Role Questions
    if (q.includes("current role") || q.includes("current job") || q.includes("present role") || q.includes("doing now") || q.includes("now") && q.includes("work")) {
      const curr = KNOWLEDGE_BASE.experience[0];
      return {
        text: `### 💼 Yabsra's Current Role\n\n` +
          `Yabsra is currently serving as an **${curr.role}** at **${curr.company}** in Addis Ababa (since August 2025).\n\n` +
          `**What She Does Day-to-Day:**\n` +
          `• **Real-Time Data Streaming**: Architecting supply chain event pipelines with Apache Kafka, Apache Airflow, and Docker.\n` +
          `• **AI Talent Analytics**: Building semantic candidate matching and automated CV parsing engines using Azure OpenAI embeddings and Cosmos DB.\n` +
          `• **Executive Dashboards**: Delivering low-latency Streamlit decision-support portals and conversational chatbot assistants for executive leadership.`,
        actions: [
          { label: "View Full Experience", href: "#experience" },
          { label: "Contact Yabsra", href: "#contact" },
        ],
      };
    }

    // 6. AI, LLM & Machine Learning
    if (q.includes("llm") || q.includes("ai") || q.includes("rag") || q.includes("machine learning") || q.includes("ml") || q.includes("gpt") || q.includes("prompt") || q.includes("vision")) {
      return {
        text: `### 🧠 AI, GenAI & Machine Learning Expertise\n\n` +
          `Yabsra specializes in turning cutting-edge AI research into production-grade systems:\n\n` +
          `• **Retrieval-Augmented Generation (RAG)**: Architected end-to-end RAG with **ChromaDB**, vector indexing, and **OpenAI GPT-4o** in **Prime AI**.\n` +
          `• **Multimodal Vision**: Automated OCR & diagram analysis using GPT-4o Vision for scanned documents.\n` +
          `• **Semantic Matching**: Leveraged **Azure OpenAI** embeddings for intelligent candidate-job matching in the Talent Acquisition platform.\n` +
          `• **Offline Inference**: Deployed quantized local LLMs in the **Basecamp Smart Reply** app for total data privacy and zero cloud latency.\n` +
          `• **Classical ML**: scikit-learn models (regression, classification, clustering) with rigorous feature engineering and cross-validation.\n\n` +
          `She is certified as an **AI Engineer for Developers** and **AI Engineer for Data Scientists** by DataCamp.`,
        actions: [
          { label: "View Certifications", href: "#certifications" },
          { label: "View Prime AI Project", href: "#projects" },
          { label: "Ask about Work History", query: "Where has Yabsra worked?" },
        ],
      };
    }

    // 7. Work Experience & Career History
    if (q.includes("experience") || q.includes("work") || q.includes("job") || q.includes("company") || q.includes("career") || q.includes("history") || q.includes("ie network") || q.includes("bottling") || q.includes("coca")) {
      return {
        text: `### 💼 Professional Experience\n\n` +
          `Yabsra has a proven record across tech companies and manufacturing:\n\n` +
          `1. **AI & Data Engineer @ IE Network Solutions** *(Aug 2025 – Present)*\n` +
          `   • Developing enterprise Talent Acquisition analytics with Azure OpenAI & Cosmos DB.\n` +
          `   • Architecting real-time SCM data streaming pipelines using Kafka, Airflow, and Docker.\n` +
          `   • Delivering interactive executive Streamlit intelligence dashboards.\n\n` +
          `2. **AI GTP Trainee @ IE Network Solutions** *(Feb 2025 – Aug 2025)*\n` +
          `   • Developed and evaluated machine learning models (regression, classification, clustering).\n` +
          `   • Handled complex feature engineering and data preprocessing pipelines.\n\n` +
          `3. **Graduate Trainee @ East Africa Bottling Share Co. (Coca-Cola)** *(Nov 2023 – Oct 2024)*\n` +
          `   • Industrial operations, production downtime tracking, and root cause analysis in high-volume manufacturing.\n\n` +
          `4. **BSc in Software Engineering @ AASTU** *(2018 – 2023)*\n` +
          `   • Graduated with High Distinction (GPA: 3.71 / 4.00).`,
        actions: [
          { label: "Jump to Timeline", href: "#experience" },
          { label: "How to Contact", href: "#contact" },
        ],
      };
    }

    // 8. Certifications
    if (q.includes("cert") || q.includes("license") || q.includes("datacamp") || q.includes("credential")) {
      return {
        text: `### 🏆 Verified Licenses & Certifications\n\n` +
          `Yabsra holds 6+ industry credentials affirming both theoretical rigor and practical mastery:\n\n` +
          `• **Data Engineer Associate** – DataCamp Certified *(Sep 2025)* ✅\n` +
          `• **AI Engineer for Developers Associate** – DataCamp Certified *(Aug 2025)* ✅\n` +
          `• **Data Engineer** – DataCamp Certified *(Sep 2025)* ✅\n` +
          `• **AI Engineer for Data Scientists Associate** – DataCamp *(Jun 2025)*\n` +
          `• **Demera AI Foundation** – Percipio *(May 2025)*\n` +
          `• **Python Programming** – Orange Digital Center Ethiopia *(Dec 2022)*\n\n` +
          `These credentials validate her skills in vector databases, distributed computing, API engineering, and machine learning pipelines.`,
        actions: [
          { label: "View Certifications Grid", href: "#certifications" },
          { label: "Ask about Skills", query: "What technical skills does Yabsra have?" },
        ],
      };
    }

    // 9. Contact, Hiring, Collaboration
    if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("reach") || q.includes("remote") || q.includes("availability") || q.includes("location") || q.includes("linkedin") || q.includes("github")) {
      return {
        text: `### 📬 Connect with Yabsra Fekadu\n\n` +
          `Yabsra is **actively open to AI & Data Engineering opportunities** (Full-Time, Contract, Remote, or Hybrid).\n\n` +
          `• **Direct Email**: [yabsrafekadu28@gmail.com](mailto:yabsrafekadu28@gmail.com)\n` +
          `• **LinkedIn**: [linkedin.com/in/yabsra-fekadu](https://www.linkedin.com/in/yabsra-fekadu)\n` +
          `• **GitHub**: [github.com/yabsra28](https://github.com/yabsra28)\n` +
          `• **Location**: Addis Ababa, Ethiopia (UTC+3, seamlessly coordinates with global remote teams)\n\n` +
          `You can also submit a message directly via the contact form on this canvas!`,
        actions: [
          { label: "Send Message Now", href: "#contact" },
          { label: "Connect on LinkedIn", href: KNOWLEDGE_BASE.linkedin },
        ],
      };
    }

    // 10. Greetings / Casual hello
    if (q === "hi" || q === "hello" || q === "hey" || q === "greetings" || q.startsWith("hi ") || q.startsWith("hello ")) {
      return {
        text: `### 👋 Hello! Welcome to Yabsra's Digital Canvas.\n\n` +
          `I'm her dedicated portfolio AI. What would you like to discover about her work today?\n\n` +
          `Here are a few popular topics:\n` +
          `• 🎓 **Education**: Her Software Engineering degree at AASTU (GPA: 3.71)\n` +
          `• 📐 **Prime AI**: Her RAG-powered Grade 11 Mathematics Assistant\n` +
          `• ⚡ **Data Engineering**: Real-time Kafka & Airflow pipelines\n` +
          `• 💼 **Experience**: Her roles at IE Network Solutions & Coca-Cola\n` +
          `• 📬 **Contact**: How to get in touch for hiring or collaboration`,
        actions: [
          { label: "🎓 Education", query: "Where did Yabsra study?" },
          { label: "📐 Prime AI", query: "Tell me about Prime AI" },
          { label: "⚡ Data Engineering", query: "What are her data engineering skills?" },
        ],
      };
    }

    // 11. Specific Projects fallback (SCM, Talent, Basecamp)
    if (q.includes("scm")) {
      const p = KNOWLEDGE_BASE.projects.scmPipeline;
      return {
        text: `### 📦 SCM Real-Time Data Pipeline\n\n` +
          `**Summary**: ${p.summary}\n\n` +
          `• **Tech Stack**: ${p.techStack.join(", ")}\n` +
          `• **Impact**: ${p.impact}`,
        actions: [{ label: "View in Projects", href: "#projects" }],
      };
    }
    if (q.includes("talent") || q.includes("recruitment")) {
      const p = KNOWLEDGE_BASE.projects.talentAcquisition;
      return {
        text: `### 👥 Talent Acquisition Analytics Platform\n\n` +
          `**Summary**: ${p.summary}\n\n` +
          `• **Tech Stack**: ${p.techStack.join(", ")}\n` +
          `• **Highlights**: Automated CV parsing with structured JSON extraction and Azure OpenAI embedding-based job matching.`,
        actions: [{ label: "View in Projects", href: "#projects" }],
      };
    }
    if (q.includes("basecamp")) {
      const p = KNOWLEDGE_BASE.projects.basecampAi;
      return {
        text: `### 💬 Basecamp Smart Reply & AI App\n\n` +
          `**Summary**: ${p.summary}\n\n` +
          `• **Tech Stack**: ${p.techStack.join(", ")}\n` +
          `• **Highlights**: Integrated an offline quantized LLM for local inference with zero cloud latency and total privacy.`,
        actions: [{ label: "View in Projects", href: "#projects" }],
      };
    }

    // 12. Smart Fallback for any other query
    return {
      text: `### 💡 Quick Answer regarding "${userQuery}"\n\n` +
        `Yabsra Fekadu is an **AI & Data Engineer** from Addis Ababa, Ethiopia. She holds a **BSc in Software Engineering from AASTU** (GPA: 3.71 / 4.00) and specializes in:\n\n` +
        `• **Prime AI & GenAI**: RAG pipelines, multimodal Vision OCR, and LLM fine-tuning.\n` +
        `• **Data Infrastructure**: Real-time Kafka event streaming, Airflow DAGs, and PySpark.\n` +
        `• **Full-Stack Systems**: FastAPI backends, Docker microservices, and React.js interfaces.\n` +
        `• **Professional Track Record**: Building production systems at IE Network Solutions.\n\n` +
        `Choose a topic below to see specific technical details:`,
      actions: [
        { label: "🎓 Where did she study?", query: "Where did Yabsra study and what?" },
        { label: "📐 Prime AI Details", query: "Tell me about Prime AI" },
        { label: "⚡ Data Engineering Stack", query: "What are her data engineering skills?" },
        { label: "💼 Current Role", query: "What is her current role at IE Network Solutions?" },
        { label: "📬 Contact Yabsra", href: "#contact" },
      ],
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate intelligent retrieval & response generation
    setTimeout(() => {
      const response = generateAnswer(query);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: response.text,
        timestamp: "Just now",
        suggestedActions: response.actions,
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, aiMessage]);
    }, 450);
  };

  const handleActionClick = (action: { label: string; href?: string; query?: string }) => {
    if (action.href) {
      if (action.href.startsWith("#")) {
        const el = document.querySelector(action.href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          setIsMinimized(true);
        }
      } else {
        window.open(action.href, "_blank", "noopener,noreferrer");
      }
    } else if (action.query) {
      handleSend(action.query);
    }
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-primary/30 shadow-lg animate-fade-in text-xs font-medium text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Ask Yabsra's AI</span>
          </div>
        )}

        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setIsMinimized(false);
          }}
          className={`relative p-3.5 rounded-full bg-gradient-to-tr from-primary to-accent text-primary-foreground shadow-[0_0_30px_-3px_hsl(var(--primary)/0.6)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group focus:outline-none ${
            isOpen ? "ring-2 ring-primary" : ""
          }`}
          aria-label="Open AI Assistant"
          title="Ask Yabsra's AI Assistant"
        >
          {isOpen ? (
            <X size={22} className="group-hover:rotate-90 transition-transform" />
          ) : (
            <Bot size={22} className="group-hover:scale-110 transition-transform animate-float" />
          )}
        </button>
      </div>

      {/* Interactive AI Chat Panel */}
      {isOpen && (
        <div
          className={`fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[440px] rounded-3xl card-glass border border-primary/40 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 animate-slide-up ${
            isMinimized ? "h-16" : "h-[580px] max-h-[82vh]"
          }`}
        >
          {/* Header */}
          <div className="p-4 bg-secondary/50 border-b border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-primary-foreground font-bold shadow-md">
                <Bot size={20} />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm text-foreground">Yabsra AI</h3>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-primary/15 text-primary border border-primary/30">
                    Knowledge Engine
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Ready to answer portfolio questions</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                title={isMinimized ? "Expand" : "Minimize"}
                aria-label="Toggle size"
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                title="Close chat"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Message Thread */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {m.sender === "ai" && (
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                        <Bot size={15} />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed ${
                        m.sender === "user"
                          ? "bg-primary text-primary-foreground font-medium rounded-tr-sm shadow-md"
                          : "bg-secondary/70 border border-border/50 text-foreground rounded-tl-sm"
                      }`}
                    >
                      <div className="whitespace-pre-wrap space-y-1">
                        {m.text.split("\n\n").map((para, idx) => (
                          <p key={idx} className="leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>

                      {/* Interactive Suggested Action Buttons */}
                      {m.suggestedActions && m.suggestedActions.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-border/40">
                          {m.suggestedActions.map((act, i) => (
                            <button
                              key={i}
                              onClick={() => handleActionClick(act)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-card/80 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                            >
                              <span>{act.label}</span>
                              {act.href ? <ExternalLink size={10} /> : <ArrowRight size={10} />}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {m.sender === "user" && (
                      <div className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground flex-shrink-0 mt-0.5">
                        <User size={15} />
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex gap-2.5 items-center text-muted-foreground text-xs">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Bot size={15} />
                    </div>
                    <div className="p-3 rounded-2xl bg-secondary/50 border border-border/40 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.15s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.3s]" />
                      <span className="text-[11px] ml-1">Analyzing portfolio knowledge...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Query Pills */}
              <div className="px-3 py-2 bg-secondary/30 border-t border-border/40 overflow-x-auto whitespace-nowrap flex gap-1.5">
                {SUGGESTED_QUERIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-card/70 hover:bg-primary/20 hover:text-primary border border-border/40 text-muted-foreground transition-all flex-shrink-0"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Chat Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="p-3 bg-secondary/60 border-t border-border/50 flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about education, Prime AI, Kafka, IE Network..."
                  className="flex-1 px-4 py-2 rounded-full bg-card/80 border border-border/60 focus:border-primary focus:outline-none text-xs text-foreground placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="p-2.5 rounded-full bg-primary text-primary-foreground hover:shadow-[0_0_15px_-2px_hsl(var(--primary)/0.6)] disabled:opacity-50 transition-all flex items-center justify-center cursor-pointer"
                  aria-label="Send message"
                >
                  <Send size={14} />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AiAssistant;
