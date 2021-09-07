module.exports = {
  lintOnSave: false,//去除elint 定义变量没使用 报错等问题
  "files.autoSave": "off",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    { "language": "vue", "autoFix": true }
  ],
  "eslint.options": {
    "plugins": ["html"]
  }
}