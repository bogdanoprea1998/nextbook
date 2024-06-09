import { Schema, model, models } from "mongoose";

export const postSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const PostModel = models.post || model("post", postSchema);

export default PostModel;
