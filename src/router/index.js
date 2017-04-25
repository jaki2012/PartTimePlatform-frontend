import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import JobDetail from '@/components/JobDetail'

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
    }
  ]
})
