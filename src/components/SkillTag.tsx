
import React from "react";
import { cn } from "@/lib/utils";

interface SkillTagProps {
  skill: string;
  index: number;
  isVisible?: boolean;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, index, isVisible = true }) => {
  // Animation delay based on index
  const animationDelay = `${index * 50}ms`;

  return (
    <div
      className={`transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: animationDelay }}
    >
      <div className={cn(
        "flex items-center justify-center h-full p-3 md:p-4",
        "rounded-md bg-secondary/50 backdrop-blur-sm border border-border",
        "hover:bg-secondary transition-all duration-200 hover:scale-[1.05]",
        "text-sm text-center font-medium text-foreground/80"
      )}>
        {skill}
      </div>
    </div>
  );
};

export default SkillTag;
