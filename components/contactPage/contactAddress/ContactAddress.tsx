export default function ContactAddress() {
    return (
        <section className="flex w-full justify-center py-[96px] p-large-x font-lora">
            <div className="max-w-large-width w-full flex justify-between gap-2 items-start mt-[100px]">
                <div>
                    <h3 className="border-l-[2px] border-[#DA4741] pl-[12px] font-bold text-3xl">Chatten Sie mit uns</h3>
                    <address className="pt-2 pl-3 not-italic text-primary-light underline text-xl font-lato">
                        <a href="mailto:info@example.ge">info@example.ge</a>
                    </address>
                </div>
                <div>
                    <h3 className="border-l-[2px] border-[#DA4741] pl-[12px] font-bold text-3xl">Besuchen Sie uns</h3>
                    <address className="pt-2 pl-3 not-italic text-primary-light text-xl font-lato">
                    Tbilisi 69 <br />999 Saburtalo<br />Pekini
                    </address>
                </div>
                <div>
                    <h3 className="border-l-[2px] border-[#DA4741] pl-[12px] font-bold text-3xl">Rufen Sie uns an</h3>
                    <address className="pt-2 pl-3 not-italic text-primary-light underline text-xl font-lato">
                    <a href="tel:555555555">555 555 55 55</a>
                    </address>
                </div>
            </div>
        </section>
    )
}