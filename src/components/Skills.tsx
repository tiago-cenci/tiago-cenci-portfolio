
import React, { useState } from "react";
import SkillTag from "./SkillTag";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript", "Redux", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"]
  },
  {
    title: "Tools & Methods",
    skills: ["Git", "Docker", "CI/CD", "AWS", "Jest", "Agile", "Figma", "Adobe XD"]
  },
  {
    title: "UX/UI Design",
    skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Design Systems", "Visual Design", "Information Architecture"]
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>(skillCategories[0].title);

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-foreground/70 mb-8">
            The technologies and methodologies I work with to bring projects to life
          </p>
          
          {/* Skill category tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {skillCategories.map((category) => (
              <button
                key={category.title}
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                  activeTab === category.title
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground/70 hover:text-foreground"
                }`}
                onClick={() => setActiveTab(category.title)}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="bg-card rounded-xl shadow-xl p-6 border border-border backdrop-blur-sm relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            {skillCategories
              .filter((category) => category.title === activeTab)
              .map((category) => (
                <div key={category.title} className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {category.skills.map((skill, index) => (
                    <SkillTag 
                      key={skill} 
                      skill={skill} 
                      index={index}
                    />
                  ))}
                </div>
              ))}
          </div>
          
          {/* Background glow */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full filter blur-2xl"></div>
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-accent/5 rounded-full filter blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
