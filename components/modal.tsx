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

export default function Modal() {
  const [isValidModal, setIsValidModal] = useState<Boolean>();
  const ref: any = useRef<any>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const isLoggedIn = useSession()?.status === "authenticated";
  const modal: any = searchParams.get("modal");
  const pathname = usePathname();

  useEffect(() => {
    setIsValidModal(Boolean(contentOptions[modal]));
    if (isLoggedIn) {
      setIsValidModal(Boolean(loggedInContentOptions[modal]));
    }
  }, [modal, isLoggedIn]);

  useEffect(() => {
    if (isValidModal) {
      disableBodyScroll(ref);
    }
    if (modal && isValidModal === false) {
      router.push("/");
      enableBodyScroll(ref);
    }
  }, [isValidModal]);

  const handleClick = () => {
    setIsValidModal(false);
    enableBodyScroll(ref);
  };

  const contentOptions: any = {
    login: <Login />,
    register: <Register />,
    "register-success": <RegisterSuccess />,
    test: <div>test loggedIn Only</div>,
  };

  const loggedInContentOptions: any = {
    test: <div>test loggedIn Only</div>,
  };

  return (
    isValidModal && (
      <div
        ref={ref}
        id="modal"
        className="fixed overscroll-contain top-0 z-50 min-w-full min-h-full content-center bg-zinc-900/70 text-black "
      >
        <div
          id="modal_container"
          className="flex flex-col m-5 bg-white p-5  rounded-xl md:mx-auto md:max-w-[32rem]"
        >
          <Link onClick={handleClick} className="self-end" href={pathname}>
            <XCircleIcon className="w-8 text-black" />
          </Link>
          <div id="modal_content">{contentOptions[modal]}</div>
        </div>
      </div>
    )
  );
}
