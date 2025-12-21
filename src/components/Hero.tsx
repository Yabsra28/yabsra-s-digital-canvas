import { Linkedin, Mail, MapPin } from "lucide-react";
import heroBg from "@/assets/yabsra-hero-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Side - Photo */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative">
              <div
                className="w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
                style={{
                  maskImage: "radial-gradient(circle, white 55%, transparent 75%)",
                  WebkitMaskImage: "radial-gradient(circle, white 55%, transparent 75%)",
                }}
              >
                <img
                  src={heroBg}
                  alt="Yabsra Fekadu portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Location Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full animate-slide-up">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={14} className="text-primary" />
                  <span className="text-muted-foreground">Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="text-center lg:text-left max-w-xl lg:w-1/2">
            <div className="animate-slide-up delay-100">
              <p className="text-primary font-mono text-sm mb-4">Hello, I'm</p>
            </div>
            
            <h1 className="animate-slide-up delay-200">
              <span className="block text-5xl md:text-7xl font-bold tracking-tight">
                YABSRA
              </span>
              <span className="block text-5xl md:text-7xl font-bold tracking-tight gradient-text">
                FEKADU
              </span>
            </h1>

            <div className="animate-slide-up delay-300">
              <p className="mt-6 text-xl md:text-2xl text-muted-foreground font-light">
                AI & Data Engineer
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Passionate about machine learning, data pipelines, LLM training, 
                and building scalable AI solutions.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 animate-slide-up delay-400">
              <a
                href="https://www.linkedin.com/in/yabsra-fekadu"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-button group"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} className="text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:yabsrafekadu28@gmail.com"
                className="icon-button group"
                aria-label="Email"
              >
                <Mail size={22} className="text-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>

            {/* CTA Button */}
            <div className="mt-8 animate-slide-up delay-500">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full
                         hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.6)] transition-all duration-300 hover:scale-105"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
