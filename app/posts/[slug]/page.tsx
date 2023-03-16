import { allPosts } from "@/app/content";
import Post from "@/components/server/post";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }));

const PostPage = ({ params }: { params: { slug: string } }) => {
  console.log("params", params);
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }
  return <Post post={post} />;
};

export default PostPage;
