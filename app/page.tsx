// Tags:
// changelog
// company
// engineering
// philosophy
import { allPosts } from "@/.contentlayer/generated";
import { PostCard } from "./postCard";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="w-full">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {allPosts.map((post, i) => (
          <PostCard post={post} key={i} />
        ))}
      </div>
    </main>
  );
}
