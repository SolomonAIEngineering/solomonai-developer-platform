/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: true,
  },
  // Properly handle 404s
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: "/_error",
        },
      ],
    };
  },
  webpack: (config, { dev, isServer }) => {
    // Handle punycode deprecation
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        punycode: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
