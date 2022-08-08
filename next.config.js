/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["img.freepik.com", "cdn.shopify.com", "i.ibb.co"],
  },
}

module.exports = nextConfig
