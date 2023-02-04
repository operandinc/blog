const title = "Operand Blog";
const description =
  "Blog posts from the Operand team. Product updates, technical deep dives, and our weekly changelog.";
const url = "https://blog.operand.ai";
const twitterHandle = "@operandai";

export default function Head() {
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <meta content={description} name="description" />
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={url} property="og:url" />
      <meta content="website" property="og:type" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content={url} name="twitter:url" />
      <meta content={twitterHandle} name="twitter:site" />
      <meta content={twitterHandle} name="twitter:creator" />
    </>
  );
}
