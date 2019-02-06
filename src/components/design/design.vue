<template>
    <div class="page container"></div>
</template>

<script>
export default {
  watch: {
    '$store.state.design': {
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
  background: url(../../assets/images/background/design_background.png) center center no-repeat;
  background-size: cover;
}
</style>