import { Timer, Timer1 } from "iconsax-reactjs";
import Image from "next/image";
import React from "react";

type Props = {
  mainThemeColor: string;
  musics: any;
};

function MusicList({ mainThemeColor, musics }: Props) {
  return (
    <div className="relative w-full h-fit bg-[#171717] ">
      <div
        className="absolute w-full h-[200px] left-0 top-0 z-[1] "
        style={{
          background: `linear-gradient(to bottom, ${mainThemeColor} 0%, rgba(0,0,0,0) 80%)`,
        }}
      ></div>
      <div className={`relative z-[2] p-10 `}>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm text-left text-gray-400">
            <thead className="text-xs text-gray-100 uppercase border-b border-gray-500">
              <tr >
                <th className="px-6 py-3"># title</th>
                <th className="px-6 py-3">album</th>
                <th className="px-6 py-3">Data added</th>
                <th className="px-6 py-3"><Timer1/></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-transparent ">
                <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-lg overflow-hidden "><Image alt="cover" src={'/testCovers/Dance Monkey.jpg'} width={300} height={300}/></div>
                        <div className="flex flex-col ml-2"> 
                            <p className="text-white font-bold ">dance moncky</p>
                            <p>tones</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">imagin dragon</td>
                <td className="px-6 py-4">2025</td>
                <td className="px-6 py-4">1:25</td>
              </tr>
              <tr className="bg-transparent ">
                <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-lg overflow-hidden "><Image alt="cover" src={'/testCovers/Dance Monkey.jpg'} width={300} height={300}/></div>
                        <div className="flex flex-col ml-2"> 
                            <p className="text-white font-bold ">dance moncky</p>
                            <p>tones</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">imagin dragon</td>
                <td className="px-6 py-4">2025</td>
                <td className="px-6 py-4">1:25</td>
              </tr>
              <tr className="bg-transparent ">
                <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-lg overflow-hidden "><Image alt="cover" src={'/testCovers/Dance Monkey.jpg'} width={300} height={300}/></div>
                        <div className="flex flex-col ml-2"> 
                            <p className="text-white font-bold ">dance moncky</p>
                            <p>tones</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">imagin dragon</td>
                <td className="px-6 py-4">2025</td>
                <td className="px-6 py-4">1:25</td>
              </tr>
              <tr className="bg-transparent ">
                <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-lg overflow-hidden "><Image alt="cover" src={'/testCovers/Dance Monkey.jpg'} width={300} height={300}/></div>
                        <div className="flex flex-col ml-2"> 
                            <p className="text-white font-bold ">dance moncky</p>
                            <p>tones</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">imagin dragon</td>
                <td className="px-6 py-4">2025</td>
                <td className="px-6 py-4">1:25</td>
              </tr>
              <tr className="bg-transparent ">
                <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-lg overflow-hidden "><Image alt="cover" src={'/testCovers/Dance Monkey.jpg'} width={300} height={300}/></div>
                        <div className="flex flex-col ml-2"> 
                            <p className="text-white font-bold ">dance moncky</p>
                            <p>tones</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">imagin dragon</td>
                <td className="px-6 py-4">2025</td>
                <td className="px-6 py-4">1:25</td>
              </tr>
              <tr className="bg-transparent ">
                <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-lg overflow-hidden "><Image alt="cover" src={'/testCovers/Dance Monkey.jpg'} width={300} height={300}/></div>
                        <div className="flex flex-col ml-2"> 
                            <p className="text-white font-bold ">dance moncky</p>
                            <p>tones</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">imagin dragon</td>
                <td className="px-6 py-4">2025</td>
                <td className="px-6 py-4">1:25</td>
              </tr>
              <tr className="bg-transparent ">
                <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-lg overflow-hidden "><Image alt="cover" src={'/testCovers/Dance Monkey.jpg'} width={300} height={300}/></div>
                        <div className="flex flex-col ml-2"> 
                            <p className="text-white font-bold ">dance moncky</p>
                            <p>tones</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">imagin dragon</td>
                <td className="px-6 py-4">2025</td>
                <td className="px-6 py-4">1:25</td>
              </tr>
              <tr className="bg-transparent ">
                <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-lg overflow-hidden "><Image alt="cover" src={'/testCovers/Dance Monkey.jpg'} width={300} height={300}/></div>
                        <div className="flex flex-col ml-2"> 
                            <p className="text-white font-bold ">dance moncky</p>
                            <p>tones</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">imagin dragon</td>
                <td className="px-6 py-4">2025</td>
                <td className="px-6 py-4">1:25</td>
              </tr>
              <tr className="bg-transparent ">
                <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-lg overflow-hidden "><Image alt="cover" src={'/testCovers/Dance Monkey.jpg'} width={300} height={300}/></div>
                        <div className="flex flex-col ml-2"> 
                            <p className="text-white font-bold ">dance moncky</p>
                            <p>tones</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">imagin dragon</td>
                <td className="px-6 py-4">2025</td>
                <td className="px-6 py-4">1:25</td>
              </tr>
              <tr className="bg-transparent ">
                <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-lg overflow-hidden "><Image alt="cover" src={'/testCovers/Dance Monkey.jpg'} width={300} height={300}/></div>
                        <div className="flex flex-col ml-2"> 
                            <p className="text-white font-bold ">dance moncky</p>
                            <p>tones</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">imagin dragon</td>
                <td className="px-6 py-4">2025</td>
                <td className="px-6 py-4">1:25</td>
              </tr>
              <tr className="bg-transparent ">
                <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-lg overflow-hidden "><Image alt="cover" src={'/testCovers/Dance Monkey.jpg'} width={300} height={300}/></div>
                        <div className="flex flex-col ml-2"> 
                            <p className="text-white font-bold ">dance moncky</p>
                            <p>tones</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">imagin dragon</td>
                <td className="px-6 py-4">2025</td>
                <td className="px-6 py-4">1:25</td>
              </tr>
              <tr className="bg-transparent ">
                <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-lg overflow-hidden "><Image alt="cover" src={'/testCovers/Dance Monkey.jpg'} width={300} height={300}/></div>
                        <div className="flex flex-col ml-2"> 
                            <p className="text-white font-bold ">dance moncky</p>
                            <p>tones</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">imagin dragon</td>
                <td className="px-6 py-4">2025</td>
                <td className="px-6 py-4">1:25</td>
              </tr>
              <tr className="bg-transparent ">
                <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-lg overflow-hidden "><Image alt="cover" src={'/testCovers/Dance Monkey.jpg'} width={300} height={300}/></div>
                        <div className="flex flex-col ml-2"> 
                            <p className="text-white font-bold ">dance moncky</p>
                            <p>tones</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">imagin dragon</td>
                <td className="px-6 py-4">2025</td>
                <td className="px-6 py-4">1:25</td>
              </tr>
              <tr className="bg-transparent ">
                <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-lg overflow-hidden "><Image alt="cover" src={'/testCovers/Dance Monkey.jpg'} width={300} height={300}/></div>
                        <div className="flex flex-col ml-2"> 
                            <p className="text-white font-bold ">dance moncky</p>
                            <p>tones</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">imagin dragon</td>
                <td className="px-6 py-4">2025</td>
                <td className="px-6 py-4">1:25</td>
              </tr>
              <tr className="bg-transparent ">
                <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-lg overflow-hidden "><Image alt="cover" src={'/testCovers/Dance Monkey.jpg'} width={300} height={300}/></div>
                        <div className="flex flex-col ml-2"> 
                            <p className="text-white font-bold ">dance moncky</p>
                            <p>tones</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4">imagin dragon</td>
                <td className="px-6 py-4">2025</td>
                <td className="px-6 py-4">1:25</td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MusicList;
