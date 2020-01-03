module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportUnit: 'vw',		        // 指定转化后的视窗单位
      viewportWidth: 375,		        // 视窗的宽度，对应的是我们设计稿的宽度
      viewportHeight: 667,	        // 视窗的高度，对应的使我们设计稿的高度(高度可以不配置)
      unitPrecision: 5,	  	        // px转vw后的小数位数(很多时候无法整除，为保障尽可能的同比例)
      minPixelValue: 1,	  	        // 小于等于1px 则不转换为视窗单位
      medioQuery: false,		        // 是否允许媒体查询进行转换
      selectorBlackList: [],        // 指定不需要转换的类
      exclude: [/NavBar/,/TabBar/]  // 排除文件，使用正则或者数组，数组内内容需要是正则
    }
  }
}
