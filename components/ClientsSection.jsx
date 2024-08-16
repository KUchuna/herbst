"use client"

import { motion } from "framer-motion"

export default function ClientsSection() {
    return (
        <section className="flex w-full justify-center py-[96px] p-large-x font-lora">
            <div className="max-w-large-width w-full flex flex-col justify-center items-start mt-[100px]">
                <h1 className="text-5xl font-bold">
                    Unsere Auftraggeber sind
                </h1>
                <div className="pt-[48px] flex gap-[32px]">
                    <div>
                        <h3 className="border-l-[2px] border-[#DA4741] pl-[12px] font-bold text-3xl">Investoren</h3>
                        <p className="pt-[8px] pl-[12px] text-[#545454] text-xl font-lato">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                    <div>
                        <h3 className="border-l-[2px] border-[#DA4741] pl-[12px] font-bold text-3xl">Architekten</h3>
                        <p className="pt-[8px] pl-[12px] text-[#545454] text-xl font-lato">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                    <div>
                        <h3 className="border-l-[2px] border-[#DA4741] pl-[12px] font-bold text-3xl">Bauherren</h3>
                        <p className="pt-[8px] pl-[12px] text-[#545454] text-xl font-lato">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                </div>
                <motion.button
                whileTap={{scale: 0.9}}
                className="mt-[56px] py-[12px] px-[16px] bg-primary-light rounded-xl text-white font-lato">
                    Zum Kontakt
                </motion.button>
            </div>
        </section>
    )
}