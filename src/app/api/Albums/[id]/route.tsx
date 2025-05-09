// app/api/{title}/route.ts
import AlbumsModel from "@/models/Albums";
import Music from "@/models/Music";
import ConnectToDb from "@/utils/ConnectToDb";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  await ConnectToDb();

  const { id } = params;
  console.log(id);

  const findAlbum = await AlbumsModel.findOne({ _id: id }).populate("musics");

  if (!findAlbum) {
    return new Response(JSON.stringify({ message: "Album not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return Response.json({ findAlbum });
};

export const PUT = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  await ConnectToDb(); // اتصال به دیتابیس

  const { id } = params; // گرفتن آیدی آلبوم از URL
  const body = await request.json(); // گرفتن داده‌های ارسالی از درخواست

  const music = body.music; // موزیک جدیدی که می‌خواهیم اضافه کنیم
  console.log(music);

  // پیدا کردن آلبوم بر اساس آیدی
  const findAlbum = await AlbumsModel.findOne({ _id: id });
  const findMusic = await Music.findOne({ _id: music });
  console.log(findMusic);
  if (!findAlbum) {
    return Response.json({ message: "Album not found" }, { status: 404 });
  }

  // اضافه کردن موزیک جدید به آرایه musics آلبوم
  const updatedAlbum = await AlbumsModel.findByIdAndUpdate(
    id,
    { $push: { musics: findMusic } }, // اضافه کردن موزیک به آرایه musics
    { new: true } // برگرداندن نسخه به روز شده آلبوم
  );
  const lastestAlbum = await AlbumsModel.findById(id).populate("musics");
  console.log(lastestAlbum);
  return Response.json(lastestAlbum, {
    status: 200,
  });
};
