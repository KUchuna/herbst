import ContactForm from "./ContactForm";
import Image from "next/image";
import contact from "@/public/assets/contact.jpg"

export default function FormSection() {
    return (
        <section className="flex w-full justify-center pt-11 px-20 font-lato">
            <div className="max-w-large-width w-full flex gap-16 justify-between items-center">
                <ContactForm />
                <div className="w-[60%] h-full rounded-xl overflow-hidden">
                    <Image src={contact} alt="" className="h-full object-cover"/>
                </div>
            </div>
        </section>
    )
}