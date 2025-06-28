/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    domains: ['i.imgur.com'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: false,
  swcMinify: true,
  distDir: 'out',
}

module.exports = nextConfig 