import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX,
  trailingSlash: true,
  output: "export",
  basePath: process.env.NEXT_PUBLIC_ASSET_PREFIX,
};

export default nextConfig;
