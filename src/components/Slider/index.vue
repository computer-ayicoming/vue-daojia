<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 340px;
    margin: 0;
  }

  .el-carousel__item:nth-child(4n) {
    background: url("./baojie.png")
  }

  .el-carousel__item:nth-child(4n+1) {
    background: url("./fuyubiaoyu.png")
  }
  .el-carousel__item:nth-child(4n+2) {
    background: url("./hezuo.png")
  }

  .el-carousel__item:nth-child(4n+3) {
    background: url("shipinjiaoxue.png")
  }
</style>
