
import React, { useState, useEffect } from "react";
import SkillTag from "./SkillTag";

interface SkillCategory {
  title: string;
  skills: string[];
}
const skillCategories: SkillCategory[] = [
  {
    title: "Product",
    skills: [
      "Product Management",
      "Roadmap Planning",
      "Backlog Management",
      "Discovery",
      "Delivery",
      "Design Thinking",
      "OKRs",
      "KPIs",
      "Data-Driven Decisions",
      "Team Leadership",
      "Scrum",
      "Kanban",
      "Lean Inception",
      "Projects Management (PMBOK)"
    ]
  },
  {
    title: "Development",
    skills: [
      "Java",
      "Spring Boot",
      "Kotlin",
      "React",
      "Next.js",
      "JS/TS",
      "PL/SQL",
      "PostgrSQL",
      "MySQL",
      "Oracle",
      "Angular (basic)",
      "Python (basic)",
      "MongoDB (basic)",
      "C# (basic)"
    ]
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Postman",
      "IntelliJ",
      "VS Code",
      "Android Studio",
      "Figma",
      "Jira",
      "Confluence",
      "BPMN",
      "Bizagi",
      "Miro"
    ]
  },
  {
    title: "Others",
    skills: [
      "APIs (REST)",
      "ERPs",
      "Artificial Intelligence",
      "LLMs",
      "AgTech (Agribusiness)",
      "B2B Systems"
    ]
  }
];


const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>(skillCategories[0].title);
  const [isVisible, setIsVisible] = useState(false);

  // Set up intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className={`max-w-3xl mx-auto mb-12 text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Hard Skills</h2>
          <p className="text-foreground/70 mb-8">
            The technologies and methodologies I work with to deliver successful products
          </p>

          {/* Skill category tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {skillCategories.map((category) => (
              <button
                key={category.title}
                className={`px-4 py-2 text-sm rounded-md transition-all duration-200 ${activeTab === category.title
                  ? "bg-primary text-primary-foreground scale-105"
                  : "bg-secondary text-foreground/70 hover:text-foreground hover:scale-105"
                  }`}
                onClick={() => setActiveTab(category.title)}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className={`bg-card rounded-xl shadow-xl p-6 border border-border backdrop-blur-sm relative overflow-hidden transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                      isVisible={isVisible}
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
