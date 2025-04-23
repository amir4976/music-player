import ConnectToDb from "@/utils/ConnectToDb";
import music from '@/models/musics'

export const GET = async ()=>{
     ConnectToDb()
    const musics = await music.find({})
    console.log(musics)
    return Response.json(musics)
}

