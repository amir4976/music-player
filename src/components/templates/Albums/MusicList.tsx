'use client'
import { setCurrentMusic } from "@/feature/MusicSlice";
import { Timer, Timer1 } from "iconsax-reactjs";
import { set } from "mongoose";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, UseDispatch } from "react-redux";
type Props = {
  saccondColor: string;
  musics: any;
  title: string;
};

function MusicList({ saccondColor, musics ,title}: Props) {

  const [allMusics, setAllMusics] = React.useState([]);
  useEffect(()=>{
    musics ? setAllMusics(musics) : setAllMusics([])
  },[musics])
  const dispatch = useDispatch()

  const play =({title , artist , audio , cover}:{title:string,artist:string,audio:string,cover:string})=>{
     dispatch(setCurrentMusic({title,artist,audio,cover}))
  }

  return (
    <div className="relative w-full h-fit bg-[#121212] ">
      <div
        className="absolute w-full h-[200px] left-0 top-0 z-[1] "
        style={{
          background: `linear-gradient(to bottom, ${saccondColor} 0%, rgba(0,0,0,0) 80%)`,
          opacity: 0.7,
        }}
      ></div>
      <div className={`relative z-[2] p-10 `}>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm text-left text-gray-400">
            <thead className="text-xs text-gray-100 uppercase border-b border-gray-500">
              <tr>
                <th className="px-6 py-3"># title</th>
                <th className="px-6 py-3">album</th>
                <th className="px-6 py-3">Data added</th>
                <th className="px-6 py-3">
                  <Timer1 />
                </th>
              </tr>
            </thead>
            <tbody>
              {allMusics.map((music: any) => {
                return (
                  <tr className="bg-transparent " key={music._id} onClick={()=>play(music)}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-14 h-14 rounded-lg overflow-hidden ">
                          <Image
                            alt="cover"
                            src={music.cover}
                            width={300}
                            height={300}
                          />
                        </div>
                        <div className="flex flex-col ml-2">
                          <p className="text-white font-bold ">{music.title}</p>
                          <p>{music.author}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{title}</td>
                    <td className="px-6 py-4">{new Date(music.createdAt).getFullYear()}</td>
                    <td className="px-6 py-4">{music.duration}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MusicList;
