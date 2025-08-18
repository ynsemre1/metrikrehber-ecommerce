/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      // Prod Strapi için örnek:
      // {
      //   protocol: 'https',
      //   hostname: 'api.metrikrehber.com',
      //   pathname: '/uploads/**',
      // },
    ],
  },
};

export default nextConfig;