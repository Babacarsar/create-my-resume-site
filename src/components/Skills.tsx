import { Database, Cloud, Code, BarChart3, Server, GitBranch, Users, Award, Globe } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface SkillGroup {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  { icon: <Database className="w-5 h-5" />, title: "Bases de données", items: ["PostgreSQL", "SQL Server", "MySQL", "DynamoDB (NoSQL)", "SQLAlchemy"] },
  { icon: <Cloud className="w-5 h-5" />, title: "Cloud AWS", items: ["DynamoDB", "S3", "Lambda", "Athena", "QuickSight", "EC2", "Glue"] },
  { icon: <Code className="w-5 h-5" />, title: "Langages", items: ["Python", "SQL", "JavaScript"] },
  { icon: <Server className="w-5 h-5" />, title: "Backend / API", items: ["FastAPI", "Flask", "REST API", "JWT"] },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Data Engineering", items: ["ETL", "Pipelines", "Data Quality", "Spark MLlib", "Databricks"] },
  { icon: <GitBranch className="w-5 h-5" />, title: "DevOps", items: ["Git", "Nginx", "CI/CD", "VPS", "systemd"] },
];

const certifications = [
  "AWS Academy Graduate – Data Engineering",
  "Devenir un expert Power BI (Udemy)",
];

const softSkills = ["Capacité d'écoute", "Esprit d'analyse", "Autonomie", "Savoir être"];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-primary text-sm">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Compétences</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>

        {/* Technical skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={i} delay={i * 0.08} className="card-gradient rounded-xl p-6 border border-border hover:border-primary/30 hover:glow-primary transition-all duration-500 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary">{group.icon}</div>
                <h3 className="font-semibold text-foreground">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <span key={j} className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-mono border border-border">
                    {item}
                  </span>
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
                <span key={i} className="px-3 py-1.5 rounded-md bg-accent/10 text-accent text-xs font-mono border border-accent/20">
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
