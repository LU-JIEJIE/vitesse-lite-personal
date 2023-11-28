import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true
      }
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    // Page(),

    // https://github.com/posva/unplugin-vue-router
    VueRouter({}),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCSS()
  ]
})
