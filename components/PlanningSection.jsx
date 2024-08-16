"use client"

import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import arrowr from "@/public/assets/arrowr.svg"
import { useCallback } from "react"
import { motion } from "framer-motion"

export default function PlanningSection() {

    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])


    return (
        <section className="flex w-full justify-center py-[96px] items-start">
            <div className="max-w-large-width w-full flex flex-col justify-center items-start">
                <h1 className="text-5xl font-bold w-[630px] mb-[48px] pl-[80px]">
                    HLKS-Planungsburo im schonen Fricktal
                </h1>
                <div className="w-full h-[70vh] relative overflow-x-hidden" ref={emblaRef}>
                    <div
                        className="flex gap-[20px] h-full w-full absolute">
                        <div className="cursor-pointer flex-[0_0_85%] text-white bg-[url(../public/assets/planning1.png)] bg-cover bg-center rounded-3xl h-full flex flex-col justify-end p-[40px] select-none">
                            <h3 className="text-4xl font-bold">Kundenorientiert</h3>
                            <p className=" text-2xl w-[500px] py-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="cursor-pointer flex-[0_0_85%] text-white bg-[url(../public/assets/planning2.png)] bg-cover bg-center rounded-3xl h-full flex flex-col justify-end p-[40px] select-none">
                            <h3 className="text-4xl font-bold">Kundenorientiert</h3>
                            <p className=" text-2xl w-[500px] py-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="mr-[20px] cursor-pointer flex-[0_0_85%] text-white bg-[url(../public/assets/planning3.png)] bg-cover bg-center rounded-3xl h-full flex flex-col justify-end p-[40px] select-none">
                            <h3 className="text-4xl font-bold">Kundenorientiert</h3>
                            <p className=" text-2xl w-[800px] py-[8px]">Fulfilling your unique needs is our passion. We attach great importance to keeping an eye on changes in the market and thus offering a comprehensive, individual range of services within the scope of our core competencies .t</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 mt-[20px] pl-[80px]">
                    <motion.button 
                        className="bg-primary-light rounded-full p-[12px]" 
                        onClick={scrollPrev}
                        whileTap={{scale: 0.9}}
                        whileHover={{scale: 1.1}}
                        >
                            <Image src={arrowr} alt="Next" className="rotate-[180deg]"/>
                    </motion.button>
                    <motion.button 
                        className="bg-primary-light rounded-full p-[12px]" 
                        onClick={scrollNext}
                        whileTap={{scale: 0.9}}
                        whileHover={{scale: 1.1}}
                        >
                        <Image src={arrowr} alt="Next"/>
                    </motion.button>
                </div>
            </div>
        </section>
    )
}
