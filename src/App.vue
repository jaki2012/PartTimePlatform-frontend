<template>
  <div id="app">
    <headerbar v-if="!app.loginPage"></headerbar>
    <div>
      <router-view></router-view>
    </div>
    <footerbar v-if="!app.loginPage"></footerbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Footer from './components/Footer'
import Header from './components/Header'
export default {
  name: 'app',
  computed: mapState({app: state => state.app}),
  components: {
    'footerbar': Footer,
    'headerbar': Header
  }
}
</script>

<style>
#app {
  font-family: 'Hiragino Sans GB', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}

.hello{
  text-align: center;
}
</style>
