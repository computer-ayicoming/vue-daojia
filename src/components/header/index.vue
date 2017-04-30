<template>
  <div class="header cls">
    <div class="nav">
      <div class="logo">
        <img src="../../assets/img/icon/logo.png">
      </div>
      <ul class="nav-list cls">
        <router-link to="index">
          <li class="nav-item">首页</li>
        </router-link>
        <router-link to="Housekeeping">
          <li class="nav-item">家政</li>
        </router-link>
        <a href="#">
          <li class="nav-item">月嫂</li>
        </a>
        <a href="#">
          <li class="nav-item">育儿嫂</li>

        </a>
        <a href="#">
          <li class="nav-item">保姆</li>
        </a>
        <a href="#">
          <li class="nav-item">企业服务</li>
        </a>
      </ul>
    </div>
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
  .header {
    display flex
    min-width 1200px
  //height 200px
    .logo {
      flex 1
      img {
        display inline-block
        float: left;
        margin-top: .8%;
      }
    }
    .nav {
      flex 1
      align-items center
      height inherit
      .nav-list {
        text-align center
        font-size 0
        font-weight bold
        .nav-item {
          color: dimgrey;
          font-size: .8rem;
          display: inline-block;
          height: 114px;
          line-height: 114px;
          width: calc(100% / 12);
        //float left
        }
        .nav-input {
          display inline-block
          margin-left 1%
          width calc(100% / 11)
          padding-left 2%
          height 25px
          border-radius 5px
          /*background-image url("../img/icon/sousuo.png")*/
          background-repeat no-repeat
        }
        .nav-item:hover {
          color: red;
        }
      }

    }
  }

</style>
