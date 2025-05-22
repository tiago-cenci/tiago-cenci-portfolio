
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

//  project data
const devProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with product catalog, user authentication, and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&w=1000&q=80",
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    isUXProject: false
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative project management tool with drag-and-drop kanban boards, task assignments, and real-time updates.",
    tags: ["React", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&w=1000&q=80",
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    isUXProject: false
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description: "Interactive data visualization dashboard for financial metrics with real-time data updates and advanced filtering.",
    tags: ["TypeScript", "D3.js", "Express"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&w=1000&q=80",
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    isUXProject: false
  }
];

const uxProjects = [
  {
    id: 4,
    title: "Healthcare App Redesign",
    description: "UX case study for redesigning patient experience in a healthcare application with focus on accessibility.",
    tags: ["UX Research", "Wireframing", "Prototyping", "Usability Testing"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&w=1000&q=80",
    githubLink: "https://behance.net",
    demoLink: null, // Adding demoLink property with null value for UX projects
    isUXProject: true
  },
  {
    id: 5,
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
