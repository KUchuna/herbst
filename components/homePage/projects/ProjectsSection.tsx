import ProjectsSlider from "./ProjectsSlider.tsx"

export default function ProjectsSection() {
    return (
        <section className="flex w-full justify-center py-24 px-20 2xl:px-0 items-start font-lora">
            <div className="max-w-large-width w-full flex flex-col justify-center items-start">
                <div className="flex w-full justify-between items-center mb-12">
                    <h1 className="text-5xl font-bold">Referenzprojekten</h1>
                    <a className="text-primary-light font-bold font-lato text-2xl hover:opacity-70" href="#">Alle anzeigen</a>
                </div>
                <ProjectsSlider />
            </div>
        </section>
    )
}