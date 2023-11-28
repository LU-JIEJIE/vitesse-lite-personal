import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    vue({
      script: {
        defineModel: true
      }
    }),

    // https://github.com/posva/unplugin-vue-router
    VueRouter(),

    // https://github.com/unplugin/unplugin-vue-components
    Components(),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCSS()
  ]
})
