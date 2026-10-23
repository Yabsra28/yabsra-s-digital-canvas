import { Linkedin, Mail, MapPin, Github, ArrowRight, Sparkles, Terminal, Database, Brain, Bot } from "lucide-react";
import heroBg from "@/assets/yabsra-hero-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Base background with subtle ambient grid */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero photo background with dynamic gradient mask */}
      <div
        className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-contain bg-left bg-no-repeat opacity-40 lg:opacity-90 transition-opacity pointer-events-none"
        style={{
          backgroundImage: `url(${heroBg})`,
          maskImage: "linear-gradient(to right, white 30%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(to right, white 30%, transparent 95%)",
        }}
      />

      {/* Vibrant Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[110px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-end">
          {/* Main Content Area */}
          <div className="text-center lg:text-left max-w-2xl lg:w-1/2 lg:pl-10">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-md animate-slide-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-primary tracking-wide">
                Available for AI & Data Roles
              </span>
            </div>

            {/* Sub-headline */}
            <div className="animate-slide-up delay-100">
              <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
                &lt;Hello, World /&gt; I'm
              </p>
            </div>

            {/* Name */}
            <h1 className="animate-slide-up delay-200">
              <span className="block text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
                YABSRA
              </span>
              <span className="block text-5xl md:text-7xl font-extrabold tracking-tight gradient-text">
                FEKADU
              </span>
            </h1>

            {/* Role & Bio */}
            <div className="animate-slide-up delay-300">
              <p className="mt-4 text-xl md:text-2xl text-foreground/90 font-medium flex items-center justify-center lg:justify-start gap-2">
                <span>AI & Data Engineer</span>
                <span className="text-primary text-sm font-mono px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                  ETL • LLM • Azure
                </span>
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                Crafting robust data pipelines, scalable machine learning models, and intelligent AI applications. Specializing in Kafka, Airflow, Azure OpenAI, and full-stack solutions that transform raw data into operational intelligence.
              </p>
            </div>

            {/* Location & Quick Meta */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-slide-up delay-400">
              <div className="px-3.5 py-1.5 bg-card/60 backdrop-blur-md border border-border/50 rounded-full flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin size={13} className="text-primary" />
                <span>Addis Ababa, Ethiopia (Open to Remote)</span>
              </div>
              <div className="px-3.5 py-1.5 bg-card/60 backdrop-blur-md border border-border/50 rounded-full flex items-center gap-1.5 text-xs text-muted-foreground">
                <Sparkles size={13} className="text-accent" />
                <span>Creator of Prime AI • Streaming & GenAI</span>
              </div>
            </div>

            {/* Social Links & CTA Row */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 animate-slide-up delay-400">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full
                         hover:shadow-[0_0_35px_-5px_hsl(var(--primary)/0.7)] transition-all duration-300 hover:scale-105 active:scale-95 text-sm"
              >
                <span>Explore Work</span>
                <ArrowRight size={16} />
              </a>

              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-ai-chat"))}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-primary/15 to-accent/15 text-primary border border-primary/30 rounded-full font-medium hover:border-primary hover:bg-primary/20 transition-all duration-300 text-sm hover:scale-105"
                title="Ask Yabsra's AI Assistant"
              >
                <Bot size={16} className="text-accent" />
                <span>Ask AI About Me</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-secondary/80 text-foreground font-medium rounded-full border border-border/60 hover:border-primary/50 hover:bg-secondary transition-all duration-300 text-sm"
              >
                <span>Contact</span>
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-2 ml-1">
                <a
                  href="https://github.com/yabsra28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-button group"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} className="text-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yabsra-fekadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-button group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} className="text-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="mailto:yabsrafekadu28@gmail.com"
                  className="icon-button group"
                  aria-label="Email Direct"
                >
                  <Mail size={20} className="text-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-10 grid grid-cols-3 gap-3 pt-6 border-t border-border/50 animate-slide-up delay-500">
              <div className="p-3 rounded-xl bg-card/30 border border-border/30 text-center lg:text-left">
                <div className="text-xl md:text-2xl font-bold font-mono text-primary">3+</div>
                <div className="text-xs text-muted-foreground">Years in Tech</div>
              </div>
              <div className="p-3 rounded-xl bg-card/30 border border-border/30 text-center lg:text-left">
                <div className="text-xl md:text-2xl font-bold font-mono text-accent">6+</div>
                <div className="text-xs text-muted-foreground">Certifications</div>
              </div>
              <div className="p-3 rounded-xl bg-card/30 border border-border/30 text-center lg:text-left">
                <div className="text-xl md:text-2xl font-bold font-mono text-emerald-400">100%</div>
                <div className="text-xs text-muted-foreground">Production Ready</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 lg:mt-8 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to About"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/80">Scroll</span>
            <div className="w-5 h-9 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
              <div className="w-1.5 h-2.5 bg-primary rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
