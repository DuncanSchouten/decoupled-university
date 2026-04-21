import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  cacheHandler: "./cacheHandler.mjs",
  cacheHandlers: {
    default: "./use-cache-handler.mjs",
  },
  cacheMaxMemorySize: 0,
  env: {
    NEXT_PUBLIC_PCC_SITE_ID: process.env.PCC_SITE_ID,
    NEXT_PUBLIC_PCC_HOST: process.env.PCC_HOST,
  },
};

export default nextConfig;
