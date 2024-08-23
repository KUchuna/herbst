import NewsLetterForm from "./NewsLetterForm.tsx"

export default function NewsLetterSection() {
    return (
        <section className="flex w-full justify-center px-20 py-24 items-start font-lora">
            <div className="max-w-large-width w-full flex flex-col justify-center items-center py-20 bg-secondary-light rounded-[32px]">
                <h1 className="text-5xl font-bold mb-4">
                    Newsletter abonnieren
                </h1>
                <p className="font-lato text-[#545454] mb-4">
                    Für aktuelle Informationen melden Sie sich für unseren Newsletter an.
                </p>
                <NewsLetterForm />
            </div>
        </section>
    )
}