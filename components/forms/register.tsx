"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import Input from "../input";

export default function Register() {
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  const registerUser = async (formData: any) => {
    const formDataArr = [...formData];
    const username = formDataArr[0][1];
    const email = formDataArr[1][1];
    const password = formDataArr[2][1];

    const userData = { username, email, password };

    try {
      const res = await fetch("/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      switch (res.status) {
        case 400:
          setMessage("The email or username is already used.");
          break;
        case 200:
          router.push("?modal=register-success");
          break;
      }
    } catch (error: any) {
      setMessage(
        "Something went wrong... Try again or contact support\n" +
          "Error message: " +
          error.msg
      );
    }
  };

  return (
    <form
      action={registerUser}
      id="register_form"
      className="flex flex-col text-center my-7"
    >
      <h1 className="text-2xl font-bold">Create your account</h1>
      <div id="fields_container" className="flex flex-col my-10 gap-5">
        <Input name="Username" type="text" />
        <Input name="Email" type="email" />
        <Input name="Password" type="password" />
        <Input name="Confirm password" type="password" />
        <Input name="Profile Icon" type="file" />
      </div>
      <h3>{message}</h3>
      <button className="py-2 mx-auto min-w-52 rounded-lg bg-black text-white">
        Sign up
      </button>
      <p className="mt-5">
        Already have an account?
        <Link className="text-green-700 font-bold" href="?modal=login">
          {" "}
          Go to login
        </Link>
      </p>
    </form>
  );
}
