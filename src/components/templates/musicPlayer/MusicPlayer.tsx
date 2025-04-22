"use client";

import {
  ArrowLeft3,
  ArrowRight3,
  Pause,
  Play,
  Repeat,
  Shuffle,
  VolumeHigh,
} from "iconsax-reactjs";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

function MusicPlayer({}: Props) {
  const musicRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0); // مدت کل آهنگ
  const [currentTime, setCurrentTime] = useState<number>(0); // تایم فعلی پخش
  const [currentPercentage ,setCurrentPercentage ] = useState<number>(0);
  
 
  useEffect(() => {
    const audio = musicRef.current;
    if (!audio) return;

    // وقتی متادیتای آهنگ لود شد، مدت زمان کل رو ذخیره کن
    const handleLoadedMetadata = () => {
      if (!isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    // وقتی آهنگ قابل پخش شد، هم دوباره چک کن
    const handleCanPlayThrough = () => {
      if (!isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    // هنگام تغییر زمان، تایم فعلی رو آپدیت کن
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("canplaythrough", handleCanPlayThrough);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  // فرمت‌دهی زمان به شکل دقیقه:ثانیه
  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const getCurrentTimePercentage = () => {
    if (!musicRef.current || duration === 0) return 0;
    const percentage = (musicRef.current.currentTime / duration) * 100;
    return percentage;
  };
  const percentage = getCurrentTimePercentage();

  // پخش آهنگ
  const play = () => {
    const audio = musicRef.current;
    if (!audio) return;
    audio.play();
    audio.volume = 0.1;
    setIsPlaying(true);

    // اگه هنوز duration ثبت نشده، الان چکش کن
    if (!isNaN(audio.duration)) {
      setDuration(audio.duration);
    }
  
  };

  // توقف پخش
  const pause = () => {
    musicRef.current?.pause();
    setIsPlaying(false);
  };



  const goToDuration = (event: React.MouseEvent<HTMLDivElement>) => {
   
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const XPrecntage = (x / rect.width) * 100;
      musicRef.current!.currentTime = (XPrecntage / 100) * duration;
      console.log(`Clicked at x: ${XPrecntage}`);
  
  }
  return (
    <>
      <div className="fixed bottom-0 w-full h-24 bg-[#202020] text-white flex items-center justify-between px-10 max-md:px-4">
        {/* اطلاعات آهنگ */}
        <div className="flex items-center gap-4 max-md:w-full max-lg:px-0">
          <div className="w-14 h-14 rounded-full bg-white"></div>
          <div className="flex flex-col">
            <p className="text-xl font-semibold">Song Name...</p>
            <p className="text-sm text-gray-400">Artist Name</p>
          </div>
        </div>

        {/* دکمه‌های کنترلی */}
        <div className="flex items-center gap-2">
          <ArrowLeft3 size="32" color="#fff" />
          {!isPlaying ? (
            <div
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer"
              onClick={play}
            >
              <Play size="24" color="#000" variant="Bold" />
            </div>
          ) : (
            <div
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer"
              onClick={pause}
            >
              <Pause size="24" color="#000" variant="Bold" />
            </div>
          )}
          <ArrowRight3 size="32" color="#fff" />
        </div>

        {/* نوار پیشرفت + زمان‌ها */}
        <div className="flex items-center gap-4 w-[40rem] max-lg:hidden">
          <span className="text-sm">{formatTime(currentTime)}</span>

        <div className="relative w-full">
        <div className={`circle w-3 h-3  bg-white border border-gray-300 rounded-full absolute -top-1`} style={{left:`${percentage-0.5}%`}}></div>
          <div className="w-full h-1 bg-white cursor-pointer  rounded-full overflow-hidden" onClick={goToDuration}>
            <div
              className="h-full bg-red-500"
              style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
            ></div>
          </div>
        </div>

          <span className="text-sm">{formatTime(duration)}</span>
        </div>

        {/* کنترل‌های اضافه */}
        <div className="flex items-center gap-4 max-md:hidden">
          <button className="p-2 bg-gray-800/50 rounded-full">
            <Repeat size="20" color="#FF8A65" variant="Bold" />
          </button>
          <button className="p-2 bg-gray-800/50 rounded-full">
            <Shuffle size="20" color="#fff" variant="Bold" />
          </button>

          <div className="relative">
            <div className="w-full h-24 absolute flex justify-center py-5 -top-full -translate-y-1/2 left-0 bg-gray-800/50 rounded-full overflow-hidden">
            <div className="w-1 h-full bg-white"></div>
            
            </div>
            <button className="p-2 bg-gray-800/50 rounded-full" >
              <VolumeHigh size="20" color="#fff" variant="Bold" />
            </button>
          </div>
        </div>
      </div>

      {/* پلیر مخفی */}
      <audio
        src="https://dl.rozmusic.com/Music/1403/12/06/Aron%20Afshar%20-%20Jaan%20Jaan%20%28128%29.mp3"
        ref={musicRef}
        preload="metadata"
        className="hidden"
      ></audio>
    </>
  );
}

export default MusicPlayer;
