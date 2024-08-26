"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { storage } from "@/config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { sendPost } from "@/app/_actions/postActions";
import { getUsername } from "@/app/_actions/userActions";

export default function NewPost() {
  const [description, setDescription] = useState<string>("");
  const [imageUpload, setImageUpload] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const session = useSession();
  const userEmail = session.data?.user?.email;

  useEffect(() => {
    if (userEmail) {
      fetchUsername();
    }
  }, [session, userEmail]);

  const uploadImage = () => {
    setIsLoading(true);
    if (imageUpload == null || !username) return;
    const imageUrl = `images/${imageUpload.name + Math.random()}`;
    const imageRef = ref(storage, imageUrl);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref)
        .then((url) => {
          sendPost(username, description, url);
        })
        .finally(() => setIsLoading(false));
    });
  };

  const resetForm = () => {
    setDescription("");
    setImagePreview(null);
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

  return isLoading ? (
    <div>Uploading...</div>
  ) : (
    <form className="flex flex-col gap-2 py-5 text-black w-full max-w-[350px]">
      <label className="border flex flex-col rounded-md px-5 py-2">
        <input
          type="file"
          onChange={(event: any) => {
            const file = event.target.files[0];
            if (file) {
              setImageUpload(file);
              setImagePreview(URL.createObjectURL(file));
            }
          }}
        />
        {imageUpload && <img src={imagePreview} />}
      </label>

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
