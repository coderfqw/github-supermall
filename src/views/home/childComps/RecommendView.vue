<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.title">
      <!-- <a :href="item.link"> -->
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      <!-- </a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 13px;

    border-bottom: 10px solid #f2f2f2
  }

  .recommend-item {
    flex: 1;
    margin: 5px;
  }

  .recommend img {
    width: 100%;
  }
</style>