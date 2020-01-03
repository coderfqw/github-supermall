<template>
  <div class="wrapper">
    <profile-nav-bar />
    <scroll class="content" ref="scroll" :scroll-probe-type="3" @scroll="contentScroll">
      <profile-login />
      <profile-property />
      <profile-other />
    </scroll>
    <back-top ref="backTop" @click.native="backClick" v-show="showTop" ShowNum="200" />
  </div>
</template>

<script>
import {Scroll} from '../../components/common/scroll'
import {backTopMixin} from 'common/mixin.js'
import {BackTop} from 'components/content/backTop'

import ProfileNavBar from './childComps/ProfileNavBar'
import ProfileLogin from './childComps/ProfileLogin'
import ProfileProperty from './childComps/ProfileProperty'
import ProfileOther from './childComps/ProfileOther'

export default {
  name: 'Profile',
  components: {
    Scroll,
    BackTop,
    ProfileNavBar,
    ProfileLogin,
    ProfileProperty,
    ProfileOther,
  },
  mixins: [backTopMixin],
  methods: {
    contentScroll(position) {
      this.showBackTop(position)
    }
  },
}
</script>

<style scoped>
  .wrapper {
    height: 100vh;
    background-color: #fff;
    overflow: hidden;
  }
  .content {
    height: calc(100% - 44px - 49px);
  }
</style>