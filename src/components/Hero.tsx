import { Linkedin, Mail, MapPin } from "lucide-react";
import profileImage from "@/assets/yabsra-profile.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-slide-up">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              {/* Image container with radial gradient mask */}
              <div 
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full overflow-hidden"
                style={{
                  background: 'hsl(var(--background))',
                }}
              >
                <div
                  className="w-full h-full relative"
                  style={{
                    maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
                  }}
                >
                  <img
                    src={profileImage}
                    alt="Yabsra Fekadu"
                    className="w-full h-full object-cover grayscale brightness-110"
                  />
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-card/90 backdrop-blur-sm border border-border/50 rounded-full">
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={14} className="text-primary" />
                <span className="text-muted-foreground">Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-xl">
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
