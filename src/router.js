import Vue from 'vue'
import Router from 'vue-router'

// 安装插件
Vue.use(Router)

// 导入组件  懒加载
const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue')
const Detail = () => import('views/detail/Detail.vue')

// 创建 router
const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    // path: '/detail/:iid',
    path: '/detail',
    component: Detail,
  },
]

const router = new Router({
  routes,
  mode: 'history',
})

export default router
