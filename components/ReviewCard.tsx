import Image, { StaticImageData } from "next/image"

interface ReviewCardProps {
    img: string | StaticImageData;
    name: string;
    project: string;
}

export default function ReviewCard({img, name, project}: ReviewCardProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 select-none">
                <Image src={img} quality={100} alt="profile-picture" className="rounded-full"/>
                <div>
                    <h5 className="font-bold text-2xl">{name}</h5>
                    <p className="font-lato text-[#545454]">{project}</p>
                </div>
            </div>
            <p className="font-lato text-[#545454]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis reprehenderit at adipisci, nulla, repellat dolore natus voluptas quam tempora sint!</p>
        </div>
    )
}