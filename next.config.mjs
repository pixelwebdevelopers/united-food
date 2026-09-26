/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    // Disable segment explorer devtools to avoid React Client Manifest mismatch
    clientSegmentCache: false,
  },
};

export default nextConfig;
