// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'metrik-api.onrender.com' }],
  },
};
export default nextConfig;