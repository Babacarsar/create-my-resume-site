import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  tasks: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Alternance Data Engineer Full Stack",
    company: "Woodoo",
    location: "Paris",
    period: "Sept 2025 – Sept 2026",
    tasks: [
      "Architecture data cloud-native sur AWS (DynamoDB, S3, Lambda, API Gateway, Athena, QuickSight) pour une plateforme Industrie 4.0",
      "Modélisation NoSQL avancée : 7 tables métier, GSI, pagination et optimisation des requêtes à grande échelle",
      "Pipelines ETL end-to-end en Python : ingestion multi-sources, transformation et chargement vers DynamoDB et S3",
      "Contrôles Data Quality : validation à l'ingestion, monitoring post-insertion et alertes",
      "Dashboards décisionnels sur QuickSight (KPIs production, qualité, logistique)",
      "Déploiement production sur VPS (Nginx, systemd) avec documentation complète",
    ],
  },
  {
    title: "Stage Data Analyst",
    company: "Malick Galaxie Groupe",
    location: "Dakar",
    period: "Nov 2023 – Mai 2024",
    tasks: [
      "Nettoyage et transformation des données : doublons, valeurs manquantes, typage, structuration",
      "Modélisation relationnelle pour reporting sous Power BI : tables de faits/dimensions",
      "Tableaux croisés dynamiques pour l'exploration des données et suivi des KPIs",
      "Analyses exploratoires et statistiques pour détecter tendances et anomalies",
      "Rapports analytiques et cartographies thématiques pour décideurs non techniques",
    ],
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

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors duration-500 group">
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary/30 group-hover:bg-primary transition-colors border-2 border-background" />
              
              <div className="card-gradient rounded-xl p-6 md:p-8 border border-border group-hover:glow-primary transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-mono text-sm flex items-center gap-2 mt-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="flex items-center gap-2 text-muted-foreground text-sm font-mono shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.tasks.map((task, j) => (
                    <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-1.5 shrink-0">▸</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
