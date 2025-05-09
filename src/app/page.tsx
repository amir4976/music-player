"use client";
import Navbar from "@/components/modules/navbar/Navbar";
import LastUpload from "@/components/templates/index/LastUpload/LastUpload";
import MostPlayed from "@/components/templates/index/mostPlayed/MostPlayed";
import { useEffect, useState } from "react";

export default function Home() {
  const [Musics, setMusics] = useState([]);
  useEffect(() => {
    const GetAllMusics = async () => {
      const res = await fetch(`/api/AllMusics`);
      const data = await res.json();
      setMusics(data);
      console.log(data);
    };
    GetAllMusics();
  }, []);

  return (
    <div className="bg-gradinent-before  relative rounded-lg overflow-hidden bg-[#121212] ">
      <div className="w-full  overflow-auto p-10 ScrollerEffects ">
        <div className="w-full h-fit flex flex-col gap-5 mb-10">
          <LastUpload allMusics={Musics} />
          <MostPlayed allMusics={Musics} />
        </div>
      </div>
    </div>
  );
}
