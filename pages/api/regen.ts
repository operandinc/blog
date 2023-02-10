// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sync from "@/lib/sync";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Request must be post and have auth header
  if (req.method !== "POST" || req.headers.authorization !== process.env.AUTH) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const s = await sync();
  res.status(200).json({ s });
}
