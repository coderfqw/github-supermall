import {debounce} from './utils'
import {BackTop} from 'components/content/backTop'

export const itemListenerMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      itemImgListener: null,
    }
  },
  mounted() {
    // 监听item中图片加载是否完成
    let refresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
    // console.log('我是混入中的内容');
  },
}

export const backTopMixin = {
  data() {
    return {
      showTop: false,
      ShowNum: '800',
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    showBackTop(position) {
      // console.log(-this.ShowNum);
      this.showTop = position.y <= -this.ShowNum;
    }
  },
  mounted() {
    // if (this.$refs.backTop.$attrs.ShowNum) {
    //   this.ShowNum = this.$refs.backTop.$attrs.ShowNum
    // }
    this.ShowNum = this.$refs.backTop.$attrs.ShowNum?this.$refs.backTop.$attrs.ShowNum:this.ShowNum;
  },

}


/* 使用 backTopMixin 的方式

<scroll ref="scroll" :scroll-probe-type="3" @scroll="contentScroll">
<back-top ref="backTop" @click.native="backClick" v-show="showTop" ShowNum="800" />

import {backTopMixin} from 'common/mixin.js'

mixins: [backTopMixin],

methods: {
  contentScroll(position) {
    this.showBackTop(position)
  }
},
 */