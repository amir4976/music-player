"use client";

import AlbumHeader from "@/components/templates/Albums/AlbumHeader";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import MusicList from "@/components/templates/Albums/MusicList";

function Page() {
  const { id } = useParams();

  const router = useRouter();
  const [album, setAlbum] = React.useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(id);
        const response = await fetch(`/api/Albums/${id}`);
        if (!response.ok) {
          console.log("Album not found");
          // return router.push("/not-found");
        }
        const data = await response.json();
        setAlbum(data.findAlbum);
        // Continue with your code using data.album
      } catch (error) {
        console.error("Error fetching album:", error);
      }
    };

    // فراخوانی تابع fetchData
    fetchData();
  }, [id, router]);

  return (
    <div className="w-full  rounded-lg overflow-hidden">
      <AlbumHeader {...album} />
      <MusicList {...album} />
    </div>
  );
}

export default Page;
