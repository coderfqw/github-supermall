<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" v-show="showTabControl" />
    <scroll class="wrapper" ref="scroll" :scrollProbeType="3" :scrollPullUpLoad="true" @scroll="contentScroll" @pullingUp="pullingUp">
      <home-swiper :banners='banners'></home-swiper>
      <recommend-view :recommends='recommends'></recommend-view>
      <feature-view />
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="showTop" />
    <back-top ref="backTop" @click.native="backClick" v-show="showTop" ShowNum="800" />
  </div>
</template>

<script>
// view-*-childComps
import {HomeSwiper, RecommendView, FeatureView} from './childComps';

// common
import {itemListenerMixin, backTopMixin} from 'common/mixin.js'

// components-common
import {NavBar} from 'components/common/navBar'
import {Scroll} from 'components/common/scroll'
import {BackTop} from 'components/content/backTop'

// components-content
import {TabControl} from 'components/content/tabControl'
import {GoodsList, GoodsListItem} from 'components/content/goods'

// network
import {getHomeMultidata, getHomeGoods} from 'network/home';


export default {
  name: 'Home',
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    Scroll,
    BackTop,
    TabControl,
    GoodsList,
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop',
      showTabControl: false,
      saveY: 0,
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  // 生命周期函数, 发送网络请求
  created() {
    // 1.请求多个数据
    this.getHomeMultidata()

    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {},
  // 销毁
  destroyed() {
  },
  activated() {
    // 如果先 scrollTo 再 refresh ,会出现返回时从原先的位子滚动到顶部
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    // 保存Y值
    this.saveY = this.$refs.scroll.getScrollY()

    // 取消全局事件的监听
    this.$bus.$off('itemImgLoad ', this.itemImgListener)
  },
  methods: {
    /*
     *  事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },

    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },

    contentScroll(position) {
      this.showTabControl = position.y <= -this.$refs.tabControl2.$el.offsetTop;
      this.showBackTop(position)
    },

    pullingUp() {
      this.getHomeGoods(this.currentType)
    },
    
    /*
     *  网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        res && res.data && this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    },
  },
}
</script>

<style scoped>
  #home {
    padding-bottom: 49px;
    height: 100vh;
    position: relative;
  }
  
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /* 原生滚动是需要定位 */
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0; */

    /* z-index: 9; */
  }

  .tab-control {
    position: relative;
    z-index: 9;
    background: #fff;
  }

  .wrapper {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .backShou {
    display: none
  }
</style>
