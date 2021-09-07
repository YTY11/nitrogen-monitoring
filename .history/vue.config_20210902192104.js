module.exports = {
  lintOnSave: false, //去除elint 定义变量没使用 报错等问题
  devServer: {
    overlay: {
      warning: false,
      errors: false,
    },
    open:false//项目启动自动打开浏览器
    outputDir: 'd06_m',
  },
};
