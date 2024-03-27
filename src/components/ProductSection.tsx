"use client";
import React from "react";
import { CarouselPlugin } from "./Carousel";
import Slider from "./Slider";
import Image from "next/image";
import pro from "/public/pro.png";

const ProductSection = () => {
  return (
    <>
      <p
        id="products"
        className="hero text-white text-6xl text-center hidden lg:flex py-10 lg:justify-center"
      >
        Our Products
      </p>
      <div className="hero flex flex-col lg:flex-row justify-center items-center lg:items-start min-h-screen p-10 lg:px-10">
        <p className="hero text-white text-6xl text-center lg:p-10 p-10 lg:hidden">
          Products
        </p>
        <Slider />
        <div className="flex-col justify-center items-stretch ">
          <Image
            src={pro}
            alt="alt"
            width={200}
            height={200}
            className="mx-10 hidden lg:flex"
          />
        </div>
      </div>
    </>
  );
};

export default ProductSection;
