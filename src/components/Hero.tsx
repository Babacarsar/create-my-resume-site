import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink, Download } from "lucide-react";
import profileImg from "@/assets/profile.png";
import TypingText from "@/components/TypingText";

const Hero = () => {
  const linkedInUrl = "https://www.linkedin.com/in/babacar-sarr-a3888a247/";

  const openExternalLink = (url: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(170 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(170 80% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile image */}
          <div className="relative">
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-primary/30 animate-pulse-glow">
              <img src={profileImg} alt="Babacar Sarr" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-primary animate-pulse" />
          </div>

          {/* Text content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3 animate-fade-in">
              {'> '}portfolio.init()
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 animate-slide-up">
              Babacar <span className="text-gradient-primary">SARR</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-mono mb-6 animate-slide-up min-h-[2rem]" style={{ animationDelay: '0.1s' }}>
              <TypingText text="Data Engineer Full Stack" speed={90} startDelay={400} />
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Data Engineer <span className="text-primary font-semibold">Full Stack</span> — je couvre toute la chaîne de la donnée :
              <span className="text-foreground"> back data</span> (pipelines ETL/ELT, Spark, Airflow, data lakes AWS S3/Redshift),
              <span className="text-foreground"> APIs</span> (FastAPI, REST, microservices Dockerisés) et
              <span className="text-foreground"> dashboards</span> (Power BI, Streamlit, visualisations interactives).
              De l'ingestion brute à la décision métier, je livre des produits data end-to-end.
            </p>

            {/* CTA: Download CV */}
            <div className="flex justify-center lg:justify-start mb-6 animate-slide-up" style={{ animationDelay: '0.25s' }}>
              <a
                href="/CV_Babacar_Sarr.pdf"
                download="CV_Babacar_Sarr.pdf"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 glow-primary"
              >
                <Download className="w-5 h-5" />
                Télécharger mon CV
              </a>
            </div>

            {/* Contact badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <a href="mailto:babacarsarr.tech@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-mono hover:glow-primary transition-all duration-300 hover:border-primary/50 border border-border">
                <Mail className="w-4 h-4 text-primary" />
                Email
              </a>
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-mono border border-border">
                <MapPin className="w-4 h-4 text-primary" />
                Île-de-France
              </span>
              <a href="tel:0775806799" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-mono hover:glow-primary transition-all duration-300 hover:border-primary/50 border border-border">
                <Phone className="w-4 h-4 text-primary" />
                Contact
              </a>
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" onClick={openExternalLink(linkedInUrl)} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-mono hover:glow-primary transition-all duration-300 hover:border-primary/50 border border-border">
                <Linkedin className="w-4 h-4 text-primary" />
                LinkedIn
              </a>
              <a href="https://github.com/babacarsar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-mono hover:glow-primary transition-all duration-300 hover:border-primary/50 border border-border">
                <Github className="w-4 h-4 text-primary" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-xs font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
