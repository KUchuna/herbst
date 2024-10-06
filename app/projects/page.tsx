import FilterButtons from "@/components/projectsPage/listings/FilterButtons";
import ListingsSection from "@/components/projectsPage/listings/ListingsSection";
import TitleSection from "@/components/projectsPage/TitleSection";

export default function Projects() {
    return (
        <main>
            <TitleSection />
            <FilterButtons />
            <ListingsSection />
        </main>
    )
}