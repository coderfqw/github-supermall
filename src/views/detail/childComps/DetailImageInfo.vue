<template>
  <div>
    <div>
      <div class="image-text">
        <div class="text-top"></div>
        <p>{{detailImage.desc}}</p>
        <div class="text-bottom"></div>
      </div>
      <div class="image-title">
        <p>{{detailImage.key}}</p>
      </div>
      <div v-for="item in detailImage.list" :key="item" class="image-list" >
        <img :src="item" alt="" @load="imgLoad">
      </div>
    </div>
  </div>
</template> 

<script>

export default {
  name: 'DetailImageInfo',
  props: {
    detailImage: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImgLoad')
      this.$emit('detailImageLoad')
    }
  },
}
</script>

<style>
  .image-list img {
    width: 100%;
  }
  .image-text {
    font-size: 12px;
    position: relative;
    padding: 20px 0 10px;
    margin: 20px 10px;
  }
  .text-top,
  .text-bottom {
    width: 10px;
    height: 10px;
    background-color: #000;
    position: absolute;
  }
  .text-top {
    left: 0;
    top: 0;
  }
  .text-bottom {
    right: 0;
    bottom: 0;
  }
  .text-top::after,
  .text-bottom::after {
    content: '';
    width: 100px;
    height: 1px;
    position: absolute;
    background-color: #000;
    bottom: 0;
  }
  .text-top::after {
    left: 0;
  }
  .text-bottom::after {
    right: 0;
  }
  .image-title {
    padding: 0 10px;
    font: 700 16px/1 'Microsoft YaHei';
  }
</style>