<template>
  <section class="container">
    <div class="content">
      <div class="banner">
        <slider></slider>
      </div>
      <div class="serve">
        <ul class="serve-list">
          <li class="serve-item">
            <img src="../assets/img/adv/serve-hero-1.jpg" height="160" width="290"/>
          </li>
          <li class="serve-item">
            <img src="../assets/img/adv/serve-hero-2.jpg" height="160" width="290"/>
          </li>
          <li class="serve-item">
            <img src="../assets/img/adv/serve-hero-3.jpg" height="160" width="290"/>
          </li>
          <li class="serve-item">
            <img src="../assets/img/adv/serve-hero-4.jpg" height="160" width="290"/>
          </li>
        </ul>
      </div>
      <div class="hot-serve-bar">
        <strong>热门服务:</strong>
        <div class="hot-item">家电清洗</div>
      </div>
    </div>
    <div class="large-container">
      <div class="large-content">
        <ul class="serve-show">
          <li class="clean">
            <h2 class="title"><strong>1F</strong>家庭清洁</h2>
            <ul class="clean-list">
              <li class="clean-item">
                <img src="../assets/img/adv/home-serve-1.jpg"/>
                <div class="text-wrapper"><span class="desc">态度认真 勤快负责</span></div>
              </li>
              <li class="clean-item">
                <img src="../assets/img/adv/home-serve-2.jpg"/>
                <div class="text-wrapper"><span class="desc">用心服务 省心专业</span></div>
              </li>
              <li class="clean-item">
                <img src="../assets/img/adv/home-serve-3.jpg"/>
                <div class="text-wrapper"><span class="desc">优质服务 净心舒适</span></div>
              </li>
            </ul>
          </li>
          <li class="care-baby">
            <h2 class="title"><strong>2F</strong>婴幼护理</h2>
            <ul class="care-list">
              <li class="care-item">
                <img src="../assets/img/adv/f-2-01.jpg" height="180" width="370"/>
                <div class="text-wrapper"><span class="desc">宝宝开心 妈妈放心</span></div>
              </li>
              <li class="care-item">
                <img src="../assets/img/adv/f-2-02.jpg" height="180" width="370"/>
                <div class="text-wrapper"><span class="desc">细心呵护 快乐成长</span></div>
              </li>
              <li class="care-item">
                <img src="../assets/img/adv/f-2-03.jpg" height="180" width="370"/>
                <div class="text-wrapper"><span class="desc">科学饮食 宝宝健康</span></div>
              </li>
            </ul>
          </li>
          <li class="trans">
            <h2 class="title"><strong>3F</strong>同城速运</h2>
            <ul class="trans-list">
              <li class="house-item">
                <img src="../assets/img/adv/transport-1.png" height="180" width="370"/>
                <div class="text-wrapper"><span class="desc">优质服务 白菜价格</span></div>
              </li>
              <li class="trans-item">
                <img src="../assets/img/adv/transport-2.png" height="180" width="370"/>
                <div class="text-wrapper"><span class="desc">优质服务 白菜价格</span></div>
              </li>
              <li class="trans-item">
                <img src="../assets/img/adv/transport-3.png" height="180" width="370"/>
                <div class="text-wrapper"><span class="desc">优质服务 白菜价格</span></div>
              </li>
            </ul>
          </li>
          <li class="more">
            <h2 class="title"><strong>4F</strong>更多个性需求</h2>
            <ul class="more-list">
              <li class="more-item">
                <img src="../assets/img/adv/more-1.jpg" height="180" width="370"/>
                <div class="text-wrapper"><span class="desc">开门换锁 保障安全</span></div>
              </li>
              <li class="more-item">
                <img src="../assets/img/adv/more-2.jpg" height="180" width="370"/>
                <div class="text-wrapper"><span class="desc">洗车护车 专业专注</span></div>
              </li>
              <li class="more-item">
                <img src="../assets/img/adv/more-3.jpg" height="180" width="370"/>
                <div class="text-wrapper"><span class="desc">足不出户 按摩到家</span></div>
              </li>
            </ul>
          </li>
        </ul>
        <div class="events">
          <ul class="events-list">
            <li class="events-item"></li>
          </ul>
        </div>
        <div class="links">
          <ul class="links-list">
            <li class="links-item"></li>
          </ul>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  import Slider from '@/components/Slider'
  import Icon from '@/components/icon'
  export default {
    components: {
      Slider,
      Icon
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../style/reset.css"
  @import "../style/common.styl"
  @import "../style/index.styl"
</style>
