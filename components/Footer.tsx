import Image from "next/image"
import logo from "@/public/assets/headerlogo.svg"
import arrow from "@/public/assets/curvedarrow.svg"
import HeaderButton from "./header/HeaderButton"
import linkedin from "@/public/assets/linkedin.svg"
import facebook from "@/public/assets/facebook.svg"
import instagram from "@/public/assets/instagram.svg"


export default function Footer() {
    return (
        <footer className="p-20 font-lato border-t border-t-[#C9C9C9]">
            <div className="max-w-large-width w-full flex flex-col justify-center items-start">
                <div className="flex justify-between w-full pb-16 border-b-[#C9C9C9] border-b">
                    <div>
                        <Image src={logo} alt="herbst" />
                        <h1 className="font-bold font-lora mt-4 mb-2 text-2xl">Herbst Beratung & Planung GmbH</h1>
                        <p className="text-[#545454]">HLKS-Planungsbüro</p>
                        <p className="mt-14"><span id="dot">&#9679;</span> Wir sind für neue Projekte verfügbar</p>
                        <div className="flex gap-1 mt-4">
                            <Image src={arrow} alt="" />
                            <HeaderButton 
                                styles="bg-primary-light text-white rounded-xl px-6 py-4"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-14">
                        <div className="flex gap-16">
                            <ul className="flex flex-col gap-10">
                                <li>Home</li>
                                <li>Über uns</li>
                                <li>Portfolio</li>
                                <li>Team</li>
                            </ul>
                            <ul className="flex flex-col gap-10">
                                <li>Kontakt</li>
                                <li>Blog</li>
                                <li>Leistungen</li>
                            </ul>
                            <ul className="flex flex-col gap-10">
                                <li>Impressum</li>
                                <li>Datenschutz</li>
                                <li>Referenzprojekte</li>
                            </ul>
                        </div>
                        <ul className="flex gap-3">
                            <li className="bg-secondary-light rounded-full p-2 cursor-pointer"><Image src={linkedin} alt="linkedin" /></li>
                            <li className="bg-secondary-light rounded-full p-2 cursor-pointer"><Image src={facebook} alt="facebook" /></li>
                            <li className="bg-secondary-light rounded-full p-2 cursor-pointer"><Image src={instagram} alt="instagram" /></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 w-full">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="font-bold font-lora text-2xl mb-2">Adresse</h1>
                            <p className="text-[#545454]">Widengasse 6 <br/>CH-5070 Frick</p>
                        </div>
                        <div>
                            <h1 className="font-bold font-lora text-2xl mb-2">Kontakt</h1>
                            <p className="text-[#545454]">+41 62 000 00 00 <br/>infoherbst@example.com</p>
                        </div>
                    </div>
                    <div className="flex justify-between text-[#5B616E] pt-8">
                        <p>Herbst</p>
                        <p>2024 © All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}