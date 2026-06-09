import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Star } from 'lucide-react';
import StudentAppVideoImg from '../../public/aluno envio do video e ver correcoes do personal.png'
import StudentAppCorrectionImg from '../../public/app do aluno - execução do treino.png'
import PersonalDashboardImg from '../../public/dashboard do personal.png'
import PersonalCorrectionImg from '../../public/personal recebe correções avalia pela plataforma.png'
import LandingPageImg from '../../public/landing page.png'

const currentYear = new Date().getFullYear();

// Tipagem Project atualizada para os campos STAR
type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  categories: ("ux" | "dev")[];
  situation?: string;
  task?: string;
  action?: string[];
  result?: string[];
  toolsValue?: string[];
  copyright?: string;
  images?: { url: string; caption: string }[];
  buttons?: { label: string; href: string }[];
};

// ─────────────────────────────────────────────────────────────
// IDs define display order (sorted ascending in getFilteredProjects)
// 1 → PrintControl | 2 → Scan to Cloud | 3 → MUVTRAINER
// 4 → AI ERP       | 5 → Text to SQL   | 6 → Portfolio
// ─────────────────────────────────────────────────────────────

export const uxProjects: Project[] = [
  // ─── PROJECT 1 ───────────────────────────────────────────────
  {
    id: 1,
    title: "PrintControl — Enterprise Print Management Platform",
    copyright: `© ${currentYear} NDD TECH`,
    description:
      "Led product strategy and roadmap for a B2B2B SaaS platform managing 21,000+ organizations globally. Owned the modernization of a validated legacy product into a scalable, device-based subscription model with ~$24M ARR.",
    tags: ["Product Strategy", "B2B SaaS", "Platform PM", "Enterprise", "Roadmap"],
    // ⚠️ PENDENTE: Substituir pela URL de um screenshot real do PrintControl/Orbix (dashboard, tela de relatório, etc.)
    image: "https://placehold.co/800x450/1a1a2e/ffffff?text=PrintControl+%E2%80%94+NDD+Orbix",
    categories: ["ux"],
    situation:
      "NDD's legacy print management product (NDD Print 360) had validated market demand — 21,000+ organizations and ~$24M ARR — but was built on aging architecture that capped scalability, blocked modern monetization models, and prevented expansion into Managed Print Services (MPS) channels. The product lacked governance features and automation capabilities required to compete against PaperCut and uniFLOW in enterprise and government segments.",
    task:
      "Own the product strategy, roadmap, and discovery process to rebuild the product as a modern SaaS module (PrintControl) within the NDD Orbix platform — preserving validated value while introducing scalable architecture, device-based pricing, and a B2B2B distribution model (vendors → partners → end customers) across printing outsourcing providers and printer OEM channels.",
    action: [
      "• Defined product vision, positioning, and B2B2B go-to-market strategy targeting outsourcing providers and OEM partnerships (HP, Ricoh, Epson, Brother) — moving from direct sales to a partner-led distribution motion.",
      "• Established the North Star Metric (number of managed MFP devices on the platform) as the primary revenue and growth driver, aligning all squad OKRs, roadmap decisions, and pricing model around device-based monetization.",
      "• Designed the full product framework: Business Model Canvas, Value Proposition Canvas, JTBD mapping, hypothesis-experiment map, and a 3-horizon roadmap (operational improvements → automation & analytics → AI-driven optimization).",
      "• Proposed and drove company-wide adoption of a new upstream specification workflow (Product → Module → Resource → Initiative → Epic → PRD → Scope → User Stories → Acceptance Criteria) — accepted by peers, leadership, and executives, then standardized across all product teams in the business unit.",
      "• Coordinated discovery and delivery across multiple engineering squads covering networking layers, device communication protocols, cloud services, and reporting infrastructure.",
    ],
    result: [
      "• Platform operating at ~$24M ARR / ~$2M MRR with retention >90% and NPS of 62 — strong product-market fit indicators on a rebuilt foundation.",
      "• Upstream workflow redesign adopted company-wide, reducing specification ambiguity and accelerating delivery cycles across all product teams.",
      "• Dual monetization model established: per-device SaaS pricing for commercial clients + fixed-contract ARR for government and large enterprise, expanding addressable segments.",
      "• Product positioned for AI-driven optimization phase in the long-term roadmap, with module expansion and cross-sell potential across the broader Orbix ecosystem.",
    ],
    toolsValue: [
      "• Notion used as the primary PM workspace for product strategy documentation, roadmap, and stakeholder alignment artifacts.",
      "• Miro used for technical and business solution diagrams during discovery — clarifying system behavior, device communication flows, and integration architecture.",
      "• OKR + KPI framework (strategic, tactical, operational) implemented to ensure alignment between engineering execution and business outcomes.",
    ],
    images: [
      // ⚠️ PENDENTE: Adicionar screenshots reais do produto — sugestões abaixo:
      { url: "https://placehold.co/800x450/1a1a2e/ffffff?text=PENDENTE%3A+Dashboard+PrintControl", caption: "⚠️ PENDENTE: Screenshot do dashboard de gestão de dispositivos" },
      { url: "https://placehold.co/800x450/1a1a2e/ffffff?text=PENDENTE%3A+Relatório+de+uso", caption: "⚠️ PENDENTE: Tela de relatório de volume e custos de impressão" },
      { url: "https://placehold.co/800x450/1a1a2e/ffffff?text=PENDENTE%3A+Product+Framework", caption: "⚠️ PENDENTE: Foto/export do framework de produto no Notion ou Miro" },
    ],
    buttons: [
      // ⚠️ PENDENTE: Verificar se o link do Notion é público e pode ser compartilhado
      { label: "Product Framework (Notion)", href: "https://www.notion.so/33e88b305a1480148c02f0895daaa919?v=33e88b305a148108b308000cb5e0737a" },
      // ⚠️ PENDENTE: Adicionar link para a página oficial do produto se disponível
      // { label: "Official Product Page", href: "PENDENTE" },
    ],
  },

  // ─── PROJECT 2 ───────────────────────────────────────────────
  {
    id: 2,
    title: "Scan to Cloud — Discovery That Unlocked $240k+ in ARR",
    copyright: `© ${currentYear} NDD TECH`,
    description:
      "Ran end-to-end product discovery on a feature with 0.2% adoption. Redesigned the solution — directly enabling a state government contract worth $240k+ in incremental ARR.",
    tags: ["Product Discovery", "UX/UI Design", "B2B SaaS", "Government", "Revenue Impact"],
    // ⚠️ PENDENTE: Substituir pela URL de um screenshot real da solução redesenhada (UX/UI do Scan to Cloud)
    image: "https://placehold.co/800x450/1a1a2e/ffffff?text=Scan+to+Cloud+%E2%80%94+NDD+Orbix",
    categories: ["ux"],
    situation:
      "The Digitization/Scan to Cloud feature had existed in the platform for years but had only 39 active users out of 21,194 organizations — a 0.2% adoption rate. The feature was technically functional but too complex for end users to configure and operate independently. Despite low adoption, scan-to-cloud is a contractual requirement in many government and enterprise procurement processes worldwide — making it a high-value, underperforming capability.",
    task:
      "Run structured product discovery to identify the real barrier behind 0.2% adoption, then redesign and specify a simpler, scalable solution with a direct business target: unlock qualification for a state government contract requiring OneDrive-integrated scan-to-cloud functionality, representing $240k+ in incremental ARR over a contract duration of up to 4 years.",
    action: [
      "• Conducted discovery interviews with key partner organizations and market specialists to identify the root cause of low adoption — pinpointing that configuration complexity and lack of intuitive cloud connector management were the primary barriers, not feature awareness.",
      "• Redesigned the end-to-end solution in close collaboration with engineers and architects, defining a simpler UX flow, cleaner cloud integration model, and reduced setup friction.",
      "• Produced full UX/UI design, PRD, workflow diagrams, and technical specification in Miro — enabling the engineering team to move directly into development with minimal back-and-forth.",
      "• Aligned product scope and delivery timeline with the state government procurement cycle to meet contract qualification requirements.",
    ],
    result: [
      "• Redesigned solution directly enabled qualification for a state government contract worth $240k+ in incremental ARR (contract duration up to 4 years).",
      "• Projected adoption rate trajectory shifted from 0.2% toward broader deployment across new government and enterprise customer segments.",
      "• Established a repeatable discovery-to-spec process for feature rehabilitation — identifying and unlocking latent business value in underperforming platform capabilities.",
    ],
    toolsValue: [
      "• Miro used for workflow diagrams, UX flows, and technical architecture diagrams during discovery and specification phases.",
      "• PRD and product spec documentation structured to bridge business requirements (government procurement criteria) with technical implementation constraints.",
      // ⚠️ PENDENTE: Adicionar ferramenta usada para entrevistas/pesquisa de discovery se relevante (ex: Notion, planilha, gravações)
    ],
    images: [
      // ⚠️ PENDENTE: Adicionar screenshots reais — sugestões abaixo:
      { url: "https://placehold.co/800x450/1a1a2e/ffffff?text=PENDENTE%3A+UX+Flow+Redesign", caption: "⚠️ PENDENTE: Export do fluxo UX redesenhado no Miro ou Figma" },
      { url: "https://placehold.co/800x450/1a1a2e/ffffff?text=PENDENTE%3A+Before+vs+After", caption: "⚠️ PENDENTE: Comparação da solução antiga (complexa) vs nova (simplificada)" },
      { url: "https://placehold.co/800x450/1a1a2e/ffffff?text=PENDENTE%3A+PRD+or+Spec", caption: "⚠️ PENDENTE: Screenshot do PRD ou da especificação técnica no Notion" },
    ],
    buttons: [
      // ⚠️ PENDENTE: Adicionar link para o case study no Notion, PRD ou Miro se quiser tornar público
      // { label: "Product Spec (Notion)", href: "PENDENTE" },
    ],
  },

  // ─── PROJECT 3 ───────────────────────────────────────────────
  {
    id: 3,
    title: "MUVTRAINER — B2B SaaS for Online Personal Trainers",
    copyright: `© ${currentYear} TIAGO CENCI`,
    description:
      "Founder-led 0→1 product: a focused B2B SaaS platform for high-performance online personal trainers to manage clients, workouts, and video corrections — built end-to-end from discovery through architecture and active MVP development.",
    tags: ["Product Strategy", "B2B SaaS", "0→1", "Founder", "AI-assisted Dev"],
    image: LandingPageImg,
    categories: ["ux", "dev"],
    situation:
      "As an online coaching client myself, I experienced firsthand the operational chaos personal trainers work in: WhatsApp for communication, spreadsheets for workout plans, Google Drive for videos, and note apps for feedback. This patchwork holds up to ~50 students, but breaks completely when a trainer scales past R$10k/month. Existing fitness apps address generic use cases but fail at the specific high-friction workflow of professional online consulting — particularly the correction queue for exercise execution videos, which is the most time-consuming task trainers face daily.",
    task:
      "Validate whether a focused B2B SaaS could solve the operational chaos of high-revenue online personal trainers — and, as the founding PM, take the product from zero to a testable MVP, making all product, architecture, and business model decisions end-to-end without a dedicated engineering team.",
    action: [
      "• Conducted informal discovery with active online personal trainers to map the as-is workflow and isolate the highest-friction point: managing video corrections per exercise was the critical unresolved pain across all interviewed trainers.",
      "• Defined the product thesis and target segment: a platform exclusively for high-performance trainers (≥50 students, ≥R$10k/month) — not a generic fitness app or marketplace. Intentional narrowing to maximize product-market fit signal.",
      "• Built a full product case in Miro covering Problem Tree, JTBD, As-Is/To-Be journey, Opportunity Solution Tree, MVP scope with explicit trade-offs, architecture decisions, business model hypothesis, and metrics framework.",
      "• Made a key architectural decision to not store videos in the product's own infrastructure — trainers connect their Google Drive via OAuth, and the platform indexes and streams files directly from there. This reduced LGPD compliance risk and kept storage costs near zero at scale.",
      "• Defined MVP scope deliberately lean: student management, workout creation, correction queue, Google Drive OAuth integration, and a basic operational dashboard — leaving AI features, gamification, native app, and payments explicitly out of scope for post-validation phases.",
      "• Leading MVP development using AI-assisted coding (Lovable), owning the full product lifecycle from discovery to deployment as a solo founder-PM.",
      "• Engaged 3 high-revenue personal trainers as early design partners and beta testers, with a freemium-first go-to-market before introducing tiered SaaS pricing.",
    ],
    result: [
      "• MVP in active development — this case demonstrates full end-to-end PM execution: from problem identification and user research through architecture decisions, business model design, and solo product delivery.",
      "• North Star Metric defined (MRR from active trainers) with secondary metrics: corrections processed per week, average video-to-correction turnaround time, and trainer retention at 30/60/90 days.",
      "• Key hypotheses under validation: 30–50% reduction in time spent on corrections, elimination of local video storage dependency, and measurable increase in perceived value for end students.",
      // ⚠️ PENDENTE: Quando o MVP lançar, adicionar métricas reais aqui: trainers cadastrados, correções processadas, feedback qualitativo dos beta users
    ],
    toolsValue: [
      "• Miro used as the primary PM workspace for structured product thinking: Problem Tree, Opportunity Solution Tree, journey maps, MVP scoping canvas, and business model hypothesis.",
      "• Google Drive OAuth integration as a core architectural decision — enabling near-zero storage costs, full data ownership for trainers, and LGPD compliance by design.",
      "• Lovable (AI-assisted coding) used to accelerate MVP development, enabling a solo founder-PM to ship a functional product without a traditional engineering team.",
    ],
    images: [
      { url: PersonalDashboardImg, caption: "Personal trainer's web dashboard — centralized management view" },
      { url: StudentAppCorrectionImg, caption: "Student app — workout execution and progression tracking" },
      { url: StudentAppVideoImg, caption: "Student submits exercise video directly to connected cloud storage (no server-side storage)" },
      { url: PersonalCorrectionImg, caption: "Trainer receives all student videos centralized for correction — zero local storage required" },
    ],
    buttons: [
      { label: "Full Product Case Study (Notion)", href: "https://www.notion.so/Product-Case-Study-MUVTRAINER-336048c25a048169a1cae5fde6a7aee8?source=copy_link" },
      { label: "Landing Page", href: "https://muvtrainer.com" },
    ],
  },

  // ─── PROJECT 4 ───────────────────────────────────────────────
  {
    id: 4,
    title: "AI Integration in Agribusiness ERP",
    copyright: `© ${currentYear} VIASOFT`,
    description:
      "Led discovery and delivery of an AI-powered assistant inside an ERP for agribusiness. Shipped end-to-end in under 30 days with a cross-functional team of 20+ — product earned national press coverage (Globo Rural).",
    tags: ["Product Management", "AI Product", "LLM Integration", "ERP", "0→1"],
    image: "https://i.imgur.com/O8GkicE.jpeg",
    categories: ["ux"],
    situation:
      "The executive team identified an urgent market opportunity: competitors were beginning to explore AI and the company needed to demonstrate innovation leadership quickly. The challenge was not just building something with AI — it was building something genuinely useful inside a complex agribusiness ERP, with real users, in a highly constrained timeline.",
    task:
      "Lead the entire product team through a fast-paced discovery and delivery cycle for an AI-powered assistant integrated into the ERP — enabling multimodal input (voice, image, text) for dynamic report generation and automation of manual tasks — with a hard one-month deadline and a cross-functional team of 20+ professionals spanning product, design, engineering, and business stakeholders.",
    action: [
      "• Ran rapid discovery: mapped user personas and detailed user flows using Notion and BPMN to identify which manual tasks had the highest frequency and lowest tolerance for error — prioritizing report generation and data entry automation as the core AI use cases.",
      "• Coordinated the product backlog in Jira using RICE prioritization to focus the team on the highest-impact features within the 4-week constraint.",
      "• Collaborated with UX/UI designers in Figma to create and A/B test mockups, iterating based on rapid user feedback sessions.",
      "• Conducted a Proof of Concept to embed generative AI using OpenAI agents, validating technical feasibility before committing full engineering capacity.",
      "• Managed alignment across 20+ stakeholders spanning engineering, design, sales, and executive leadership — maintaining clear scope boundaries to prevent delivery risk.",
    ],
    result: [
      "• Product earned national press coverage on Globo Rural (Brazil's largest agribusiness media outlet), significantly boosting the company's innovation positioning in the market.",
      "• Shipped the full AI-powered assistant within the 4-week deadline, with 20+ contributors aligned and no scope slip.",
      "• Leadership decision to prioritize AI feature integration across additional company products, validating the approach and expanding the initiative's footprint beyond the original scope.",
      // ⚠️ PENDENTE: Adicionar métricas de adoção pós-lançamento se disponíveis (ex: % de usuários usando o assistente, tarefas automatizadas por mês, NPS do feature)
    ],
    toolsValue: [
      "• OpenAI agents enabled natural language task execution with multimodal input, providing a flexible AI backbone adaptable to ERP-specific workflows.",
      "• BPMN and Figma were instrumental in ensuring design, engineering, and business teams shared a precise, visual understanding of user flows before any code was written.",
      "• RICE prioritization in Jira maintained focus under time pressure, ensuring the team shipped the highest-value capabilities within the 4-week window.",
    ],
    images: [
      { url: "https://i.imgur.com/UjU4BzO.jpeg", caption: "AI assistant generating a data visualization from ERP data" },
      { url: "https://i.imgur.com/qQ21Iz7.jpeg", caption: "Multimodal input: product registration triggered via image upload" },
      { url: "https://i.imgur.com/aV7RM4W.png", caption: "Project timeline and milestone tracking (Notion Gantt)" },
      { url: "https://i.imgur.com/M85HeBE.png", caption: "Cross-functional team task board during delivery sprint" },
    ],
    buttons: [
      { label: "Official Product Page", href: "https://viasoft.com.br/filt/" },
      { label: "Discovery Artifacts (Notion)", href: "https://glossy-glazer-25a.notion.site/185151a886bd8037a63cdbb68b665e87?v=185151a886bd80e4948a000cb33f0c03&pvs=74" },
    ],
  },
];

export const devProjects: Project[] = [
  // ─── PROJECT 5 ───────────────────────────────────────────────
  {
    id: 5,
    title: "Text to SQL with LLMs",
    copyright: `© ${currentYear} TIAGO CENCI`,
    description:
      "Bachelor's thesis: built a full-stack NLP system enabling natural language SQL generation, then benchmarked GPT-4o against Gemini 2.0-flash across 50+ query types and multiple DBMS.",
    tags: ["React", "Python", "Flask", "GPT-4o", "Gemini 2.0-flash"],
    image: "https://i.imgur.com/z9WCoV6.png",
    categories: ["dev"],
    situation:
      "Non-technical users — analysts, operations teams, business stakeholders — are locked out of direct database querying, creating bottlenecks on data and engineering teams every time someone needs a business insight. Existing Text-to-SQL solutions lacked systematic benchmarking across different DBMS environments, making it unclear which LLMs were actually reliable for production use.",
    task:
      "Design and develop a full-stack NLP-driven system capable of converting natural language queries into SQL, then design and execute a rigorous benchmarking methodology comparing GPT-4o and Gemini 2.0-flash across PostgreSQL, MySQL, and Oracle — producing evidence-based conclusions about LLM reliability for real-world database querying.",
    action: [
      "• Built a full-stack web application using Flask (backend) and React (frontend) with direct integration to OpenAI and Google Gemini APIs, supporting natural language input and real-time SQL generation.",
      "• Designed and executed a comprehensive benchmarking strategy across 50+ unique query types — covering simple selections, multi-table joins, aggregations, subqueries, and schema-specific edge cases — to stress-test model reliability across DBMS variants.",
      "• Implemented context caching mechanisms to optimize API response latency and reduce call overhead during benchmark execution.",
      "• Structured the research methodology to produce reproducible, comparable results — controlling for query complexity, DBMS dialect differences, and prompt formatting variables.",
    ],
    result: [
      // ⚠️ PENDENTE: Preencher com os números reais de acurácia da sua tese — ex: "GPT-4o achieved X% accuracy vs Gemini's Y% across all query types" — isso é o dado mais importante deste projeto
      "• ⚠️ PENDENTE: Inserir acurácia real dos modelos — ex: 'GPT-4o achieved [X]% overall accuracy vs Gemini 2.0-flash at [Y]%, with GPT-4o showing stronger performance on [query type] and Gemini outperforming on [query type]'",
      "• Demonstrated a viable path for enabling BI and operations teams to query databases independently — reducing dependency on data/engineering teams for routine analytical requests.",
      "• Thesis published and available in the UTFPR academic repository, providing a reusable benchmarking framework for future LLM evaluation in SQL generation contexts.",
    ],
    toolsValue: [
      "• Flask provided a lightweight backend framework optimized for API-heavy integration, keeping infrastructure complexity low during development.",
      "• React enabled rapid UI iteration, allowing the benchmarking interface to evolve alongside the research methodology.",
      "• Context caching strategy reduced average API latency by avoiding redundant schema injection on repeated queries — a practical optimization applicable to production deployments.",
    ],
    images: [
      { url: "https://i.imgur.com/UjU4BzO.jpeg", caption: "AI generating a data visualization from a natural language request" },
      { url: "https://i.imgur.com/qQ21Iz7.jpeg", caption: "Natural language input triggering structured database query" },
      // ⚠️ PENDENTE: Adicionar screenshot do benchmark results — tabela comparando GPT-4o vs Gemini por tipo de query e DBMS
      { url: "https://placehold.co/800x450/1a1a2e/ffffff?text=PENDENTE%3A+Benchmark+Results+Table", caption: "⚠️ PENDENTE: Tabela de resultados do benchmark GPT-4o vs Gemini por tipo de query" },
    ],
    buttons: [
      { label: "Bachelor's Thesis (UTFPR Repository)", href: "https://riut.utfpr.edu.br/jspui/handle/1/34422" },
      { label: "Frontend Source (GitHub)", href: "https://github.com/tiago-cenci/AI-text-to-sql-Frontend" },
    ],
  },

  // ─── PROJECT 6 ───────────────────────────────────────────────
  {
    id: 6,
    title: "This Portfolio",
    copyright: `© ${currentYear} TIAGO CENCI`,
    description:
      "Designed and built this portfolio from scratch using React and TypeScript — a modular, accessible, open-source platform for presenting detailed PM case studies.",
    tags: ["React", "TypeScript", "Vercel", "CI/CD"],
    image: "https://i.imgur.com/UfqMT6K.png",
    categories: ["dev"],
    situation:
      "Most PM portfolios are either generic PDF resumes or cluttered personal sites that bury the actual product thinking. I needed a platform that could present structured case studies — with context, decisions, and outcomes — rather than just listing job titles and bullet points.",
    task:
      "Design and develop a responsive, high-performance portfolio website that presents PM case studies in a structured format (STAR method), ensures accessibility and mobile performance, and is maintainable enough to update independently as new projects are added.",
    action: [
      "• Designed a clean, information-dense UI prioritizing content clarity over visual noise — with a modal-based case study format that surfaces structured product thinking without requiring navigation away from the projects page.",
      "• Developed the site using React and TypeScript, implementing a modular component structure (ProjectCard, Dialog, filter system) for reusability and low maintenance overhead.",
      "• Implemented WCAG accessibility guidelines and full mobile responsiveness, ensuring consistent experience across devices.",
      "• Set up CI/CD via GitHub Actions for automated deployment to Vercel on every push to main.",
    ],
    result: [
      "• Fully open-source portfolio with modular architecture — new projects can be added by updating a single data array, with no changes to component logic.",
      "• Deployed and live at tiago-cenci-portfolio.vercel.app with sub-second load times on Vercel's global CDN.",
    ],
    toolsValue: [
      "• TypeScript enforced strict type safety across the project data structure, eliminating a class of runtime errors that commonly occur when PM project entries have inconsistent fields.",
      "• shadcn/ui Dialog component used for the case study modal — providing accessible, composable UI primitives without the overhead of a full component library.",
      "• GitHub Actions CI/CD pipeline ensures the live site is always in sync with the main branch, with zero manual deployment steps.",
    ],
    images: [
      { url: "https://i.imgur.com/UfqMT6K.png", caption: "Portfolio main page — projects grid with category filter" },
    ],
    buttons: [
      { label: "Source Code (GitHub)", href: "https://github.com/tiago-cenci/tiago-cenci-portfolio" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// Component — no changes below this line
// ─────────────────────────────────────────────────────────────

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'dev' | 'ux'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(false);

  const allProjects = [...uxProjects, ...devProjects];

  const getFilteredProjects = () => {
    const filtered =
      activeFilter === "all"
        ? allProjects
        : allProjects.filter(project =>
          project.categories.includes(activeFilter)
        );

    return [...filtered].sort((a, b) => a.id - b.id);
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
              categories={project.categories}
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

                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.images.map((img, idx) => (
                      <div key={idx} className="rounded-md overflow-hidden">
                        <img src={img.url} alt={img.caption} className="w-full h-auto object-cover" />
                        <p className="text-xs text-foreground/50 mt-1 text-center">{img.caption}</p>
                      </div>
                    ))}
                  </div>
                )}

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
