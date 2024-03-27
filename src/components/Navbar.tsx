"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { DialogDemo } from "./Contact";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleNav = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <nav className="fixed z-50 w-screen">
      <div className="flex items-center justify-between rounded-sm bg-white shadow-sm shadow-slate-200 py-3 px-[150px]">
        <div className="flex flex-shrink-0 items-center justify-between">
          <Image
            // className="mx-10"
            src="/logo1.png"
            alt="alt"
            width={80}
            height={40}
          />
          <span className="text-3xl tracking-tight px-3">Astrolger</span>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((item, index) => (
              <li key={index}>
                <Link
                  className="text-lg hover:text-orange-400 font-semibold"
                  href={item.url}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <DialogDemo />
            </li>
          </ul>
        </div>
        <div className="hidden text-lg lg:flex">
          <Button
            variant="outline"
            className="mr-2 hover:bg-orange-400 hover:font-bold"
          >
            Sign In
          </Button>
          <Button
            variant="outline"
            className="mr-2 hover:bg-orange-400 hover:font-bold"
          >
            Sign Up
          </Button>
        </div>
        <div className="flex-col justify-end md:flex lg:hidden ">
          <Button onClick={toggleNav}>{mobileMenu ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {mobileMenu && (
        <div className="rounded-md shadow-sm shadow-slate-200 bg-slate-100 lg:hidden">
          <ul className="flex flex-col items-center">
            {NAV_LINKS.map((item, index) => (
              <li key={index} className="py-6">
                <Link
                  className="text-lg hover:text-orange-400 font-semibold"
                  href={item.url}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li className="mb-5">
              <DialogDemo />
            </li>
          </ul>
          <div className="flex items-center justify-center pb-8 lg:hidden">
            <Button
              variant="outline"
              className="mr-2 hover:bg-orange-400 hover:font-bold"
            >
              Sign In
            </Button>
            <Button
              variant="outline"
              className="mr-2 hover:bg-orange-400 hover:font-bold"
            >
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
