"use server";

import connectDB from "@/config/database";
import UserModel from "@/models/userModel";
import FeedModel from "@/models/feedModel";
import PostModel from "@/models/postModel";

export async function sendPost(
  username: string,
  description: string,
  image: string
) {
  try {
    await connectDB();
    const newPost = await new PostModel({ username, description, image });
    await newPost.save();

    let userFeed = await FeedModel.findOne({ username });
    if (!userFeed) {
      userFeed = await new FeedModel({ username, posts: [newPost] });
      await userFeed.save();
    } else {
      await FeedModel.updateOne({ username }, { $push: { posts: newPost } });
    }

    await UserModel.findOneAndUpdate(
      { username },
      { $set: { feedId: userFeed._id } },
      { new: true, upsert: true }
    );
  } catch (error: any) {
    throw new Error(error.msg);
  }
}

export async function getFeed(username: string) {
  try {
    await connectDB();
    const userFeed = await FeedModel.findOne({ username });
    if (!userFeed) return [];
    return userFeed.posts;
  } catch (error: any) {
    throw new Error(error.msg);
  }
}
