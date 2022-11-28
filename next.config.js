/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
}

module.exports = nextConfig
