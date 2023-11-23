// https://nuxt.com/docs/api/configuration/nuxt-config
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
    port: 3000
    },
  //   页面过度
  app: {
    pageTransition: { name: 'app', mode: 'out-in' },
    // 布局过渡
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      meta: [{ name: 'referrer', content: 'no-referrer' }]
    }
  },
  // 模块配置
  modules: [
    // ...
    '@pinia/nuxt',
    // pinia存储插件
    '@pinia-plugin-persistedstate/nuxt'
  ],
  // 反向代理
  nitro: {
    devProxy: {
      '/api': {
        target: 'https://i.maoyan.com/api', // 这里是接口地址
        changeOrigin: true,
        prependPath: true
      }
    }
    // 该配置用于服务端请求转发 -- 这里使用时首屏加载不发请求 前端代理成功 后台代理失败。不理解
    // routeRules: {
    //   '/api/**': {
    //     proxy: 'https://i.maoyan.com/api/**'
    //   }
    // }
  },
  build: {
    transpile: [/vue-i18n/]
  },
  vite: {
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
      }
    },
    plugins: [
      VueI18nVitePlugin({
        include: [resolve(dirname(fileURLToPath(import.meta.url)), './i18n/*.ts')]
      })
    ]
  }
})
