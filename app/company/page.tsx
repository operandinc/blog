import Posts from "@/components/server/posts";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return <Posts tags={["company"]} searchParams={searchParams} />;
}
