import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import ProjectsList from "@/components/ProjectsList";
import Guestbook from "@/components/Guestbook";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <Hero />
      <BentoGrid />
      <ProjectsList />
      <Guestbook />
      <Footer />
    </main>
  );
}
