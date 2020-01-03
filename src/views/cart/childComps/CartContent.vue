<template>
  <div>
    <scroll class="content" ref="scroll" :scroll-probe-type="3" >
      <ul>
        <li v-for="(item, index) in $store.state.cartList" :key="index" >
          <cart-item :itemInfo="item" />
        </li>
      </ul>
    </scroll>
    <cart-bottom-bar />
  </div>
</template>

<script>
import CartItem from './CartItem'
import CartBottomBar from './CartBottomBar'

import {CheckButton} from 'components/content/checkButton'
import {Scroll} from 'components/common/scroll'

export default {
  name: 'CartContent',
  components: {
    CartItem,
    CartBottomBar,

    CheckButton,
    Scroll
  },
  mounted() {
    // console.log(this.$store.state.cartList.length)
  },
}
</script>

<style scoped>
  .content {
    height: calc(100% - 40px);
    overflow: hidden;
  }
  .cart-btm-bar {
    display: flex;
    height: 40px;
    line-height: 40px;
    position: relative;
    background-color: #f4f4f4;
    box-shadow: 0 0 4px #ccc;
  }
</style>