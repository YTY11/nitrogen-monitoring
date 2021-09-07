import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//解决vue-router在3.o版本以上重复点击报错问题
//将vue-router的push方法加上catch来解决
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: "/",
    redirect: '/n2Electronic',
  },
  {
    path: "/n2Electronic",
    component: () => import("@/views/n2Electronic"),
    name: "N2Electronic",
    meta: {
      title: '电子看板'
    }
  },
  {
    path: "/errorAnalysis",
    component: () => import("@/views/errorAnalysis"),
    name: "ErrorAnalysis",
    meta: {
      title: '异常分析'
    }
  },
  {
    path: "/energy",
    component: () => import("@/views/energy"),
    name: "Energy",
    meta: {
      title: '能耗排名'
    }
  },
  {
    path: "/datadirSet",
    component: () => import("@/views/datadirSet"),
    name: "DatadirSet",
    meta: {
      title: '资料设置'
    }
  }
];

const router = new VueRouter({
  // mode: "history",//history模式部署到tomcat要额外的配置，或将路由路径加上包名
  mode:"hash",//部署使用hash无需额外配置，就是访问路径有个 # 子符
  base: process.env.BASE_URL,
  routes,
});

export default router;
