<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center" class="title">我的档案</div>
    </nav-bar>
  </div>
</template>

<script>
import {NavBar} from 'components/common/navBar'

export default {
  name: 'ProfileNavBar',
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