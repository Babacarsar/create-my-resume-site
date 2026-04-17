import { Award, Users, Globe } from "lucide-react";
import AnimatedSection from "./AnimatedSection";


interface SkillItem {
  name: string;
  /** Iconify icon identifier, e.g. "logos:aws" */
  icon: string;
}

interface SkillGroup {
  title: string;
  items: SkillItem[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Bases de données",
    items: [
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "SQL Server", icon: "devicon:microsoftsqlserver" },
      { name: "MySQL", icon: "logos:mysql" },
      { name: "DynamoDB", icon: "logos:aws-dynamodb" },
      { name: "SQLAlchemy", icon: "devicon:sqlalchemy" },
    ],
  },
  {
    title: "Cloud AWS",
    items: [
      { name: "AWS", icon: "logos:aws" },
      { name: "S3", icon: "logos:aws-s3" },
      { name: "Lambda", icon: "logos:aws-lambda" },
      { name: "Glue", icon: "logos:aws-glue" },
      { name: "EC2", icon: "logos:aws-ec2" },
      { name: "QuickSight", icon: "logos:aws-quicksight" },
    ],
  },
  {
    title: "Langages",
    items: [
      { name: "Python", icon: "logos:python" },
      { name: "SQL", icon: "vscode-icons:file-type-sql" },
      { name: "JavaScript", icon: "logos:javascript" },
    ],
  },
  {
    title: "Backend / API",
    items: [
      { name: "FastAPI", icon: "logos:fastapi-icon" },
      { name: "Flask", icon: "logos:flask" },
      { name: "REST API", icon: "logos:openapi-icon" },
      { name: "JWT", icon: "logos:jwt-icon" },
    ],
  },
  {
    title: "Data Engineering",
    items: [
      { name: "Apache Spark", icon: "logos:apache-spark" },
      { name: "Databricks", icon: "simple-icons:databricks" },
      { name: "Apache Airflow", icon: "logos:airflow-icon" },
      { name: "Power BI", icon: "logos:microsoft-power-bi" },
      { name: "QGIS", icon: "simple-icons:qgis" },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Nginx", icon: "logos:nginx" },
      { name: "Linux", icon: "logos:linux-tux" },
    ],
  },
];

interface Certification {
  name: string;
  issuer: string;
  date: string;
}

const certifications: Certification[] = [
  { name: "AWS Academy Graduate – Data Engineering", issuer: "Amazon Web Services (AWS)", date: "Juil. 2025" },
  { name: "Devenir un expert de Power BI – La formation complète", issuer: "Udemy", date: "Févr. 2025" },
  { name: "Excel : Analyse de données avec Power Query (Microsoft 365)", issuer: "Birdify – LMSAFP", date: "Déc. 2024" },
  { name: "Dataiku ML Practitioner", issuer: "Dataiku", date: "Déc. 2024" },
  { name: "Dataiku Advanced Designer", issuer: "Dataiku", date: "Nov. 2024" },
  { name: "Dataiku Core Designer", issuer: "Dataiku", date: "Nov. 2024" },
  { name: "Apprendre l'analyse des données – Partie 2 : Étendre et appliquer les connaissances", issuer: "Birdify – LMSAFP", date: "Nov. 2024" },
  { name: "Apprendre l'analyse des données : Fondements", issuer: "LinkedIn", date: "Nov. 2024" },
  { name: "Les fondements du Data Engineering", issuer: "Birdify – LMSAFP", date: "2024" },
];

const softSkills = ["Capacité d'écoute", "Esprit d'analyse", "Autonomie", "Savoir être"];

const SkillLogo = ({ item }: { item: SkillItem }) => {
  // Iconify renders monochrome icons (simple-icons, devicon families) using currentColor.
  // We tint them with the primary accent so they harmonize with the dark theme.
  const isMonochrome =
    item.icon.startsWith("simple-icons:") ||
    item.icon.startsWith("devicon:") ||
    item.icon.startsWith("vscode-icons:");
  const src = isMonochrome
    ? `https://api.iconify.design/${item.icon}.svg?color=%2314b8a6`
    : `https://api.iconify.design/${item.icon}.svg`;

  return (
    <div className="group/logo flex flex-col items-center gap-2">
      <div className="relative flex items-center justify-center w-full aspect-square rounded-xl bg-gradient-to-br from-secondary/60 to-secondary/20 border border-border/60 group-hover/logo:border-primary/50 transition-all duration-300 group-hover/logo:-translate-y-1 group-hover/logo:shadow-[0_8px_24px_-12px_hsl(var(--primary)/0.6)] overflow-hidden">
        <div className="absolute inset-0 opacity-0 group-hover/logo:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 transition-opacity duration-300" />
        <img
          src={src}
          alt={item.name}
          loading="lazy"
          className="relative w-9 h-9 object-contain transition-transform duration-300 group-hover/logo:scale-110 drop-shadow-[0_2px_8px_hsl(var(--primary)/0.25)]"
        />
      </div>
      <span className="font-mono text-[10px] text-muted-foreground text-center leading-tight group-hover/logo:text-primary transition-colors duration-300">
        {item.name}
      </span>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Compétences</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Technical skills grid with brand logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {skillGroups.map((group, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.08}
              className="card-gradient rounded-xl p-6 border border-border hover:border-primary/30 hover:glow-primary transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold text-foreground tracking-tight">{group.title}</h3>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5">
                {group.items.map((item, j) => (
                  <SkillLogo key={j} item={item} />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Certifications & Soft skills */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <AnimatedSection className="card-gradient rounded-xl p-6 border border-border lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Award className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-foreground">Certifications</h3>
              <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                {String(certifications.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certifications.map((c, i) => (
                <li
                  key={i}
                  className="group/cert flex gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50 hover:border-accent/40 hover:bg-secondary/50 transition-all duration-300"
                >
                  <span className="text-accent mt-0.5 shrink-0 group-hover/cert:scale-110 transition-transform">◆</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground/90 leading-snug">{c.name}</p>
                    <p className="text-[11px] font-mono text-muted-foreground mt-1">
                      {c.issuer} · {c.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="card-gradient rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-foreground">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-md bg-accent/10 text-accent text-xs font-mono border border-accent/20"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4 text-primary" />
              <span>Anglais — B2</span>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Skills;
