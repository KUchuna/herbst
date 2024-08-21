import Image from "next/image"

export default function ReviewCard(props) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 select-none">
                <Image src={props.img} quality={100} alt="profile-picture" className="rounded-full"/>
                <div>
                    <h5 className="font-bold text-2xl">{props.name}</h5>
                    <p className="font-lato text-[#545454]">{props.project}</p>
                </div>
            </div>
            <p className="font-lato text-[#545454]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis reprehenderit at adipisci, nulla, repellat dolore natus voluptas quam tempora sint!</p>
        </div>
    )
}