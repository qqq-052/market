<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend-view :recommends="recommends"/>
    <fashion/>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"/>
    <goods-list :goods="goods['pop'].list"/>
<!--    <router-view/>-->

  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import Fashion from "./childComps/Fashion";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import {getMultidata, getHomeGoods,} from "../../network/home";


  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      Fashion,
      TabControl,
      GoodsList
    },
    data(){
      return {
        banners: [],
        recommends: [],
        goods: {
            'pop': {page: 0, list: []},
            'new': {page: 0, list: []},
            'sell': {page: 0, list: []}
        }
      }

    },
    created() {
      //1.请求多个数据
      this.getMultidata()
        //2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
      methods: {
          getMultidata() {
              getMultidata().then(res => {
                  this.banners = res.data.banner.list
                  this.recommends = res.data.recommend.list
              })
          },
          getHomeGoods(type) {
              const page = this.goods[type].page + 1
              getHomeGoods(type, page).then(res => {
                console.log(res)
                  this.goods[type].list.push(...res.data.list)
                  this.goods[type].page +=1
              })
          }

      }
  };
</script>
<style scoped>
  #home{
    margin-top: 44px;
    height: 1000px;
  }
  .home-nav{
    background-color: var(--color-text);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>
