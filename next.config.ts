import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "concerned-gzip-favors-der.trycloudflare.com",
    "localhost",
    "127.0.0.1",
    "172.19.7.210",
  ],
};

export default nextConfig;
