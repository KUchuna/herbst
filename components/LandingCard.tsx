"use client"

import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion"

interface LandingCardProps {
    img: string | StaticImageData;
    text: string;
}

export default function LandingCard({img, text}: LandingCardProps) {
    return (
        <motion.div
            whileHover={{scale: 1.1}}
            className="flex flex-col items-center gap-[12px] cursor-pointer">
            <Image src={img} alt=""/>
            <p>{text}</p>
        </motion.div>
    )
}