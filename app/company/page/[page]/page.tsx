import { allPosts } from "@/app/content";
import Posts from "@/components/server/posts";

export const generateStaticParams = async () =>
  allPosts
    .filter((post) => post.tags.includes("company" || "philosophy"))
    .map((_, i) => ({ page: Math.round(i / 3) }));

const PostPage = ({ params }: { params: { page: number } }) => {
  const companyPosts = allPosts.filter(
    (post) => post.tags.includes("company") || post.tags.includes("philosophy")
  );
  const posts = companyPosts.slice(
    (params.page - 1) * 3,
    (params.page - 1) * 3 + 3
  );
  if (!posts) {
    return <div>Posts not found</div>;
  }
  return (
    <Posts
      section="company"
      posts={posts}
      pages={Array.from(
        { length: Math.ceil(companyPosts.length / 3) },
        (_, i) => i + 1
      )}
      current={params.page}
    />
  );
};

export default PostPage;
