import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { DialogDemo } from "./Contact";
const About = () => {
  return (
    <div
      id="about"
      className="about flex flex-col lg:flex-row px-10 sm:px-8 md:px-12 lg:px-24 xl:px-48 min-h-screen items-center justify-center"
    >
      <div className="h-1/2 lg:h-full lg:w-1/2 relative mb-8">
        <Image
          className="object-contain"
          src="/Hero1.png"
          alt="alt"
          width={400}
          height={50}
        />
      </div>
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-1 py-10">
        <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-sherif from-neutral-100 font-semibold ">
          About Me
        </h1>
        <span className="font-thin font-mono text-white text-sm mb-6 hover:text-orange-400 hover:text-md">
          - Jyotish Gyan Kumar Tripathi
        </span>

        <h1 className="text-white font-thin text-lg font-sherif mb-6">
          <span className="font-bold font-mono">
            Curious about your future? Wondering what the stars hold for you?{" "}
          </span>
          For generations, our ancestors looked to the skies for guidance. As
          your astrologer, I follow that ancient tradition. Using the wisdom of
          Jyotish (Vedic astrology), I can interpret the language of the planets
          at your birth. This knowledge unveils your strengths, challenges, and
          hidden aspects. Lets unlock your personal cosmic map together. By
          understanding the stars influence, you can navigate lifes journey with
          greater awareness and purpose.
        </h1>
        {/* <Button
          variant="outline"
          className="bg-orange-300 font-semibold border-black hover:border-white hover:border-2 mr-96"
        >
          Contact Now
        </Button> */}
        <DialogDemo value={1} />
      </div>
    </div>
  );
};

export default About;
