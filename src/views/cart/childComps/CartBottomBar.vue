<template>
  <div class="cart-btm-bar">
    <div class="btm-left">
      <CheckButton :isChecked="getCheckAll" :checkCol="'#f4f4f4'" @checkBtnClick="checkAllClick" />
      <p class="left-text">全选</p>
    </div>
    <div class="btm-center">
      <p>合计: ￥{{getTotalPrice}}</p>
    </div>
    <div class="btm-right" @click="settlement">
      <p>去结算({{getCheckLength}})</p>
    </div>
  </div>
</template>

<script>
import {CheckButton} from 'components/content/checkButton'

export default {
  name: 'CartBottomBar',
  components: {
    CheckButton,
  },
  methods: {
    // 全选按钮
    checkAllClick() {
      let cartList = this.$store.state.cartList
      let getCheckAll = this.getCheckAll

      cartList.forEach(item => item.isChecked = !getCheckAll)
    },
    settlement() {
      let cartList = this.$store.state.cartList
      let cartListLength = cartList.filter(item => item.isChecked === true).length

      if (cartListLength === 0) {
        this.$toast.show('请勾选您要购买的商品', 1500)
      }
    }
  },
  computed: {
    // 计算勾选的商品总价
    getTotalPrice() {
      return this.$store.state.cartList
      .filter(item => item.isChecked)
      // .filter(function (item) {
      //   console.log(item.isChecked)
      //   return item.isChecked
      // })
      // .reduce(function (preValue, item) {
      //   return preValue + item.price * item.count
      // }, 0)
      .reduce((sum, item) => sum + item.price * item.count ,0)
      .toFixed(2)
    },
    // 计算勾选的商品数
    getCheckLength() {
      return this.$store.state.cartList
      .filter(item => item.isChecked)
      .length
    },
    // 是否全选
    getCheckAll() {
      let cartList = this.$store.state.cartList
      return cartList.length?cartList.filter(item => !item.isChecked).length === 0:false;
    }
  },
}
</script>

<style scoped>
  .cart-btm-bar {
    display: flex;
    height: 40px;
    line-height: 40px;
    position: relative;
    background-color: #f4f4f4;
    box-shadow: 0 0 4px #ccc;
    text-align: center;
  }
  .btm-left {
    display: flex;
    padding: 0 15px;
  }
  .left-text {
    padding-left: 5px;
  }
  .btm-center {
    flex: 1;
    text-align: left;
  }
  .btm-right {
    width: 100px;
    background-color: #f00;
    color: #fff;
  }
</style>