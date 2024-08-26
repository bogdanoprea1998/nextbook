import { auth } from "@/config/auth";
import Feed from "@/components/feed";
import NewPostButton from "@/components/newPostBtn";

export default async function HomePage() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center max-w-[350px] mx-auto">
      {session ? (
        <>
          <h2 className="text-xl text-center font-bold py-2">Your feed</h2>
          <Feed />
        </>
      ) : (
        <div>{"Please login to see more content."}</div>
      )}
    </main>
  );
}
