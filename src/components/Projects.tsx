import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Star } from 'lucide-react'; // Certifique-se de ter lucide-react instalado

const currentYear = new Date().getFullYear();

// Tipagem Project atualizada para os campos STAR
type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  isUXProject: boolean;
  situation?: string;
  task?: string;
  action?: string[];
  result?: string[];
  toolsValue?: string[];
  copyright?: string;
  images?: { url: string; caption: string }[];
  buttons?: { label: string; href: string }[];
};

export const devProjects: Project[] = [
  {
    id: 9,
    title: "Text to SQL with LLMs",
    copyright: `© ${currentYear} TIAGO CENCI`,
    description:
      "Bachelor’s thesis applying NLP to enable natural language SQL generation across DBMS, comparing GPT and Gemini models.",
    tags: ["React", "Python", "GPT-4o", "Gemini 2.0-flash"],
    image: "https://i.imgur.com/z9WCoV6.png",
    isUXProject: false,
    // STAR Method Fields
    situation: "Non-technical users often struggle to query databases, limiting access to business insights and increasing reliance on technical teams.",
    task: "To design and develop an NLP-driven system capable of converting natural language queries into SQL, and to evaluate the performance of GPT-4o and Gemini 2.0-flash models across various DBMS (PostgreSQL, MySQL, Oracle).",
    action: [
      "• Led the full-stack development of a web application using Flask for the backend and React for the frontend, integrating with LLM APIs.",
      "• Designed and executed a comprehensive benchmarking strategy, testing over 50 unique query types to assess accuracy, latency, and adaptability across different database systems.",
      "• Implemented context caching mechanisms to optimize response times and reduce API call overhead."
    ],
    result: [
      "• Successfully demonstrated the feasibility of enabling internal BI teams to query data independently, without requiring SQL knowledge, thereby empowering data-driven decision-making.",
      "• Analyze the query accuracy with GPT-4o and Gemini 2.0-flash, demonstrating high reliability for diverse query types."
    ],
    toolsValue: [
      "• Flask provided a lightweight and efficient backend framework for API integration.",
      "• React facilitated rapid prototyping and a responsive user interface.",
      "• Notion and Gantt charts were crucial for tracking academic and technical milestones, ensuring project alignment and timely delivery."
    ],
    images: [
      { url: "https://i.imgur.com/UjU4BzO.jpeg", caption: "AI generating a graphic with DB data" },
      { url: "https://i.imgur.com/qQ21Iz7.jpeg", caption: "Requesting product registration via image" },
      { url: "https://i.imgur.com/aV7RM4W.png", caption: "Project management using Notion Gantt" },
      { url: "https://i.imgur.com/M85HeBE.png", caption: "Team tasks view" }
    ],
    buttons: [
      { label: "Bachelor's thesis", href: "https://riut.utfpr.edu.br/jspui/handle/1/34422" },
      { label: "Frontend Project (GitHub )", href: "https://github.com/tiago-cenci/AI-text-to-sql-Frontend" }
    ]
  },
  {
    id: 10,
    title: "This Portfolio",
    copyright: `© ${currentYear} TIAGO CENCI`,
    description: "Scalable, open-source portfolio to showcase product and UX projects.",
    tags: ["React", "Typescript", "Vercel", "Git"],
    image: "https://i.imgur.com/UfqMT6K.png",
    isUXProject: false,
    // STAR Method Fields
    situation: "I needed a robust and visually appealing platform to effectively communicate my diverse experience in product and to present detailed case studies.",
    task: "To design and develop a responsive, high-performance portfolio website that clearly showcases my projects, skills, and professional journey, ensuring easy maintenance and future scalability.",
    action: [
      "• Designed a clean, intuitive user interface focusing on content clarity and user engagement.",
      "• Developed the site using React and TypeScript, implementing a modular component structure for reusability and maintainability.",
      "• Prioritized accessibility (WCAG guidelines ) and ensured full mobile responsiveness across various devices.",
    ],
    result: [
      "• Observed that approximately 70% of visitors browse more than one project, indicating effective content engagement.",
      "• Created a highly maintainable and easily expandable platform, allowing for seamless addition of new projects and updates."
    ],
    toolsValue: [
      "React enabled efficient component reuse and a dynamic user interface.",
      "TypeScript significantly improved code quality, maintainability, and reduced runtime errors.",
      "GitHub Actions provided robust CI/CD, automating deployment and ensuring code integrity."
    ],
    images: [
      { url: "https://i.imgur.com/UfqMT6K.png", caption: "The main page" }
    ],
    buttons: [
      { label: "GitHub", href: "https://github.com/tiago-cenci/tiago-cenci-portfolio" }
    ]
  }
];

export const uxProjects: Project[] = [
  {
    id: 1,
    title: "AI Integration in Agribusiness ERP",
    description:
      "Led the design, discovery, and delivery of an AI-powered assistant in a ERP for agribusiness. Delivered in 1 month with a cross-functional team of 20+ professionals.",
    tags: ["Product Management", "Project Management", "UX research", "AI"],
    image: "https://i.imgur.com/O8GkicE.jpeg",
    isUXProject: true,
    copyright: `© ${currentYear} VIASOFT`,
    // STAR Method Fields
    situation: "The executive team requested an AI-focused initiative to improve user interaction and lead acquisition in a growing product.",
    task: "Lead the entire product team in a fast-paced discovery and delivery of an AI-powered solution integrated into the ERP system — enabling multimodal input (voice, image, text) for dynamic report generation and automation of manual tasks — all within a one-month deadline and with a cross-functional team of 20+ professionals.",
    action: [
      "• Mapped user personas and detailed user flows using Notion and BPMN to ensure a clear understanding of user needs and system interactions during the Discovery.",
      "• Coordinated the product backlog in Jira, utilizing RICE prioritization to focus on high-impact features.",
      "• Collaborated closely with UX/UI designers on Figma to create and A/B test mockups, iterating based on user feedback.",
      "• Conducted a rapid Proof of Concept (PoC) to embed generative AI using OpenAI’s agents, demonstrating feasibility and value."
    ],
    result: [
      "• Successfully delivered the AI-powered assistant within the aggressive 4-week deadline, involving over 20 stakeholders across departments.",
      "• The new product feature garnered national press coverage (Globo Rural), significantly enhancing the company's market visibility and innovation reputation.",
      "• The positive impact and strategic value led leadership to prioritize the integration of similar AI features across other company products, validating the initial investment and approach."
    ],
    toolsValue: [
      "OpenAI agents enabled natural language task execution, providing a powerful and flexible AI backend.",
      "BPMN and Figma were instrumental in ensuring clear communication and alignment across design, development, and business teams.",
      "Notion was used effectively for timeline management and tracking delivery milestones, keeping the project on schedule."
    ],
    images: [
      { url: "https://i.imgur.com/UjU4BzO.jpeg", caption: "AI generating a graphic with DB data" },
      { url: "https://i.imgur.com/qQ21Iz7.jpeg", caption: "Requesting product registration via image" },
      { url: "https://i.imgur.com/aV7RM4W.png", caption: "Project management using Notion Gantt" },
      { url: "https://i.imgur.com/M85HeBE.png", caption: "Team tasks view" }
    ],
    buttons: [
      { label: "Notion", href: "https://glossy-glazer-25a.notion.site/185151a886bd8037a63cdbb68b665e87?v=185151a886bd80e4948a000cb33f0c03&pvs=74" }
    ]
  },
  {
    id: 2,
    title: "LavandCenter - Laundry Management System",
    description:
      "Case study covering Discovery, Requirement Gathering, UX/UI Design, and Documentation for a real voluntary project with an NGO to optimize laundry operations.",
    tags: ["UX/UI Design", "Product Discovery", "Design Thinking", "Lean"],
    image: "https://i.imgur.com/dTtOwgq.png",
    isUXProject: true,
    copyright: "© 2025 TIAGO CENCI",
    // STAR Method Fields
    situation: "A local NGO's laundry operations were highly inefficient, relying on manual, paper-based processes that caused significant service delays and operational bottlenecks.",
    task: "To conduct an end-to-end product discovery and design process for a digital laundry management system, simulating a real business case using Design Thinking and Lean methodologies, to optimize operations and improve service delivery.",
    action: [
      "• Conducted in-depth user research, including interviews and observations, to identify key pain points and user needs.",
      "• Developed empathy maps and user journey maps to visualize the current state and identify opportunities for improvement.",
      "• Created wireframes and UI flows, progressing from low-fidelity sketches to mid-fidelity prototypes, for iterative feedback.",
      "• Documented comprehensive product requirements (PRD) and detailed use cases to guide development.",
      "• Facilitated workshops with stakeholders to align on project goals and validate design decisions."
    ],
    result: [
      "• Produced a comprehensive design and documentation package ready for development, demonstrating a clear path to operational efficiency and enhanced service quality for the NGO.",
      "• Improved staff clarity and reduced errors by providing intuitive visual guides and a clean, user-friendly interface.",
    ],
    toolsValue: [
      "Figma was essential for rapid prototyping and validating UI concepts with stakeholders.",
      "PRD and documentation templates ensured traceability and clear communication of requirements.",
      "Lean Canvas facilitated early alignment with stakeholders on key business aspects and value proposition."
    ],
    images: [
      { url: "https://i.imgur.com/LxsaALF.png", caption: "User Journey Map" },
      { url: "https://i.imgur.com/YFz8G6e.png", caption: "App routine screen" },
      { url: "https://i.imgur.com/cgu9Qbm.png", caption: "Original desktop design" },
      { url: "https://i.imgur.com/aLYi721.png", caption: "Generated PDF report" }
    ],
    buttons: [
      { label: "View full Case Study (Figma )", href: "https://www.figma.com/design/qI5yaniJlCxdogGsEawxng/TiagoCenci_LavandCenter?node-id=24-2&t=9LqdLf5QqV2QAFFd-1" },
      { label: "See original's project design (Figma )", href: "https://www.figma.com/design/ymve1oMf2a2QiJzxjAyVkD/GAMA?node-id=1-3&t=4YevgOVsjOCMYTZB-1" },
      { label: "Check the original's project PRD (Drive )", href: "https://drive.google.com/drive/u/0/folders/1qpubOT2OM1IBRiSyHuszD_5BwjDi-L4T" }
    ]
  },
  {
    id: 3,
    title: "Activity Management App for Law Firms",
    description:
      "Fictional case study showcasing end-to-end product ownership: from discovery to launch, including MVP definition, prioritization, tech specs, and performance monitoring.",
    tags: ["Backlog Management", "Product Vision", "PRD", "ERD"],
    image: "https://i.imgur.com/4KwHz7b.png",
    isUXProject: true,
    copyright: "© 2025 TIAGO CENCI",
    // STAR Method Fields
    situation: "Law firms lacked structured digital workflows for tracking activities and managing critical legal deadlines, leading to potential missed deadlines and operational inefficiencies.",
    task: "To simulate an end-to-end product ownership process, from initial discovery to defining technical specifications and monitoring performance, for an activity management application tailored for law firms, including MVP definition and prioritization.",
    action: [
      "• Conducted simulated discovery interviews and competitive benchmarking (SWOT analysis) to define the core problem and market opportunity.",
      "• Mapped detailed user journeys and use cases to understand user interactions and system requirements.",
      "• Created a prioritized product backlog using RICE scoring to define the Minimum Viable Product (MVP).",
      "• Developed mockups and Entity-Relationship Diagrams (ERDs) to visualize the application's structure and data model.",
      "• Defined API specifications and wrote Gherkin-based acceptance criteria for all key features, ensuring clear communication with development teams."
    ],
    result: [
      "• Produced a comprehensive product documentation package (PRD, ERDs, API specs) that provided a clear blueprint for development.",
      "• Designed a system that, hypothetically, could improve task scheduling and reduce missed deadlines by 30% through structured digital workflows.",
      "• Enhanced stakeholder clarity and alignment through the use of visual artifacts and detailed specifications, facilitating a shared understanding of the product vision."
    ],
    toolsValue: [
      "Figma and Lucidchart were instrumental in visualizing user flows, wireframes, and system architecture.",
      "Google Docs provided a centralized and traceable repository for all product specifications and documentation.",
      "Simulated analytics dashboards (Mixpanel-type) were used to define key performance indicators and track hypothetical product success."
    ],
    images: [
      { url: "https://i.imgur.com/2YQuVDD.png", caption: "SWOT benchmark" },
      { url: "https://i.imgur.com/sJhwXVk.png", caption: "Stakeholder map" },
      { url: "https://i.imgur.com/Hy3MMmq.png", caption: "Activity diagram" },
      { url: "https://i.imgur.com/XUsDAue.png", caption: "Use case diagram" },
      { url: "https://i.imgur.com/i4yIlza.png", caption: "Wireframe" }
    ],
    buttons: [
      { label: "View full Case Study (Docs )", href: "https://docs.google.com/document/d/12O9egtmDoWwFDFQEq0McO1JP3yt1GIpVVHbheNb6wlU/edit?usp=sharing" }
    ]
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'dev' | 'ux'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(false);

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

  const handleOpenProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredProjects().map((project, index) => (
            <ProjectCard
              key={project.id}
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

      {/* Project Details Modal (Ajustado para STAR) */}
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

                <div className="space-y-4 text-base text-foreground/70">
                  <p className="text-foreground/90">{selectedProject.description}</p>

                  <h3 className="text-2xl md:text-3xl font-bold gradient-text mt-8 mb-4 text-center">Project Breakdown: The STAR Method</h3>

                  {selectedProject.situation && (
                    <div className="bg-secondary/30 p-4 rounded-lg shadow-md border border-secondary/50">
                      <p className="font-semibold text-lg flex items-center gap-2 mb-1">
                        <Star className="w-5 h-5 text-primary" /> Situation:
                      </p>
                      <p className="text-base leading-relaxed">{selectedProject.situation}</p>
                    </div>
                  )}

                  {selectedProject.task && (
                    <div className="bg-secondary/30 p-4 rounded-lg shadow-md border border-secondary/50">
                      <p className="font-semibold text-lg flex items-center gap-2 mb-1">
                        <Star className="w-5 h-5 text-primary" /> Task:
                      </p>
                      <p className="text-base leading-relaxed">{selectedProject.task}</p>
                    </div>
                  )}

                  {selectedProject.action && selectedProject.action.length > 0 && (
                    <div className="bg-secondary/30 p-4 rounded-lg shadow-md border border-secondary/50">
                      <p className="font-semibold text-lg flex items-center gap-2 mb-1">
                        <Star className="w-5 h-5 text-primary" /> Action:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-base leading-relaxed">
                        {selectedProject.action.map((item, idx) => <li key={idx}>{item}</li>)}
                      </ul>
                    </div>
                  )}

                  {selectedProject.result && selectedProject.result.length > 0 && (
                    <div className="bg-secondary/30 p-4 rounded-lg shadow-md border border-secondary/50">
                      <p className="font-semibold text-lg flex items-center gap-2 mb-1">
                        <Star className="w-5 h-5 text-primary" /> Result:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-base leading-relaxed">
                        {selectedProject.result.map((item, idx) => <li key={idx}>{item}</li>)}
                      </ul>
                    </div>
                  )}

                  {selectedProject.toolsValue && selectedProject.toolsValue.length > 0 && (
                    <div className="bg-secondary/30 p-4 rounded-lg shadow-md border border-secondary/50">
                      <p className="font-semibold text-lg flex items-center gap-2 mb-1">
                        Tools & Value:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-base leading-relaxed">
                        {selectedProject.toolsValue.map((item, idx) => <li key={idx}>{item}</li>)}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-4 mb-8 flex flex-wrap justify-center gap-3">
                  {selectedProject.buttons && selectedProject.buttons.length > 0 ? (
                    selectedProject.buttons.map((btn, i) => (
                      <a
                        key={i}
                        href={btn.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open link for ${btn.label}`}
                        className="px-4 py-2 bg-gradient-to-r from-purple-700 via-fuchsia-800 to-purple-700 text-white rounded-md font-medium text-sm transition-all duration-300 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:brightness-110 flex items-center gap-2"
                      >
                        {btn.label}
                      </a>
                    ))
                  ) : (
                    <p className="text-muted-foreground">No links available.</p>
                  )}
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
