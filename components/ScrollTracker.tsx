"use client"

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollTracker() {
    
    const { scrollYProgress } = useScroll() 
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="bg-primary-light h-2 rounded-full z-30 fixed top-0 left-0 right-0"
            style={{ scaleX }}
      />
    )
}