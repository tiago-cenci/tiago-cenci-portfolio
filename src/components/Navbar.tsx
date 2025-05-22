
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Determine which section is currently in view
      const sections = navLinks.map((link) => link.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the section is in view
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      )}
    >
      <nav className="container flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold font-mono text-primary">
          Portfolio
          <span className="inline-block animate-blink ml-1 border-r-2 border-primary h-6 align-middle"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "relative px-1 py-1 text-sm font-medium animated-border transition-colors",
                activeSection === link.href.substring(1)
                  ? "text-primary"
                  : "text-foreground/80 hover:text-foreground"
              )}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/public\Tiago_Cenci_CV_English (1).pdf"
            download="Tiago_Cenci_CV_English (1).pdf"
            className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90"
          >
            Resume
          </a>
        </div>



        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span
              className={cn(
                "h-0.5 bg-foreground transition-all duration-300",
                mobileMenuOpen ? "w-6 -rotate-45 translate-y-2" : "w-6"
              )}
            />
            <span
              className={cn(
                "h-0.5 bg-foreground transition-all duration-300",
                mobileMenuOpen ? "opacity-0" : "w-4"
              )}
            />
            <span
              className={cn(
                "h-0.5 bg-foreground transition-all duration-300",
                mobileMenuOpen ? "w-6 rotate-45 -translate-y-2" : "w-5"
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 z-40 flex flex-col pt-24 px-8 md:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-lg font-medium py-2 border-b border-border transition-colors",
                activeSection === link.href.substring(1)
                  ? "text-primary"
                  : "text-foreground/80 hover:text-foreground"
              )}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({
                  behavior: "smooth",
                });
                setMobileMenuOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/public\Tiago_Cenci_CV_English (1).pdf"
            download="Tiago_Cenci_CV_English (1).pdf"
            className="inline-flex items-center justify-center h-12 rounded-md bg-primary text-primary-foreground text-base font-medium transition-colors hover:bg-primary/90 mt-4"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
