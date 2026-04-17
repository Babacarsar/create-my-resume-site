import { useState } from "react";
import { Mail, Linkedin, Github, ArrowUpRight, Download, Copy, Check, MapPin, CalendarClock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { toast } from "sonner";

const Contact = () => {
  const linkedInUrl = "https://www.linkedin.com/in/babacar-sarr-a3888a247/";
  const email = "babacarsarr.tech@gmail.com";
  const [copied, setCopied] = useState(false);

  const openExternalLink = (url: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email copié dans le presse-papier");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Impossible de copier l'email");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Contact</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            {"> "}contact.open()
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
            Actuellement en alternance, je reste ouvert aux échanges et opportunités. N'hésitez pas à me contacter !
          </p>

          {/* Status badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-mono border border-border">
              <MapPin className="w-4 h-4 text-primary" />
              Île-de-France · Remote OK
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-mono border border-border">
              <CalendarClock className="w-4 h-4 text-primary" />
              Réponse sous 24h
            </span>
          </div>


          {/* Email row : mailto + copy */}
          <div className="inline-flex flex-col sm:flex-row items-stretch gap-2 mb-4 w-full sm:w-auto">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 glow-primary"
            >
              <Mail className="w-5 h-5" />
              <span className="font-mono text-sm">{email}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copier l'adresse email"
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
              <span className="font-mono text-xs">{copied ? "Copié" : "Copier"}</span>
            </button>
          </div>

          {/* CV download */}
          <div className="mb-12">
            <a
              href="/CV_Babacar_Sarr.pdf"
              download="CV_Babacar_Sarr.pdf"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary font-mono transition-colors"
            >
              <Download className="w-4 h-4" />
              Télécharger le CV (PDF)
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" onClick={openExternalLink(linkedInUrl)} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Profil LinkedIn de Babacar Sarr">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/babacarsar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Profil GitHub de Babacar Sarr">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-border pt-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
          <p>© 2026 Babacar Sarr — Data Engineer Full Stack</p>
          <div className="flex items-center gap-4">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/babacarsar" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href={`mailto:${email}`} className="hover:text-primary transition-colors">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
