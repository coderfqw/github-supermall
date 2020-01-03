<template>
  <div class="tab-bar-team" ref="team">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarTeam",
  props: {
    bgc: {
      type: String,
      default: '#f6f6f6',
    },
    col: {
      type: String,
      default: '#666666',
    },
  },
  mounted() {
    this.$refs.team.style.backgroundColor = this.bgc
    this.$refs.team.style.color = this.col
  },
  watch: {
    bgc(val) {
      this.$refs.team.style.backgroundColor = this.bgc
    },
    col(val) {
      this.$refs.team.style.color = this.col
    },
  },
};
</script>

<style>
  .tab-bar-team {
    flex: 1;
    text-align: center;
    background-color: #f6f6f6;
    
    display: flex;
  }
</style>