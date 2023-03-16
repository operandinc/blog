"use client";
import Post from "@/components/client/post";
import { allPosts } from "@/app/content";
import { PageButton } from "./buttons";

type PostsProps = {
  tags: string[];
  searchParams?: { [key: string]: string | string[] | undefined };
};

const Posts: React.FC<PostsProps> = ({ tags, searchParams }) => {
  let filteredPosts = allPosts;
  if (tags.length !== 0) {
    filteredPosts = allPosts.filter((post) => {
      return post.tags.some((tag) => tags.includes(tag));
    });
  }

  const pagination = {
    page: 1,
  };

  if (searchParams) {
    const { page } = searchParams;
    if (page) {
      pagination.page = Number(page);
    }
  }

  const postsPerPage = 2;

  const start = (pagination.page - 1) * postsPerPage;
  const end = start + postsPerPage;

  const paginatedPosts = filteredPosts.slice(start, end);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <main className="w-full">
      <div className="w-full grid grid-cols-1 gap-10">
        {/* Display first 2 */}
        {paginatedPosts.map((post, i) => (
          <Post post={post} key={i} />
        ))}
        <div className="w-full flex justify-center">
          <div className="btn-group">
            {pages.map((page) => (
              <PageButton
                key={page}
                page={page}
                active={pagination.page === page}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Posts;
