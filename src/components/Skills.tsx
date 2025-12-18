import { 
  Code, Database, Brain, Cloud, Terminal, 
  FileJson, Server, Workflow, BarChart3, Cpu,
  GitBranch, Container, Sparkles, MessageSquare,
  Braces, Globe, Layers, Zap
} from "lucide-react";

const allSkillIcons = [
  { icon: Terminal, delay: 0 },
  { icon: Code, delay: 0.5 },
  { icon: FileJson, delay: 1 },
  { icon: Server, delay: 1.5 },
  { icon: Workflow, delay: 2 },
  { icon: BarChart3, delay: 2.5 },
  { icon: Database, delay: 3 },
  { icon: Cpu, delay: 3.5 },
  { icon: Brain, delay: 4 },
  { icon: Sparkles, delay: 4.5 },
  { icon: MessageSquare, delay: 5 },
  { icon: Cloud, delay: 5.5 },
  { icon: Container, delay: 6 },
  { icon: GitBranch, delay: 6.5 },
  { icon: Braces, delay: 7 },
  { icon: Globe, delay: 7.5 },
  { icon: Layers, delay: 8 },
  { icon: Zap, delay: 8.5 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-16 rounded-full" />

        {/* Floating Icons Grid */}
        <div className="relative h-[400px] max-w-4xl mx-auto">
          {allSkillIcons.map((skill, index) => {
            const Icon = skill.icon;
            // Position icons in a scattered pattern
            const positions = [
              { top: '5%', left: '10%' },
              { top: '15%', left: '35%' },
              { top: '8%', left: '60%' },
              { top: '20%', left: '85%' },
              { top: '35%', left: '5%' },
              { top: '40%', left: '25%' },
              { top: '30%', left: '50%' },
              { top: '45%', left: '75%' },
              { top: '55%', left: '15%' },
              { top: '60%', left: '40%' },
              { top: '50%', left: '65%' },
              { top: '65%', left: '90%' },
              { top: '75%', left: '8%' },
              { top: '80%', left: '30%' },
              { top: '70%', left: '55%' },
              { top: '85%', left: '78%' },
              { top: '90%', left: '45%' },
              { top: '25%', left: '95%' },
            ];
            const pos = positions[index % positions.length];
            
            return (
              <div
                key={index}
                className="absolute group cursor-pointer"
                style={{
                  top: pos.top,
                  left: pos.left,
                  animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                  animationDelay: `${skill.delay * 0.3}s`,
                }}
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon container */}
                  <div className="relative p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 
                               hover:border-primary/50 hover:bg-primary/10 transition-all duration-500
                               hover:scale-125 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]">
                    <Icon 
                      size={28} 
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-300" 
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
