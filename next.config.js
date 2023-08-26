/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      //formats: ['image/jpg', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '4000',
          pathname: '/**',
        },
      ],
    },
  }












// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
