import { allPosts } from "@/.contentlayer/generated";
import { getPostLink } from "@/lib/link";
import { format, parseISO } from "date-fns";
import { CopyLinkButton, LoadMoreButton } from "@/components/client/buttons";
import Post from "@/components/server/post";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  // use the display param to determine how many posts to display
  const display = searchParams?.display
    ? parseInt(searchParams.display as string)
    : 2;

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const maxPosts = sortedPosts.length;
  return (
    <main className="w-full">
      <div className="w-full grid grid-cols-1 gap-10">
        {/* Display first 2 */}
        {sortedPosts.slice(0, display).map((post, i) => (
          <Post post={post} key={i} />
        ))}
        <div className="no-prose flex justify-center">
          {/* Only display the load more button if there are more posts to display */}
          {display < maxPosts && <LoadMoreButton display={display} />}
        </div>
      </div>
    </main>
  );
}

// force dynamic
export const dynamic = "force-dynamic";
