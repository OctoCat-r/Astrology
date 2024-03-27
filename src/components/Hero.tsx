import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
const Hero = () => {
  return (
    <div className="hero flex flex-col lg:flex-row px-6 sm:px-8 md:px-6 lg:px-12 xl:px-48 min-h-screen items-center justify-center py-10">
      <div className="h-1/2 lg:h-full  flex flex-col gap-5 py-10 mt-20 ">
        <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-sherif from-neutral-100 font-semibold ">
          Ultimate guide to Astrology
        </h1>
        <h1 className="text-white font-thin text-2xl font-sherif">
          ब्रह्मांड से जुड़ाव, शुभ-अशुभ का संकेत, निर्णय लेने में सहायता, ज्योतिष
          एक अनोखी दृष्टि है।
        </h1>
      </div>

      <div className="h-1/2 lg:h-full  relative mt-20 ">
        <Image src="/back.png" alt="alt" width={680} height={50} />
      </div>
    </div>
  );
};

export default Hero;
