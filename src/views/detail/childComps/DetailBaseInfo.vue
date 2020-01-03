<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {},
  },
}
</script>

<style scoped>
  .base-info {
    font-family: 'Microsoft YaHei' ;
  }
  .info-title {
    padding: 8px;
    font: 700 18px/1.2 'Microsoft YaHei';
  }
  .info-price {
    padding: 8px;
    position: relative;
  }
  .n-price {
    color: var(--color-high-text);
    font-size: 20px;
  }
  .o-price {
    padding: 0 5px;
    font-size: 14px;
    text-decoration: line-through;
    color: var(--color-text);
  }
  .discount {
    background-color: var(--color-tint);
    color: #fff;
    border-radius: 10px;
    padding: 0 5px;
    font-size: 14px;

    position: relative;
    top: -8px;
  }
  .info-other {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    margin: 0 8px;
    padding: 15px 0;
  }
  .info-service {
    display: flex;
    justify-content: space-between;
    font: 700 15px/4 'Microsoft YaHei';
    border-bottom: 3px solid rgba(0, 0, 0, .1);
    padding: 5px 0;
  }
  .info-service-item {
    position: relative;
    padding: 0 8px;
  }
  .info-service-item img {
    width: 14px;
  }
  .info-service-item span {
    padding-left: 3px;
    font-size: 12px;
  }
</style>