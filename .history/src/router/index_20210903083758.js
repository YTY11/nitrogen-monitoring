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
    path: "/nitrogen_monitoring",
    redirect: '/nitrogen_monitoring/n2Electronic',
  },
  {
    path: "/nitrogen_monitoring/n2Electronic",
    component: () => import("@/views/n2Electronic"),
    name: "N2Electronic",
    meta: {
      title: '电子看板'
    }
  },
  {
    path: "/nitrogen_monitoring/errorAnalysis",
    component: () => import("@/views/errorAnalysis"),
    name: "ErrorAnalysis",
    meta: {
      title: '异常分析'
    }
  },
  {
    path: "/nitrogen_monitoring/energy",
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
  // mode: "history",//history模式部署到tomcat要额外的配置部署使用hash
  mode:"history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
