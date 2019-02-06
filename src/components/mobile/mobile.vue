<template>
    <div class="page container"></div>
</template>

<script>
export default {
  watch: {
    '$store.state.mobile': {
      handler(newValue, oldValue) {
        this.pathAnimate(newValue, oldValue)
      },
      deep: true
    }
  },
  methods: {
    pathAnimate(newValue, oldValue) {
      
    }
  }
}
</script>

<style scoped>
.container {
  background: url(../../assets/images/background/mobile_background.png) center center no-repeat;
  background-size: cover;
}
</style>