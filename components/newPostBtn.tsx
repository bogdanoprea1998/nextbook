import Link from "next/link";
import { CameraIcon } from "@heroicons/react/24/outline";

export default function NewPostButton() {
  return (
    <div className="text-lg font-bold">
      <Link className="" href={"?modal=new-post"}>
        <CameraIcon className="container mx-auto w-10" />
      </Link>
    </div>
  );
}
