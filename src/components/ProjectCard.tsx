
import React from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubLink: string;
  demoLink?: string | null; // Updated to be optional and accept null
  index: number;
  isUXProject?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  image,
  githubLink,
  demoLink,
  index,
  isUXProject = false
}) => {
  // Animation delay based on index
  const animationDelay = `${index * 100 + 200}ms`;

  return (
    <div
      className="opacity-0 animate-fade-in-slow"
      style={{ animationDelay }}
    >
      <div className="group bg-card rounded-lg border border-border overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
        {/* Project image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Hover overlay with buttons */}
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium text-sm transition-colors hover:bg-primary/90"
              >
                Live Demo
              </a>
            )}

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-secondary text-foreground rounded-md font-medium text-sm transition-colors hover:bg-secondary/80"
            >
              {isUXProject ? "Case Study" : "GitHub"}
            </a>
          </div>

          {
            isUXProject ? (
              <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs px-2 py-1 rounded font-medium">
                Product & UX/UI
              </div>
            ) : (
              <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded font-medium">
                Development
              </div>
            )
          }


        </div>

        {/* Project details */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm text-foreground/70 mb-4 flex-1">{description}</p>

          {/* Project tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-foreground/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
