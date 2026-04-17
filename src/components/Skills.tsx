import { Award, Users, Globe } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface SkillItem {
  name: string;
  /** simple-icons slug. See https://simpleicons.org */
  slug: string;
  /** Brand color (hex without #). Falls back to primary. */
  color?: string;
}

interface SkillGroup {
  title: string;
  items: SkillItem[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Bases de données",
    items: [
      { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
      { name: "Microsoft SQL Server", slug: "microsoftsqlserver", color: "CC2927" },
      { name: "MySQL", slug: "mysql", color: "4479A1" },
      { name: "DynamoDB", slug: "amazondynamodb", color: "4053D6" },
      { name: "SQLAlchemy", slug: "sqlalchemy", color: "D71F00" },
    ],
  },
  {
    title: "Cloud AWS",
    items: [
      { name: "AWS", slug: "amazonwebservices", color: "FF9900" },
      { name: "S3", slug: "amazons3", color: "569A31" },
      { name: "Lambda", slug: "awslambda", color: "FF9900" },
      { name: "Glue", slug: "awsglue", color: "C925D1" },
      { name: "EC2", slug: "amazonec2", color: "FF9900" },
      { name: "QuickSight", slug: "amazonquicksight", color: "FAB907" },
    ],
  },
  {
    title: "Langages",
    items: [
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "SQL", slug: "mysql", color: "4479A1" },
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
    ],
  },
  {
    title: "Backend / API",
    items: [
      { name: "FastAPI", slug: "fastapi", color: "009688" },
      { name: "Flask", slug: "flask", color: "E5E7EB" },
      { name: "REST API", slug: "openapiinitiative", color: "6BA539" },
      { name: "JWT", slug: "jsonwebtokens", color: "D63AFF" },
    ],
  },
  {
    title: "Data Engineering",
    items: [
      { name: "Apache Spark", slug: "apachespark", color: "E25A1C" },
      { name: "Databricks", slug: "databricks", color: "FF3621" },
      { name: "Apache Airflow", slug: "apacheairflow", color: "017CEE" },
      { name: "Power BI", slug: "powerbi", color: "F2C811" },
      { name: "QGIS", slug: "qgis", color: "589632" },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Git", slug: "git", color: "F05032" },
      { name: "GitHub", slug: "github", color: "E5E7EB" },
      { name: "Docker", slug: "docker", color: "2496ED" },
      { name: "Nginx", slug: "nginx", color: "009639" },
      { name: "Linux", slug: "linux", color: "FCC624" },
    ],
  },
];

const certifications = [
  "AWS Academy Graduate – Data Engineering",
  "Devenir un expert Power BI (Udemy)",
];

const softSkills = ["Capacité d'écoute", "Esprit d'analyse", "Autonomie", "Savoir être"];

const SkillLogo = ({ item }: { item: SkillItem }) => {
  const color = item.color ?? "14B8A6";
  const src = `https://cdn.simpleicons.org/${item.slug}/${color}`;
  return (
    <div className="group/logo flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary/40 border border-border hover:border-primary/40 hover:bg-secondary/70 transition-all duration-300 hover:-translate-y-0.5">
      <img
        src={src}
        alt={item.name}
        loading="lazy"
        className="w-8 h-8 object-contain transition-transform duration-300 group-hover/logo:scale-110"
        onError={(e) => {
          // Fallback : hide broken icon and show initials
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <span className="text-[10px] font-mono text-muted-foreground text-center leading-tight">
        {item.name}
      </span>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-primary text-sm">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Compétences</h2>
          <div className="flex-1 h-px bg-border ml-4" />
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
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                {group.items.map((item, j) => (
                  <SkillLogo key={j} item={item} />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Certifications & Soft skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatedSection className="card-gradient rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-foreground">Certifications</h3>
            </div>
            <ul className="space-y-2">
              {certifications.map((c, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5">◆</span>
                  {c}
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
