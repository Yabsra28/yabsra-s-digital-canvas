import { Award, BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "Data Engineer Associate",
    issuer: "DataCamp Certified",
    date: "Sep 2025",
    verified: true,
  },
  {
    title: "AI Engineer for Developers Associate",
    issuer: "DataCamp Certified",
    date: "Aug 2025",
    verified: true,
  },
  {
    title: "Data Engineer",
    issuer: "DataCamp Certified",
    date: "Sep 2025",
    verified: true,
  },
  {
    title: "AI Engineer for Data Scientists Associate",
    issuer: "DataCamp",
    date: "Jun 2025",
    verified: false,
  },
  {
    title: "Demera AI Foundation",
    issuer: "Percipio",
    date: "May 2025",
    verified: false,
  },
  {
    title: "Python Programming",
    issuer: "Orange Digital Center Ethiopia",
    date: "Dec 2022",
    verified: false,
  },
];

const Certifications = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4">
          <span className="gradient-text">Certifications</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card-glass p-5 rounded-xl hover:border-primary/50 transition-all duration-300 
                       hover:transform hover:scale-105 group"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Award className="text-primary" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-sm truncate">{cert.title}</h3>
                    {cert.verified && (
                      <BadgeCheck className="text-primary flex-shrink-0" size={16} />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                  <p className="text-xs text-primary font-mono mt-1">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
