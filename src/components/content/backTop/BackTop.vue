<template>
  <div class="back-top">
    <div class="top"></div>
  </div>
</template>

<script>
export default {
  name: 'BackTop',
}
</script>

<style>
  .top {
    width: 43px;
    height: 43px;
    background-color: #fff;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, .6);

    position: fixed;
    right: 15px;
    bottom: 70px;
    z-index: 11;
  }

  .top::before {
    content: '';
    width: 53px;
    height: 53px;
    position: absolute;
    left: -5px;
    top: -5px;
    background: url('~assets/img/common/back-top.svg') 0 0/53px 53px;
  }
</style>