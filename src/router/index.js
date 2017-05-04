import Vue from 'vue'
import Router from 'vue-router'
//webpage components
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import JobDetail from '@/components/JobDetail'
import Login from '@/components/Login'
import Create from '@/components/Create'
import Position from '@/components/Position'
import RefusedResumes from '@/components/resume/RefusedResumes'
import UserResumeStates from '@/components/UserResumeStates'
import UserJobStates from '@/components/UserJobStates'
import UserInfo from '@/components/userinfo/UserInfo'
import MyResume from '@/components/userinfo/MyResume'
import Credits from '@/components/userinfo/Credits'

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
    },
    // 不合适简历页面
    {
      path: '/refusedresumes',
      name: 'refusedresumes',
      component: RefusedResumes
    },
    // 用户投递简历情况一览
    {
      path: '/userresumestates',
      name: 'userresumestates',
      component: UserResumeStates
    },
    // 用户兼职情况一览
    {
      path: '/userjobstates',
      name: 'userjobstates',
      component: UserJobStates
    },
    // 用户个人信息
    {
      path: '/userinfo',
      name: 'userinfo',
      component: UserInfo
    },
    // 用户个人简历
    {
      path: '/myresume',
      name: 'myresume',
      component: MyResume
    },
    // 兼职信用积分
    {
      path: '/credits',
      name: 'credits',
      component: Credits
    }
  ]
})
