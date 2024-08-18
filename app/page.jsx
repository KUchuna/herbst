import ClientsSection from "@/components/ClientsSection";
import LandingSection from "@/components/LandingSection";
import PlanningSection from "@/components/PlanningSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <LandingSection />
      <ClientsSection />
      <PlanningSection />
      <ProjectsSection />
    </main>
  );
}
