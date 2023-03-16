/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")();
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
    scrollRestoration: true,
  },
};

module.exports = withMDX(nextConfig);
