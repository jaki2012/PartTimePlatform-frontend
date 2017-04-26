import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import JobDetail from '@/components/JobDetail'
import Login from '@/components/Login'
import Create from '@/components/Create'
import Position from '@/components/Position'

Vue.use(Router)

export default new Router({
  routes: [
    // Vue-cli welcome page
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    // first page
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    // part-time job detail
    {
      path: '/jobdetail',
      name: 'jobdetail',
      component: JobDetail
    },
    // login page
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // create job page
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    // 已发布的职位页面
    {
      path: '/position',
      name: 'position',
      component: Position
    }
  ]
})
