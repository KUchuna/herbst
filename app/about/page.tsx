import DescriptionSection from "@/components/aboutPage/DescriptionSection";
import StatsSection from "@/components/aboutPage/StatsSection";

export default function About() {
    return (
        <main className="text-5xl">
            <StatsSection />
            <DescriptionSection />
        </main>
    )
}