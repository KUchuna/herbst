import MemberCard from "./MemberCard";
import edgar from "@/public/assets/edgar.jpg"
import ruby from "@/public/assets/ruby.jpg"
import golden from "@/public/assets/golden.jpg"

export default function PetsSection() {
    return (
        <section className="flex w-full justify-center pb-24 items-start font-lato px-20">
            <div className="max-w-large-width w-full flex flex-col justify-start items-start">
                <span className="text-primary-light text-lg font-bold">The Maskottchen</span>
                <h1 className="font-bold font-lora text-[2.5rem]">Unser Maskottchen</h1>
                <p className="pt-6 text-[#545454] text-xl w-[75%]">Unsere Feel-Good-Manager helfen uns, motiviert zu bleiben und uns darauf zu konzentrieren, unsere beste Arbeit zu leisten.</p>
                <div className="flex gap-8 mt-16">
                    <MemberCard 
                        img={ruby}
                        name="Ruby"
                        position="Mood Manager"
                    />
                    <MemberCard 
                        img={golden}
                        name="Bingo"
                        position="Mood Manager"
                    />
                    <MemberCard 
                        img={edgar}
                        name="Edgar"
                        position="Mood Manager Assistant"
                    />
                </div>
            </div>
        </section>
    )
}