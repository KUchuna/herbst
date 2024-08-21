"use client"

import PartnerCard from "./PartnerCard"
import partner1 from "@/public/assets/partner1.svg"
import partner2 from "@/public/assets/partner2.svg"
import partner3 from "@/public/assets/partner3.svg"
import partner4 from "@/public/assets/partner4.svg"
import partner5 from "@/public/assets/partner5.svg"
import { motion } from "framer-motion"

const partners = [
    { img: partner1 },
    { img: partner2 },
    { img: partner3 },
    { img: partner4 },
    { img: partner5 },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
}

export default function PartnersSection() {
    return (
        <section className="flex w-full justify-center py-24 items-start font-lora">
            <div className="max-w-large-width px-20 w-full flex flex-col justify-center items-start">
                <h1 className="text-5xl font-bold">Mitgliedschaften</h1>
                <motion.div
                    className="pt-12 flex justify-between w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    {partners.map((partner, index) => (
                        <PartnerCard
                            key={index}
                            img={partner.img}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
