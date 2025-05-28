
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

//  project data
export const devProjects = [
  {
    id: 9,
    title: "Text to SQL - NLP",
    description: "A project developed for an academic paper, focused on scientifically analyzing natural language interfaces for generating SQL queries in different DBMS, testing pre-trained models like GPT",
    tags: ["React", "Python", "Flask", "GPT-4o", "Gemini 2.0-flash"],
    image: "https://i.imgur.com/z9WCoV6.png",
    isUXProject: false,
    longDescription: "This research project explores the capabilities of Natural Language Processing (NLP) in converting human language into SQL queries. By analyzing various pre-trained models including GPT-4o and Gemini 2.0-flash, the study compares accuracy, response time, and query complexity across different database management systems. The results demonstrate significant advancements in NLP interfaces for database interaction, potentially making database querying more accessible to non-technical users."
  }
];

export const uxProjects = [
  {
    id: 1,
    title: "Filt - AI Integration in Agribusiness ERP",
    description: "Led the design, discovery, and delivery of an AI-powered assistant in a niche ERP for agribusiness. Delivered in 1 month with a cross-functional team of 20+ professionals.",
    tags: ["Product Management", "Project Management", "UX research", "AI"],
    image: "https://i.imgur.com/O8GkicE.jpeg",
    isUXProject: true,
    longDescription: `
    In February 2025, I led a one-month project to integrate generative AI into an ERP system for agribusiness, aiming to boost product visibility and lead generation through national media. Acting as both Product Manager and Product Owner, I coordinated a cross-functional team of over 20 professionals. I managed the entire cycle—from discovery and research to delivery—using tools like Notion for Gantt timelines, Jira for backlog and documentation (RICE, user stories, diagrams), and BPMN for business flows. I also supported UX/UI efforts and A/B testing. The result was an AI assistant capable of analyzing ERP data, generating reports, automating tasks, and interacting with the system via voice and image input, powered by OpenAI agents. The solution impressed company leadership and is set to be featured on Globo Rural and in major industry events.
    `,
    images: [
      { url: "https://i.imgur.com/UjU4BzO.jpeg", caption: "Inside system using AI to generate a graphic with database data:" },
      { url: "https://i.imgur.com/qQ21Iz7.jpeg", caption: "Asking for AI to register a product with a picture of it:" },
      { url: "https://i.imgur.com/aV7RM4W.png", caption: "Notion Gantt to manage project tasks, forecasting the delivery:" },
      { url: "https://i.imgur.com/M85HeBE.png", caption: "Detailled vision of each teammate task, managing dependecies:" }
    ],
    buttons: [
      { label: "Notion", href: "https://glossy-glazer-25a.notion.site/185151a886bd8037a63cdbb68b665e87?v=185151a886bd80e4948a000cb33f0c03&pvs=74" },
    ],
  },
  {
    id: 2,
    title: "LavandCenter",
    description: "Based on a real project, made on voluntary work ",
    tags: ["Product Discovery", "UX Design", "PRD", "Product Delivery"],
    image: "https://i.imgur.com/dTtOwgq.png",
    isUXProject: true,
    longDescription: `
    In February 2025, I led a one-month project to integrate generative AI into an ERP system for agribusiness, aiming to boost product visibility and lead generation through national media. Acting as both Product Manager and Product Owner, I coordinated a cross-functional team of over 20 professionals. I managed the entire cycle—from discovery and research to delivery—using tools like Notion for Gantt timelines, Jira for backlog and documentation (RICE, user stories, diagrams), and BPMN for business flows. I also supported UX/UI efforts and A/B testing. The result was an AI assistant capable of analyzing ERP data, generating reports, automating tasks, and interacting with the system via voice and image input, powered by OpenAI agents. The solution impressed company leadership and is set to be featured on Globo Rural and in major industry events.
    `,
    images: [
      { url: "https://i.imgur.com/UjU4BzO.jpeg", caption: "Inside system using AI to generate a graphic with database data:" },
      { url: "https://i.imgur.com/qQ21Iz7.jpeg", caption: "Asking for AI to register a product with a picture of it:" },
      { url: "https://i.imgur.com/aV7RM4W.png", caption: "Notion Gantt to manage project tasks, forecasting the delivery:" },
      { url: "https://i.imgur.com/M85HeBE.png", caption: "Detailled vision of each teammate task, managing dependecies:" }
    ],
    buttons: [
      { label: "Study Case", href: "https://www.figma.com/design/qI5yaniJlCxdogGsEawxng/TiagoCenci_LavandCenter?node-id=24-2&t=N787Wj9GphqlsfQo-1" },
      { label: "Oficial docs", href: "https://drive.google.com/drive/folders/1Z6AbnBrGAjf9EmMJwHev1SSG6J_i61YK?usp=sharing" },
    ],
  },
  {
    id: 3,
    title: "GAMA",
    description: "Based on a real project, made on voluntary work ",
    tags: ["User Research", "Information Architecture", "Visual Design"],
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&w=1000&q=80",
    isUXProject: true,
  },
  {
    id: 4,
    title: "Activity Management App for Law Firms",
    description: "A fictional case study to demonstrate my knowledge of product discovery, MVP definition, backlog prioritization, technical specification, launch, and monitoring.",
    tags: ["Discovery", "Wireframing", "Delivery", "Management"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&w=1000&q=80",
    isUXProject: true,
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'dev' | 'ux'>('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(false);

  // Get projects based on filter
  const getFilteredProjects = () => {
    switch (activeFilter) {
      case 'ux':
        return uxProjects;
      case 'dev':
        return devProjects;
      default:
        return [...uxProjects, ...devProjects];
    }
  };

  // Handle opening project details modal
  const handleOpenProjectDetails = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Set up intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleItems(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
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
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6 relative z-10">
        <div className={`max-w-3xl mx-auto mb-12 text-center transition-all duration-700 transform ${visibleItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
              id={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              index={index}
              isUXProject={project.isUXProject}
              onViewDetails={() => handleOpenProjectDetails(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-full max-w-[90vw] max-h-[90vh] overflow-auto p-4">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedProject.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto rounded-md mb-4 object-cover"
                />

                <div className="space-y-4">
                  <p className="text-foreground/90">{selectedProject.longDescription}</p>


                  <div className="flex gap-4 mt-6">
                    {selectedProject.demoLink && (
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium text-sm transition-colors hover:bg-primary/90"
                      >
                        Live Demo
                      </a>
                    )}

                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-secondary text-foreground rounded-md font-medium text-sm transition-colors hover:bg-secondary/80"
                    >
                      {selectedProject.isUXProject ? "Case Study" : "GitHub"}
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
