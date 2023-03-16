import { allPosts } from "@/app/content";
import Post from "@/components/server/post";
import Posts from "@/components/server/posts";

export const generateStaticParams = async () =>
  allPosts.map((_, i) => ({ page: Math.round(i / 3) }));

const PostPage = ({ params }: { params: { page: number } }) => {
  const posts = allPosts.slice(
    (params.page - 1) * 3,
    (params.page - 1) * 3 + 3
  );
  if (!posts) {
    return <div>Posts not found</div>;
  }
  return (
    <Posts
      posts={posts}
      pages={Array.from(
        { length: Math.ceil(allPosts.length / 3) },
        (_, i) => i + 1
      )}
      current={params.page}
    />
  );
};

export default PostPage;
