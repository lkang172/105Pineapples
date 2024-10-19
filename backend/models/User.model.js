import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    books: [
      {
        storyScene: [String],
        images: [[String]],
        title: {
          type: String,
          required: true,
        },
        dateCreated: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", UserSchema);
export default User;
