'use client'
import MusicCard from "@/components/modules/MusicCard/MusicCard";
import React, { useEffect, useState } from "react";
 function Page() {
    const [AllMusics,setAllMusics] = useState([]);
  
    useEffect(()=>{
    const GetAllMusics = async () => {
        const res = await fetch(`/api/AllMusics`);
        const data = await res.json();
        setAllMusics(data)      
      };
      GetAllMusics()
  },[])

  return (
    <div className="w-full p-10  h-[90vh] overflow-auto ScrollerEffects   ">
        <div className="text-3xl font-bold text-white mb-5 ">
            discover more musics
        </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mb-20">
        {
            AllMusics.map((music:any) => (
                <MusicCard {...music} key={music.title}/>
            ))
        }   

      </div>
    </div>
  );
}

export default Page;
