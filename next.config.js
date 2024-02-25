/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'barter-api-db-neon-8kp0.onrender.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '4000',
          pathname: '/**',
        }
      ],
    },
  }
/** 
*/
