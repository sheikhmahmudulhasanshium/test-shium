/** @type {import('next').NextConfig} */
const nextConfig = {
  // We removed 'output: export' so your API routes work
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
    ],
  },
  poweredByHeader: false, // This hides your tech stack from hackers
  reactStrictMode: true,
};

export default nextConfig;