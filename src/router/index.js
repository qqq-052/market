import Vue from "vue";
import VueRouter from "vue-router";

//路由懒加载
const Home = ()=> import('../views/home/Home')
const Category = ()=> import('../views/category/Category')
const Cart = ()=> import('../views/cart/Cart')
const Profile = ()=> import('../views/profile/Profile')
const Detail = ()=> import('../views/detail/Detail')




//1.安装插件
Vue.use(VueRouter);
//2.创建路由对象routes
const routes = [
  {
    path: "",
    redirect: '/home'//默认路由
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }

];
//3.导出路由
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
