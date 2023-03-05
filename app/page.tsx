import { allPosts } from "@/.contentlayer/generated";
import Post from "@/components/server/post";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return (
    <main className="w-full">
      <div className="w-full grid grid-cols-1 gap-10">
        {/* Display first 2 */}
        {sortedPosts.map((post, i) => (
          <Post post={post} key={i} />
        ))}
      </div>
    </main>
  );
}
