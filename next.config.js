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
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/duan4ka5v/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/free-vector/**",
      },
      {
        protocol: "https",
        hostname: "as2.ftcdn.net",
        port: "",
        pathname: "/v2/**",
      },
    ],
  },
};

const withNextIntl = require("next-intl/plugin")("./src/i18n.config.ts");

module.exports = withNextIntl(nextConfig);
