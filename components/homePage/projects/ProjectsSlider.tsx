"use client"

import useEmblaCarousel from "embla-carousel-react"
import { EmblaCarouselType } from "embla-carousel"
import ProjectCard from "./ProjectCard.tsx"
import projects from "@/lib/datas/projects.js"
import { useCallback, useEffect, useState } from "react"
import { motion } from "framer-motion"
import arrowr from "@/public/assets/arrowr.svg"
import Image from "next/image"


export default function ProjectsSlider() {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(false)
    const [emblaRef, emblaApi] = useEmblaCarousel()
    
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])

      const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
      }, [])
    
      useEffect(() => {
        if (!emblaApi) return
    
        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
      }, [emblaApi, onSelect])


    return (
        <div className="w-full">
            <div className="w-full h-[19rem] relative overflow-x-hidden font-lato" ref={emblaRef}>
                <div className="flex gap-5 h-full w-full absolute">
                    {projects.slice(0,5).map((card) => (
                        <ProjectCard
                            key={card.id}
                            id={card.id}
                            img={card.images[0]}
                            title={card.title}
                            type={card.type}
                        />
                    ))}
                </div>
            </div>
            <div className="flex gap-3 mt-8">
                <motion.button 
                    className={`rounded-full select-none p-[12px] ${prevBtnDisabled ? "bg-[#efb797] pointer-events-none" : "bg-primary-light"}`} 
                    onClick={scrollPrev}
                    whileTap={{scale: 0.9}}
                    whileHover={{scale: 1.1}}
                    disabled={prevBtnDisabled}
                    >
                        <Image src={arrowr} alt="back" className="rotate-[180deg]"/>
                </motion.button>
                <motion.button 
                    className={`rounded-full select-none p-[12px] ${nextBtnDisabled ? "bg-[#efb797] pointer-events-none" : "bg-primary-light"}`} 
                    onClick={scrollNext}
                    whileTap={{scale: 0.9}}
                    whileHover={{scale: 1.1}}
                    disabled={nextBtnDisabled}
                    >
                    <Image src={arrowr} alt="next"/>
                </motion.button>
            </div>
        </div>
    )
}