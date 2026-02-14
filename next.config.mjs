/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Keeps your site DDoS-resistant (Static)
  images: {
    unoptimized: true,   // REQUIRED for static export and Google Drive images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
    ],
  },
  poweredByHeader: false, // Security: Hides that you are using Next.js
  reactStrictMode: true,
};

export default nextConfig;