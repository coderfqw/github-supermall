<template>
  <div class="other">
    <div class="item">
      <div class="news">
        <i class="iconfont news-icon">&#xe641;</i>
        <p class="text text-bd news-text">我的消息</p>
      </div>
      <div class="integral">
        <i class="iconfont integral-icon">&#xe61a;</i>
        <p class="text text-bd integral-text">积分商场</p>
      </div>
      <div class="member">
        <i class="iconfont member-icon">&#xe654;</i>
        <p class="text member-text">会员卡</p>
      </div>
    </div>
    <div class="item">
      <div class="cart">
        <i class="iconfont cart-icon">&#xe63a;</i>
        <p class="text text-bd cart-text">我的购物车</p>
      </div>
      <div class="down">
        <i class="iconfont down-icon">&#xe60e;</i>
        <p class="text down-text">下载购物APP</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProfileOther',
}
</script>

<style scoped>
  .other {
    padding-top: 20px;
    background-color: #f2f2f2;
  }
  .item {
    background-color: #fff;
  }
  .news,
  .integral,
  .member,
  .cart,
  .down {
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    display: flex;
  }
  .cart {
    margin-top: 20px;
  }
  .iconfont {
    color: var(--color-tint);
    font-size: 22px;
    padding: 0 10px 0 5px;
  }
  .text {
    font-size: 16px;
    flex: 1;
  }
  .text-bd {
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }
</style>