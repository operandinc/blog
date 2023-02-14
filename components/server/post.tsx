import { getPostLink } from "@/lib/link";
import { Post } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import "server-only";
import { CopyLinkButton } from "../client/buttons";

const Post: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <article className="prose p-8 mx-auto space-y-4">
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
  );
};

export default Post;
