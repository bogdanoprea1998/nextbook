import { auth } from "@/config/auth";
import { notFound } from "next/navigation";

import { getUser } from "@/app/_actions/userActions";
import { getUserPosts } from "@/app/_actions/userActions";

import PostList from "@/components/postList";

export default async function ProfilePage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;
  const user = await getUser(username);
  const userPosts = user && (await getUserPosts(username));

  if (!user) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col items-center max-w-[350px] mx-auto">
      <h1 className="text-xl">
        <span className="font-bold">{username}</span>
        {"'s profile"}
      </h1>
      <div className="mt-10 w-full">
        <h2 className="text-lg font-bold mb-3">User info</h2>
        <div className="flex flex-col gap-1">
          <h3 className="flex justify-between">
            {"Username: "}
            <span>{user.username}</span>
          </h3>
          <h3 className="flex justify-between">
            {"Email: "}
            <span>{user.email}</span>
          </h3>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-lg font-bold">Latest posts</h2>
        <PostList postArr={userPosts} />
      </div>
    </div>
  );
}
