"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function LandingCard(props) {
    return (
        <motion.div
            whileHover={{scale: 1.1}}
            className="flex flex-col items-center gap-[12px] cursor-pointer">
            <Image src={props.img} alt=""/>
            <p>{props.text}</p>
        </motion.div>
    )
}