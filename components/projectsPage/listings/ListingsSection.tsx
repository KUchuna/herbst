import projects from "@/lib/datas/projects.js"
import ProjectCard from "@/components/homePage/projects/ProjectCard"

export default function ListingsSection() {
    return (
        <section className="flex w-full justify-center items-start font-lato px-20 pb-24 pt-8">
            <div className="max-w-large-width flex flex-wrap gap-8 w-full justify-start items-start">
                {
                    projects.map((card) => (
                        <ProjectCard
                            key={card.id}
                            id={card.id}
                            img={card.images[0]}
                            type={card.type}
                            title={card.title}
                            projectsPage
                        />
                    ))
                }
            </div>
        </section>
    )
}