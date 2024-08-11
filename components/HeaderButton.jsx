"use client"

import { motion } from "framer-motion";

export default function HeaderButton() {
    return (
        <motion.a 
        whileTap={{scale: 0.9}}
        className='bg-primary-light text-white ml-[172px] py-[12px] px-[16px] rounded-xl' href='/contact'>
            Kontakt
        </motion.a>
    )
}