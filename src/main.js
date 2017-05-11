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
    //true用户已登录， false用户未登录
    var isLogin = Boolean(store.state.user.name) 

    if (auth && !isLogin && path !== '/login') {
        return next({ path: '/login' })
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
