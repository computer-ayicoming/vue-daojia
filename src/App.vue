<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <header-nav></header-nav>
    <router-view></router-view>
    <footer-btm></footer-btm>
  </div>
</template>

<script>
  import HeaderNav from '@/components/header'
  import FooterBtm from '@/components/footer'
  export default {
    name: 'app',
    components: {
      HeaderNav,
      FooterBtm
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
