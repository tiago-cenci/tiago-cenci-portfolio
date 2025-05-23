// pages/index.tsx
import Layout from "@/Layout";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default Index;
