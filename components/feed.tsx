import { getFeed } from "@/app/_actions/postActions";
import { getUsername } from "@/app/_actions/userActions";
import { auth } from "@/config/auth";

import PostCard from "./postCard";

export default async function Feed() {
  const session = await auth();
  const userEmail = session?.user?.email;

  let username;
  let feedArr = [];

  if (userEmail) {
    username = await getUsername(userEmail);
    feedArr = await getFeed(username);
  }

  return (
    userEmail && (
      <div className="flex flex-col gap-5">
        {feedArr.length > 0 &&
          feedArr.map((post: any, index: number) => (
            <PostCard
              key={index}
              username={post.username}
              description={post.description}
              image={post.image}
            />
          ))}
      </div>
    )
  );
}
