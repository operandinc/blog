import Posts from "@/components/client/posts";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return <Posts tags={["case study"]} searchParams={searchParams} />;
}
