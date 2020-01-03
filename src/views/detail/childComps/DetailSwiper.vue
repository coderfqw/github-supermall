<template>
  <swiper class="swiper">
    <swiper-item v-for="item in topImages" :key="item" >
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: 'DetailSwiper',
  components: {
    Swiper, 
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>
  .swiper {
    height: 350px;
    overflow: hidden;
  }
</style>