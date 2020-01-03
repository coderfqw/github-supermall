<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    scrollProbeType: {
      type: Number,
      default: 0,
    },
    scrollPullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 监听滚动
      // 0,1: 不侦测实时位置;
      // 2: 手指滚动侦测, 手指离开后的惯性滚动不侦测
      // 3: 只要是滚动都侦测
      probeType: this.scrollProbeType,
      // 用于控制 div、span 之类元素的原生点击是否生效
      click: true,
      // 监听上拉加载更多
      pullUpLoad: this.scrollPullUpLoad,
    })
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll',position);
    })
    this.scroll.on('pullingUp', () => {
      // console.log('上拉加载更多');
      this.$emit('pullingUp')
      setTimeout(() => {
        this.scroll.finishPullUp()
      }, 2000);
    })
  },
  deactivated() {
    // console.log('deactivated');
  },
  methods: {
    scrollTo(x, y, time=1000) {
      this.scroll &&this.scroll.scrollTo(x, y, time)
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    getScrollY () {
      return this.scroll?this.scroll.y:0;
    }
  },
}
</script>

<style scoped>

</style>