import Vue from 'vue'
import Router from 'vue-router'
import one  from '@/views/two'
import Home from '../components/Home'
import About from '../components/About'
import User from "../components/User";


//1.通过vue.use(插件)，安装插件
Vue.use(Router)
//2.创建路由对象
export default new Router({
  routes: [
    {
      path: '',// 缺省路由
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/user/:aaa',
      component: User
    },
  ],
  mode:'history'
})
//3.在vue实例挂载routor
