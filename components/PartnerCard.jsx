"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function PartnerCard(props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                translateY: -60
            }}
            whileInView={{
                opacity: 1,
                translateY: 0
            }}
            transition={{
                delay: 0.5
            }} 
            whileHover={{
                scale: 1.1
            }}
            viewport={{once: false}}
            className="bg-secondary-light py-8 px-6 rounded-xl cursor-pointer flex items-center justify-center">
            <Image src={props.img} alt="partner logo"  width={170}/>
        </motion.div>
    )
}