import { allPosts } from "@/app/content";
import Post from "@/components/server/post";

import type { Metadata } from "next";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }));

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === params.slug);
  return {
    title: post?.title || "Post not found",
    description: post?.description || "Post not found",
    openGraph: {
      title: post?.title || "Post not found",
      type: "article",

      description: post?.description || "Post not found",
    },
    twitter: {
      card: "summary",
      title: post?.title || "Post not found",
      description: post?.description || "Post not found",
    },
  };
}

const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }
  return <Post post={post} />;
};

export default PostPage;
