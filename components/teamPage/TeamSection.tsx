import Image from "next/image";
import ucha from "@/public/assets/ucha.jpg"
import facebook from "@/public/assets/facebook.svg"
import instagram from "@/public/assets/instagram.svg"
import Link from "next/link";
import MemberCard from "./MemberCard";

export default function TeamSection() {
    return (
        <section className="flex w-full justify-center py-24 items-start font-lato px-20">
            <div className="max-w-large-width w-full flex flex-col justify-start items-start">
                <h1 className="font-bold font-lora text-[2.5rem]">Unser Team</h1>
                <p className="pt-6 text-[#545454] text-xl w-[75%]">Die Erfüllung Ihrer einzigartigen Bedürfnisse ist unsere Passion. Wir legen Wert darauf die Veränderungen des Marktes im Blick zu behalten und somit ein umfassendes, individuelles Dienstleistungsangebot im Rahmen unserer Kernkompetenzen anzubieten.</p>
                <div className="mt-16">
                    <MemberCard 
                        img={ucha}
                        name="Ucha Kobakhidze"
                        position="Geschäftsführer"
                    />
                </div>
                <div className="flex gap-2 mt-6">
                    <Link href="https://www.facebook.com/ucheksa/" target="#" className="hover:bg-secondary-light rounded-full p-3">
                        <Image src={facebook} alt="facebook" />
                    </Link>
                    <Link href="https://www.instagram.com/ucha_kobakhidze/" target="#" className="hover:bg-secondary-light rounded-full p-3">
                        <Image src={instagram} alt="instagram" />
                    </Link>
                </div>
            </div>
        </section>
    )
}