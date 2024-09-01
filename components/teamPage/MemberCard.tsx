import Image, { StaticImageData } from "next/image"

interface MemberCardProps {
    img: StaticImageData | string;
    name: string;
    position: string;
}

export default function MemberCard(props: MemberCardProps) {
    return (
        <div className="flex flex-col select-none">
            <Image src={props.img} alt="ultra handsome man" className="w-[296px] h-[296px] object-cover rounded-xl"/>
                <h5 className="font-bold text-xl mt-6">{props.name}</h5>
                <span className="text-primary-light text-lg">{props.position}</span>
        </div>
    )
}