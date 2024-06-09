"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { sendPost } from "@/app/_actions/postActions";
import { getUsername } from "@/app/_actions/userActions";

export default function PostInput() {
  const [description, setDescription] = useState<string>("");
  const [username, setUsername] = useState<string | null>(null);
  const session = useSession();
  const userEmail = session.data?.user?.email;

  useEffect(() => {
    if (userEmail) {
      fetchUsername();
    }
  }, [session]);

  const handleChange = (e: any) => {
    setDescription(e.target.value);
  };

  const fetchUsername = async () => {
    const newUsername = await getUsername(userEmail);
    setUsername(newUsername);
  };

  const handleClick = async () => {
    if (username) {
      await sendPost(username, description, "https://placehold.jp/350x350.png");
    }
  };

  return (
    <form className="flex flex-col gap-2 text-black w-full p-5">
      <textarea
        onChange={handleChange}
        className="w-full min-h-24 rounded-md p-2 outline-none"
        value={description}
      ></textarea>
      <button
        onClick={handleClick}
        className="bg-white rounded-md mx-auto px-5 font-bold text-xl"
      >
        post
      </button>
    </form>
  );
}
