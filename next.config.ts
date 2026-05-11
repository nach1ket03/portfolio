import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pages Router is unused — only App Router is active.
  // This prevents pages/*.tsx from conflicting with app/page.tsx.
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
