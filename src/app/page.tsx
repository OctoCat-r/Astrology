import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Horoscope from "@/components/Horoscope";
import Pricing from "@/components/Pricing";
import { CarouselPlugin } from "@/components/Carousel";
import ProductSection from "@/components/ProductSection";

import FAQs from "@/components/FAQ";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <div className="w-full bg-slate-500 p-[1px]"></div>
      <Pricing />
      <div className="w-full bg-slate-500 p-[1px]"></div>
      <Horoscope />
      {/* <div className="w-full bg-slate-500 p-[1px]"></div> */}
      <ProductSection />
      <FAQs />
      <Footer />
    </>
  );
}
