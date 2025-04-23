import mongoose from "mongoose";

export const MusicSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
  },
  collection:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection",
    },
  ],
  
  createdAt: {
    type: Date,
    default: Date.now,
  }

})