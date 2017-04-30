<template>
  <div class="icon">
    <ul>
      <li class="icon-list">
        <img src="./img/金牌供应商.png" alt="">
        <p class="icon-p">金牌供应</p>
      </li>
      <li class="icon-list">
        <img src="./img/买家保障.png" />
        <p class="icon-p">服务保障</p>
      </li>
      <li class="icon-list">
        <img src="./img/极速退款.png" />
        <p class="icon-p">极速退款</p>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'template',
    data () {
      return {
        msg: 'this is the template component!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../style/reset.css"
  @import "../../style/common.styl"
  .icon {
    width 100%
    height 350px
    padding 0 200px
    .icon-list {
      float left
      margin 100px
      img {
        width 100px
      }
      .icon-p {
        width 100px
        text-align center
        font-size 20px
        padding: 15px 0
      }
    }
  }
</style>
