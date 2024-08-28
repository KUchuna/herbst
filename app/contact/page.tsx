import ContactAddress from "@/components/contactPage/contactAddress/ContactAddress";
import ContactSection from "@/components/contactPage/contactForm/ContactSection";
import dynamic from 'next/dynamic';


const MapSection = dynamic(() => import('@/components/contactPage/map/MapSection'), {
    ssr: false,
});

export default function Contact() {
    return (
        <main>
            <ContactSection />
            <ContactAddress />
            <MapSection />
        </main>
    )
}
