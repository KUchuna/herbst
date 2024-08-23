import ReviewCard from "./ReviewCard";
import review1 from "@/public/assets/review1.png"
import review2 from "@/public/assets/review2.png"
import review3 from "@/public/assets/review3.png"


export default function ReviewsSection() {
    return (
        <section className="flex w-full justify-center py-24 items-start font-lora">
            <div className="max-w-large-width px-20 w-full flex flex-col justify-center items-start">
                <h1 className="text-5xl font-bold max-w-[50%]">Rezensionen, auf die wir stolz sind</h1>
                <div className="pt-12 flex gap-8">
                    <ReviewCard 
                        img={review1}
                        name="Jane Doe"
                        project="Project"
                    />
                    <ReviewCard 
                        img={review2}
                        name="Jhon Doe"
                        project="Project"
                    />
                    <ReviewCard 
                        img={review3}
                        name="Jessica Doe"
                        project="Project"
                    />
                </div>
            </div>
        </section>
    )
}