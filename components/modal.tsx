"use client";

import { XCircleIcon } from "@heroicons/react/16/solid";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Login from "./forms/login";
import Register from "./forms/register";
import RegisterSuccess from "./register-success";
import NewPost from "./forms/newPost";

export default function Modal() {
  const [isValidModal, setIsValidModal] = useState<Boolean>();
  const ref: any = useRef<any>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const isLoggedIn = useSession()?.status === "authenticated";
  const modal: any = searchParams.get("modal");
  const pathname = usePathname();

  const contentOptions: any = {
    login: <Login />,
    register: <Register />,
    "register-success": <RegisterSuccess />,
  };

  const loggedInContentOptions: any = {
    "new-post": <NewPost />,
  };

  useEffect(() => {
    setIsValidModal(Boolean(contentOptions[modal]));
    if (isLoggedIn) {
      setIsValidModal(Boolean(loggedInContentOptions[modal]));
    }
  }, [modal, isLoggedIn, searchParams]);

  useEffect(() => {
    if (isValidModal) {
      disableBodyScroll(ref);
    }

    if (!modal && isValidModal === false) {
      enableBodyScroll(ref);
      router.push("/");
    }
  }, [isValidModal]);

  const handleClick = () => {
    enableBodyScroll(ref);
    setIsValidModal(false);
  };

  return (
    isValidModal && (
      <div
        id="modal"
        className="fixed overscroll-contain top-0 z-50 min-w-full min-h-full content-center bg-zinc-900/70 text-black "
      >
        <div
          id="modal_container"
          className="flex flex-col m-5 bg-white p-5 rounded-xl md:max-w-[32rem]"
        >
          <Link onClick={handleClick} className="self-end" href={pathname}>
            <XCircleIcon className="w-8 text-black" />
          </Link>
          <div ref={ref} className="overflow-scroll" id="modal_content">
            {isLoggedIn ? loggedInContentOptions[modal] : contentOptions[modal]}
          </div>
        </div>
      </div>
    )
  );
}
