module.exports = {
  configureWebpack: {
    resolve: {
      // extensions: [],

      // 别名配置
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}