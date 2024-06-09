import Image from "next/image";

export default function PostCard({
  username,
  description,
  image = "https://placehold.jp/350x350.png",
}: {
  username: string;
  description?: string;
  image?: string;
}) {
  return (
    <div className="text-black rounded-md overflow-hidden bg-gray-300">
      <Image src={image} width={350} height={350} alt="post picture" />
      <div className="container p-3 text-wrap max-w-[350px] break-words">
        <h3 className="font-bold">@{username}</h3>
        <div className="mt-2">{description}</div>
      </div>
    </div>
  );
}
