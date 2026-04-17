import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-primary text-sm">06.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>

        <div className="max-w-xl mx-auto text-center">
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Actuellement en alternance, je reste ouvert aux échanges et opportunités. N'hésitez pas à me contacter !
          </p>

          <a
            href="mailto:babacarsarr.tech@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-all duration-300 glow-primary"
          >
            <Mail className="w-5 h-5" />
            Me contacter
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="flex justify-center gap-6 mt-12">
            <a href="https://www.linkedin.com/in/babacar-sarr/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/babacarsar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-border pt-8">
        <p className="text-center text-xs text-muted-foreground font-mono">
          © 2026 Babacar Sarr — Construit avec passion
        </p>
      </div>
    </section>
  );
};

export default Contact;
