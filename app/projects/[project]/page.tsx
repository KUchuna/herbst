import ProjectsSection from "@/components/homePage/projects/ProjectsSection";
import projects from "@/lib/datas/projects";
import Image from "next/image";

export default function Project({ params }: { params: { project: string } }) {

    const projectId = parseInt(params.project, 10);

    const project = projects.find(p => p.id === projectId);

    if (!project) {
        return <main><h1>Project not found</h1></main>;
    }

    return (
        <main>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <p>Client: {project.client}</p>
            <p>Period: {project.period}</p>
            <ul>
                {project.services.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>
            <div>
                {project.images.map((image, index) => (
                    <Image key={index} src={image} alt={`Project image ${index + 1}`} />
                ))}
            </div>
            <ProjectsSection />
        </main>
    );
}
