<template>
  <div class="footer">
    <ul class="about-list">
      <li class="about-item"><a href="">网站地图</a></li>
      <li class="about-item">|</li>
      <li class="about-item"><a href="">关于我们</a></li>
      <li class="about-item">|</li>
      <li class="about-item"><a href="">加入我们</a></li>
      <li class="about-item">|</li>
      <li class="about-item"><a href="">媒体报道</a></li>
    </ul>
    <div class="msg">
      <p class="about-botton">@2017 zhoubao.com 阿姨来了版权所有</p>
      <p class="about-botton">周宝家政有限公司</p>
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
  .footer {
    width: 100%
    height: 100px
    background-color: #999999
    margin-top: 30px
    .about-list {
      height 36px
      color white
      width 410px
      margin 0 auto
      .about-item {
        float left
        padding 10px 10px
        a {
          text-decoration: none;
          color: white;
        }
        a:hover {
          color: white;
        }
      }
    }
    .msg {
      width: 310px;
      margin: 0 auto;
      height: 50px;
      padding: 5px 0
      .about-botton {
        padding: 5px 0;
        text-align: center;
        color: #525a66;
      }
    }
  }


</style>
