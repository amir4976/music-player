import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import MusicCard from "@/components/modules/MusicCard/MusicCard";
type Music = {
  title: string;
  artist: string;
  cover: string;
  audio: string;
};

type Props = {
  allMusics: Music[]; // ✅ قابل خالی بودن هست
};

function MostPlayed({
  allMusics,
}: Props) {
  const music =allMusics.sort((a:any,b:any)=>b.plays-a.plays)
  console.log(music)
  return (
    <>
      <div className="text-2xl text-white ">
        most Played <span className="text-gray-500 text-xs">this week</span>
      </div>
      <div className="w-full h-fit max-md:flex  justify-center items-center  gap-3 p-5 rounded-lg">
        <Swiper
          spaceBetween={50}
          slidesPerView={7}
          loop={true}
          breakpoints={{
            1536: {
              slidesPerView: 7,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween:50
            },
            1024: {
              slidesPerView: 4,
              spaceBetween:40
            },
            768: {
              slidesPerView:2,
              spaceBetween:30
            },
            480: {
              slidesPerView: 2,
              spaceBetween:20
            },
            0: {
              slidesPerView: 1,

            },
          }}
        >
          {music.map((item, index) => (
            <SwiperSlide key={index}>
              <MusicCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default MostPlayed;
