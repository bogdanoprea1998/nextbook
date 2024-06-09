"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <h4 className="hover:cursor-pointer" onClick={() => signOut()}>
      Logout
    </h4>
  );
}
