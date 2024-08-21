"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function PartnerCard({ img }) {
    const childVariants = {
        hidden: { opacity: 0, translateY: -60 },
        visible: { opacity: 1, translateY: 0 },
    }

    return (
        <motion.div
            variants={childVariants}
            transition={{ duration: 0.5 }}
            className="bg-secondary-light py-8 px-6 rounded-xl cursor-pointer flex items-center justify-center"
        >
            <Image src={img} alt="partner logo" width={170} />
        </motion.div>
    )
}
