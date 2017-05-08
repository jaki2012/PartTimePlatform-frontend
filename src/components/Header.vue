<template>
  <div id="header">
    <div class="wrapper">
      <a href="index.html" class="logo">
        <img src="../assets/images/logo2.png" width="229" height="43" alt="拉勾招聘-专注互联网招聘" />
      </a>
      <ul class="reset" id="navheader">
        <li class="current"><router-link to="/">首页</router-link></li>
        <li><a href="companylist.html">公司</a></li>
        <li><a href="h/toForum.html" target="_blank">论坛</a></li>
        <li><router-link to="myresume" rel="nofollow">我的简历</router-link></li>
        <li><router-link to="create" rel="nofollow">发布职位</router-link></li>
      </ul>
      <ul class="loginTop" v-if="!user.name">
        <li><router-link to="login" rel="nofollow">登录</router-link></li>
        <li>|</li>
        <li><a href="register.html" rel="nofollow">注册</a></li>
      </ul>
      <dl class="collapsible_menu" v-if="user.name">
          <dt>
              <span>{{user.name}}&nbsp;</span>
              <span class="red dn" id="noticeDot-1"></span>
              <i></i>
          </dt>
          <dd style="display: none;"><router-link to="position">我发布的职位</router-link></dd>
          <dd style="display: none;"><router-link to="unhandleresumes">我收到的简历</router-link></dd>
          <dd class="btm" style="display: none;"><a href="myhome.html">我的公司主页</a></dd>
          <dd style="display: none;"><router-link to="userinfo">我要找工作</router-link></dd>
          <dd style="display: none;"><a href="accountBind.html">帐号设置</a></dd>
          <dd class="logout" style="display: none;"><a rel="nofollow" v-on:click="submit">退出当前账号</a></dd>
      </dl>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions} from 'vuex'
  import { USER_SIGNOUT} from '../vuex/store/user'
  export default {
    name: 'header',
    computed: mapState({ user: state => state.user}),
    methods: {
      ...mapActions({USER_SIGNOUT}),
      submit() {
        this.USER_SIGNOUT()
        this.$router.replace({path:'/login'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   @import '../assets/css/style.css';
   @import '../assets/css/popup.css';
   #header {
     margin-bottom: 10px;
   }
</style>
