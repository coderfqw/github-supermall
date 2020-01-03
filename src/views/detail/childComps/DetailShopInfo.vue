<template>
  <div class="shop-info">
    <div class="shop-logo">
      <img :src="shop.logo" alt="" class="logo-icon">
      <span class="logo-text">{{shop.name}}</span>
    </div>
    <div class="shop-score">
      <div class="score-left">
        <div class="shop-sells">
          <span>{{Math.round(shop.sells/1000)/10 + '万'}}</span>
          <p>总销量</p>
        </div>
        <div class="shop-goodsCount">
          <span>{{shop.goodsCount}}</span>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="score-right">
        <div v-for="item in shop.score" :key="item.name" class="score-info">
          <p class="score-name">{{item.name}}</p>
          <p class="score-num" :class="{scoreBetter:item.isBetter}">{{item.score}}</p>
          <p v-if="item.isBetter" class="better-icon icon-text right">高</p>
          <p v-else class="worse-icon icon-text right">低</p>
        </div>
      </div>
    </div>
    <div class="go-shop">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {},
  },
}
</script>

<style scoped>
  .shop-info {
    position: relative;
    padding: 30px 8px 70px;
    border-bottom: 3px solid rgba(0, 0, 0, .1);
  }
  .shop-logo {
    position: relative;
  }
  .logo-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid rgba(0, 0, 0, .1);
  }
  .logo-text {
    font: 400 20px/1 "Microsoft YaHei";
    padding-left: 15px;
    position: absolute;
    top: 20px;
  }
  .shop-score {
    display: flex;
  }
  .score-left {
    flex: 1;
    width: 50%;
    padding: 15px 0;
  }
  .shop-goodsCount {
    border-right: 2px solid rgba(0, 0, 0, .1);
  }
  .shop-sells ,
  .shop-goodsCount {
    display: inline-block;
    width: 50%;
    text-align: center;
  }
  .shop-sells span,
  .shop-goodsCount span {
    display: inline-block;
    padding: 5px 0;
    font-size: 20px;
  }
  .shop-sells p,
  .shop-goodsCount p {
    font-size: 14px;
    font-weight: 700;
  }
  .score-right {
    flex: 1;
    width: 50%;
  }
  .score-info {
    font-size: 14px;
    padding: 5px 0;
  }
  .score-name {
    display: inline-block;
    padding-left: 40px;
  }
  .score-num {
    display: inline-block;
    color: rgb(24, 204, 0);
    padding-left: 15px;
  }
  .scoreBetter {
    color: #f00;
  }
  .icon-text right {
    color: #fff;
    margin-right: 10px
  }
  .better-icon {
    background-color: #f00;
  }
  .worse-icon {
    background-color: rgb(24, 204, 0);
  }
  .go-shop {
    position: absolute;
    left: 30%;
    right: 30%;
    top: 200px;
    /* bottom: 40px; */
    text-align: center;
    padding: 5px;
    background-color: #e4e4e4;
    border-radius: 10px;
  }
</style>