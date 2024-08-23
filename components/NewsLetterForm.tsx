"use client"

import Image from "next/image"
import mail from "@/public/assets/mail.svg"
import { useState } from "react"

export default function NewsLetterForm() {
    const [email, setEmail] = useState("") 

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }
    
    return (
        <form className="font-lato flex gap-3">
            <div className="flex py-4 px-3 gap-2 rounded-xl border border-[#A8A8A8]">
                <Image src={mail} alt="" />
                <input type="email" name="email" onChange={handleChange} required value={email} placeholder="example@example.com" className="bg-transparent outline-none"/>
            </div>
            <button type="submit" className="bg-primary-light text-white py-4 px-6 rounded-xl" >
                Absenden
            </button>
        </form>
    )
}