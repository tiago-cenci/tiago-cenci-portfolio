import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
