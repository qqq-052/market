<template>
    <div>
       <nav-bar class="nav-bar">
            <div slot="left" class="back"  @click="backClick">
              <img src="~assets/img/common/back.svg" alt="">
            </div>
           <div slot="center" class="title">
               <div class="title-item" v-for="(item,index) in titles" :key="index"
                    :class="{active: index === currentIndex}"
                    @click="titleClick(index)">{{item}}</div>
           </div>
       </nav-bar>
    </div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
    .nav-bar {
      position: relative;
      z-index: 9;
      background-color: #fff;
    }
    .title {
       display: flex;
    }
    .title-item {
        flex: 1;
        font-size: 13px;
    }
    .active {
        color: var(--color-text);
    }
    .back img{
      margin-top: 13px;
      width: 30%;
      height: 30%;
    }

</style>