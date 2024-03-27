import { FOOTER, NAV_LINKS } from "@/constants";
import { FacebookIcon, InstagramIcon, PhoneCallIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className=" text-black py-10 flex-col">
      {/* <div className="container mx-auto"> */}
      <div className="flex flex-wrap border-b border-neutral-700 justify-evenly items-center">
        <h2 className="font-bold text-5xl text-orange-400">
          Astrolger{" "}
          <div className="flex flex-wrap gap-4 my-5">
            <FacebookIcon />
            <InstagramIcon />
            <PhoneCallIcon />
          </div>
        </h2>
        {/* <p className="lg:max-w-sm text-sm">{FOOTER.description}</p> */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-10">
          {NAV_LINKS.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className="font-semibold uppercase pb-4 flex gap-6 justify-between"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Footer;
