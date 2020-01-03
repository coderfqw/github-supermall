<template>
  <div class="check-btn">
    <div @click="checkBtnClick" class="btn" :class="{check:isChecked}" :style="{color: checkCol}">√</div>
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: Boolean,
    checkCol: {
      type: String,
      default: '#fff'
    }
  },
  methods: {
    checkBtnClick() {
      this.$emit('checkBtnClick')
    }
  },
}
</script>

<style>
  .check-btn {
    position: relative;
    width: 20px;
    height: 100%;
  }
  .btn {
    width: 20px;
    height: 20px;
    color: #fff;
    font: 700 18px/16px "Microsoft YaHei";
    text-align: center;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    margin-top: -10px;
    border: 2px solid #ccc;
  }
  .check {
    background-color: #f00;
    border-color: #f00;
  }
</style>