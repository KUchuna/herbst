"use client"

import { useEffect, useRef, useState } from "react"
import { z } from "zod"
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import {motion} from "framer-motion"
import PhonePrefix from "./PhonePrefix";

function phone(schema: z.ZodString) {
    return schema
        .refine(isValidPhoneNumber, "Invalid phone number (select correct country prefix)")
        .transform((value) => parsePhoneNumber(value).number.toString());
}

const contactNumber = phone(z.string());


const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long").max(25, "Name must not exceed 25 characters"),
    email: z.string().email("Invalid email address"),
    phone: contactNumber,
    message: z.string().min(5, "Message must be at least 5 characters long"),
})

export default function ContactForm() {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [errors, setErrors] = useState<{[key: string]: string }>({})

    const [active, setActive] = useState<boolean>(false)
    const [selection, setSelection] = useState("+995")
    
    const prefixRef = useRef<HTMLDivElement>(null)
    const contRef = useRef<HTMLUListElement>(null)


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const formData = {
            name,
            email,
            phone: `${selection}${phone}`,
            message,
        }

        const result = formSchema.safeParse(formData)
        
        if (!result.success) {
            const fieldErrors: { [key: string]: string } = {}
            result.error.errors.forEach((error) => {
                if (error.path[0]) {
                    fieldErrors[error.path[0]] = error.message
                }
            })
            setErrors(fieldErrors)
        } else {
            console.log(formData)
            setName("")
            setEmail("")
            setPhone("")
            setMessage("")
            setErrors({})
        }
    }
    
    function handleActive() {
        setActive(!active)
    }

    useEffect(() => {
        const handleMenuClose = (e: any) => {
            if(contRef.current && 
                !contRef.current.contains(e.target) &&
                prefixRef.current && 
                !prefixRef.current.contains(e.target)) {
                setActive(false)
            }
        }

        document.addEventListener('mousedown', handleMenuClose)
        return () => {
            document.removeEventListener('mousedown', handleMenuClose)
        }
    }, [active])

    function handleSelection(selection: string) {
        setSelection(selection)
        setActive(false)
    }

    function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const isValid = /^[\d\s]*$/.test(value);
    
        if (isValid) {
            setPhone(value);
        } else {
            console.log("Invalid input");
        }
    }
    

    return (
        <div className="font-lato w-[40%] h-full">
            <div>
                <h1 className="font-bold font-lora text-3xl">Kontakt</h1>
                <p>Unser Team freuen sich über Ihre Kontaktaufnahme.</p>
            </div>
            <form className="flex flex-col mt-12 justify-between" onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col">
                    <label htmlFor="name" className="font-bold text-sm mb-1.5">Name und Vorname</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="John Doe" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        className={`outline-none border-[1px] rounded-lg py-3 px-2 mb-6 ${errors.name ? 'border-red-500' : 'border-[#C9C9C9]'}`} 
                    />
                    {errors.name && <span className="text-red-500 text-sm mb-2 -mt-5">{errors.name}</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="font-bold text-sm mb-1.5">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="johndoe@example.com" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className={`outline-none border-[1px] rounded-lg py-3 px-2 mb-6 ${errors.email ? 'border-red-500' : 'border-[#C9C9C9]'}`} 
                    />
                    {errors.email && <span className="text-red-500 text-sm mb-2 -mt-5">{errors.email}</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="phone" className="font-bold text-sm mb-1.5">Handynummer</label>
                    <div className={`relative w-full flex gap-3 items-center border-[1px] rounded-lg mb-6  ${errors.phone ? 'border-red-500' : 'border-[#C9C9C9]'}`}>
                        <div onClick={handleActive} className="cursor-pointer select-none rounded-lg bg-primary-light text-white font-bold hover:bg-[#c74d02] w-[20%] px-2 flex justify-center items-center py-3 min-w-fit" ref={prefixRef}>
                        {selection}
                        </div>
                        {active && 
                        <PhonePrefix 
                            handleSelection={handleSelection}
                            contRef={contRef}
                        />}
                        <input 
                            type="tel" 
                            name="phone" 
                            id="phone" 
                            placeholder="(555) 000-0000" 
                            value={phone} 
                            onChange={handlePhoneChange}
                            className="w-full outline-none py-3 px-2 rounded-lg" 
                        />
                    </div>
                    {errors.phone && <span className="text-red-500 text-sm mb-2 -mt-5">{errors.phone}</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="font-bold text-sm mb-1.5">Anfrage</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        placeholder="Hinterlassen Sie uns eine Nachricht ..." 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                        className={`outline-none border-[1px] rounded-lg py-3 px-2 mb-6 min-h-40 resize-none ${errors.message ? 'border-red-500' : 'border-[#C9C9C9]'}`} 
                    />
                    {errors.message && <span className="text-red-500 text-sm mb-2 -mt-5">{errors.message}</span>}
                </div>  
                <motion.button
                whileTap={{scale: 0.95}}
                type="submit" 
                className="bg-primary-light rounded-lg py-4 text-white">
                    Email zusenden
                </motion.button>
            </form>
        </div>
    )
}
