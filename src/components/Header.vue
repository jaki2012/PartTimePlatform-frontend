<template>
  <div id="header">
    <div class="wrapper">
      <router-link to='/' class="logo">
        <img src="../assets/images/logo3.png" width="229" height="43" alt="同嘉招聘-专注大学生互联网兼职" />
      </router-link>
      <ul class="reset" id="navheader">
        <li class="current"><router-link to="/">首页</router-link></li>
        <li><a>关于同嘉</a></li>
        <li style="display:none"><a>论坛</a></li>
        <li><router-link to="myjobs" rel="nofollow">我的申请</router-link></li>
        <li><router-link to="createjob" rel="nofollow">发布兼职</router-link></li>
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
          <!-- 中介用户 -->
          <dd v-if="user.type===1" style="display: none;"><router-link to="position">我发布的职位</router-link></dd>
          <dd v-if="user.type===1" style="display: none;"><router-link to="unhandleresumes">我收到的简历</router-link></dd>
          <dd v-if="user.type===1" style="display: none;"><router-link :to="{ path: 'userinfo', query: { userid: user.type }}">我的个人资料</router-link></dd>
          <dd v-if="user.type===1" class="btm" style="display:none;"><a >我的公司主页</a></dd>
          <!-- end中介用户 -->
          <!-- 学生用户 -->
          <dd v-if="user.type===0" style="display: none;"><router-link :to="{ path: 'userinfo', query: { userid: user.type }}">我的个人资料</router-link></dd>
          <dd v-if="false" style="display: none;"><router-link :to="{ path: 'myresume', query: { userid: user.type }}">我的个人简历</router-link></dd>
          <dd v-if="user.type===0" style="display: none;"><router-link to="myjobs">我的兼职状态</router-link></dd>
          <dd v-if="user.type===0" style="display: none;"><router-link to="credits">我的信用积分</router-link></dd>
          <!-- end学生用户 -->
          <dd style="display: none;"><a>帐号设置</a></dd>
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
    },
    created: function() {

      console.log(HOST)
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
