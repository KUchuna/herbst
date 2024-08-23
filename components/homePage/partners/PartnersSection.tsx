"use client"

import partner1 from "@/public/assets/partner1.svg"
import partner2 from "@/public/assets/partner2.svg"
import partner3 from "@/public/assets/partner3.svg"
import partner4 from "@/public/assets/partner4.svg"
import partner5 from "@/public/assets/partner5.svg"
import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
    { img: partner1 },
    { img: partner2 },
    { img: partner3 },
    { img: partner4 },
    { img: partner5 },
]

const parentVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.3
        }
    }
}

const childVariants = {
    initial: { opacity: 0, y: -60 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 150,
            damping: 12,
            duration: 0.1
        }
    },
}

export default function PartnersSection() {

    return (
        <section className="flex w-full justify-center py-24 items-start font-lora">
            <div className="max-w-large-width px-20 w-full flex flex-col justify-center items-start">
                <h1 className="text-5xl font-bold">Mitgliedschaften</h1>
                <motion.div
                    className="pt-12 flex justify-between w-full"
                    variants={parentVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: false}}
                >
                    {partners.map((partner, index) => (
                        <motion.div 
                            key={index}
                            className="bg-secondary-light py-8 px-6 rounded-xl cursor-pointer flex items-center justify-center select-none"
                            variants={childVariants}
                        >
                            <Image src={partner.img} alt="partner logo" width={170} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
