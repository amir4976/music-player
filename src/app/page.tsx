"use client";
import LastUpload from "@/components/templates/index/LastUpload/LastUpload";
import MostPlayed from "@/components/templates/index/mostPlayed/MostPlayed";


export default function Home() {
  return (
    <div className="w-full h-[90vh]  overflow-auto p-10 ScrollerEffects ">
      <div className="w-full h-fit flex flex-col gap-5 mb-10">
        <LastUpload />
        <MostPlayed/>
      </div>
    </div>
  );
}
