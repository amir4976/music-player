import ConnectToDb from "@/utils/ConnectToDb";
import AlbumsModel from "@/models/Albums";
export async function GET() {
  await ConnectToDb();
  const getAllAlbums = await AlbumsModel.find().populate("musics");

  console.log(getAllAlbums);
  
  return Response.json({ albums: getAllAlbums });
}

export async function POST(req: Request) {
  await ConnectToDb();
  const body = await req.json();
  const newAlbum = await AlbumsModel.create(body);
  return Response.json({ newAlbum });
}
