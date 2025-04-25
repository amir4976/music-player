'use client'
import { setCurrentMusic } from "@/feature/MusicSlice";
import Image from "next/image";
import React from "react";
import { useSelector, useDispatch } from 'react-redux'
type Props = {
  title: string;
  artist: string;
  cover: string;
  audio: string;
};

function MusicCard({ title, artist,audio, cover }: Props) {
    const dispatch = useDispatch()
    const music = useSelector((state:any)=>state.music)


    const handleClick =()=>{
        dispatch(setCurrentMusic({title,artist,audio,cover}))
    }


  return (
    <>
      <div className="w-full  h-fit flex flex-col items-center gap-2 hover:bg-[#171717] rounded-xl p-3 transition-all" onClick={handleClick}>
        <div className="w-full h-full">
          <Image
            src={cover}
            alt={title}
            width={200}
            height={200}
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="text-white text-sm">{title}</div>
        <div className="text-gray-400 text-xs">{artist}</div>
      </div>
    </>
  );
}

export default MusicCard;
