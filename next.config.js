/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themoviedb.org',
        port: '',
        pathname: '/**'
      }
    ]
  },
  env: {
    API_KEY: process.env.API_KEY
  }
}

module.exports = nextConfig
