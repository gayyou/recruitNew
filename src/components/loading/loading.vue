<template>
  <div id="page-loading" class="load-container" v-if="!pageloaded" :class="loadingFadeIn ? 'fade-in' : 'fade-out'">
    <div class="loading-icon-container">
      <div class="center-container">
        <img class="center-icon" v-lazy="require('../../assets/images/icons/studio_bulb.png')" alt="">
      </div>
      <ul class="bubble-container" v-if="!$store.state.isPhone">
        <li><img v-lazy="require('../../assets/images/icons/front_bulb.png')" alt=""></li>
        <li><img v-lazy="require('../../assets/images/icons/end_bulb.png')" alt=""></li>
        <li><img v-lazy="require('../../assets/images/icons/mobile_bulb.png')" alt=""></li>
        <li><img v-lazy="require('../../assets/images/icons/embedded_bulb.png')" alt=""></li>
        <li><img v-lazy="require('../../assets/images/icons/data_bulb.png')" alt=""></li>
        <li><img v-lazy="require('../../assets/images/icons/game_bulb.png')" alt=""></li>
        <li><img v-lazy="require('../../assets/images/icons/design_bulb.png')" alt=""></li>
      </ul>
    </div>
    <div class="shadow-line">
      <img v-lazy="require('../../assets/images/background/shadow_line.png')" alt="">
    </div>
    <!-- <span class="loading-words">{{ loadingWord }}</span> -->
  </div>
</template>

<script>
import util from '../../../utils/util.js';
export default {
  name: 'page-loading',
  data() {
    return {
      pageloaded: false,
      loadingFadeIn: true,
      timeStart: null
    }
  },
  mounted() {
    this.timeStart = new Date().getTime();
    let minTimes = this.$store.state.isPhone ? 2500 : 4000;
    util.addHandler(window, 'load', () => {
      let seconds = new Date().getTime();
      let timeout;
      if (seconds - this.timeStart < minTimes) {
        timeout = minTimes - (seconds - this.timeStart);
      } else {
        timeout = 0;
      }
      setTimeout(() => {
        this.loadingFadeIn = false;
        // 内嵌定时器的原因是防止页面缓存，加载过快
        setTimeout(() => {
          this.pageloaded = true;
          this.$store.state.isLoad = true;
        }, 750);
      }, timeout);
    })
    util.addHandler($('.load-container')[0], 'mousewheel', (event) => {
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    });
    util.addHandler($('.load-container')[0], 'touchend', (event) => {
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    });
  },
  methods: {
  }
}
</script>

<style scoped>
@media only screen and (min-width: 740px) {
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
  .bubble-container li {
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    transform-origin: 0 200px;
    top: -200px;
  }
  .bubble-container li img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 72px;
    height: 72px;
  }
  .loading-words {
    display: block;
    position: absolute;
    bottom: 1.8rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.64rem;
    color: #AC81CD;
  }
}

@media only screen and (max-width: 740px) {
  .load-container {
    position: fixed;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.9);
  }
  .loading-icon-container {
    position: absolute;
    width: 5rem;
    height: 5rem;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-60%);
  }
  .shadow-line {
    position: absolute;
    bottom: 4.05rem;
    left: 50%;
    transform: translateX(-50%);
    width: 5rem;
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
  .center-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 7rem;
    height: 7rem;
  }
  .center-icon {
    position: absolute;
    top: 0;
    left: 0;
    /* left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%); */
    width: 7rem;
    height: 7rem;
    animation: icon-move 2.5s ease-in-out 0s infinite;
    /* box-shadow: 0 0 16px 4px rgba(0, 0, 0, .3); */
  }
  .bubble-container li {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    overflow: hidden;
    transform-origin: 0 4.4rem;
    top: -4.4rem;
  }
  .bubble-container li img {
    width: 1.7rem;
    height: 1.7rem;
  }
  @keyframes icon-move {
    /* 0% {
      transform: translateY(0%);
    } */
    /* 20% {
      transform: translateY(-50%);
    } */
    50% {
      transform: translateY(-20%);
    }
    /* 70% {
      transform: translateY(50%);
    } */
    100% {
      transform: translateY(0%);
    }
    /* 100% {
      transform: translateY(0%);
    } */
  }
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
.fade-out {
  opacity: 0!important;
  /* z-index: -9; */
}
.fade-in {
  opacity: 1!important;
  /* z-index: 1; */
}
.load-container {
  transition: opacity 0.75s ease;
}
</style>
