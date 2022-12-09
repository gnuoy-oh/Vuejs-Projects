const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
        '@assets': path.join(__dirname, 'src/assets'),
        '@components': path.join(__dirname, 'src/components')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/main.scss";
        `
      }
    }
  }
})
