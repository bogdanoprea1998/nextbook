"use server";

import connectDB from "@/config/database";
import { signIn } from "@/config/auth";
import UserModel from "@/models/userModel";
import PostModel from "@/models/postModel";

const bcrypt = require("bcrypt");

export default async function login(formData: any) {
  try {
    const email = formData.email;
    const password = formData.password;
    await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getUserFromDb(email: any, password: any) {
  try {
    await connectDB();
    const user = await UserModel.findOne({ email });
    if (user) {
      const isPassCorrect = await bcrypt.compare(password, user.password);
      if (isPassCorrect) {
        return user;
      }
    }
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getUsername(email: any) {
  try {
    await connectDB();
    const user = await UserModel.findOne({ email });
    return user.username;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getUserPosts(username: any) {
  try {
    await connectDB();
    const userPosts = await PostModel.find({ username });
    return userPosts;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getUser(username?: string, email?: string) {
  try {
    await connectDB();
    if (username) {
      const user = await UserModel.findOne({ username });
      return user;
    }
    if (email) {
      const user = await UserModel.findOne({ email });
      return user;
    }
  } catch (error: any) {
    throw new Error(error);
  }
}
