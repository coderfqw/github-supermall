<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar" :nav-current-index="navCurrentIndex" @navbarClick="navbarClick" />
    <scroll class="wrapper" ref="scroll" :scroll-probe-type="3" @scroll="contentScroll" >
      <!-- <ul>
        <li v-for="(item, index) in $store.state.cartList" :key="index" >
          <img style="width:40px" :src="item.image" alt="">
          <p>{{item.title}}</p>
          <p>{{item.desc}}</p>
          <p>{{item.price}}</p>
          <p>{{item.count}}</p>
        </li>
      </ul> -->
      <detail-swiper :top-images="topImages" ref="swiper" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-image-info :detail-image="detailImage" @detailImageLoad="detailImageLoad" />
      <detail-item-params :item-params='itemParams' class="item-params" ref="params" />
      <detail-rate-info :rate-info='rateInfo' ref="rate" />
      <goods-list class="goods-list" :goods="recommends" ref="recommend" />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top ref="backTop" @click.native="backClick" v-show="showTop" />
  </div>
</template>

<script>
import {
  DetailNavBar, 
  DetailSwiper, 
  DetailBaseInfo, 
  DetailShopInfo,
  DetailImageInfo,
  DetailItemParams,
  DetailRateInfo,
  DetailBottomBar,
} from './childComps'

import {
  getDetail, 
  getRecommend, 
  Goods, 
  GoodsParam, 
  Shop, 
  DetailImage, 
  Rate, 
} from 'network/detail'

import {Scroll} from 'components/common/scroll'
import {GoodsList} from 'components/content/goods'
import {BackTop} from 'components/content/backTop'

import {debounce} from 'common/utils'
import {itemListenerMixin, backTopMixin} from 'common/mixin.js'

import {mapActions} from 'vuex'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailItemParams,
    DetailRateInfo,
    DetailBottomBar,

    Scroll,
    GoodsList,
    BackTop,
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: {},
      topImages: [],
      goods: {},
      shop: {},
      detailImage: {},
      rateInfo: {},
      itemParams: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      navCurrentIndex: 0,
    }
  },
  created() {
    // 1.获取 iid
    this.iid = this.$route.query.iid

    // 2.获取详情数据
    getDetail(this.iid).then(res => {      
      // 1.获取详情数据
      const data = res.result;

      // 2.获取顶部的轮播图片数据
      this.topImages = data.itemInfo.topImages;

      // 3.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo);

      // 4.获取店铺信息
      this.shop = new Shop(data.shopInfo);

      // 5.取出详情的信息
      this.detailImage = new DetailImage(data.detailInfo);

      // 6.取出参数的信息
      this.itemParams = data.itemParams;

      // 7.取出评论信息
      if (data.rate.cRate !== 0) {
        this.rateInfo = new Rate(data.rate);
      }

      // 第一次获取, 值不对
      // 原因: this.$refs.params.$el 和 this.$refs.rate.$el 未渲染
      // this.themeTopYs = []
      // this.themeTopYs.push(0)
      // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.rate.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)

      // 第二次获取, 值不对
      // 原因: 获取 offsetTop 时, 只渲染了DOM图片还没加载出来
      // 一般情况下有值但是值不对 都是因为图片还没加载的问题
      // this.$nextTick(() => {
      //   this.themeTopYs = []
      //   this.themeTopYs.push(0)
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.rate.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      // })
    })

    // 3.获取推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
    })

    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(-44+this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(-44+this.$refs.rate.$el.offsetTop)
      this.themeTopYs.push(-44+this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    })
  },
  methods: {
    ...mapActions(['addCart']),
    // 可以使用对象方式自己另外起名字
    // ...mapActions({
    //   add: 'addCart'
    // }),

    detailImageLoad() {
      this.getThemeTopY()
    },
    navbarClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
    },
    contentScroll(position) {
      const positionY = -position.y
      // for (let i = 0; i < this.themeTopYs.length; i++) {
      //   // 方法一: if else
      //   // if (positionY >= this.themeTopYs[3]) {
      //   // } else if (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[Number(i)+1]) {
      //   // }

      //   // 方法二: 利用 || 来替代 else
      //   // if (positionY >= this.themeTopYs[i] && (positionY < this.themeTopYs[i*1+1] || i === this.themeTopYs.length-1)) {
      //   // 优化: 通过分离, 减少工作量
      //   if ((positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i*1+1]) || (positionY >= this.themeTopYs[i] && i === this.themeTopYs.length-1)) {
      //     if (this.navCurrentIndex !== i) {
      //       this.navCurrentIndex = i
      //     }
      //   }
      // }

      // 方法三: 给数组 push 一个 Number.MAX_VALUE
      for (let i = 0; i < this.themeTopYs.length-1; i++) {
        if (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i*1+1]) {
          if (this.navCurrentIndex !== i) {
            this.navCurrentIndex = i
          }
        }
      }
      this.showBackTop(position)
    },
    addToCart() {
      const product = {}
      product.iid = this.iid
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.newPrice

      // 可以使用 mapActions 直接导入 vuex 中的 actions
      // 导入方式见 methods 下第一行
      this.addCart(product).then(res => {
        this.$toast.show(res)
      })
    },
  },
  mounted() {
  },
  updated() {
    // this.themeTopYs = []
    // this.themeTopYs.push(0)
    // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
    // this.themeTopYs.push(this.$refs.rate.$el.offsetTop)
    // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
  },
  destroyed() {
    this.$bus.$off('itemImgLoad', 'destroyed' + this.itemListener)
  },
}
</script>

<style scoped>
  .detail {
    height: 100vh;
    position: relative;
    background-color: #fff;
    z-index: 11;
  }
  .detail-nav-bar {
    background-color: #fff;
  }
  .wrapper {
    overflow: hidden;
    /* position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff; */
    height: calc(100% - 44px);
    
    z-index: 11;
  }
  .item-params {
    padding-bottom: 30px;
    border-bottom: 5px solid rgba(0, 0, 0, .1);
  }
  .goods-list {
    padding-top: 10px;
  }
</style>