"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { sendPost } from "@/app/_actions/postActions";
import { getUsername } from "@/app/_actions/userActions";
import { storage } from "@/config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function PostInput() {
  const [description, setDescription] = useState<string>("");
  const [imageUpload, setImageUpload] = useState<any>(null);
  const [username, setUsername] = useState<string | null>(null);
  const session = useSession();
  const userEmail = session.data?.user?.email;

  useEffect(() => {
    if (userEmail) {
      fetchUsername();
    }
  }, [session]);

  const uploadImage = () => {
    if (imageUpload == null || !username) return;
    const imageUrl = `images/${imageUpload.name + Math.random()}`;
    const imageRef = ref(storage, imageUrl);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        sendPost(username, description, url);
      });
    });
  };

  const resetForm = () => {
    setDescription("");
    setImageUpload(null);
  };

  const handleChange = (e: any) => {
    setDescription(e.target.value);
  };

  const fetchUsername = async () => {
    const newUsername = await getUsername(userEmail);
    setUsername(newUsername);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    uploadImage();
    resetForm();
  };

  return (
    <form className="flex flex-col gap-2 py-5 text-black w-full max-w-[350px]">
      <input
        type="file"
        onChange={(event: any) => {
          setImageUpload(event.target.files[0]);
        }}
      />
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
