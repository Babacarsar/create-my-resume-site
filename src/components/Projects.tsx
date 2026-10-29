import { ArrowUpRight, Folder, Github, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Project {
  title: string;
  period: string;
  description: string;
  tasks: string[];
  tags: string[];
  github?: string;
  demo?: string;
  /** Projet phare : carte sur toute la largeur, résultats chiffrés mis en avant */
  featured?: boolean;
  metrics?: { value: string; label: string }[];
}

const projects: Project[] = [
  {
    title: "Woodoo App – Plateforme de traçabilité industrielle",
    period: "Depuis sept. 2025 · Woodoo",
    description:
      "Application en production qui suit chaque panneau de bois de la réception des matières jusqu'au client : logistique, production, contrôles qualité et pilotage, pour les équipes de l'usine.",
    tasks: [
      "Architecture : React (60+ écrans) → API Flask sur ECS Fargate → DynamoDB, diffusion CloudFront + WAF, infrastructure Terraform et CI/CD GitLab",
      "Traçabilité de bout en bout par QR codes : lots, plis, stacks, presses, contrôles, avec recherche de l'historique complet d'un stack",
      "Données fiables : règles de validation à la saisie (ex. alerte densité incohérente), détection des mesures aberrantes, environnement de recette",
      "Performance : décodage DynamoDB direct et scans parallèles, cache de réponses invalidé à chaque écriture, code front chargé à la demande",
      "Agent IA « Bernadette » (API Claude) : questions en langage naturel sur les données de production, graphiques et exports, accès en lecture seule garanti par IAM",
    ],
    tags: ["React", "Flask", "DynamoDB", "ECS Fargate", "Terraform", "CloudFront", "Docker", "Claude API"],
    featured: true,
    metrics: [
      { value: "30 s → 0,2 s", label: "temps des dashboards" },
      { value: "5×", label: "lectures DynamoDB plus rapides" },
      { value: "50", label: "utilisateurs simultanés, 0 erreur" },
      { value: "2,5 Mo → 350 Ko", label: "poids initial du front" },
    ],
  },
  {
    title: "Plateforme Big Data – Météo & Pollution",
    period: "Déc 2024 – Juin 2025",
    description:
      "Pipeline de données complet avec modélisation prédictive pour la prédiction de température.",
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
    description:
      "Dashboard interactif Power BI pour identifier les causes de résiliation client.",
    tasks: [
      "Suivi KPI : taux d'attrition, revenus perdus, segments à risque",
      "Analyse des facteurs : contrat, âge, appels SAV",
      "Recommandations : fidélisation ciblée, amélioration du support",
    ],
    tags: ["Power BI", "Data Visualization", "KPI", "Analyse"],
  },
  {
    title: "Pipeline ETL & Analyse OLAP – Dataset Movies",
    period: "Avril 2025 · EPSI",
    description:
      "Pipeline ETL complet sur un dataset de films avec stockage relationnel et cube OLAP multidimensionnel pour l'analyse interactive.",
    tasks: [
      "Collecte, nettoyage et feature engineering sous Dataiku (YEAR → START_YEAR / END_YEAR)",
      "Chargement des données agrégées dans PostgreSQL",
      "Cube OLAP Atoti avec hiérarchies et widgets interactifs",
    ],
    tags: ["Dataiku", "PostgreSQL", "Atoti", "ETL", "OLAP"],
  },
  {
    title: "Architecture Décisionnelle – VTC New York",
    period: "Oct 2024 – Déc 2024 · EPSI",
    description:
      "Data Lake et entrepôt décisionnel sur les trajets VTC de New York, orchestrés et automatisés mensuellement.",
    tasks: [
      "Ingestion Python des fichiers Parquet vers un Data Lake MinIO",
      "Pipeline ETL Amphi.ai vers PostgreSQL et Data Mart en flocon",
      "Dashboard Power BI et orchestration mensuelle via Airflow (DAG)",
    ],
    tags: ["Python", "MinIO", "Airflow", "PostgreSQL", "Power BI", "Data Lake"],
  },
  {
    title: "Application de Gestion de Notes",
    period: "Unipro",
    description:
      "Application web de gestion des notes étudiantes : saisie, calcul de moyennes, rapports et suivi de progression.",
    tasks: [
      "Saisie des notes par cours et calcul automatique des moyennes",
      "Génération de rapports personnalisés et notifications utilisateurs",
      "Interface intuitive pour enseignants et administrateurs",
    ],
    tags: ["PHP", "MySQL", "phpMyAdmin", "npm", "Web"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projets</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.1}
              className={`group relative card-gradient rounded-2xl border transition-all duration-500 overflow-hidden hover:-translate-y-1 ${
                project.featured ? "lg:col-span-2 border-primary/40 hover:border-primary/60" : "border-border hover:border-primary/40"
              }`}
            >
              {/* Subtle top gradient accent */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative blurred glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative p-7 md:p-8">
                {/* Header: folder icon + index + arrow */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/15 group-hover:border-primary/40 transition-all duration-500">
                      <Folder className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {project.featured ? "Projet phare · en production" : `Projet · ${String(i).padStart(2, "0")}`}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground/80">
                        {project.period}
                      </span>
                    </div>
                  </div>
                  <TooltipProvider delayDuration={200}>
                    <div className="flex items-center gap-1">
                      {project.github && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Code source GitHub de ${project.title}`}
                              onClick={(e) => e.stopPropagation()}
                              className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                              <Github className="w-4 h-4" strokeWidth={1.75} />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="font-mono text-xs">
                            Voir le code source sur GitHub
                          </TooltipContent>
                        </Tooltip>
                      )}
                      {project.demo && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Démo live de ${project.title}`}
                              onClick={(e) => e.stopPropagation()}
                              className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                              <ExternalLink className="w-4 h-4" strokeWidth={1.75} />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="font-mono text-xs">
                            Ouvrir la démo live
                          </TooltipContent>
                        </Tooltip>
                      )}
                      {(project.github || project.demo) && (
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground/60 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                      )}
                    </div>
                  </TooltipProvider>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight tracking-tight group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Résultats chiffrés (projet phare) */}
                {project.metrics && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {project.metrics.map((m, j) => (
                      <div key={j} className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
                        <p className="font-mono text-lg md:text-xl font-bold text-primary leading-tight">{m.value}</p>
                        <p className="text-[11px] text-muted-foreground mt-1 leading-snug">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-border via-border to-transparent mb-5" />

                {/* Tasks */}
                <ul className="space-y-2.5 mb-6">
                  {project.tasks.map((task, j) => (
                    <li key={j} className="flex gap-3 text-sm text-muted-foreground/90 leading-relaxed">
                      <span className="text-primary/70 mt-1.5 shrink-0">▸</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 rounded-full bg-secondary/60 text-muted-foreground text-[11px] font-mono border border-border/60 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors duration-300"
                    >
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
