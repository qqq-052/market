import {requset} from "./request";

export function getDetail(iid) {
  return requset({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return requset({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class  Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
  }
}

export class GoodsParam {
  constructor(info,rule) {
    //images可能没有值（某系商品有值，有些没有值）
    this.image = info.images? info.images[0]:'';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
