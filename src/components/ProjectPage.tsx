import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { devProjects, uxProjects } from "./Projects";
import Layout from "@/Layout";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


type Project = {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    isUXProject: boolean;
    longDescription?: string;
    images?: { url: string; caption: string }[];
    buttons?: { label: string; href: string }[];

};

const allProjects: Project[] = [...uxProjects, ...devProjects];

const ProjectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const projectId = Number(id);

    if (!id || isNaN(Number(id))) return <Navigate to="/" />;

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
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-8  mb-5">
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

                            <img
                                src={project.image}
                                alt={project.title}
                                className=" object-cover rounded-xl shadow-lg"
                            />
                            <div className="mt-5">
                                {project.longDescription && (
                                    <p className="text-base text-foreground/70 mb-10">
                                        {project.longDescription}
                                    </p>
                                )}
                            </div>
                            <div className={`max-w-3xl mx-auto mb-4 mt-10 text-center'}`}>
                                <h2 className="text-3xl md:text-4xl text-center font-bold gradient-text mt-10">Project images</h2>
                            </div>
                            {project.images && project.images.length > 0 && (
                                <div className="mt-6 mb-6">
                                    <Carousel className="w-full mx-auto">
                                        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-20" />
                                        <CarouselContent>
                                            {project.images.map((img, index) => (
                                                <CarouselItem key={index} className="relative flex flex-col items-center">
                                                    <p className="font-mono font-bold opacity-80 mb-1">{img.caption}</p>
                                                    <img
                                                        src={img.url}
                                                        alt={`Slide ${index + 1}`}
                                                        className="w-full object-cover rounded-xl shadow-md"
                                                    />
                                                </CarouselItem>


                                            ))}
                                        </CarouselContent>
                                        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-20" />
                                    </Carousel>
                                </div>
                            )}

                            <div className={`max-w-3xl mx-auto mb-4 mt-10 text-center'}`}>
                                <h2 className="text-3xl md:text-4xl text-center font-bold gradient-text mt-10">Links</h2>
                            </div>
                            <div className="mt-4 mb-8 flex flex-wrap justify-center gap-3">
                                {project.buttons.map((btn, i) => (
                                    <a
                                        key={i}
                                        href={btn.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-gradient-to-r from-purple-700 via-fuchsia-800 to-purple-700 text-white rounded-md font-medium text-sm transition-all duration-300 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:brightness-110"
                                    >
                                        {btn.label}
                                    </a>
                                ))}
                            </div>
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
