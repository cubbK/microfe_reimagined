const { DOCS_URL } = process.env
const path = require('path')
module.exports = {
  async rewrites() {
    return []
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          svelte: path.resolve('node_modules', 'svelte'),
        },
        extensions: [...config.resolve.extensions, 'svelte'].filter(Boolean),
        mainFields: [
          ...config.resolve.mainFields,
          'svelte',
          'browser',
          'module',
          'main',
        ].filter(Boolean),
        conditionNames: [
          ...(config.resolve.conditionNames || []),
          'svelte',
        ].filter(Boolean),
      },
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.(html|svelte)$/,
            use: 'svelte-loader',
          },
          {
            // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
            test: /node_modules\/svelte\/.*\.mjs$/,
            resolve: {
              fullySpecified: false,
            },
          },
        ],
      },
    }
  },
}
