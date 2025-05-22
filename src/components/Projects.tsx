
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

//  project data
const devProjects = [
  {
    id: 3,
    title: "Text to SQL - NLP",
    description: "A project developed for an academic paper, focused on scientifically analyzing natural language interfaces for generating SQL queries in different DBMS, testing pre-trained models like GPT",
    tags: ["React", "Python", "Flask", "GPT-4o", "Gemini 2.0-flash"],
    image: "https://i.imgur.com/z9WCoV6.png",
    githubLink: "https://github.com",
    demoLink: null,
    isUXProject: false
  }
];

const uxProjects = [
  {
    id: 2,
    title: "Activity Management App for Law Firms [PTBR]",
    description: "A fictional case study to demonstrate my knowledge of product discovery, MVP definition, backlog prioritization, technical specification, launch, and monitoring.",
    tags: ["UX Research", "Wireframing", "Prototyping", "Usability Testing"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&w=1000&q=80",
    githubLink: "https://behance.net",
    demoLink: null, // Adding demoLink property with null value for UX projects
    isUXProject: true
  },
  {
    id: 1,
    title: "Smart Home Concept",
    description: "Complete design process for a smart home control app, focusing on intuitive interactions and visual hierarchy.",
    tags: ["User Research", "Information Architecture", "Visual Design"],
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&w=1000&q=80",
    githubLink: "https://behance.net",
    demoLink: null, // Adding demoLink property with null value for UX projects
    isUXProject: true
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'dev' | 'ux'>('all');

  // Get projects based on filter
  const getFilteredProjects = () => {
    switch (activeFilter) {
      case 'ux':
        return uxProjects;
      case 'dev':
        return devProjects;
      default:
        return [...devProjects, ...uxProjects];
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">My Projects</h2>
          <p className="text-foreground/70 mb-8">
            A selection of development and design case studies showcasing my skills across product, code, and UX/UI.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              className={`px-4 py-2 rounded-md transition-colors ${activeFilter === 'all'
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground/70 hover:text-foreground"
                }`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${activeFilter === 'ux'
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground/70 hover:text-foreground"
                }`}
              onClick={() => setActiveFilter('ux')}
            >
              Product & UX/UI
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${activeFilter === 'dev'
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground/70 hover:text-foreground"
                }`}
              onClick={() => setActiveFilter('dev')}
            >
              Development
            </button>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredProjects().map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              index={index}
              isUXProject={project.isUXProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
