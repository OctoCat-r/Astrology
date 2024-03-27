"use client";
import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PRODUCTS } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-lg"
    >
      <CarouselContent>
        {PRODUCTS.map((item, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 flex w-full"
          >
            <div className="p-1 flex">
              <Card>
                <CardContent className="flex-row aspect-square items-center justify-center p-2">
                  {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={500}
                    className="rounded-md"
                  />
                  <span className="text-white text-center text-sm">
                    {item.name}
                  </span>
                </CardContent>
              </Card>
            </div>

            {/* <div
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
                  <span className="mb-5 text-sm">{item.name}</span>
                </div>
              </div>
            </div> */}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
