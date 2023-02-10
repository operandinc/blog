import { Post } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import "server-only";

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/posts/${post._raw.flattenedPath.split("/")[1]}`}>
      <div className="card w-full bg-base-100 shadow-lg hover:shadow-2xl hover:cursor-pointer">
        <div className="card-body prose lg:prose-lg">
          <h3 className="card-title">{post.title}</h3>
          <p>{post.description}</p>
          <time
            dateTime={post.date}
            className="text-xs lg:text-base text-gray-600"
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <div className="card-actions justify-end">
            <div className="badge bg-accent lg:badge-lg">{post.tag}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
