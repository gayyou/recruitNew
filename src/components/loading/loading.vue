<template>
  <div class="load-container">
    <div class="loading-icon-container">
      <img class="center-icon"  src="../../assets/images/icons/studio_bulb.png" alt="">
      <ul class="bubble-container">
        <li><img src="../../assets/images/icons/front_bulb.png" alt=""></li>
        <li><img src="../../assets/images/icons/end_bulb.png" alt=""></li>
        <li><img src="../../assets/images/icons/mobile_bulb.png" alt=""></li>
        <li><img src="../../assets/images/icons/embedded_bulb.png" alt=""></li>
        <li><img src="../../assets/images/icons/data_bulb.png" alt=""></li>
        <li><img src="../../assets/images/icons/game_bulb.png" alt=""></li>
        <li><img src="../../assets/images/icons/design_bulb.png" alt=""></li>
      </ul>
    </div>
    <div class="shadow-line">
      <img src="../../assets/images/background/shadow_line.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.load-container {
  position: fixed;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
}
.loading-icon-container {
  position: absolute;
  width: 500px;
  height: 500px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-60%);
}
.shadow-line {
  position: absolute;
  bottom: 105px;
  left: 50%;
  transform: translateX(-50%);
  width: 358px;
}
.shadow-line>img {
  display: block;
  width: 100%;
}
.shadow-line::after {
  content: "";
  display: block;
  clear: both;
}
.center-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 358px;
  height: 358px;
  /* transition: transform 0.5s ease, opacity 0.5s ease; */
  /* box-shadow: 0 0 16px 4px rgba(0, 0, 0, .3); */
}
.center-active {
  transform: scale(1.3) translateX(-50%) translateY(-50%);
  opacity: 0;
}
.center-normal {
  /* transform: translateX(-50%) translateY(-50%) scale(1)!important;
  opacity: 1!important; */
}
.bubble-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.bubble-container li {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  transform-origin: 0 200px;
  top: -200px;
}
.bubble-container>li:nth-child(1) {
  transform: rotateZ(-7.5deg);
  animation: circleRotate1 4s ease-in-out 0s infinite;
}
.bubble-container>li:nth-child(2) {
  transform: rotateZ(-25deg);
  animation: circleRotate2 4s ease-in-out 0.1s infinite;
}
.bubble-container>li:nth-child(3) {
  transform: rotateZ(-42.5deg);
  animation: circleRotate3 4s ease-in-out 0.2s infinite;
}
.bubble-container>li:nth-child(4) {
  transform: rotateZ(-60deg);
  animation: circleRotate4 4s ease-in-out 0.3s infinite;
}
.bubble-container>li:nth-child(5) {
  transform: rotateZ(-77.5deg);
  animation: circleRotate5 4s ease-in-out 0.4s infinite;
}
.bubble-container>li:nth-child(6) {
  transform: rotateZ(-95deg);
  animation: circleRotate6 4s ease-in-out 0.5s infinite;
}
.bubble-container>li:nth-child(7) {
  transform: rotateZ(-112.5deg);
  animation: circleRotate7 4s ease-in-out 0.6s infinite;
}
.bubble-container li img {
  width: 72px;
  height: 72px;
}
@keyframes circleRotate1 {
  0% {
    transform: rotateZ(-7.5deg);
  }
  100% {
    transform: rotateZ(352.5deg);
  }
}
@keyframes circleRotate2 {
  0% {
    transform: rotateZ(-25deg);
  }
  100% {
    transform: rotateZ(335deg);
  }
}
@keyframes circleRotate3 {
  0% {
    transform: rotateZ(-42.5deg);
  }
  100% {
    transform: rotateZ(317.5deg);
  }
}
@keyframes circleRotate4 {
  0% {
    transform: rotateZ(-60deg);
  }
  100% {
    transform: rotateZ(300deg);
  }
}
@keyframes circleRotate5 {
  0% {
    transform: rotateZ(-77.5deg);
  }
  100% {
    transform: rotateZ(282.5deg);
  }
}
@keyframes circleRotate6 {
  0% {
    transform: rotateZ(-95deg);
  }
  100% {
    transform: rotateZ(265deg);
  }
}
@keyframes circleRotate7 {
  0% {
    transform: rotateZ(-112.5deg);
  }
  100% {
    transform: rotateZ(247.5deg);
  }
}
</style>
