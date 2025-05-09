"use client";
import {
  ElementPlus,
  Heart,
  Home,
  House,
  House2,
  Map,
  Map1,
} from "iconsax-reactjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

function ASideBar({}: Props) {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <>
      <button
        className="absolute left-5 z-10  text-white top-2 text-3xl "
        onClick={() => setIsShow((prev) => (prev ? false : true))}
      >
        ...
      </button>

      <aside
        className={`w-72 h-[82vh]  hidden  md:w-72  lg:flex    bg-[#121212] `}
      >
        <div className=" w-72   left-0 top-0">
          <div className=" h-full   bg-[#121212] text-white">
            <div className="flex gap-2 w-full justify-center  items-center text-white my-5 mt-14">
              <div className="logo w-10 h-10">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  className=" w-full h-full"
                  width={50}
                  height={50}
                />
              </div>
              <div className=" text-xl font-bold uppercase">potify</div>
            </div>

            <div className="w-full mt-20  ">
              <ul className="flex flex-col gap-2 [&>li]:text-white [&>li]:text-lg [&>li]:font-semibold [&>li]:py-2 [&>li]:px-6   [&>li]:cursor-pointer [&>li]:flex [&>li]:gap-3  ">
                <li className="hover:bg-black/50">
                  <Link href={"/"} className="flex gap-2 w-full h-full">
                    <Home variant="Bold" />
                    Home
                  </Link>
                </li>
                <li className="hover:bg-black/50">
                  <Link href={"/Browse"} className="flex gap-2 w-full h-full">
                    <Map1 variant="Bold" />
                    Browse
                  </Link>
                </li>

                <li className="hover:bg-black/50">
                  <Link href={"/Albums"} className="flex gap-2 w-full h-full">
                    <Map1 variant="Bold" />
                    Albums
                  </Link>
                </li>
              </ul>
              <div className="px-6">
                <div className="border-b text-white text-xs font-semibold py-2 my-5">
                  Library
                </div>
              </div>
              <ul className="flex flex-col gap-2 [&>li]:text-white [&>li]:text-lg [&>li]:font-semibold [&>li]:py-3 [&>li]:px-6   [&>li]:cursor-pointer [&>li]:flex [&>li]:gap-3 ">
                <li className="hover:bg-black/50">
                  <Heart />
                  favorite
                </li>
                <li className="hover:bg-black/50">
                  <ElementPlus />
                  add collection...
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>

      {/* mobile menu */}
      <aside
        className={`w-72   bg-[#121212]  absolute left-0 top-0 h-screen z-5 ${
          isShow ? "flex" : "hidden"
        }`}
      >
        <div className=" w-72  left-0 top-0">
          <div className="  h-screen bg-[#121212] text-white">
            <div className="flex gap-2 w-full justify-center  items-center text-white my-5 mt-10">
              <div className="logo w-14 h-14">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  className=" w-full h-full"
                  width={100}
                  height={100}
                />
              </div>
              <div className=" text-3xl font-bold uppercase">potify</div>
            </div>

            <div className="w-full mt-20  ">
              <ul className="flex flex-col gap-2 [&>li]:text-white [&>li]:text-lg [&>li]:font-semibold [&>li]:py-2 [&>li]:px-6   [&>li]:cursor-pointer [&>li]:hover:bg-gray-800">
                <li className="bg-gray-700/50">Home</li>
                <li>Browse</li>
              </ul>
              <div className="px-6">
                <div className="border-b text-white text-xs font-semibold py-2 my-5">
                  Library
                </div>
              </div>
              <ul className="flex flex-col gap-2 [&>li]:text-white [&>li]:text-lg [&>li]:font-semibold [&>li]:py-2 [&>li]:px-6   [&>li]:cursor-pointer [&>li]:hover:bg-gray-800">
                <li>favorite</li>
                <li>add more...</li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default ASideBar;
