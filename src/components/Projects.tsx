import { Layers, BarChart3, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface Project {
  title: string;
  period: string;
  description: string;
  tasks: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Plateforme Big Data – Météo & Pollution",
    period: "Déc 2024 – Juin 2025",
    description: "Pipeline de données complet avec modélisation prédictive pour la prédiction de température.",
    tasks: [
      "Modélisation prédictive sous Databricks (Spark MLlib)",
      "Pipeline automatisé : ingestion AWS Glue, stockage S3, base PostgreSQL (RDS)",
      "Monitoring CloudWatch, visualisation via Power BI et QGIS",
    ],
    tags: ["Databricks", "Spark", "AWS Glue", "S3", "PostgreSQL", "Power BI", "QGIS"],
  },
  {
    title: "DataViz – Analyse d'Attrition Clients",
    period: "Avril 2025",
    description: "Dashboard interactif Power BI pour identifier les causes de résiliation client.",
    tasks: [
      "Suivi KPI : taux d'attrition, revenus perdus, segments à risque",
      "Analyse des facteurs : contrat, âge, appels SAV",
      "Recommandations : fidélisation ciblée, amélioration du support",
    ],
    tags: ["Power BI", "Data Visualization", "KPI", "Analyse"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-primary text-sm">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Projets</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="card-gradient rounded-xl border border-border hover:border-primary/30 hover:glow-primary transition-all duration-500 group overflow-hidden">
              {/* Header bar */}
              <div className="px-6 py-4 border-b border-border flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{project.period}</span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                <ul className="space-y-1.5 mb-5">
                  {project.tasks.map((task, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary shrink-0">▸</span>
                      {task}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
