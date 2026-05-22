import Image from "next/image";
import FloatingWhatsApp from "@/components/floatingwhatsapp/floatingwhatsapp";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer/footers';
import Faq from '@/components/faq/faq';
import Hero from "@/components/hero/hero";
import Services from '@/components/services/sevices';
import Benifits from "@/components/benifits/benifits";
import HowItWorks from "@/components/how_it_works/how_it_works";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <>
    <main>
      <Hero/>
      <Services/>
      <Benifits/>
      <HowItWorks/>
      <Testimonials/>
      <FloatingWhatsApp />
      <Faq/>
    </main>
    
    </>
  );
}
