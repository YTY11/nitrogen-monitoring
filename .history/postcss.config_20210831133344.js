module.exports = {
    plugins: {
      autoprefixer: {},
      'postcss-px-to-viewport': {
        viewportWidth: 768, //设计稿的视口宽度
        viewportHeight: 1024, // 视窗的高度
        unitPrecision: 5,     // 指定`px`转换为视窗单位值的小数位数
        viewportUnit: "vw",   //指定需要转换成的视窗单位，建议使用vw
        selectorBlackList: ['.ignore'],// 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        minPixelValue: 1,     // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        mediaQuery: false, //设置媒体查询里的单位是否需要转换单位
        replace: true, //是否直接更换属性值，而不添加备用属性
        exclude: [/node_modules/,/login/,/homeUi/] //忽略某些文件夹下的文件
      }
    }
  }
