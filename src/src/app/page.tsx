import Image from "next/image";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer/footers';
import Faq from '@/components/faq/faq';
import Hero from "@/components/hero/hero";
import Services from '@/components/services/sevices';

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Faq/>
    <Footer/>
    </>
  );
}
