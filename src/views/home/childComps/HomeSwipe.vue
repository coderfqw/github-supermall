<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.title">
      <!-- <a :href="item.link"> -->
      <a href="javascript:;">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: 'Home',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
}
</script>

<style scoped>
</style>
