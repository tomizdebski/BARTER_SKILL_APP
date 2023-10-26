// /** @type {import('next').NextConfig} */
// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'barter-api-db-neon.onrender.com',
//           port: '',
//           pathname: '/**',
//         },
//       ],
//     },
//   }
  //localhost

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


