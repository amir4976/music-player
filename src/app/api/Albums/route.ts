import ConnectToDb from "@/utils/ConnectToDb";
import AlbumsModel from "@/models/Albums";
export async function GET() {
    await ConnectToDb();
    const getAllAlbums = await AlbumsModel.find()
    console.log(getAllAlbums);
    return Response.json({ albums: getAllAlbums });
}



