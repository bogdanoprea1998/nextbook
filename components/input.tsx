"use client";

import {
  EyeIcon,
  EyeSlashIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Input({
  className,
  type,
  name,
}: {
  className?: string;
  type: string;
  name: string;
}) {
  const [passFieldType, setPassFieldType] = useState<"password" | "text">(
    "password"
  );
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const isPassField: boolean = type === "password";
  const isFileField: boolean = type === "file";

  const hidePass = () => {
    setPassFieldType("password");
  };
  const showPass = () => {
    setPassFieldType("text");
  };

  const handleChange = (e: any) => {
    if (isFileField && e.target.value) {
      const relativeFileUrl = e.target.value.split("fakepath")[1];
      setFileUrl(relativeFileUrl);
    }
  };

  return (
    <label className={`${className} border flex flex-col rounded-md px-5 py-2`}>
      <div className="flex justify-between">
        <p className="text-md font-bold text-left self-center">{name}</p>
        {isPassField && (
          <div className="w-6 hover:cursor-pointer">
            {passFieldType === "password" ? (
              <EyeIcon onClick={showPass} />
            ) : (
              <EyeSlashIcon onClick={hidePass} />
            )}
          </div>
        )}
        {isFileField && (
          <ArrowUpTrayIcon className="w-10 hover:cursor-pointer" />
        )}
      </div>
      {fileUrl && (
        <p>
          <span className="font-bold text-sm">Uploaded file: </span>
          {fileUrl}
        </p>
      )}
      <input
        className={`${isFileField && "hidden"} outline-none text-slate-500`}
        name={name}
        type={isPassField ? passFieldType : type}
        onChange={handleChange}
      />
    </label>
  );
}
