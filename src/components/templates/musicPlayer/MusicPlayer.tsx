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
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
type Props = {};

function MusicPlayer({}: Props) {
  const musicRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0); // مدت کل آهنگ
  const [currentTime, setCurrentTime] = useState<number>(0); // تایم فعلی پخش
  const [isExpanded, setIsExopanded] = useState<Boolean>(false);
  const [showVolumeBar, setShowVolumeBar] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [musicPlaingFlag, setMusicPlaingFlag] = useState(false);
  const currentMusic = useSelector((state: any) => state.music.currentMusic);
  // play music when user clicked on one of musics
  useEffect(() => {
    if (currentMusic.audio) {
      play();
      setMusicPlaingFlag(true);
    }
  }, [currentMusic.audio]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (musicRef.current) {
      musicRef.current.volume = newVolume;
    }
  };

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

  //  play music
  const play = () => {
    const audio = musicRef.current;
    if (!audio) return;
    audio.play();
    setIsPlaying(true);

    // اگه هنوز duration ثبت نشده، الان چکش کن
    if (!isNaN(audio.duration)) {
      setDuration(audio.duration);
    }
  };

  // pause music
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
  };

  return (
    <>
      <motion.div
        onClick={() => setIsExopanded(!isExpanded)}
        initial={{ height: "6rem" }}
        animate={{ height: isExpanded ? "100vh" : "6rem" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className={`fixed  z-40 bottom-0 w-full border-t border-gray-500   backdrop-blur-md text-white flex items-center justify-between px-10 max-md:px-4 ${
          isExpanded ? "flex-col items-center justify-evenly " : ""
        }  ${musicPlaingFlag ? "flex intero" : "hidden"}`}
      >
        {/* اطلاعات آهنگ */}
        <motion.div
          layout
          className={`flex items-center gap-4 max-md:w-full max-lg:px-0 ${
            isExpanded ? "flex-col items-center justify-evenly gap-24" : ""
          }`}
        >
          <motion.div
            layout
            layoutId="music-cover"
            transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
            className={`rounded-full    overflow-hidden bg-white ${
              isExpanded ? "w-96 h-96 rounded-xl max-md:w-full max-md:h-fit" : "w-14 h-14"
            }`}
          >
            <Image
              src={currentMusic?.cover}
              alt="musiccover"
              width={240}
              height={240}
              className={`w-full h-full object-cover`}
            />
          </motion.div>

          <motion.div layout className="flex flex-col overflow-hidden">
            <p className="text-lg font-semibold">
              {isExpanded
                ? currentMusic.title
                : currentMusic.title.slice(0, 10) + "..."}
            </p>
            <p className="text-sm text-gray-400">{currentMusic.artist}</p>
          </motion.div>
        </motion.div>

        {/* دکمه‌های کنترلی */}
        <div
          className={`flex items-center gap-2 ${
            isExpanded ? "InOutAnimate" : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
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
        <div
          className={`flex items-center gap-4 w-[40rem] ${
            isExpanded ? " flex  max-md:w-full  InOutAnimate" : "max-md:hidden "
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-sm">{formatTime(currentTime)}</span>

          <div className="relative w-full">
            <div
              className={`circle w-3 h-3  bg-white border border-gray-300 rounded-full absolute -top-1`}
              style={{ left: `${percentage - 0.5}%` }}
            ></div>
            <div
              className="w-full h-1 bg-white cursor-pointer  rounded-full overflow-hidden"
              onClick={goToDuration}
            >
              <div
                className="h-full bg-red-500"
                style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
              ></div>
            </div>
          </div>

          <span className="text-sm">{formatTime(duration)}</span>
        </div>

        {/* کنترل‌های اضافه */}
        <div
          className={`flex items-center gap-4  ${
            isExpanded ? "items-center justify-evenly gap-24 " : "max-md:hidden"
          }`}
        >
          <button className="p-2 bg-gray-800/50 rounded-full">
            <Repeat size="20" color="#FF8A65" variant="Bold" />
          </button>
          <button className="p-2 bg-gray-800/50 rounded-full">
            <Shuffle size="20" color="#fff" variant="Bold" />
          </button>
          <div
            className="relative"
            onMouseEnter={() => setShowVolumeBar(true)}
            onMouseLeave={() => setShowVolumeBar(false)}
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence>
              {showVolumeBar && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-12 left-0 -translate-x-1/2 w-8 h-24 bg-gray-700 rounded-full flex items-center justify-center "
                >
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="volume-slider w-16 h-full rotate-[-90deg] bg-transparent appearance-none cursor-pointer"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <button className="p-2 bg-gray-800/50 rounded-full">
              <VolumeHigh size="20" color="#fff" variant="Bold" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* پلیر مخفی */}
      <audio
        src={currentMusic.audio}
        ref={musicRef}
        preload="metadata"
        className="hidden"
      ></audio>
    </>
  );
}

export default MusicPlayer;
