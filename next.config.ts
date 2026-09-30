import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep production builds separate from a concurrently running `next dev`.
  distDir: "production-build",
};

export default nextConfig;
