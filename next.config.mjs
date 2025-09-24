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
    // Remove "use strict" declarations from the output
    removeStrict: true,
  },
  // Add caching headers for static assets
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|gif|ico|css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
