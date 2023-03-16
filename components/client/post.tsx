import { Post } from "@/app/content";
import { format, parseISO } from "date-fns";
import { CopyLinkButton } from "./buttons";

const Post: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <article className="prose p-8 mx-auto space-y-4">
      <div className="flex justify-between items-center">
        {post.tags.map((tag) => (
          <div key={tag} className="badge badge-outline">
            {tag}
          </div>
        ))}

        {/* Copy link to post */}
        <CopyLinkButton slug={post.slug} />
      </div>

      <h1>{post.title}</h1>
      <p>
        <time dateTime={post.date}>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </p>
      <div className="prose">{post.content}</div>
    </article>
  );
};

export default Post;
