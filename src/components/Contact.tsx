import { useState } from "react";
import { Linkedin, Mail, MapPin, Heart, Github, Send, Copy, Check, ArrowUp, Sparkles } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("yabsrafekadu28@gmail.com");
    setCopiedEmail(true);
    toast.success("Email copied to clipboard: yabsrafekadu28@gmail.com");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }

    setIsSubmitting(true);
    // Simulate instant sending with professional confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(`Thank you ${formData.name}! Your message has been prepared. Yabsra will get back to you shortly.`, {
        description: `Subject: ${formData.subject || "Collaboration Inquiry"}`,
      });
      // Optionally open mailto with pre-filled content
      const mailtoUrl = `mailto:yabsrafekadu28@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Portfolio Inquiry from " + formData.name
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;

      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-24 relative bg-secondary/25 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            Let's Collaborate
          </span>
          <h2 className="section-title mt-3">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I am always excited to discuss new AI engineering opportunities, data architecture challenges, consulting projects, or technical collaborations. Drop me a note!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8 items-start mb-16">
          {/* Left Column: Direct Contact Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
              <Sparkles size={16} className="text-primary" />
              Direct Channels
            </h3>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/yabsra-fekadu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 card-glass rounded-2xl hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] glow-box-hover group"
            >
              <div className="p-3 rounded-xl bg-[#0077B5]/20 group-hover:bg-[#0077B5]/30 transition-colors">
                <Linkedin className="text-[#0077B5]" size={22} />
              </div>
              <div className="text-left flex-1 min-w-0">
                <p className="text-xs text-muted-foreground font-mono">Professional Network</p>
                <p className="font-semibold text-sm text-foreground truncate">linkedin.com/in/yabsra-fekadu</p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/yabsra28"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 card-glass rounded-2xl hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] glow-box-hover group"
            >
              <div className="p-3 rounded-xl bg-secondary group-hover:bg-primary/20 transition-colors">
                <Github className="text-foreground group-hover:text-primary transition-colors" size={22} />
              </div>
              <div className="text-left flex-1 min-w-0">
                <p className="text-xs text-muted-foreground font-mono">Code & Repositories</p>
                <p className="font-semibold text-sm text-foreground truncate">github.com/yabsra28</p>
              </div>
            </a>

            {/* Email Card with Copy button */}
            <div className="flex items-center justify-between p-4 card-glass rounded-2xl hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-center gap-4 min-w-0">
                <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <Mail className="text-primary" size={22} />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-xs text-muted-foreground font-mono">Direct Email</p>
                  <p className="font-semibold text-xs md:text-sm text-foreground truncate">yabsrafekadu28@gmail.com</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-secondary/80 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                title="Copy email address"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location & Timezone info */}
            <div className="p-4 card-glass rounded-2xl border-border/40 text-xs text-muted-foreground space-y-2">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">Addis Ababa, Ethiopia (UTC+3 / EAT)</span>
              </div>
              <p className="pl-6 text-[11px] leading-relaxed">
                Available for worldwide asynchronous & remote collaborations, contract consulting, and on-site opportunities.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Message Form (3 cols) */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="card-glass p-6 md:p-8 rounded-3xl border border-border/60 shadow-xl space-y-4"
            >
              <h3 className="text-base font-semibold text-foreground flex items-center gap-2 mb-1">
                <Send size={16} className="text-primary" />
                Send a Direct Message
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                Leave your project requirements, job offer, or inquiry below:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-xl bg-secondary/40 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm text-foreground transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-secondary/40 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm text-foreground transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. AI Engineering Opportunity / Project Discussion"
                  className="w-full px-4 py-2.5 rounded-xl bg-secondary/40 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm text-foreground transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your organization, project scope, or opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl bg-secondary/40 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm text-foreground transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.7)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modern Footer */}
      <div className="mt-12 pt-8 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-[10px] font-mono font-bold text-background">
                YF
              </span>
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Yabsra Fekadu. All rights reserved.
              </p>
            </div>

            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Crafted with <Heart size={13} className="text-rose-500 fill-rose-500" /> & modern engineering
            </p>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary/60"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
