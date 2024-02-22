/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nkkjhhjhj.uk",
      },
    ],
  },
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "top-right",
  },
};

module.exports = nextConfig;
