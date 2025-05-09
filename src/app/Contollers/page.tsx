import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
type Props = {};

type musicType ={
  id: number;
  title: string;
  artist: string;
  album: string;
  genre: string;
  duration: string;
  path: string;
  createdAt: string;
  updatedAt: string;
}
async function Page({}: Props) {

  const res = await fetch(process.env.MAIN_ENDPOINT + "/api/AllMusics" );
  const data = await res.json();

  return (
    <div>
      <div className="w-full flex justify-between px-5">
        <h1 className="text-2xl font-bold">Contollers</h1>
        <div className="">
          <button className="border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-black transition-all ">
            add+
          </button>
        </div>
      </div>
      <Table className="">
        <TableCaption>A list of your music.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>title</TableHead>
            <TableHead>time</TableHead>
            <TableHead className="text-right">artist</TableHead>
            <TableHead className="text-right">controller</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item:musicType, index: number) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-gray-500">
                {index}
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.duration}</TableCell>
              <TableCell className="text-right">{item.artist}</TableCell>
              <TableCell className="text-right">
                <button className="border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-black transition-all ">
                  Del
                </button>
              </TableCell>
            </TableRow>
          ))}


        </TableBody>
      </Table>
    </div>
  );
}

export default Page;
