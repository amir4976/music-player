'use client'

import AlbomCard from '@/components/modules/Alboms/AlbomCard/AlbomCard'
import React, { useEffect, useState } from 'react'

// /app/data.ts


function Page () {
  const [GetAllAlbums, setGetAllAlbums] = useState<any>([])
  useEffect(()=>{
    const getData = async () => {
      const response = await fetch(`/api/Albums`);
      const data = await response.json();
      console.log(data)
      setGetAllAlbums(data.albums)
    };
    getData()
  },[])


  return (
    <>
    <div className="p-5 bg-[#171717]">
      <div className="text-white text-5xl font-bold mt-10">
        Alboms  
      </div>
      <div className="grid xl:grid-cols-6  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {GetAllAlbums.map((item: any) => (
          <AlbomCard key={item.id} {...item} />
        ))}
        
      </div>
    </div>
    </>
  )
}

export default Page