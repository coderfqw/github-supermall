<template>
  <div class="tab-bar-item" @click="itemClick" :urlName='urlName' ref="item" >
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    urlName: String,
    activeColor: {
      type: String,
      default: '#d81e06',
    },
    bgc: {
      type: String,
      default: '#f6f6f6',
    },
    col: {
      type: String,
      default: '#666666',
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1
      return this.$route.path === this.path
    },
    activeStyle() {
      return this.isActive? {color: this.activeColor}:{};
    }
  },
  methods: {
    itemClick() {
      this.$router
      .replace(this.path)
      .catch(err => {})   // 连续多次点击路由报错    在他错误时返回一个空
      document.title = this.urlName
    },
  },
  mounted() {
    this.$refs.item.style.backgroundColor = this.bgc
    this.$refs.item.style.color = this.col
    
    return document.title = document.getElementsByClassName('tab-bar-item')[0].getAttribute('urlName')
  },
  watch: {
    bgc(val) {
      this.$refs.item.style.backgroundColor = this.bgc
    },
    col(val) {
      this.$refs.item.style.color = this.col
    },
  },
};
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }
  .active {
    color: #d81e06;
  }
</style>
