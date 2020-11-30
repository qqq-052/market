<template>
  <div class="detail-swiper">
      <el-carousel indicator-position="none" height="250px">
        <el-carousel-item v-for="(item,index) in topImages" :key="item">
          <img :src="item" alt="">
          <div class="imgPage">{{index+1}}/{{topImages.length}}</div>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
  export default {
    name: "DetailSwiper",
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .el-carousel__item img {
    position: relative;
    width: 100%;
  }
  .imgPage {
    position: fixed;
    right: 10%;
    bottom: 8%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 1;
    line-height: 150px;
    right:50px;
  }


  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>