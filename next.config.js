/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable standalone output for Docker
  output: 'standalone',
  // Pyodide needs to be loaded from CDN, so we exclude it from bundling
  // Handle Pyodide's Node.js conditional imports
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
        'node-fetch': false,
        vm: false,
      };
    }
    return config;
  },
  // Allow loading Pyodide from external CDN
  experimental: {
    serverComponentsExternalPackages: ['pyodide'],
  },
};

module.exports = nextConfig;

