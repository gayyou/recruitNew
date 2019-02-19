<template>
  <div class="load-container">
    <div class="center-icon center-active" :class="centerNormal"></div>
    <ul class="bubble-container">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centerNormal: null,
    }
  },
  mounted() {
    this.centerNormal = 'center-normal';
    let list = $('.bubble-container li');
    let i = 0;
    setInterval(() => {
      if (i < list.length) {
        $(list[i++]).addClass('rotate-animate');
      }
    }, 200);
  }
}
</script>

<style scoped>
.load-container {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, .9);
}
.center-icon {
  width: 4rem;
  height: 4rem;
  background-color: cornflowerblue;
  border-radius: 50%;
  transition: all .5s ease;
  box-shadow: 0 0 16px 4px rgba(0, 0, 0, .3);
}
.center-active {
  transform: scale(1.3);
  opacity: 0;
}
.center-normal {
  transform: scale(1)!important;
  opacity: 1!important;
}
.bubble-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.bubble-container li {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: aqua;
  color: red;
  font-size: 12px;
  text-align: center;
  transform-origin: 0 3rem;
  top: -3rem;
}
.rotate-animate {
  animation: circleRotate1 5s ease infinite;
}
.bubble-container li:nth-child(1) {
  transform: rotateZ(0);
}
.bubble-container li:nth-child(2) {
  transform: rotateZ(15deg);
}
.bubble-container li:nth-child(3) {
  transform: rotateZ(30deg);
}
.bubble-container li:nth-child(4) {
  transform: rotateZ(45deg);
}
.bubble-container li:nth-child(5) {
  transform: rotateZ(60deg);
}
.bubble-container li:nth-child(6) {
  transform: rotateZ(75deg);
}
@keyframes circleRotate1 {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
@keyframes circleRotate2 {
  0% {
    transform: rotateZ(0);
  }
  90% {
    transform: rotateZ(345deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
@keyframes circleRotate3 {
  0% {
    transform: rotateZ(0);
  }
  80% {
    transform: rotateZ(330deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
@keyframes circleRotate4 {
  0% {
    transform: rotateZ(0);
  }
  70% {
    transform: rotateZ(315deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
@keyframes circleRotate5 {
  0% {
    transform: rotateZ(0);
  }
  60% {
    transform: rotateZ(300deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
@keyframes circleRotate6 {
  0% {
    transform: rotateZ(0);
  }
  50% {
    transform: rotateZ(285deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
