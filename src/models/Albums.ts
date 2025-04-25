import mongoose from "mongoose";

export const Albums = new mongoose.Schema({
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
  cover: {
    type: String,
    required: true,
  },
  Banner:{
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author:{
    type: String,
    required: true,
  }
  
});

export default mongoose.models.Albums || mongoose.model("Albums", Albums);
