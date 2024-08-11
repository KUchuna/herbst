import Image from "next/image"


export default function LandingCard(props) {
    return (
        <div className="flex flex-col items-center gap-[12px] cursor-pointer">
            <Image src={props.img} alt=""/>
            <p>{props.text}</p>
        </div>
    )
}