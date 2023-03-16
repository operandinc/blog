"use client";

import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

export const PageButton: React.FC<{ page: number; active: boolean }> = ({
  page,
  active,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <button
      className={`btn ${active && "btn-active"}`}
      onClick={() => {
        router.replace(`${pathname}?page=${page}`);
        // Scroll to top of page
        window.scrollTo(0, 0);
      }}
    >
      {page}
    </button>
  );
};

export const CopyLinkButton: React.FC<{ slug: string }> = ({ slug }) => {
  const [copied, setCopied] = React.useState(false);
  return (
    <button
      className={`btn btn-ghost btn-sm`}
      onClick={() => {
        navigator.clipboard.writeText("https://blog.operand.ai/posts/" + slug);
        // timeout to reset the button text
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
    >
      {copied ? "Copied!" : "Copy Link"}
    </button>
  );
};
