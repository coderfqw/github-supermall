<template>
  <div v-if="Object.keys(rateInfo).length !== 0 " class="rate">
    <!-- <p>评价数量:{{rateInfo.cRate}}</p> -->
    <div class="rate-header">
      <span class="header-title">用户评价</span>
      <a class="header-more right" href="JavaScript:;">更多</a>
    </div>
    <div class="user">
      <img class="user-img" :src="rateInfo.user.avatar" alt="">
      <span class="user-name">{{rateInfo.user.uname}}</span>
    </div>
    <div class="rate-info">
      <p class="info-text">{{rateInfo.content}}</p>
      <div class="info-shop">
        <span class="shop-date">{{rateInfo.created | showDate}}</span>
        <span class="shop-style">{{rateInfo.style}}</span>
      </div>
      <div class="info-img">
        <img :src="img" alt="" v-for="(img, index) in rateInfo.images" :key="index">
      </div>
      <!-- <p>解释:{{rateInfo.canExplain}}</p> -->
      <!-- <p>ID:{{rateInfo.rateId}}</p> -->
      <!-- <p>是否合身:{{rateInfo.extraInfo}}</p> -->
      <!-- <p>用户信息:{{rateInfo.user}}</p> -->
      <!-- <p>profileUrl:{{rateInfo.user.profileUrl}}</p> -->
      <!-- <p>tagIndex:{{rateInfo.user.tagIndex}}</p> -->
      <!-- <p>id::{{rateInfo.user.uid}}</p> -->
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils.js'

export default {
  name: 'DetailRateInfo',
  props: {
    rateInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      // 1.将时间戳转成Date对象
      const date = new Date(value * 1000)
      // 2.对date进行格式化
      return formatDate(date, 'yyyy-MM-dd HH:mm:ss')
    }
  }
}
</script>

<style scoped>
  .rate {
    padding: 10px;
  }
  .rate-header {
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    font-weight: 700;
  }
  .header-title {
    font-size: 17px;
  }
  .header-more {
    font-size: 15px;
    padding-right: 25px;
    position: relative;
  }
  .header-more::after {
    content: '>';
    position: absolute;
    right: 10px;
  }
  .user {
    position: relative;
    padding-top: 10px;
  }
  .user-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .user-name {
    position: absolute;
    padding-top: 15px;
    padding-left: 10px;
  }
  .rate-info {
    padding: 8px 5px;
  }
  .info-text {
    font: 400 14px/1.3 "Microsoft YaHei";
  }
  .info-shop {
    padding: 10px 0;
    color: #999;
    font-size: 14px;
  }
  .shop-date {
    padding-right: 8px;;
  }
  .info-img img {
    width: 70px;
    height: 70px;
    margin-right: 4px;
  }
</style>