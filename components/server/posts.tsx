import Post from "@/components/server/post";
import { PageButton } from "../client/buttons";

const Posts: React.FC<{
  posts: Post[];
  section?: string;
  pages: number[];
  current: number;
}> = ({ posts, pages, current, section }) => {
  return (
    <main className="w-full">
      <div className="w-full grid grid-cols-1 gap-10">
        {/* Display first 2 */}
        {posts.map((post, i) => (
          <Post post={post} key={i} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <div className="btn-group">
          {pages.map((page) => (
            <PageButton
              key={page}
              page={page}
              active={current == page}
              section={section}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Posts;
