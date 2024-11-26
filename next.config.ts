import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // domain allow list
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
