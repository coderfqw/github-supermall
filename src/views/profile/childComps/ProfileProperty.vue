<template>
  <div class="property">
    <div class="property-item property-balance">
      <div class="balance-content">
        <span class="content-num">0.00</span>
        <span class="content-units">元</span>
      </div>
      <div class="balance-text">我的余额</div>
    </div>
    <div class="property-item property-discounts">
      <div class="discounts-content">
        <span class="content-num">0</span>
        <span class="content-units">个</span>
      </div>
      <div class="discounts-text">我的优惠</div>
    </div>
    <div class="property-item property-integral">
      <div class="integral-content">
        <span class="content-num">0</span>
        <span class="content-units">分</span>
      </div>
      <div class="integral-text">我的积分</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProfileProperty',
}
</script>

<style scoped>
 .property {
   display: flex;
   padding: 10px 0;
   background-color: #fff;
 }
  .property-item {
    flex: 1;
    text-align: center;
    padding: 10px 0;
  }
  .property-discounts {
    border-width: 0 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, .1)
  }
  .content-num {
    font-size: 24px;
    color: #f70;
  }
</style>