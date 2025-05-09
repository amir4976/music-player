import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  cover: string;
  author: string;
  createdAt: string;
  mainThemeColor: string;
  Banner: string;
  saccondColor: string;
};

function AlbumHeader({
  title,
  cover,
  author,
  createdAt,
  mainThemeColor,
  Banner,
  saccondColor,
}: Props) {
  return (
    <>
      {Banner ? (
        <>
          {" "}
          <div
            className={`header flex w-full justify-start p-5 items-end pt-56  bg-fixed  `}
            style={{
              backgroundImage: `url(${Banner})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundOrigin: "border-box",
              
            }}
          >
            <div className="ml-5 flex flex-col gap-2 justify-end">
              <p>album</p>
              <p className="text-[5rem] mt-0 p-0 font-bold">
                {title ? title : "album name"}
              </p>
              <p className="text-gray-200 ">
                {new Date(createdAt).toLocaleString()} {author}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={`header flex w-full justify-start p-7 items-end pt-10`}
            style={{ background: `linear-gradient(to bottom, ${mainThemeColor}, ${saccondColor})` }}
          >
           
              <Image
                src={cover ? cover : '/cover.png'}
                alt="albom"
                width={230}
                height={230}
                className="rounded-lg drop-shadow-3xl"
              />
           
            <div className="ml-5">
              <p>album</p>
              <p className="text-6xl font-bold">
                {title ? title : "album name"}
              </p>
              <p className="text-gray-200 mt-5">
                {new Date(createdAt).toLocaleString()} {author}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AlbumHeader;
