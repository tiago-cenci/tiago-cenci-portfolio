
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const roles = ["Product Manager", "Product Owner", "Business Analyst"];

  useEffect(() => {
    setIsVisible(true);

    // Rotate through tech phrases
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
          {/* Texto à esquerda */}
          <div className="flex-1 text-center md:text-left">
            <div
              className={cn(
                "opacity-0 transition-all duration-1000 delay-150",
                isVisible ? "opacity-100 translate-y-0" : "translate-y-8"
              )}
            >
              <h1 className="font-mono font-bold opacity-80 mb-1">
                Hi there, I'm
              </h1>
            </div>

            <div
              className={cn(
                "opacity-0 transition-all duration-1000 delay-300",
                isVisible ? "opacity-100 translate-y-0" : "translate-y-8"
              )}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text mb-4 pb-2">
                Tiago Cenci
              </h2>
            </div>

            <div
              className={cn(
                "opacity-0 transition-all duration-1000 delay-500",
                isVisible ? "opacity-100 translate-y-0" : "translate-y-8"
              )}
            >
              <div className="h-8 md:h-10 mb-6">
                <h2 className="text-xl md:text-2xl font-semibold font-mono text-foreground/90 inline-block">
                  &lt;{roles[currentPhraseIndex]}/&gt;
                </h2>
              </div>
            </div>

            <div
              className={cn(
                "opacity-0 transition-all duration-1000 delay-700 max-w-xl",
                isVisible ? "opacity-100 translate-y-0" : "translate-y-8"
              )}
            >
              <p className="text-lg text-foreground/80 mb-8">
                Product Manager with technical background working throughout the product journey – from discovery to delivery, since 2020 in the technology area. I've led multidisciplinary squads, created validated MVPs with real impact, implemented AI in B2B products, and reduced the delivery cycle with agile methods. Strong performance in SaaS, data, and agribusiness, with mastery of tools such as Jira, Figma, SQL, and APIs.
              </p>
            </div>

            <div
              className={cn(
                "opacity-0 transition-all duration-1000 delay-900",
                isVisible ? "opacity-100 translate-y-0" : "translate-y-8"
              )}
            >
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="#projects"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View My Work
                </a>

                <a
                  href="#contact"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-primary bg-transparent px-8 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* Imagem à direita (visível em md+) */}
          <div
            className={cn(
              "opacity-0 transition-all duration-1000 delay-200 hidden md:block",
              isVisible ? "opacity-100 translate-y-0" : "translate-y-8"
            )}
          >
            <img
              src="/me.png"
              alt="Tiago Cenci"
              className="w-60 h-60 rounded-full border-2 border-cyan-500 object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-75 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-foreground/20 flex justify-center pt-2">
            <div className="w-1 h-2 bg-foreground/50 rounded-full animate-pulse-glow"></div>
          </div>
        </div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>

      {/* Accent shapes */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-20"></div>
    </section>
  );
};

export default Hero;
