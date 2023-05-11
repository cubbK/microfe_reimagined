const { DOCS_URL } = process.env
const path = require('path')
module.exports = {
  async rewrites() {
    return [
      {
        source: '/about',
        destination: 'http://localhost:3001/about/', // Proxy to nuxt
      },
      {
        source: '/about/_nuxt/:path*',
        destination: `http://localhost:3001/about/_nuxt/:path*`, // Proxy to nuxt
      },
    ]
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    return config
  },
}
