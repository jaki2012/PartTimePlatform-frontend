import Vue from 'vue'
import Router from 'vue-router'
//webpage components
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import JobDetail from '@/components/JobDetail'
import Login from '@/components/Login'
import Create from '@/components/Create'
import CreateJob from '@/components/CreateJob'
import Position from '@/components/Position'
import RefusedResumes from '@/components/resume/RefusedResumes'
import UnhandleResumes from '@/components/resume/UnhandleResumes'
import AcceptedResumes from '@/components/resume/AcceptedResumes'
import UserResumeStates from '@/components/UserResumeStates'
import UserJobStates from '@/components/UserJobStates'
import SearchList from '@/components/Searchlist'
import UserInfo from '@/components/userinfo/UserInfo'
import MyResume from '@/components/userinfo/MyResume'
import Credits from '@/components/userinfo/Credits'
import Income from '@/components/userinfo/Income'
import Myjobs from '@/components/userinfo/Myjobs'
import Mydelivery from '@/components/userinfo/Mydelivery'


Vue.use(Router)

export default new Router({
  routes: [
    // Vue-cli welcome page
    {
      path: '/',
      redirect: '/home'
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
    // create job page
    {
      path: '/createjob',
      name: 'createjob',
      component: CreateJob
    },
    // 已发布的职位页面
    {
      path: '/position',
      name: 'position',
      component: Position
    },
    // 待处理简历页面
    {
      path: '/unhandleresumes',
      name: 'unhandleresumes',
      component: UnhandleResumes
    },
    // 已录取简历页面
    {
      path: '/acceptedresumes',
      name: 'acceptedresumes',
      component: AcceptedResumes
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
    },
    // 兼职收入与体现
    {
      path: '/income',
      name: 'income',
      component: Income
    },
    // 我的兼职
    {
      path: '/myjobs',
      name: 'myjobs',
      component: Myjobs
    },
    // 搜索结果页面
    {
      path: '/searchlist',
      name: 'searchlist',
      component: SearchList
    },
    // 搜索结果页面
    {
      path: '/mydelivery',
      name: 'mydelivery',
      component: Mydelivery
    }
  ]
})
