import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath.split("/")[1] }));

const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === "posts/" + params.slug
  );

  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <article className="prose p-8 mx-auto space-y-4">
      <div className="badge badge-outline">{post.tag}</div>
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

export default PostPage;
