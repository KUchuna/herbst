import Image from "next/image"
import done from "@/public/assets/done.svg"
import inprogress from "@/public/assets/inprogress.svg"

export default function ProjectCard(props) {
    return (
        <div className="relative flex flex-col justify-between flex-[0_0_30%] select-none cursor-pointer last:mr-20">
            <Image src={props.img} alt="cover image" className="h-[85%] rounded-xl object-cover"/>
            <div className="p-3 absolute bg-[#0A0A0A99] top-3 left-3 rounded-xl flex text-white items-center gap-[4px]">
                <Image src={props.buildingDone ? done : inprogress} />
                <p>{props.buildingDone ? "Neubau" : "Umbau"}</p>
            </div>
            <p className="text-[#545454]">{props.address}</p>
        </div>
    )
}