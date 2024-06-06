import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col text-center p-5">
      <h2 className="text-lg font-bold">Footer Info</h2>
      <div className="flex flex-col gap-2 pt-3 text-red-600">
        <Link href={"/"}>Test Link 1</Link>
        <Link href={"/"}>Test Link 2</Link>
        <Link href={"/"}>Test Link 3</Link>
      </div>
    </footer>
  );
}
