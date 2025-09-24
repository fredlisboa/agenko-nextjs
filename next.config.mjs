/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
  },
  // Enable SWC Minification for improved performance
  swcMinify: true,
  // Configure compiler for styled-components if used
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
