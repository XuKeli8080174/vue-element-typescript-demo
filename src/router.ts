import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 启用路由懒加载功能
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/home.vue")
    },
    {
      path: "/articles",
      name: "articles",
      component: () => import("./views/articles.vue")
    }
  ]
});
