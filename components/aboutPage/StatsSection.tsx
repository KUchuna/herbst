import Image from "next/image";
import office from "@/public/assets/office.jpeg"

export default function StatsSection() {
    return (
        <section className="flex w-full justify-center py-24 items-start font-lato px-20">
            <div className="max-w-large-width w-full flex flex-col justify-start items-start">
                <h1 className="font-bold font-lora text-[2.5rem]">Über uns</h1>
                <div className="pt-24 flex justify-between w-full gap-16">
                    <div className="w-[50%] overflow-hidden rounded-xl">
                        <Image src={office} alt="" className="object-cover h-full w-full"/>
                    </div>
                    <div className="py-20">
                        <h1 className="font-bold font-lora text-[2.5rem]">HLKS Planungsbüro in Frick</h1>
                        <ul id="about-stats" className="pt-16">
                            <li className="flex flex-col gap-3">
                                <span className="text-[4rem] text-primary-light font-lora font-bold">10+</span>
                                <p className="font-bold text-lg">Erfolgreiche Projekte</p>
                            </li>
                            <li className="flex flex-col gap-3">
                                <span className="text-[4rem] text-primary-light font-lora font-bold">100%</span>
                                <p className="font-bold text-lg">Zufriedene Kunden</p>
                            </li>
                            <li className="flex flex-col gap-3">
                                <span className="text-[4rem] text-primary-light font-lora font-bold">20+</span>
                                <p className="font-bold text-lg">Jahre Erfahrung</p>
                            </li>
                            <li className="flex flex-col gap-3">
                                <span className="text-[4rem] text-primary-light font-lora font-bold">4</span>
                                <p className="font-bold text-lg">Experten</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}