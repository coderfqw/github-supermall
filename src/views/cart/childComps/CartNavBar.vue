<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center" class="title">购物车({{$store.state.cartList.length}})</div>
    </nav-bar>
  </div>
</template>

<script>
import {NavBar} from 'components/common/navBar'


export default {
  name: 'CartNavBar',
  components: {
    NavBar,
  },
}
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>