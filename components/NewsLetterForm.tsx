import Image from "next/image"
import mail from "@/public/assets/mail.svg"

export default function NewsLetterForm() {
    return (
        <form className="font-lato flex gap-3">
            <div className="flex py-4 px-3 gap-2 rounded-xl border border-[#A8A8A8]">
                <Image src={mail} alt="" />
                <input type="email" name="email" placeholder="example@example.com" className="bg-transparent outline-none"/>
            </div>
            <button type="submit"  className="bg-primary-light text-white py-4 px-6 rounded-xl" >
                Absenden
            </button>
        </form>
    )
}