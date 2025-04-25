// app/api/{title}/route.ts
import AlbumsModel from "@/models/Albums";

export const GET = async (
  request: Request,
  { params }: { params: { title: string } }
) => {
  const { title } = params;
  const findAlbum = await AlbumsModel.findOne({ title: title });

  if (!findAlbum) {
    return new Response(JSON.stringify({ message: "Album not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify({ findAlbum }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
