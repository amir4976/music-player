"use client";
import LastUpload from "@/components/templates/index/LastUpload/LastUpload";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-[90vh]  overflow-auto p-10 ScrollerEffects ">
      <div className="w-full h-fit">
        <LastUpload />
      </div>
    </div>
  );
}
