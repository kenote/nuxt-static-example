// nuxt.config.js
import tsconfigPathsWebpackPlugin from 'tsconfig-paths-webpack-plugin'
import config from './client/config'

export default {
  env: {},
  srcDir: 'client',
  mode: 'spa',
  head: {
    title: config.name,
    meta: [ 
      ...config.meta 
    ]
  },
  css: [
    '~/assets/scss/common.scss'
  ],
  plugins: [
    '~/plugins/component',
    { src: '~/plugins/element-ui', ssr: true }
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/svg'
  ],
  build: {
    babel: {
      plugins: [
        ['component', {
          libraryName: 'element-ui',
          styleLibraryName: 'theme-chalk'
        }]
      ],
      comments: true
    },
    extend (config, ctx) {
      config.resolve.plugins = [
        new tsconfigPathsWebpackPlugin()
      ]
    }
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'client/components/404.vue')
      })
    }
  }
}
