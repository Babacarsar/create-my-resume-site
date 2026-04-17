import { Briefcase, Calendar, MapPin, Building2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  tasks: string[];
  stack: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Data Engineer Full Stack",
    company: "Woodoo",
    location: "Paris",
    period: "Sept 2025 – Sept 2026",
    type: "Alternance",
    tasks: [
      "Architecture data cloud-native sur AWS (DynamoDB, S3, Lambda, API Gateway, Athena, QuickSight) pour une plateforme Industrie 4.0",
      "Modélisation NoSQL avancée : 7 tables métier, GSI, pagination et optimisation des requêtes à grande échelle",
      "Pipelines ETL end-to-end en Python : ingestion multi-sources, transformation et chargement vers DynamoDB et S3",
      "Contrôles Data Quality : validation à l'ingestion, monitoring post-insertion et alertes",
      "Dashboards décisionnels sur QuickSight (KPIs production, qualité, logistique)",
      "Déploiement production sur VPS (Nginx, systemd) avec documentation complète",
    ],
    stack: ["AWS", "DynamoDB", "Lambda", "Python", "QuickSight", "Nginx"],
  },
  {
    title: "Data Analyst",
    company: "Malick Galaxie Groupe",
    location: "Dakar",
    period: "Nov 2023 – Mai 2024",
    type: "Stage",
    tasks: [
      "Nettoyage et transformation des données : doublons, valeurs manquantes, typage, structuration",
      "Modélisation relationnelle pour reporting sous Power BI : tables de faits/dimensions",
      "Tableaux croisés dynamiques pour l'exploration des données et suivi des KPIs",
      "Analyses exploratoires et statistiques pour détecter tendances et anomalies",
      "Rapports analytiques et cartographies thématiques pour décideurs non techniques",
    ],
    stack: ["Power BI", "SQL", "Excel", "QGIS"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-primary text-sm">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Expériences</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical rail */}
          <div
            className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent"
            aria-hidden
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.1}
                className="group relative pl-14 md:pl-20"
              >
                {/* Timeline node */}
                <div className="absolute left-0 top-6 flex items-center justify-center">
                  <span className="absolute w-9 h-9 md:w-12 md:h-12 rounded-full bg-primary/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-9 h-9 md:w-12 md:h-12 rounded-full bg-background border-2 border-primary/40 group-hover:border-primary flex items-center justify-center text-primary transition-all duration-500 group-hover:scale-110">
                    <Briefcase className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.75} />
                  </div>
                </div>

                {/* Card */}
                <div className="card-gradient rounded-2xl border border-border group-hover:border-primary/40 transition-all duration-500 overflow-hidden hover:-translate-y-1">
                  {/* Top accent line */}
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative p-6 md:p-8">
                    {/* Decorative glow */}
                    <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Meta row */}
                    <div className="relative flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-mono uppercase tracking-[0.2em] border border-primary/20">
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-muted-foreground text-xs font-mono">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="relative text-xl md:text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h3>

                    {/* Company / location */}
                    <div className="relative flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 mb-5 text-sm">
                      <span className="flex items-center gap-1.5 text-foreground/90 font-medium">
                        <Building2 className="w-3.5 h-3.5 text-accent" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-border via-border to-transparent mb-5" />

                    {/* Tasks */}
                    <ul className="relative space-y-2.5 mb-6">
                      {exp.tasks.map((task, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-sm text-muted-foreground/90 leading-relaxed"
                        >
                          <span className="text-primary/70 mt-1.5 shrink-0">▸</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stack tags */}
                    <div className="relative flex flex-wrap gap-1.5 pt-1">
                      {exp.stack.map((tech, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 rounded-full bg-secondary/60 text-muted-foreground text-[11px] font-mono border border-border/60 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
