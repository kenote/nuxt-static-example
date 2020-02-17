// nuxt.config.js
import tsconfigPathsWebpackPlugin from 'tsconfig-paths-webpack-plugin'
export default {
  env: {},
  srcDir: 'client',
  buildModules: ['@nuxt/typescript-build'],
  build: {
    extend (config, ctx) {
      config.resolve.plugins = [
        new tsconfigPathsWebpackPlugin()
      ]
    }
  }
}
