
import React from "react";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  index: number;
  isUXProject?: boolean;
  onViewDetails: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  tags,
  image,
  index,
  isUXProject = false,
  onViewDetails
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
            <a
              href={`/projects/${id}`}
              className="px-4 py-2 bg-secondary text-foreground rounded-md font-medium text-sm transition-colors hover:bg-secondary/80"
            >
              Learn more
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
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-foreground/70"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-foreground/70">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
