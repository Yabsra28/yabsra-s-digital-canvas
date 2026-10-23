import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Non-existent route accessed:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="card-glass max-w-md w-full p-8 md:p-10 rounded-3xl border border-border/70 text-center relative z-10 shadow-2xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-destructive/10 text-destructive border border-destructive/20 text-xs font-mono font-medium mb-4">
          <Sparkles size={12} />
          <span>Error 404 • Path Disconnected</span>
        </div>

        <h1 className="text-7xl font-extrabold tracking-tight gradient-text mb-2 font-mono">
          404
        </h1>
        <p className="text-lg font-semibold text-foreground mb-2">
          Canvas Coordinate Not Found
        </p>
        <p className="text-xs text-muted-foreground mb-8 leading-relaxed font-mono">
          The requested route <span className="text-primary">{location.pathname}</span> is beyond the boundary of this digital canvas.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:shadow-[0_0_25px_-3px_hsl(var(--primary)/0.7)] transition-all hover:scale-105"
        >
          <Home size={14} />
          <span>Return to Canvas Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
