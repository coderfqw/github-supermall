<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
    /* 如果包含状态栏的话 lh 应该为64px */
    text-align: center;
    box-shadow: 0 0 2px rgba(0, 0, 0, .2);
  }
  
  .left,
  .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>