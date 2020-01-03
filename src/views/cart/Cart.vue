<template>
  <div class="warpper">
    <cart-nav-bar />
    <cart-content class="content" />
  </div>
</template>

<script>
import CartNavBar from './childComps/CartNavBar'
import CartContent from './childComps/CartContent'

export default {
  name: 'Cart',
  components: {
    CartNavBar, 
    CartContent,
  },
}
</script>

<style scoped>
  .warpper {
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>