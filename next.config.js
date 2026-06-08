/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid stale persisted webpack cache entries on Windows dev.
      config.cache = false;
    }

    return config;
  },
};

module.exports = nextConfig;
