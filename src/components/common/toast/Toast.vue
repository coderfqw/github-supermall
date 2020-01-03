<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>

export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false,
    }
  },
  methods: {
    show(message, duration = 800) {
      this.message = message
      this.isShow = true
      clearTimeout(setShow)
      let setShow = setTimeout(() => {this.isShow = false}, duration)
    }
  },
}
</script>

<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    background-color: rgba(0, 0, 0, .7);
    color: #fff;
    padding: 8px 10px;
    border-radius: 8px;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
</style>