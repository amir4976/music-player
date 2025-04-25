import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
type Props = {};

function LastUpload({}: Props) {
  const music = [
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      cover: "/testCovers/Blinding Lights.png",
    },
    {
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      cover: "/testCovers/Watermelon Sugar.png",
    },
    {
      title: "Dance Monkey",
      artist: "Tones and I",
      cover: "/testCovers/Dance Monkey.jpg",
    },
    {
      title: "Someone You Loved",
      artist: "Lewis Capaldi",
      cover: "/testCovers/Someone You Loved.jpg",
    },
    {
      title: "Circles",
      artist: "Post Malone",
      cover: "/testCovers/Circles.jpg",
    },
    {
      title: "Don't Start Now",
      artist: "Dua Lipa",
      cover: "/testCovers/Don't Start Now.png",
    },
    {
      title: "Levitating",
      artist: "Dua Lipa",
      cover: "/testCovers/Levitating.jpg",
    },
    {
      title: "Stay",
      artist: "The Kid LAROI & Justin Bieber",
      cover: "/testCovers/Stay.png",
    },
  ];
  return (
    <>
      <div className="text-2xl text-white ">
        Last Uploaded <span className="text-gray-500 text-xs">this week</span>
      </div>
      <div className="w-full h-fit flex justify-center items-center  gap-3 bg-[#171717] p-5 rounded-lg">
        <Swiper
          spaceBetween={50}
          slidesPerView={7}
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
            <SwiperSlide key={index} className="flex w-full  justify-center items-center">
              <div className="w-40 max-md:w-full h-fit flex flex-col items-center gap-2 justify-center">
                <div className="w-full h-full">
                  <Image
                    src={item.cover}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="text-white text-sm">{item.title}</div>
                <div className="text-gray-400 text-xs">{item.artist}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default LastUpload;
