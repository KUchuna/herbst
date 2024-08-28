"use client"

import {useState} from "react"


export default function ContactForm() {
    
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [message,setMessage] = useState("")
    
    
    
    return (
        <div className="font-lato flex-[0_0_40%]">
            <h2 className="font-bold font-lora text-3xl">Kontakt</h2>
            <p>Unser Team freuen sich über Ihre Kontaktaufnahme.</p>
            <form className="flex flex-col mt-12">
                <label htmlFor="name" className="font-bold text-sm mb-1.5">Name und Vorname</label>
                <input type="text" name="name" id="name" placeholder="Jhon Doe" value={name} onChange={(e) => setName(e.target.value)}
                    className="outline-none border-[#C9C9C9] border-[1px] rounded-lg py-3 px-2 mb-6" />
                <label htmlFor="email" className="font-bold text-sm mb-1.5">Email</label>
                <input type="email" name="email" id="email" placeholder="jhondoe@example.com" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="outline-none border-[#C9C9C9] border-[1px] rounded-lg py-3 px-2 mb-6" />
                <label htmlFor="phone" className="font-bold text-sm mb-1.5">Handynummer</label>
                <input type="tel" name="phone" id="phone" placeholder="+41 (555) 000-0000" value={phone} onChange={(e) => setPhone(e.target.value)}
                    className="outline-none border-[#C9C9C9] border-[1px] rounded-lg py-3 px-2 mb-6" />
                <label htmlFor="message" className="font-bold text-sm mb-1.5">Anfrage</label>
                <textarea name="message" id="message" placeholder="Hinterlassen Sie uns eine Nachricht ..." value={message} onChange={(e) => setMessage(e.target.value)}
                    className="outline-none border-[#C9C9C9] border-[1px] rounded-lg py-3 px-2 mb-6 min-h-40 resize-none" />
                <button type="submit" className="bg-primary-light rounded-lg py-4 text-white">Email zusenden</button>
            </form>
        </div>
    )
}