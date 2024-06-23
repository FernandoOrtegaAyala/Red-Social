/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextIntl = require("next-intl/plugin")("./src/i18n.config.ts");

module.exports = withNextIntl(nextConfig);
