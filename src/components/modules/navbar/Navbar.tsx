import {
  ArrowLeft3,
  ArrowRight3,
  Notification,
  SearchNormal1,
  Setting2,
} from "iconsax-reactjs";
import Image from "next/image";
import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="w-full h-fit flex justify-between items-center mt-14 text-white px-10 ">
      <div className="flex gap-5">
        <div className="btns flex gap-3">
          <button className="bg-[#171717] text-white p-2 rounded-full">
            <ArrowLeft3 />
          </button>
          <button className="bg-[#171717] text-white p-2 rounded-full">
            <ArrowRight3 />
          </button>
        </div>
        <div className="searchbax w-[20rem] bg-[#171717] rounded-full relative hidden items-center md:flex ">
          <div className="absolute left-2  ">
            <SearchNormal1 size={20} />
          </div>
          <input
            type="text"
            className="w-full h-full rounded-full bg-transparent  pl-10 outline-none"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="">
        <div className="flex justify-between items-center gap-5">
          <div className="p-2 bg-[#171717] rounded-full">
            <div className="">
              <Notification />
            </div>
          </div>
          
          <div className="p-2 bg-[#171717] rounded-full">
            <div className="">
              <Setting2/>
            </div>
          </div>

          <div className="">
            <Image
              src="/aboutmeImage.JPG"
              alt="avatar"
              className="w-10 h-10 rounded-full"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
