import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logos";
import HeaderInputs from "./HeaderInputs";

const Header: React.FC = () => {
  return (
    <header className="z-10 border-b-[1px] border-zinc-900 bg-neutral-950 py-8">
      <div className="container relative mx-auto flex items-center justify-between">
        <button className="absolute right-4 grid aspect-square w-10 rounded-full p-1 outline-none md:hidden">
          <span className="sr-only">toggle menu</span>
          <span className="mt-2 h-0.5 w-8 rounded-full bg-gray-300 transition-transform duration-100 ease-linear" />
          <span className="right-0 -mt-2	h-0.5 w-4 origin-center justify-self-end rounded-full bg-gray-300 transition-all duration-100 ease-linear" />
        </button>
        <div className="absolute -top-2 left-10 z-0 h-[116px] w-[276px] rounded-[276px] bg-sky-500 blur-[150px]"></div>
        <div className="absolute -top-2 left-10 z-0 h-[43px] w-[103px] rounded-[103px] bg-sky-500 blur-[40px]"></div>

        <div className="flex items-center">
          <Logo className="w-20 md:mr-10 md:w-auto" />
        </div>

        <HeaderInputs />

        <div className="flex items-center">
          <nav className="mr-6 hidden space-x-6 font-bold uppercase lg:flex">
            <Link href="#" className="text-gray-600 hover:text-white">
              Matches
            </Link>
            <Link href="#" className="text-gray-600 hover:text-white">
              Props
            </Link>
            <Link href="#" className="text-gray-600 hover:text-white">
              Tools
            </Link>
            <Link href="#" className="text-gray-600 hover:text-white">
              Pricing
            </Link>
            <Link href="#" className="text-gray-600 hover:text-white">
              Bonuses
            </Link>
          </nav>
          <button className="mr-3 hidden rounded-lg border-[1px] border-zinc-800 bg-transparent px-6 py-2 text-sm uppercase text-white transition-colors hover:bg-zinc-800 md:block">
            Sign Up
          </button>
          <button className="hidden rounded-lg border-[1px] border-zinc-800 bg-orange-600 px-6 py-2 text-sm uppercase text-white transition-colors hover:bg-orange-700 md:block">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
