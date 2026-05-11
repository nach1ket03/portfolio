import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import ProjectsList from "@/components/ProjectsList";
import Guestbook from "@/components/Guestbook";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <main className="bg-[#080808] min-h-screen">
        <Navbar />
        <Hero />
        <BentoGrid />
        <ProjectsList />
        <Guestbook />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
