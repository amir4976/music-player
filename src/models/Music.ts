
import mongoose from "mongoose";

export const MusicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true
  },
  audio: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  plays: {
    type: Number,
    default: 0
  },
    createdAt: {
    type: Date,
    default: Date.now,
  }

})

export default mongoose.models.Music || mongoose.model("Music", MusicSchema);