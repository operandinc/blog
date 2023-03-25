import OperatorLog1 from "./content/operator-log-1.mdx";
import OperatorLog2 from "./content/operator-log-2.mdx";
import OperatorLog3 from "./content/operator-log-3.mdx";
import OperatorLog4 from "./content/operator-log-4.mdx";
import OperatorLog5 from "./content/operator-log-5.mdx";
import OperatorLog6 from "./content/operator-log-6.mdx";

import VirtualAssistants from "./content/virtual-assistants.mdx";
import SearchIsSolved from "./content/search-is-solved.mdx";

import Lobby from "./content/lobby.mdx";

// A post is some metadata about a blog post, and the mdx component
export type Post = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
  content: JSX.Element;
};

// The list of posts
export const allPosts: Post[] = [
  {
    title: "Operator Log #1",
    date: "2023-02-17",
    description:
      "Early-access beta, developer documentation + new pricing scheme!",
    slug: "operator-log-1",
    tags: ["log"],
    content: OperatorLog1({}),
  },
  {
    title: "Operator Log #2",
    date: "2023-02-24",
    description:
      "Smart folders, converse API, URL importing, developer landing page",
    slug: "operator-log-2",
    tags: ["log"],
    content: OperatorLog2({}),
  },
  {
    title: "Operator Log #3",
    date: "2023-03-03",
    description: "Slack, Meeting Bots, YouTube Videos, and more!",
    slug: "operator-log-3",
    tags: ["log"],
    content: OperatorLog3({}),
  },
  {
    title: "Search is Solved, Discovery is Not",
    date: "2022-02-04",
    description:
      "A brief exploration of the difference between search and discovery, and how semantic search engines can help solve the discovery problem.",
    tags: ["philosophy"],
    slug: "search-is-solved",
    content: SearchIsSolved({}),
  },
  {
    title: "Virtual Assistants are Search Engines",
    date: "2021-07-03",
    description:
      "Exploring the interplay between search engines and personal assistants, and our experiences building them.",
    tags: ["philosophy"],
    slug: "virtual-assistants",
    content: VirtualAssistants({}),
  },
  {
    title:
      "How Lobby is Solving Information Asymmetry within DAOs using Operand",
    date: "2022-05-12",
    description:
      "Lobby’s founder talks about some of major problems which exist within DAOs today, notably information asymmetry between contributors, and how their team is tackling these problems with Operand.",
    tags: ["case study"],
    slug: "lobby",
    content: Lobby({}),
  },
  {
    title: "Operator Log #4",
    date: "2023-03-10",
    description: "iMessage, Long-Term Memory, and more!",
    slug: "operator-log-4",
    tags: ["log"],
    content: OperatorLog4({}),
  },
  {
    title: "Operator Log #5",
    date: "2023-03-17",
    description:
      "iMessage + Chrome interface, suggested questions, and lots more!",
    slug: "operator-log-5",
    tags: ["log"],
    content: OperatorLog5({}),
  },
  {
    title: "Operator Log #6",
    date: "2023-03-24",
    description:
      "Automatic indexing, infinite scroll, chat with folders, and more!",
    slug: "operator-log-6",
    tags: ["log"],
    content: OperatorLog6({}),
  },
].sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});
