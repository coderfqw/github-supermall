  <!-- <p>{{itemInfo.iid}}</p> -->
<template>
  <div class="cart-item">
    <div class="item-selector">
      <CheckButton ref="checkAll" @checkBtnClick="checkedChange" :isChecked="itemInfo.isChecked" />
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="">
    </div>
    <div class="item-info">
      <p class="info-title">{{itemInfo.title}}</p>
      <p class="info-desc">{{itemInfo.desc}}</p>
      <div class="info-btm">
        <p class="info-btm-price left">￥{{itemInfo.price}}</p>
        <p class="info-btm-count right">x{{itemInfo.count}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {CheckButton} from 'components/content/checkButton'

export default {
  name: 'CartItem',
  components: {
    CheckButton
  },
  props: {
    itemInfo: {
      type: Object,
    }
  },
  mounted() {
  },
  methods: {
    checkedChange() {
      this.itemInfo.isChecked = !this.itemInfo.isChecked
    }
  },
  deactivated() {
    this.itemInfo.isChecked = false
  },
}
</script>

<style scoped>
  .cart-item {
    width: 100%;
    font-size: 0;
    padding: 10px;
    display: flex;
    border-bottom: 1px solid #ccc;
  }
  .item-selector {
    padding: 5px;
  }
  .item-img {
    padding: 10px 5px;
  }
  .item-img img {
    width: 80px;
    height: 110px;
    border-radius: 10px;
  }
  .item-info {
    overflow: hidden;
    font-size: 17px;
    color: #333;
    padding: 10px;
    position: relative;
  }
  .info-title,
  .info-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .info-desc {
    font-size: 14px;
    color: #666;
    padding-top: 10px;
  }
  .info-btm {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 20px;
  }
  .info-btm-price {
    color: #f70;
  }
  .info-btm-count {
    font-size: 14px;
  }
</style>