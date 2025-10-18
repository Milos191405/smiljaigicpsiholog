/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", 
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'psiholog-smilja-igic-djat.vercel.app',
          },
        ],
        destination: 'https://smiljaigicpsiholog.com/:path*',
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;
