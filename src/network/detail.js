import {request} from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    },
  })
}

export function getRecommend(params) {
  return request({
    url: '/recommend',
  })
}

export class Goods {
  constructor (itemInfo, columns, shopInfo) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.lowNowPrice;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = shopInfo.services;
  }
}

export class GoodsParam {
  constructor (info, rule) {
    this.image = info.images?info.images[0]:'';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

export class Shop {
  constructor (shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class DetailImage {
  constructor (detailInfo) {
    this.desc = detailInfo.desc;
    this.key = detailInfo.detailImage[0].key;
    this.list = detailInfo.detailImage[0].list;
  }
}

export class Rate {
  constructor (rate) {
    this.cRate = rate.cRate
    this.canExplain = rate.list[0].canExplain;
    this.content = rate.list[0].content;
    this.created = rate.list[0].created;
    this.extraInfo = rate.list[0].extraInfo;
    this.images = rate.list[0].images;
    this.rateId = rate.list[0].rateId;
    this.style = rate.list[0].style;
    this.user = rate.list[0].user;
  }
}