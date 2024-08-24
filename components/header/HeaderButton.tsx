"use client"

import { motion } from "framer-motion";

export default function HeaderButton({styles}: {styles: string}) {
    return (
        <motion.a 
        whileTap={{scale: 0.9}}
        className={styles} href='/contact'>
            Kontakt
        </motion.a>
    )
}