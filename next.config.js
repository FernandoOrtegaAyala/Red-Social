/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/free-photo/**",
      },
    ],
  },
};

const withNextIntl = require("next-intl/plugin")("./src/i18n.config.ts");

module.exports = withNextIntl(nextConfig);
