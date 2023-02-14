import { File, operandClient, OperandService } from "@operandinc/sdk";
import Link from "next/link";

async function getData({ query }: { query?: string }) {
  const operandService = await operandClient(
    OperandService,
    process.env.OPERAND_API_KEY as string
  );
  const resp = await operandService.search({
    query,
    parentId: process.env.PARENT_ID as string,
  });
  return resp;
}

type Props = {
  searchParams?: {
    q?: string;
  };
};

export default async function Page(props: Props) {
  const data = await getData({
    query: props.searchParams?.q,
  });

  const matches = Array.from(data.matches);
  function fileName(id: string) {
    const file = data.files[id];
    return file.name.slice(0, -3);
  }

  return (
    <div className="w-full h-screen overflow-auto flex scrollbar-hide lg:scrollbar-default">
      <div className="prose lg:w-2/3">
        <p>
          Results for <i>"{props.searchParams?.q}"</i>
        </p>
        {data.matches.map((match) => (
          <div key={match.matchId}>
            <blockquote className="not-italic font-normal">
              {match.snippet}
            </blockquote>
            <div className="flex items-center gap-2 prose-sm">
              From
              <Link
                href={`/posts/${fileName(match.fileId)}`}
                className="bg-neutral text-neutral-content rounded-lg px-2 py-1 flex items-center gap-1"
              >
                <span>{fileName(match.fileId)}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
