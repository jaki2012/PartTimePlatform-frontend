// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store/'
import './config'

Vue.config.productionTip = false

router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta
    // true用户已登录， false用户未登录
    var isLogin = Boolean(store.state.user.name) 

    // 判断学生用户状态
    var userType = store.state.user.type;

    if (auth && !isLogin && path !== '/login') {
        if(path == '/register'){

        } else {
            return next({ path: '/login' })
        }     
    }

    if (auth && userType == 1 && (path == '/myjobs')){
        alert("只有学生用户可以访问该板块")
        return 
        //return next({ path: '/home' })
    }

    if (auth && userType == 0 && (path == '/createjob' || path == '/position')){
        alert("只有中介用户可以访问该板块")
        return next({ path: '/home' })
    }
    next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
