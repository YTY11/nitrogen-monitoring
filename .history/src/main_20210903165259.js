import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入基本样式
import "normalize.css/normalize.css";
//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入工具类
import utilesFun
//引入echarts
import * as echarts from "echarts";
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts
//安装ElementUI
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
