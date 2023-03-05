import { allPosts } from "@/.contentlayer/generated";
import Post from "@/components/server/post";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  // use the display param to determine how many posts to display
  const logPosts = allPosts
    .filter((post) => post.tag === "log")
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  const maxPosts = logPosts.length;
  return (
    <main className="w-full">
      <div className="w-full grid grid-cols-1 gap-10">
        {/* Display first 2 */}
        {logPosts.map((post, i) => (
          <Post post={post} key={i} />
        ))}
      </div>
    </main>
  );
}
