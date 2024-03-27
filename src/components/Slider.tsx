import * as React from "react";
import Image from "next/image";
import { PRODUCTS } from "@/constants";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { DialogDemo } from "./Contact";

export interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

export default function Slider() {
  return (
    <ScrollArea className="products w-3/4  rounded-md h-full bg-black">
      <div className="flex w-max gap-10 p-10">
        {PRODUCTS.map((item, index) => (
          <figure key={index} className="shrink-0">
            {/* <div className="overflow-hidden rounded-md">
              <Image
                src={artwork.image}
                alt={`Photo by ${artwork.name}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground overflow-hidden text-wrap text-white">
                {artwork.name}
              </span>
            </figcaption> */}
            <div
              key={index}
              className="w-full  flex justify-center items-center"
            >
              <div className="inline-block bg-white rounded-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={250}
                  height={250}
                />
                <div className="text-center mb-2">
                  <h6 className="mb-2 mt-2 font-medium">{item.name}</h6>
                  <span className="mb-5 text-sm mr-2">To Buy </span>
                  {/* <Button
                    variant="outline"
                    className="hover:bg-orange-300 border-orange-300 p-1"
                  >
                    Contact Now
                  </Button> */}
                  <DialogDemo value={2} />
                </div>
              </div>
            </div>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
