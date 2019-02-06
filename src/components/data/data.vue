<template>
    <div class="page container">4</div>
</template>

<script>
export default {
  watch: {
    '$store.state.data': {
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
  background: url(../../assets/images/background/data_background.png) center center no-repeat;
  background-size: cover;
}
</style>