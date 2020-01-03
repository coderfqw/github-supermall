<template>
  <tab-bar class="tab-bar">
    <tab-bar-item path='/home' urlName='首页'>
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <!-- <tab-bar-item path='/category' activeColor='yellowgreen'> -->
    <tab-bar-item path='/category' urlName='分类'>
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category-active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path='/cart' urlName='购物车'>
      <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/cart-active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path='/profile' urlName='我的'>
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile-active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import {TabBar, TabBarItem} from 'components/common/tabBar'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem,
    }
  }
</script>

<style>
  .tab-bar{
    z-index: 10;
  }
</style>