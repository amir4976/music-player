import mongoose from "mongoose";

export const UserCollectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  list:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "music",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  }
  

});

export default mongoose.models.UserCollection || mongoose.model("UserCollection", UserCollectionSchema);
