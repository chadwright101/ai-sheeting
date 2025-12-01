/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    qualities: [40, 60, 75],
  },
};

module.exports = nextConfig;
