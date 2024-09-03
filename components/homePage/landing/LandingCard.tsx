"use client"

import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion"

interface LandingCardProps {
    img: string | StaticImageData;
    text: string;
}

export default function LandingCard({ img, text }: LandingCardProps) {
    return (
        <div className="flex flex-col items-center gap-3 cursor-pointer">
            <div className="overflow-hidden w-full h-full rounded-3xl">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{type: "tween", duration: 0.2}}
                    className="w-full h-full"
                >
                    <Image src={img} alt="" />
                </motion.div>
            </div>
            <p>{text}</p>
        </div>
    )
}
