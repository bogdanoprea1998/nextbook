import { getFeed } from "@/app/_actions/postActions";
import { getUsername } from "@/app/_actions/userActions";
import { auth } from "@/config/auth";

import PostList from "./postList";

export default async function Feed() {
  const session = await auth();
  const userEmail = session?.user?.email;

  let username;
  let feedArr = [];

  if (userEmail) {
    username = await getUsername(userEmail);
    feedArr = await getFeed(username);
  }

  return userEmail && <PostList postArr={feedArr} />;
}
