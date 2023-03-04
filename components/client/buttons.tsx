"use client";

import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

export const LoadMoreButton: React.FC<{ display: number }> = ({ display }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = React.useState(false);
  return (
    <button
      className={`btn btn-primary btn-wide ${loading ? "loading" : ""}`}
      onClick={() => {
        setLoading(true);
        router.push(`${pathname}?display=${display + 2}`);
        router.refresh();
        setLoading(false);
      }}
    >
      Load More
    </button>
  );
};

export const CopyLinkButton: React.FC<{ href: string }> = ({ href }) => {
  const [copied, setCopied] = React.useState(false);
  return (
    <button
      className={`btn btn-ghost btn-sm`}
      onClick={() => {
        navigator.clipboard.writeText("https://blog.operand.ai/" + href);
        // timeout to reset the button text
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
    >
      {copied ? "Copied!" : "Copy Link"}
    </button>
  );
};
