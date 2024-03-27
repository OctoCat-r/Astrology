import { FEATURED_PROPERTIES } from "@/constants";
import React from "react";
import Image from "next/image";
const Horoscope = () => {
  return (
    <div
      id="horoscope"
      className="horoscope flex flex-col lg:flex-row px-6 sm:px-8 md:px-10 lg:px-10 xl:px-48 min-h-screen items-center justify-between gap-10 pt-24 pb-24"
    >
      {/* Heading */}

      <h2 className="text-center text-6xl sm:text-4xl lg:text-5xl uppercase text-white hover:text-orange-400 text-pretty mb-5">
        {" "}
        Horoscope Forecast
      </h2>

      {/* Images */}

      <div className="flex flex-wrap">
        {FEATURED_PROPERTIES.map((item, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 mb-5 flex justify-center items-center"
          >
            <div className="inline-block bg-white rounded-lg">
              <Image
                src={item.image}
                alt={item.name}
                width={150}
                height={150}
              />
              <div className="text-center mb-2">
                <h6 className="mb-2 mt-2 font-medium">{item.name}</h6>
                <span className="mb-5 text-sm">{item.months}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Horoscope;
