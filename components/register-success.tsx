import { RocketLaunchIcon } from "@heroicons/react/16/solid";

import Link from "next/link";

export default function RegisterSuccess() {
  return (
    <div className="text-center font-bold my-7">
      <h1 className="text-2xl">Account created successfully!</h1>
      <Link href="?modal=login">
        <RocketLaunchIcon className="text-green-500 w-36 mx-auto pt-6 pb-4" />
        <p className="text-xl">Go to the login page</p>
      </Link>
    </div>
  );
}
