import PostCard from "./postCard";

export default function PostList({ postArr }: { postArr: [any] }) {
  return (
    <div className="flex flex-col gap-5">
      {postArr.length > 0 &&
        postArr.map((post: any, index: number) => (
          <PostCard
            key={index}
            username={post.username}
            description={post.description}
            image={post.image}
          />
        ))}
    </div>
  );
}
