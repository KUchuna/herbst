"use client"

import useEmblaCarousel from "embla-carousel-react"
import { EmblaCarouselType } from "embla-carousel"
import ProjectCard from "./ProjectCard.tsx"
import project1 from "@/public/assets/projects1.png"
import project2 from "@/public/assets/projects2.png"
import project3 from "@/public/assets/projects3.png"
import project4 from "@/public/assets/projects4.png"
import project5 from "@/public/assets/projects5.png"
import { useCallback, useEffect, useState } from "react"
import { motion } from "framer-motion"
import arrowr from "@/public/assets/arrowr.svg"
import Image from "next/image"

const projects = [
    {
        buildingDone: true,
        address: "Fallstudie 1, Zürich",
        img: project1
    },
    {
        buildingDone: false,
        address: "Fallstudie 2, Zürich",
        img: project2,
    },
    {
        buildingDone: false,
        address: "Fallstudie 3, Zürich",
        img: project3,
    },
    {
        buildingDone: true,
        address: "Fallstudie 4, Zürich",
        img: project4,
    },
    {
        buildingDone: false,
        address: "Fallstudie 5, Zürich",
        img: project5,
    },
]

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
                <div className="flex gap-[20px] h-full w-full absolute pl-20">
                    {projects.map((card) => (
                        <ProjectCard
                            key={card.address}
                            img={card.img}
                            address={card.address}
                            buildingDone={card.buildingDone}
                        />
                    ))}
                </div>
            </div>
            <div className="flex gap-3 mt-8 pl-20">
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