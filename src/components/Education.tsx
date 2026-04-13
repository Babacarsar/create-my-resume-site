import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "MSc Expert Ingénierie des Données",
    school: "EPSI",
    location: "Courbevoie, Paris",
    period: "2024 – 2026",
  },
  {
    degree: "Licence Génie Logiciel",
    school: "Unipro",
    location: "Dakar",
    period: "2020 – 2023",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-primary text-sm">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Formation</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {education.map((edu, i) => (
            <div key={i} className="card-gradient rounded-xl p-6 border border-border hover:border-accent/30 hover:glow-accent transition-all duration-500 group">
              <GraduationCap className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold text-foreground mb-1">{edu.degree}</h3>
              <p className="text-primary font-mono text-sm mb-2">{edu.school} · {edu.location}</p>
              <span className="flex items-center gap-2 text-muted-foreground text-xs font-mono">
                <Calendar className="w-3 h-3" />
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
