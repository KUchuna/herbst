import LandingCard from "./LandingCard.js"
import landing1 from "@/public/assets/landing1.png"
import landing2 from "@/public/assets/landing2.png"
import landing3 from "@/public/assets/landing3.png"
import landing4 from "@/public/assets/landing4.png"


export default function LandingSection() {

    return (
        <section className="flex w-full justify-center pt-[50px] p-large-x font-lato">
            <div className="max-w-large-width w-full flex flex-col justify-center items-center landing-bg pt-[115px]">
                <ul className="flex gap-[16px] mb-[100px]">
                    <li className="flex justify-center items-center rounded-[8px] landing-button" id="landing-button-1">
                        <a className="bg-white hover:bg-transparent hover:text-white transition-colors duration-200 py-[12px] px-[16px] w-full h-full rounded-[8px]">Heizungs</a>
                    </li>
                    <li className="flex justify-center items-center rounded-[8px] landing-button" id="landing-button-2">
                        <a className="bg-white hover:bg-transparent hover:text-white transition-colors duration-200 py-[12px] px-[16px] w-full h-full rounded-[8px]">Lüftungs</a>
                    </li>
                    <li className="flex justify-center items-center rounded-[8px] landing-button" id="landing-button-3">
                        <a className="bg-white hover:bg-transparent hover:text-white transition-colors duration-200 py-[12px] px-[16px] w-full h-full rounded-[8px]">Kälte</a>
                    </li>
                    <li className="flex justify-center items-center rounded-[8px] landing-button" id="landing-button-4">
                        <a className="bg-white hover:bg-transparent hover:text-white transition-colors duration-200 py-[12px] px-[16px] w-full h-full rounded-[8px]">Sanitäranlagen</a>
                    </li>
                </ul>
                <section className="flex w-full justify-between gap-[52px] items-end">
                    <div className="mb-[20px]">
                        <LandingCard 
                            img={landing1}
                            text="Fallstudie 1, Zürich"
                        />  
                    </div>
                    <div>
                        <LandingCard 
                            img={landing2}
                            text="Fallstudie 2, Zürich"
                        />  
                    </div>
                    <div className="mb-[50px]">
                        <LandingCard 
                            img={landing3}
                            text="Fallstudie 3, Zürich"
                        />  
                    </div>
                    <div>
                        <LandingCard 
                            img={landing4}
                            text="Fallstudie 4, Zürich"
                        />  
                    </div>
                </section>
            </div>
        </section>
    )
}