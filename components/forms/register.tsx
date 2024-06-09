"use client";

import Link from "next/link";

import Input from "../input";

export default function Register() {
  return (
    <form id="register_form" className="flex flex-col text-center my-7">
      <h1 className="text-2xl font-bold">Create your account</h1>
      <div id="fields_container" className="flex flex-col my-10 gap-5">
        <Input name="Username" type="text" />
        <Input name="Email" type="email" />
        <Input name="Password" type="password" />
        <Input name="Confirm password" type="password" />
        <Input name="Profile Icon" type="file" />
      </div>
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
