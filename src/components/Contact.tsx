import { Linkedin, Mail, MapPin, Heart } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a chat about AI and data engineering. Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yabsra-fekadu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 card-glass rounded-xl 
                       hover:border-primary/50 transition-all duration-300 hover:scale-105 glow-box-hover group"
            >
              <div className="p-2 rounded-lg bg-[#0077B5]/20 group-hover:bg-[#0077B5]/30 transition-colors">
                <Linkedin className="text-[#0077B5]" size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Connect on</p>
                <p className="font-semibold">LinkedIn</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:yabsrafekadu28@gmail.com"
              className="flex items-center gap-3 px-6 py-4 card-glass rounded-xl 
                       hover:border-primary/50 transition-all duration-300 hover:scale-105 glow-box-hover group"
            >
              <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <Mail className="text-primary" size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Send an email</p>
                <p className="font-semibold">yabsrafekadu28@gmail.com</p>
              </div>
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin size={18} className="text-primary" />
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Yabsra Fekadu. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> and code
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
