import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between p-5 sm:p-8">
      <Link href={"/"}>
        <h1 className="text-xl font-bold sm:text-2xl">NextBook</h1>
      </Link>
      <nav className="flex gap-3 text-lg">
        <Link href={"?modal=login"}>Login</Link>
        <Link href={"?modal=register"}>Register</Link>
      </nav>
    </header>
  );
}
