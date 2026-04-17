import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Terminal } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 hero-gradient">
      <div className="max-w-xl w-full text-center">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
          {"> "}error.404
        </p>
        <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight mb-4 text-gradient-primary">
          404
        </h1>
        <p className="text-xl md:text-2xl font-bold text-foreground mb-3">
          Cette ressource n'existe pas
        </p>
        <div className="font-mono text-sm text-muted-foreground bg-card border border-border rounded-lg p-4 mb-8 text-left">
          <p><span className="text-primary">$</span> cat <span className="text-foreground">{location.pathname}</span></p>
          <p className="text-destructive mt-1">cat: {location.pathname}: No such file or directory</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 glow-primary"
          >
            <Home className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            <Terminal className="w-4 h-4" />
            Me contacter
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
