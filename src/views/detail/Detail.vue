<template>
    <div class="detail">
        <detail-nav-bar class="detail-nav"/>
        <scroll class="content" ref="scroll">
            <detail-swiper :top-images="topImages"/>
            <detail-base-info :goods="goods"/>
            <detail-shop-info :shop="shop"/>
            <detail-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
            <detail-param-info :param-info="paramInfo"/>
            <detail-comment-info :comment-info="commentInfo"/>
            <goods-list :goods="recommends"/>
        </scroll>

    </div>

</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailInfo from "./childComps/DetailInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";

  import Scroll from "../../components/common/scroll/Scroll";
  import GoodsList from "../../components/content/goods/GoodsList";

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from "../../network/detail";

  export default {
    name: "Detail",
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: []
      }
    },
    methods: {
        imageLoad() {
            this.$refs.scroll.refresh()
        }
    },
    created() {
        /**
         * 点击不同的图片，展示一样的数据，是因为router-view设置了keep-alive,
         * 导致点击不同的图片不会重新加载created()
         */
      //1.保存传入的iid
      this.iid = this.$route.params.iid
      //2.根据iid请求详细数据
      getDetail(this.iid).then(res => {
        const data = res.result;
           // console.log(data)
        //2.1.获取顶部轮播图的数据
        this.topImages = data.itemInfo.topImages
        for(let i=0;i<this.topImages.length;i++)
        {
            this.topImages[i] = 'http:' + this.topImages[i]
        }
        //2.2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //2.3.获取店铺信息
        this.shop = new Shop(data.shopInfo)
        //2.4.获取商品详情信息
        this.detailInfo = data.detailInfo
        //获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        //获取评论信息
        if(data.rate.cRate !== 0){
            this.commentInfo = data.rate.list[0]
        }
      })
      //3.请求推荐数据
      getRecommend().then(res => {
         this.recommends = res.data.list
      })
    },
    activated() {
      this.iid = this.$route.params.iid
    }
  }
</script>

<style scoped>
    .detail {
        position: relative;
        z-index: 1;
        background-color: #fff;
        height: 100vh;
    }
    .content {
        background-color: #fff;
        height: calc(100% - 44px);
    }
    /*.detail-nav {*/
    /*    position: relative;*/
    /*    z-index: 8;*/
    /*    background-color: #fff;*/
    /*}*/

</style>