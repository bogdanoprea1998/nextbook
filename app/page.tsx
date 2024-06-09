import { auth } from "@/config/auth";

export default async function Home() {
  const session = await auth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>{session?.user?.email}</div>
    </main>
  );
}
