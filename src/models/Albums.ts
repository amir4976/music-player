// models/Album.js

import mongoose from 'mongoose';
import '@/models/Music'; // 👈 خیلی مهمه این

const { Schema } = mongoose;

const albumSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    mainThemeColor: {
      type: String,
      required: true,
    },
    musics: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Music', // بدون s
      },
    ],
    cover: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    Banner: {
      type: String,
      default: '', // چون بعضی وقت‌ها خالیه
    },
    saccondColor: { // احتمالا منظورت "secondColor" بوده؟
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// اگر مدل قبلا تعریف نشده باشد، تعریفش می‌کنیم
export default mongoose.models.Album || mongoose.model('Album', albumSchema);
