
import React from "react";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Linkedin, Link } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-foreground/70 mb-8">
            Feel free to reach out to me through any of these channels!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl shadow-xl p-6 md:p-8 border border-border backdrop-blur-sm">
            <div className="space-y-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold">Tiago Cenci</h3>
                <p className="text-foreground/70">Pato Branco – PR (Brazil)</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/30 border border-border">
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="font-medium">Phone</span>
                  </div>
                  <a 
                    href="tel:+5546991300469" 
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    +55 (46) 99130-0469
                  </a>
                </div>
                
                <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/30 border border-border">
                  <div className="flex items-center space-x-2 mb-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="font-medium">Email</span>
                  </div>
                  <a 
                    href="mailto:tiagocenci100@gmail.com" 
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    tiagocenci100@gmail.com
                  </a>
                </div>
                
                <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/30 border border-border">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium">Location</span>
                  </div>
                  <span className="text-foreground/70">
                    Pato Branco – PR (Brazil)
                  </span>
                </div>
                
                <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/30 border border-border">
                  <div className="flex items-center space-x-2 mb-2">
                    <Linkedin className="h-4 w-4 text-primary" />
                    <span className="font-medium">LinkedIn</span>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/tiago-cenci-218962223/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    Tiago Cenci
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/30 border border-border">
                <div className="flex items-center space-x-2 mb-2">
                  <Link className="h-4 w-4 text-primary" />
                  <span className="font-medium">All Links</span>
                </div>
                <a 
                  href="https://linktr.ee/tiago_cenci" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  linktr.ee/tiago_cenci
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-30"></div>
      </div>
    </section>
  );
};

export default Contact;
