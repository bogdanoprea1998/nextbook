"use server";

import { signIn } from "@/config/auth";

export default async function login(formData: any) {
  try {
    console.log(formData);
    await signIn("credentials", formData);
  } catch (error: any) {
    console.log(error);
  }
}
