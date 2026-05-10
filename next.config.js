/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["sanity", "@sanity/ui", "@sanity/icons"],
  },
};

module.exports = nextConfig;
