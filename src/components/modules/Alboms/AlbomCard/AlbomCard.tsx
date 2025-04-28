import Image from "next/image";
import Link from "next/link";
import React from "react";
type props = {
  title: string;
  cover: string;
  author: string;
  _id: string;
};
function AlbomCard({ title, cover, author, _id }: props) {
  return (
    <Link href={`/Albums/${_id}`} className="col-span-1 p-3   gap-2 w-full">
      <Image
        src={cover}
        alt="albom"
        width={200}
        height={200}
        className="rounded-lg"
      />
      <div className="flex flex-col justify-start mt-2 px-2">
        <p className="text-xl ">{title.slice(0, 20)}...</p>
        <p className="text-gray-400 text-sm">{author}</p>
      </div>
    </Link>
  );
}

export default AlbomCard;
