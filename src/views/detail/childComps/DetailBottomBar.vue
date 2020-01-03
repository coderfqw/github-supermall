<template>
  <tab-bar class="tab-bar">
    <tab-bar-team>  
      <tab-bar-item>
        <img slot="item-icon"  src="~assets/img/tabbar/home-active.svg" alt="">
        <div slot="item-text" >客服</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <div slot="item-text">店铺</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/cart-active.svg" alt="">
        <div slot="item-text">收藏</div>
      </tab-bar-item>
    </tab-bar-team>
    <tab-bar-team>
      <tab-bar-item :bgc="'#fd1'">
        <div slot="item-text" class="bottom-bar-right" @click="addToCart">加入购物车</div>
      </tab-bar-item>
      <tab-bar-item :bgc="'#f79'" :col="'#fff'">
        <div slot="item-text" class="bottom-bar-right">购买</div>
      </tab-bar-item>
    </tab-bar-team>
  </tab-bar>
</template>

<script>
import {TabBar, TabBarTeam, TabBarItem} from 'components/common/tabBar'

  export default {
    name: 'DetailBottomBar',
    components: {
      TabBar,
      TabBarTeam,
      TabBarItem,
    },
    methods: {
      addToCart() {
        this.$emit('addToCart')
      }
    },
  }
</script>

<style>
  .tab-bar{
    z-index: 10;
  }
  .bottom-bar-right {
    flex: 1;
    font-size: 18px;
    line-height: 49px;
  }
</style>