"use client";

export default function Register() {
  return (
    <form id="register_form" className="flex flex-col text-center my-7">
      <h1 className="text-2xl font-bold">Create your account</h1>
      <div id="fields_container" className="flex flex-col my-10 gap-5">
        <label className="border flex flex-col rounded-md px-5 py-2">
          <p className="text-md font-bold text-left">Username</p>
          <input name="username" type="text" />
        </label>
        <label className="border flex flex-col rounded-md px-5 py-2">
          <p className="text-md font-bold text-left">Email</p>
          <input name="email" type="email" />
        </label>
        <label className="border flex flex-col rounded-md px-5 py-2">
          <p className="text-md font-bold text-left">Password</p>
          <input name="password" type="password" />
        </label>
        <label className="border flex flex-col rounded-md px-5 py-2">
          <p className="text-md font-bold text-left">Confirm password</p>
          <input name="password" type="password" />
        </label>
      </div>
      <button className="py-2 mx-auto min-w-52 rounded-lg bg-black text-white">
        Sign up
      </button>
    </form>
  );
}
