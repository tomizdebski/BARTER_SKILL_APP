/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'barter-api-db-neon.onrender.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }
/** 
*/
