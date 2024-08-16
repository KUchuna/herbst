"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import arrowr from "@/public/assets/arrowr.svg"

export default function PlanningSection() {

   
    return (
        <section className="flex w-full justify-center py-[96px] items-start p-large-x">
            <div className="max-w-large-width w-full flex flex-col justify-center items-start">
                <h1 className="text-5xl font-bold font-[palatino] w-[630px] mb-[48px]">
                    HLKS-Planungsburo im schonen Fricktal
                </h1>
                <div className="w-full h-[570px] relative overflow-x-auto rounded-3xl">
                    <div
                        className="flex h-full w-full absolute">
                        <div className="cursor-pointer flex-[0_0_85%] text-white bg-[url(../public/assets/planning1.png)] bg-cover bg-center rounded-3xl h-full flex flex-col justify-end p-[40px] select-none">
                            <h3 className="text-4xl font-[palatino] font-bold">Kundenorientiert</h3>
                            <p className="font-[palatino] text-2xl w-[500px] py-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="flex-[0_0_48px]"></div>
                        <div className="cursor-pointer flex-[0_0_85%] text-white bg-[url(../public/assets/planning2.png)] bg-cover bg-center rounded-3xl h-full flex flex-col justify-end p-[40px] select-none">
                            <h3 className="text-4xl font-[palatino] font-bold">Kundenorientiert</h3>
                            <p className="font-[palatino] text-2xl w-[500px] py-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="flex-[0_0_48px]"></div>
                        <div className="cursor-pointer flex-[0_0_85%] text-white bg-[url(../public/assets/planning3.png)] bg-cover bg-center rounded-3xl h-full flex flex-col justify-end p-[40px] select-none">
                            <h3 className="text-4xl font-[palatino] font-bold">Kundenorientiert</h3>
                            <p className="font-[palatino] text-2xl w-[800px] py-[8px]">Fulfilling your unique needs is our passion. We attach great importance to keeping an eye on changes in the market and thus offering a comprehensive, individual range of services within the scope of our core competencies .t</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 mt-[20px]">
                    <button className="bg-primary-light rounded-full p-[12px]"><Image src={arrowr} alt="Next" className="rotate-[180deg]"/></button>
                    <button className="bg-primary-light rounded-full p-[12px]"><Image src={arrowr} alt="Next"/></button>
                </div>
            </div>
        </section>
    )
}
