const { DOCS_URL } = process.env
const path = require('path')
module.exports = {
  async rewrites() {
    return [
      {
        source: '/about',
        destination: 'http://localhost:3001', // Proxy to nuxt
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
