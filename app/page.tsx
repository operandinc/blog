import { allPosts } from "@/.contentlayer/generated";
import { getPostLink } from "@/lib/link";
import { format, parseISO } from "date-fns";
import { CopyLinkButton, LoadMoreButton } from "./components";

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
          <article className="prose p-8 mx-auto space-y-4" key={i}>
            <div className="flex justify-between items-center">
              <div className="badge badge-outline">{post.tag}</div>
              {/* Copy link to post */}
              <CopyLinkButton href={getPostLink(post)} />
            </div>

            <h1>{post.title}</h1>
            <p>
              <time dateTime={post.date}>
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </time>
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
          </article>
        ))}
        <div className="no-prose flex justify-center">
          {/* Only display the load more button if there are more posts to display */}
          {display < maxPosts && <LoadMoreButton display={display} />}
        </div>
      </div>
    </main>
  );
}
