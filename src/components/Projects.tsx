
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const currentYear = new Date().getFullYear();

export const devProjects = [
  {
    id: 9,
    title: "Text to SQL - NLP",
    copyright: `© ${currentYear} TIAGO CENCI`,
    description: "A project developed for an academic paper, focused on scientifically analyzing natural language interfaces for generating SQL queries in different DBMS, testing pre-trained models like GPT",
    tags: ["React", "Python", "Flask", "GPT-4o", "Gemini 2.0-flash"],
    image: "https://i.imgur.com/z9WCoV6.png",
    isUXProject: false,
    longDescription: `
      This research project explores the capabilities of Natural Language Processing (NLP) in converting human language into SQL queries.
      The study scientifically compares pre-trained models including GPT-4o and Gemini 2.0-flash regarding accuracy, response time, and query complexity.
      Testing was done across different database management systems to evaluate performance and adaptability.
      Results demonstrate significant advancements, indicating that NLP can make database querying more accessible to non-technical users.
    `,
    images: [
      { url: "https://i.imgur.com/UjU4BzO.jpeg", caption: "Inside system using AI to generate a graphic with database data" },
      { url: "https://i.imgur.com/qQ21Iz7.jpeg", caption: "Requesting AI to register a product using a picture" },
      { url: "https://i.imgur.com/aV7RM4W.png", caption: "Notion Gantt chart managing project tasks and delivery forecasts" },
      { url: "https://i.imgur.com/M85HeBE.png", caption: "Detailed view of team members' tasks and dependencies" }
    ],
    buttons: [
      { label: "Notion", href: "https://glossy-glazer-25a.notion.site/185151a886bd8037a63cdbb68b665e87?v=185151a886bd80e4948a000cb33f0c03&pvs=74" }
    ]
  },
  {
    id: 9,
    title: "This Portfolio",
    copyright: `© ${currentYear} TIAGO CENCI`,
    description: "A project developed for an academic paper, focused on scientifically analyzing natural language interfaces for generating SQL queries in different DBMS, testing pre-trained models like GPT",
    tags: ["React", "Python", "Flask", "GPT-4o", "Gemini 2.0-flash"],
    image: "https://i.imgur.com/z9WCoV6.png",
    isUXProject: false,
    longDescription: `
      This research project explores the capabilities of Natural Language Processing (NLP) in converting human language into SQL queries.
      The study scientifically compares pre-trained models including GPT-4o and Gemini 2.0-flash regarding accuracy, response time, and query complexity.
      Testing was done across different database management systems to evaluate performance and adaptability.
      Results demonstrate significant advancements, indicating that NLP can make database querying more accessible to non-technical users.
    `,
    images: [
      { url: "https://i.imgur.com/UjU4BzO.jpeg", caption: "Inside system using AI to generate a graphic with database data" },
      { url: "https://i.imgur.com/qQ21Iz7.jpeg", caption: "Requesting AI to register a product using a picture" },
      { url: "https://i.imgur.com/aV7RM4W.png", caption: "Notion Gantt chart managing project tasks and delivery forecasts" },
      { url: "https://i.imgur.com/M85HeBE.png", caption: "Detailed view of team members' tasks and dependencies" }
    ],
    buttons: [
      { label: "Notion", href: "https://glossy-glazer-25a.notion.site/185151a886bd8037a63cdbb68b665e87?v=185151a886bd80e4948a000cb33f0c03&pvs=74" }
    ]
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
    copyright: `© ${currentYear} VIASOFT`,
    longDescription: `
      In February 2025, I led a one-month project to integrate generative AI into an ERP system for agribusiness.
      The goal was to boost product visibility and lead generation through national media exposure.
      I acted as both Product Manager and Product Owner, coordinating a cross-functional team of over 20 professionals.
      Managed full project lifecycle: discovery, research, delivery, using Notion for Gantt timelines, Jira for backlog (RICE, user stories, diagrams), and BPMN for business flows.
      Supported UX/UI design and A/B testing efforts.
      Delivered an AI assistant capable of analyzing ERP data, generating reports, automating tasks, and interacting via voice and image inputs powered by OpenAI agents.
      The solution impressed leadership and will be featured on Globo Rural and major industry events.
    `,
    images: [
      { url: "https://i.imgur.com/UjU4BzO.jpeg", caption: "Inside system using AI to generate a graphic with database data" },
      { url: "https://i.imgur.com/qQ21Iz7.jpeg", caption: "Requesting AI to register a product using a picture" },
      { url: "https://i.imgur.com/aV7RM4W.png", caption: "Notion Gantt chart managing project tasks and delivery forecasts" },
      { url: "https://i.imgur.com/M85HeBE.png", caption: "Detailed view of team members' tasks and dependencies" }
    ],
    buttons: [
      { label: "Notion", href: "https://glossy-glazer-25a.notion.site/185151a886bd8037a63cdbb68b665e87?v=185151a886bd80e4948a000cb33f0c03&pvs=74" }
    ]
  },
  {
    "id": 2,
    "title": "LavandCenter - Laundry Management System",
    "description": "Case study covering Discovery, Requirement Gathering, UX/UI Design, and Documentation for a real voluntary project with an NGO to optimize laundry operations.",
    "tags": ["UX/UI Design", "Product Discovery", "Lean", "Design Thinking"],
    "image": "https://i.imgur.com/dTtOwgq.png",
    "isUXProject": true,
    "copyright": "© 2025 TIAGO CENCI",
    "longDescription": `
    In 2024, my university colleagues and I performed the discovery and delivery of a laundry management system developed voluntarily for GAMA, an NGO in Pato Branco (PR), Brazil.  

    LavandCenter is a fictional case study based on that real project, created to improve and simulate a full product discovery, requirement gathering, prototyping, and documentation process as it would be done in a professional environment.  

    The original project and its documentation are available for reference. This case study reflects my growth in product management and UX design by applying Lean and Design Thinking methodologies to solve real-world problems with a digital solution.  

  `,
    "images": [
      {
        "url": "https://i.imgur.com/LxsaALF.png",
        "caption": "User Journey Map highlighting user emotions and key opportunities"
      },
      {
        "url": "https://i.imgur.com/YFz8G6e.png",
        "caption": "UX/UI design of the app’s main routine screen"
      },
      {
        "url": "https://i.imgur.com/cgu9Qbm.png",
        "caption": "Original's project desktop design"
      },
      {
        "url": "https://i.imgur.com/aLYi721.png",
        "caption": "Layout of the generated orders report in PDF  "
      }
    ],
    "buttons": [
      { "label": "View full Case Study (Figma)", "href": "https://www.figma.com/design/qI5yaniJlCxdogGsEawxng/TiagoCenci_LavandCenter?node-id=24-2&t=9LqdLf5QqV2QAFFd-1" },
      { "label": "See original's project design (Figma)", "href": "https://www.figma.com/design/ymve1oMf2a2QiJzxjAyVkD/GAMA?node-id=1-3&t=4YevgOVsjOCMYTZB-1" },
      { "label": "Check the original's project PRD (Drive)", "href": "https://drive.google.com/drive/u/0/folders/1qpubOT2OM1IBRiSyHuszD_5BwjDi-L4T" }
    ]
  },
  {
    id: 3,
    "title": "Activity Management App for Law Firms",
    "description": "A fictional case study showcasing end-to-end product ownership: from discovery to launch, including MVP definition, prioritization, tech specs, and performance monitoring.",
    "tags": ["Backlog Management", "Product Vision", "PRD", "ERD"],
    "image": "https://i.imgur.com/4KwHz7b.png",
    "isUXProject": true,
    "copyright": "© 2025 TIAGO CENCI",
    "longDescription": `
    This fictional case study simulates my role as a Product Owner developing a task management feature for small and mid-sized law firms. It highlights my full-stack product skills—from understanding user needs to validating business impact.

    I began by identifying key personas (lawyers, interns, and managers) and used interviews, empathy maps, and shadowing to uncover pain points such as deadline risks and fragmented workflows.

    Quantitative and qualitative data (e.g., NPS, Likert surveys, log analysis, and benchmarking against tools like Astrea) guided the formation of hypotheses and MVP scope.

    I used tools like journey maps, use case diagrams, and RICE scoring to prioritize the backlog. I also create tech specs (requirements and ERD), and low/mid-fidelity prototypes in Figma.

    The MVP included features like deadline notifications, agenda views, and task-process linking. Success metrics were tracked through simulated analytics dashboards (e.g., Mixpanel) and qualitative feedback.

    Requirements were documented using user stories, activity diagrams, acceptance criteria in Gherkin, ERDs, and API specs. This case reflects how I apply product thinking, structure discovery, and drive agile delivery with a real-world mindset—even in a fictional setup.
    `,
    "images": [
      {
        "url": "https://i.imgur.com/2YQuVDD.png",
        "caption": "SWOT analysis of a competing product for benchmarking"
      },
      {
        "url": "https://i.imgur.com/sJhwXVk.png",
        "caption": "Stakeholder map to assess engagement and influence levels"
      },
      {
        "url": "https://i.imgur.com/Hy3MMmq.png",
        "caption": "Activity diagram for task management"
      },
      {
        "url": "https://i.imgur.com/XUsDAue.png",
        "caption": "Use case diagram of the system"
      },
      {
        "url": "https://i.imgur.com/i4yIlza.png",
        "caption": "Wireframe for activity registration"
      }
    ],
    "buttons": [
      { "label": "View full Case Study (Docs)", "href": "https://docs.google.com/document/d/12O9egtmDoWwFDFQEq0McO1JP3yt1GIpVVHbheNb6wlU/edit?usp=sharing" },
    ]
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
              copyright={project.copyright}
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
