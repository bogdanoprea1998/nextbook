import { Schema, model, models } from "mongoose";
import FeedModel from "./feedModel";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    feedId: {
      type: Schema.Types.ObjectId,
      ref: FeedModel.modelName,
      required: false,
    },
  },
  { timestamps: true }
);

const UserModel = models.user || model("user", userSchema);

export default UserModel;
