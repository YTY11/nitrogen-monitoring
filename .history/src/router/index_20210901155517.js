import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

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
    name: "errorAnalysis",
    meta: {
      title: '电子看板'
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
