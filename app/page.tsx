import ClientsSection from "@/components/ClientsSection";
import LandingSection from "@/components/LandingSection";
import NewsLetterSection from "@/components/NewsLetterSection";
import PartnersSection from "@/components/PartnersSection";
import PlanningSection from "@/components/PlanningSection";
import ProjectsSection from "@/components/ProjectsSection";
import ReviewsSection from "@/components/ReviewsSection";

export default function Home() {
  return (
    <main>
      <LandingSection />
      <ClientsSection />
      <PlanningSection />
      <ProjectsSection />
      <ReviewsSection />
      <PartnersSection />
      <NewsLetterSection />
    </main>
  );
}
