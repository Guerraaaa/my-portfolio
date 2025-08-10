import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // ...existing code...
  images: {
    domains: ['upload.wikimedia.org', 'avatars.githubusercontent.com'], // Add any other domains you need
  },

};

export default nextConfig;
