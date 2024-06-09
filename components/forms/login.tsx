"use client";

import Link from "next/link";

import login from "@/app/_actions/login";
import Input from "../input";

export default function Login() {
  return (
    <form
      action={login}
      id="login_form"
      className="flex flex-col text-center my-7"
    >
      <h1 className="text-2xl">
        Sign in to <span className="font-bold">NextBook</span>
      </h1>
      <div id="fields_container" className="flex flex-col my-10 gap-5">
        <Input name="Email" type="email" />
        <Input name="Password" type="password" />
      </div>
      <button className="py-2 mx-auto min-w-52 rounded-lg bg-black text-white">
        Log in
      </button>
      <p className="mt-5">
        Don't have an account yet?
        <Link className="text-green-700 font-bold" href="?modal=register">
          {" "}
          Go to registration
        </Link>
      </p>
    </form>
  );
}
