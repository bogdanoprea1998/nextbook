import { UserCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function ProfilePic({ imageUrl }: { imageUrl?: string }) {
  return (
    <Link className="w-10 rounded-full overflow-hidden" href={"/profile/"}>
      {imageUrl ? <img src={imageUrl} /> : <UserCircleIcon />}
    </Link>
  );
}
