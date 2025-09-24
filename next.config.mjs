/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // Enables SWC minification for optimized JavaScript
  compiler: {
    // Optionally disable reactStrictMode for a slight performance boost in production
    // reactStrictMode: false,
  },
};

export default nextConfig;
