import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { devProjects, uxProjects } from "./Projects";
import Layout from "@/Layout";

type Project = {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    isUXProject: boolean;
    longDescription?: string;
};

const allProjects: Project[] = [...uxProjects, ...devProjects];

const ProjectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const projectId = Number(id);

    if (!projectId) return <Navigate to="/" />;

    const project = allProjects.find((p) => p.id === projectId);
    if (!project) return <div>Projeto não encontrado.</div>;

    return (
        <Layout>
            <section className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden pt-16">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        {/* Conteúdo do projeto */}
                        <div className="flex-1 text-center md:text-left">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4  mb-5">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-secondary/50 text-foreground text-sm px-3 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text mb-4 pb-2">
                                {project.title}
                            </h2>

                            <p className="text-lg text-foreground/80 mb-4">
                                {project.description}
                            </p>

                            {project.longDescription && (
                                <p className="text-base text-foreground/70 mb-6">
                                    {project.longDescription}
                                </p>
                            )}

                            <img
                                src={project.image}
                                alt={project.title}
                                className=" object-cover rounded-xl shadow-lg"
                            />


                        </div>
                    </div>

                    {/* efeitos visuais */}
                    <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl opacity-30"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-20"></div>
                </div>
            </section>
        </Layout>
    );
};

export default ProjectPage;
