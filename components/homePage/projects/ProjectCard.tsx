"use client"

import Image, { StaticImageData } from "next/image"
import newBuilding from "@/public/assets/done.svg"
import renovation from "@/public/assets/inprogress.svg"
import { useRouter } from "next/navigation"

interface ProjectCardProps {
    img: string | StaticImageData;
    type: number;
    title: string;
    projectsPage?: boolean;
    id: number
}

export default function ProjectCard({img, type, title, projectsPage, id}: ProjectCardProps) {

    const mainStyles = 
    {
        div: "relative flex flex-col flex-[0_0_30%] select-none cursor-pointer",
        image: "h-[85%] rounded-xl object-cover"
    }

    const projectsPageStyles = 
    {
        div: "relative flex flex-col select-none cursor-pointer",
        image: "w-[305px] h-[305px] rounded-xl object-cover"
    }

    const router = useRouter()

    function handleClick() {
        router.push(`/projects/${id}`)
    }

    return (
        <div className={projectsPage ? projectsPageStyles.div : mainStyles.div} onClick={handleClick}>
            <Image src={img} alt="cover image" className={projectsPage ? projectsPageStyles.image : mainStyles.image}/>
            <div className="p-3 absolute bg-[#0A0A0A99] top-3 left-3 rounded-xl flex text-white items-center gap-[4px]">
                <Image src={type == 0 ? newBuilding : renovation} alt=""/>
                <p>{type ? "Neubau" : "Umbau"}</p>
            </div>
            <p className="text-[#545454] mt-4">{title}</p>
        </div>
    )
}