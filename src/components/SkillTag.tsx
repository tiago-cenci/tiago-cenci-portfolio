
import React from "react";
import { cn } from "@/lib/utils";

interface SkillTagProps {
  skill: string;
  index: number;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, index }) => {
  // Animation delay based on index
  const animationDelay = `${index * 50}ms`;

  return (
    <div
      className="animate-fade-in opacity-0"
      style={{ animationDelay }}
    >
      <div className={cn(
        "flex items-center justify-center h-full p-3 md:p-4",
        "rounded-md bg-secondary/50 backdrop-blur-sm border border-border",
        "hover:bg-secondary transition-all duration-200 hover:scale-[1.03]",
        "text-sm text-center font-medium text-foreground/80"
      )}>
        {skill}
      </div>
    </div>
  );
};

export default SkillTag;
