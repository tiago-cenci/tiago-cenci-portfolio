
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-foreground/70 mb-8">
            Have a project in mind or want to discuss potential opportunities? Drop me a message!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl shadow-xl p-6 md:p-8 border border-border backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground/80 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={cn(
                      "block w-full rounded-md border border-input",
                      "bg-background/50 backdrop-blur-sm px-4 py-2",
                      "text-sm text-foreground placeholder:text-muted-foreground",
                      "focus:outline-none focus:ring-1 focus:ring-primary"
                    )}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground/80 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={cn(
                      "block w-full rounded-md border border-input",
                      "bg-background/50 backdrop-blur-sm px-4 py-2",
                      "text-sm text-foreground placeholder:text-muted-foreground",
                      "focus:outline-none focus:ring-1 focus:ring-primary"
                    )}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground/80 mb-1"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={cn(
                    "block w-full rounded-md border border-input",
                    "bg-background/50 backdrop-blur-sm px-4 py-2",
                    "text-sm text-foreground placeholder:text-muted-foreground",
                    "focus:outline-none focus:ring-1 focus:ring-primary"
                  )}
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground/80 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={cn(
                    "block w-full rounded-md border border-input",
                    "bg-background/50 backdrop-blur-sm px-4 py-2",
                    "text-sm text-foreground placeholder:text-muted-foreground",
                    "focus:outline-none focus:ring-1 focus:ring-primary",
                    "resize-none"
                  )}
                  placeholder="Your message here..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full inline-flex justify-center items-center rounded-md",
                    "bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground",
                    "shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-1",
                    "focus:ring-primary transition-colors",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <a
                  href="mailto:hello@example.com"
                  className="text-primary hover:text-primary/90 transition-colors"
                >
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-foreground/70">hello@example.com</div>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/90 transition-colors"
                >
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-sm text-foreground/70">@yourprofile</div>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/90 transition-colors"
                >
                  <div className="font-medium">GitHub</div>
                  <div className="text-sm text-foreground/70">@yourhandle</div>
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
