"use client";

import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

export const PageButton: React.FC<{
  page: number;
  active: boolean;
  section?: string;
}> = ({ page, active, section }) => {
  const router = useRouter();
  return (
    <button
      className={`btn ${active ? "btn-primary" : ""}`}
      onClick={() => {
        if (section) {
          router.push(`${section}/page/${page}`);
        } else {
          router.push(`/page/${page}`);
        }
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
