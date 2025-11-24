/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // Для Vercel важно явно указать, что мы используем Pages Router
  trailingSlash: false,
}

module.exports = nextConfig


