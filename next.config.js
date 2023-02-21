/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "cdn.myanimelist.net",
      "i.ytimg.com",
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
