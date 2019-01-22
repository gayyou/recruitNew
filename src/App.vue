<template>
  <div id="app">
    <studio></studio>
    <front></front>
    <end></end>
    <mobile></mobile>
    <embedded></embedded>
    <datas></datas>
    <game></game>
    <design></design>
  </div>
</template>

<script>
import util from '../utils/util.js';
import studio from './components/studio/studio.vue';
import front from './components/front/front.vue';
import end from './components/end/end.vue';
import datas from './components/data/data.vue';
import design from './components/design/design.vue';
import embedded from './components/embedded/embedded.vue';
import game from './components/game/game.vue';
import mobile from './components/mobile/mobile.vue';

export default {
  name: 'App',
  components: {
    studio,
    front,
    end,
    datas,
    design,
    embedded,
    game,
    mobile
  },
  data() {
    return {

    };
  },
  mounted() {
    util.addHandler(window, 'scroll', this.scrollListen);
  },
  methods: {
    scrollListen(event) {
      event.preventDefault();
      let cilentHeight = $(window).height(),
          scrollTop = $(window).scrollTop(),
          page;
      page = Math.ceil(scrollTop / cilentHeight);
      // switch(page) {
      //   case 0: 
      // }
    },
  }
}
</script>

<style>
#app {

}
/*
初始化css
*/
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,textarea,select,button{margin:0; padding:0;} 
body {
    font-size: 15px;
    font-family: 'Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","å¾®è½¯é›…é»‘",Arial,sans-serif';   
    font-weight: 500;
    color: #000000;
}
a {
    text-decoration:none;
    resize: none;
    outline: none;
    color: #000;
} 
em {
    font-style:normal;
} 
li{
    list-style:none;
} 
img{
    border:0; vertical-align:middle;
} 
table{
    border-collapse:collapse;
    border-spacing:0;
} 
p {
    word-wrap:break-word;
}
input {
    outline: none;
    resize: none;
    border: none 0;
}
button {
    border: none;
    outline: none;
    cursor:pointer;             
}
/* 每个页面的页面样式 */
.page {
  width: 100%;
  height: 100vh;
}
</style>
