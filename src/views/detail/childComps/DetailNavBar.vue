<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" :key="item" class="title-item" :class="{active: index === currentIndex}" @click="itemClick(index)" >
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import {NavBar} from 'components/common/navBar'


export default {
  name: 'DetailNavBar',
  components: {
    NavBar,
  },
  props: {
    navCurrentIndex: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('navbarClick', index)
    },
    backClick() {
      // this.$router.back()
      this.$router.go(-1)
    }
  },
  watch: {
    navCurrentIndex(val) {
      this.currentIndex = val
    }
  },
}
</script>

<style scoped>
  .back img {
    width: 14px;
    height: 14px;
  }

  .title {
    display: flex;
    font-size: 14px;
  }
  .title-item {
    flex: 1
  }
  .active {
    color: var(--color-high-text);
  }
</style>