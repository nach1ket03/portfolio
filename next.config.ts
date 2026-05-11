import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pages Router is unused — App Router only.
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
      {
        // GitHub Readme Stats for the activity card in BentoGrid
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
      },
    ],
  },
  // output is NOT set to 'export' — keeps dynamic routes and API routes working on Vercel
};

export default nextConfig;
