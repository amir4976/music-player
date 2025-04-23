import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Collection: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection",
      },
    ],
    default: [],
  },
  favorite: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Favorite",
      },
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
  

});

export default mongoose.models.User || mongoose.model("User", UserSchema);
