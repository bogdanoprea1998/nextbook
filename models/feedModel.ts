import { Schema, model, models } from "mongoose";
import { postSchema } from "./postModel";

export const feedSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    posts: {
      type: [postSchema],
    },
  },
  { timestamps: true }
);

const FeedModel = models.feed || model("feed", feedSchema);

export default FeedModel;
