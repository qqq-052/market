<template>
  <div v-if="Object.keys(shop).length !== 0" class="shop-info">
    <div class="shop-top">
      <img :src="shop.shopLogo" class="shop-image" alt="">
      <span class="shopName">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left" >
        <div class="shop-middle-item">
          <span class="sell-info">{{shop.cSells | sellCountFilter}}</span>
          <span class="sell-text">总销量</span>
        </div>
        <div class="shop-middle-item">
          <span class="sell-info">{{shop.cGoods}}</span>
          <span class="sell-text">全部宝贝</span>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <div class="shop-evaluation" v-for="(item,key) in shop.score" :key="key">
          <table>
            <tr>
              <td>{{item.name}}</td>
              <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
              <td class="score-rank" :class="{'better-more':item.isBetter}">{{item.isBetter?'高':'低'}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      sellCountFilter: function (val) {
        if(val<10000) return val
        return (val/10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    /*padding: 20px 8px;*/
    /*border-bottom: 5px solid #f2f5f8;*/
  }
  .shop-top {
    line-height: 45px;
    display: flex;
    align-items: center;
    padding: 10px 0 10px 20px ;
  }
  .shop-image {
    border-radius: 50%;
    width: 45px;
    height: 45px;
    border: 1px solid rgba(0,0,0,.1);
  }
  .shopName {
    margin-left: 20px;
    vertical-align: center;
    /*justify-content: space-evenly;*/
  }
  .shop-middle {
    /*margin-top: 15px;*/
    display: flex;
    align-items: center;
  }
  .shop-middle-item {
    flex: 1;
  }
  .shop-middle-left {
    display: flex;

    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }
  .shop-middle-left span {
    display: block;
  }
  .sell-info {
    font-size: 18px;
  }
  .sell-text {
    margin-top: 10px;
    font-size: 12px;
  }
  .shop-middle-right {
    text-align: center;
  }
  .shop-evaluation {
    margin-left: 30px;
    color: #333;
  }
  /*.shop-middle-right table {*/
  /*  width: 120px;*/
  /*  margin-left: 30px;*/
  /*}*/

  .shop-middle-right table td {
    padding: 5px 0;
  }
  .shop-middle-right .score {
    color: #5ea732;
  }

  .shop-middle-right .score-better {
    color: #f13e3a;
  }

  .shop-middle-right .score-rank span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .shop-middle-right .better-more span {
    background-color: #f13e3a;
  }
  .shop-bottom {
    text-align: center;
    margin-top: 10px;
  }

  .enter-shop {
    display: inline-block;
    font-size: 18px;
    background-color: #f2f5f8;
    width: 80px;
    height: 20px;
    text-align: center;
    line-height: 20px;
  }


</style>