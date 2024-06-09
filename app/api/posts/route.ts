import PostModel from "@/models/postModel";
import UserModel from "@/models/userModel";
import FeedModel from "@/models/feedModel";
import connectDB from "@/config/database";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { username, description, image } = await request.json();

    await connectDB();

    const newPost = await new PostModel({ username, description, image });
    const userFeed = await FeedModel.findOne({});

    return new NextResponse("User is registered", { status: 200 });
  } catch (error: any) {
    throw new NextResponse(error.msg, {
      status: 500,
    });
  }
};
