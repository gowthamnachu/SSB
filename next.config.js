/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'output: export' to enable API routes
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
