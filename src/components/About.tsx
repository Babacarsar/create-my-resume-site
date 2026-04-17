import { Database, Cable, BarChart3, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Database,
    title: "Back Data",
    subtitle: "Ingestion & Stockage",
    description:
      "Pipelines ETL/ELT robustes, traitements Big Data distribués et architectures data lake/warehouse sur le cloud.",
    tags: ["Python", "SQL", "Spark", "Airflow", "AWS S3", "Redshift"],
  },
  {
    icon: Cable,
    title: "APIs & Services",
    subtitle: "Exposition & Intégration",
    description:
      "Conception d'APIs REST performantes et de microservices conteneurisés pour exposer la donnée aux applications métier.",
    tags: ["FastAPI", "REST", "Docker", "PostgreSQL", "CI/CD"],
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    subtitle: "Visualisation & Décision",
    description:
      "Tableaux de bord interactifs et visualisations analytiques pour transformer la donnée en décisions métier actionnables.",
    tags: ["Power BI", "Streamlit", "Plotly", "DAX", "Storytelling"],
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            {"> "}about.me()
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            À propos — <span className="text-gradient-primary">Full Stack Data</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Je couvre l'intégralité de la chaîne de valeur de la donnée :
            de l'ingestion brute à la visualisation décisionnelle, en passant par
            l'exposition via des APIs robustes. Une approche bout-en-bout pour livrer
            des produits data réellement utilisables par le métier.
          </p>
        </div>

        {/* Flow diagram - desktop arrows */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-4 items-stretch">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="relative flex">
                  {/* Connector arrow (desktop only) */}
                  {idx < pillars.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 lg:-right-2 z-20 -translate-y-1/2 items-center justify-center w-6 h-6 rounded-full bg-background border border-primary/40">
                      <ArrowRight className="w-3.5 h-3.5 text-primary" />
                    </div>
                  )}

                  <div className="group relative w-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary flex flex-col">
                    {/* Step number */}
                    <span className="absolute top-4 right-4 font-mono text-xs text-muted-foreground">
                      0{idx + 1}
                    </span>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-1">{pillar.title}</h3>
                    <p className="font-mono text-xs text-primary uppercase tracking-wider mb-4">
                      {pillar.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                      {pillar.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-mono border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-12 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">{"// "}</span>
            ingestion → transformation → exposition → visualisation
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
