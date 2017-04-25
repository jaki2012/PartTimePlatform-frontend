<template>
  <div id="app">
    <headerbar></headerbar>
    <div>
      <router-view></router-view>
    </div>
    <footerbar></footerbar>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'
export default {
  name: 'app',
  components: {
    'footerbar': Footer,
    'headerbar': Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}

.hello{
  text-align: center;
}
</style>
