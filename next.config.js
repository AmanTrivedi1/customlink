/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: '*.googleusercontent.com'
        },
        {
          hostname: 'linkit-files.s3.amazonaws.com',
        },
      ],
    }
  }
  
  module.exports = nextConfig