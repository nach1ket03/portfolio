import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import BentoGrid from "@/components/BentoGrid";
import ProjectsList from "@/components/ProjectsList";
import Guestbook from "@/components/Guestbook";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <BackToTop />
      <main className="bg-[#080808] min-h-screen">
        <Navbar />
        <Hero />
        <Experience />
        <BentoGrid />
        <ProjectsList />
        <Guestbook />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
