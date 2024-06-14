import { auth } from "@/config/auth";
import Feed from "@/components/feed";
import PostInput from "@/components/postInput";

export default async function HomePage() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>{session?.user?.email}</div>
      <PostInput />
      <Feed />
    </main>
  );
}
