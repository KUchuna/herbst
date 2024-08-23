import ClientsSection from "@/components/homePage/clients/ClientsSection";
import LandingSection from "@/components/homePage/landing/LandingSection";
import NewsLetterSection from "@/components/homePage/newsletter/NewsLetterSection";
import PartnersSection from "@/components/homePage/partners/PartnersSection";
import PlanningSection from "@/components/homePage/planning/PlanningSection";
import ProjectsSection from "@/components/homePage/projects/ProjectsSection";
import ReviewsSection from "@/components/homePage/reviews/ReviewsSection";

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
