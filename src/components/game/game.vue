<template>
    <div class="page container"></div>
</template>

<script>
export default {
  watch: {
    '$store.state.game': {
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
  background: url(../../assets/images/background/game_background.png) center center no-repeat;
  background-size: cover;
}
</style>