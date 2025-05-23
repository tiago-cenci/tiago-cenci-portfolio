import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { devProjects, uxProjects } from "./Projects";

type Project = {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    link?: string;
    isUXProject: boolean;
    longDescription?: string;
    demoLink?: string;
    githubLink?: string;
};

const allProjects: Project[] = [...uxProjects, ...devProjects];

const ProjectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const projectId = Number(id);

    if (!projectId) {
        return <Navigate to="/projects" />; // Redireciona se id inválido
    }

    const project = allProjects.find((p) => p.id === projectId);

    if (!project) {
        return <div>Projeto não encontrado.</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-200 rounded px-2 py-1 text-sm">
                        {tag}
                    </span>
                ))}
            </div>
            <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-xl rounded mb-6"
            />
            <p className="mb-6">{project.longDescription || project.description}</p>
            <div className="flex gap-4">
                {project.demoLink && (
                    <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Live Demo
                    </a>
                )}
                <a
                    href={project.githubLink || project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 text-white rounded"
                >
                    {project.isUXProject ? "Case Study" : "GitHub"}
                </a>
            </div>
        </div>
    );
};

export default ProjectPage;
