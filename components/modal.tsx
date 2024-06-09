"use client";

import { XCircleIcon } from "@heroicons/react/16/solid";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
import Login from "./forms/login";
import Register from "./forms/register";

export default function Modal() {
  const ref: any = useRef<any>();
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  useEffect(() => {
    if (modal) {
      disableBodyScroll(ref);
    }
  }, [modal]);

  const handleClick = () => {
    enableBodyScroll(ref);
  };

  const contentOptions: any = { login: <Login />, register: <Register /> };

  return (
    modal && (
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
