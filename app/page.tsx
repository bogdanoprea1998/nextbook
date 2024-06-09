import { auth } from "@/config/auth";
import Feed from "@/components/feed";
import PostInput from "@/components/postInput";

export default async function Home() {
  const session = await auth();
  // const feed = getFeed("btest3");
  // await sendPost("btest3", "test descriptions", "/testimageurl");

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div>{session?.user?.email}</div>
      <PostInput />
      <Feed />
    </main>
  );
}
