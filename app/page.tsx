import { fileClient } from "@/lib/mcp";

const rootFolder = process.env.OPERAND_FOLDER_ID as string;

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const client = fileClient();
  const files = await client.listFiles({
    filter: {
      parentId: rootFolder,
    },
    pagination: {
      pageSize: 16,
      cursor: searchParams?.cursor
        ? (searchParams.cursor as string)
        : undefined,
    },
  });

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello</h1>
    </main>
  );
}
