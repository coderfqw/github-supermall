<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  components: {},
};
</script>

<style>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /* box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2); */
    box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1);
  }
</style>