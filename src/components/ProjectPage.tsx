import React, { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { devProjects, uxProjects } from "./Projects";
import Layout from "@/Layout";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

import {
    Lightbulb,
    ClipboardCheck,
    Hammer,
    Trophy,
} from "lucide-react";

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

const starIcons: Record<string, JSX.Element> = {
    Situation: <Lightbulb className="w-5 h-5 text-primary" />,
    Task: <ClipboardCheck className="w-5 h-5 text-primary" />,
    Action: <Hammer className="w-5 h-5 text-primary" />,
    Result: <Trophy className="w-5 h-5 text-primary" />,
};

const allProjects: Project[] = [...uxProjects, ...devProjects];

const ProjectCarousel: React.FC<{ images: { url: string; caption: string }[]; projectTitle: string }> = ({
    images,
    projectTitle,
}) => (
    <Carousel className="w-full mx-auto">
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-20" />
        <CarouselContent>
            {images.map((img, index) => (
                <CarouselItem key={index} className="relative flex flex-col items-center">
                    <p className="font-mono font-bold opacity-80 mb-1">{img.caption}</p>
                    <img
                        src={img.url}
                        alt={img.caption || `Project image for ${projectTitle}`}
                        loading="lazy"
                        className="h-[500px] w-auto max-w-full object-contain rounded-xl shadow-md"
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "/fallback-image.png";
                        }}
                    />
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-20" />
    </Carousel>
);

const ProjectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const projectId = Number(id);

    if (!id || isNaN(projectId)) return <Navigate to="/" />;

    const project = allProjects.find((p) => p.id === projectId);
    if (!project)
        return (
            <div className="text-center py-20">
                <p className="text-xl mb-4">Project not found.</p>
                <Link to="/" className="text-primary underline">
                    Back to Home
                </Link>
            </div>
        );

    const starSteps = [
        { title: "Situation", content: project.situation },
        { title: "Task", content: project.task },
        { title: "Action", content: project.action?.join("\n") },
        { title: "Result", content: project.result?.join("\n") },
    ].filter((s) => !!s.content);

    const [activeStep, setActiveStep] = useState(0);

    return (
        <Layout>
            <section className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden pt-16">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-8 mb-5">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-secondary/50 text-foreground text-sm px-3 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text mb-4 pb-2" tabIndex={0}>
                                {project.title}
                            </h1>

                            <p className="text-lg text-foreground/80 mb-4">{project.description}</p>

                            <img
                                src={project.image}
                                alt={`Main project image for ${project.title}`}
                                className="object-cover rounded-xl shadow-lg"
                                loading="lazy"
                                onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = "/fallback-image.png";
                                }}
                            />

                            {starSteps.length > 0 && (
                                <section className="mt-12">
                                    <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center mb-6">
                                        Project Breakdown: The STAR Method
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                                        {starSteps.map((step, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: index * 0.15 }}
                                                className="bg-secondary/30 border border-secondary/50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
                                            >
                                                <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
                                                    {starIcons[step.title]} {step.title}
                                                </h3>

                                                <div className="text-foreground/80 text-lg space-y-2">
                                                    {step.content?.split("\n").map((line, i) => (
                                                        <p key={i}>{line}</p>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            <div className="max-w-3xl mx-auto mb-4 mt-10 text-center">
                                <h2 className="text-3xl md:text-4xl font-bold gradient-text mt-10">Project Images</h2>
                            </div>

                            {project.images && project.images.length > 0 && (
                                <div className="mt-6 mb-6">
                                    <ProjectCarousel images={project.images} projectTitle={project.title} />
                                </div>
                            )}



                            {project.copyright && (
                                <p className="text-xs text-muted-foreground mt-2 italic text-center">
                                    The images and content in this project are demonstrative and for illustrative purposes only. All rights reserved to: {project.copyright}
                                </p>
                            )}

                            <div className="max-w-3xl mx-auto mb-4 mt-10 text-center">
                                <h2 className="text-3xl md:text-4xl font-bold gradient-text mt-10">Links</h2>
                            </div>

                            <div className="mt-4 mb-8 flex flex-wrap justify-center gap-3">
                                {project.buttons && project.buttons.length > 0 ? (
                                    project.buttons.map((btn, i) => (
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
                    </div>

                    <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl opacity-30"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-20"></div>
                </div>
            </section>
        </Layout>
    );
};

export default ProjectPage;
