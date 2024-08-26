import Link from "next/link";

import { auth } from "@/config/auth";
import LogoutButton from "../logoutBtn";
import NewPostButton from "../newPostBtn";
import ProfilePic from "../profilePic";

export default async function Header() {
  const session = await auth();

  return (
    <header className="flex justify-between items-center p-5 sm:p-8">
      <Link href={"/"}>
        <h1 className="text-xl font-bold sm:text-2xl">NextBook</h1>
      </Link>
      <nav className="flex gap-3 text-lg items-center">
        {session ? (
          <>
            <NewPostButton />
            <ProfilePic />
            <LogoutButton />
          </>
        ) : (
          <>
            <Link href={"?modal=login"}>Login</Link>
            <Link href={"?modal=register"}>Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
