import AddressSection from "@/components/contactPage/address/AddressSection";
import FormSection from "@/components/contactPage/form/FormSection";
import dynamic from 'next/dynamic';


const MapSection = dynamic(() => import('@/components/contactPage/map/MapSection'), {
    ssr: false,
});

export default function Contact() {
    return (
        <main>
            <FormSection />
            <AddressSection />
            <MapSection />
        </main>
    )
}
