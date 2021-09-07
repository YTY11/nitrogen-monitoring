module.exports = {
  outputDir: 'nitrogen_monitoring',//打包名
  publicPath: './',//配置路径否从部署后无法访问
  lintOnSave: false, //去除elint 定义变量没使用 报错等问题
  devServer: {
    overlay: {
      warning: false,
      errors: false,
    },
    open: false,//项目启动自动打开浏览器

  },
};
