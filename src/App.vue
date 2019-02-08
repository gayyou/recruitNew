<template>
  <div id="app">
    <to-sign :currentPage="currentPage" :prePage="prePage"></to-sign>
    <sidebar :currentPage="currentPage" :isMoving="isMoving" class="sidebar" v-on:choicePage="choicePage"></sidebar>
    <studio id="studio"></studio>
    <front id="front"></front>
    <end id="end"></end>
    <mobile id="mobile"></mobile>
    <embedded id="embedded"></embedded>
    <datas id="datas"></datas>
    <game id="game"></game>
    <design id="design"></design>
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
import toSign from './components/toSign/toSign.vue';
import sidebar from './components/sidebar/sidebar.vue';

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
    mobile,
    'to-sign': toSign,
    sidebar
  },
  data() {
    return {
        currentPage: -1,  // 当前显示的页数
        isMoving: false,   // 判断是否移动，是作为动画的开关，可以很好地限制重复调用翻页动画效果
        prePage: -1
    };
  },
  mounted() {
    const that = this;
    util.addHandler(window, 'mousewheel', this.scrollPage);     // 添加事件监听
    util.addHandler(window, 'resize', this.correctPage);
    util.addHandler(window, 'scroll', (event) => {
      this.pathAnimate();
    });
    // $(window).scroll((event) => {
    //   // console.log(this)
    //   this.pathAnimate();
    // });
    // $(window).scroll((event) => {
    //   // console.log(this)
    //   this.pathAnimate();
    // });
    this.currentPage = Math.floor(($(window).scrollTop() + 1) / $(window).height()) + 1;
    this.prePage = this.currentPage;
    this.turnPage();
  },
  methods: {
    scrollPage(event) {
      // 鼠标滚轮事件的监听事件
      if (this.isMoving == true) {
          return;
      }
      event.preventDefault();
      let detail = event.wheelDelta || event.detail;
      let scrollTop = $(window).scrollTop;
      if (detail > 0) {
          if (this.currentPage > 1) {
            this.prePage = this.currentPage;
            this.currentPage--;
          } else {
            // 当小于等于第一页的时候会返回，防止重复调用this.turnPage这个方法
            return;
          }
      }
      if (detail < 0) {
          if (this.currentPage < 8) {
            this.prePage = this.currentPage;
            this.currentPage++;
          } else {
            return;
          }
      }
      this.turnPage();
    },
    /**
     * @author Weybn
     * @description 当页面发生更改的时候，纠正页面
     */
    correctPage(event) {
      // 监听窗口的改变进行纠正页面
      if (this.isMoving == false) {
        if (((($(window).scrollTop() + 1) / $(window).height()) + 1) != this.currentPage) {
          // 当页面是纵向调整的时候，需要进行纠正处理
          this.turnPage();
        }
      } else {
        if (this.correctTimeoutID) {
          // 这个是为了避免不断调整的时候不断调用本函数，消除计时器只保留最后一次计时器调用
          clearTimeout(this.correctTimeoutID);
        }
        this.correctTimeoutID = setTimeout(this.correctPage, 1300);
      }
    },
    turnPage() {
      this.isMoving = true;
      $('html,body').animate({
          scrollTop: (this.currentPage - 1) * $(window).height()
      }, 1300, () => {
        this.isMoving = false;
      });
    },
    /**
     * @author Weybn
     * @description 侧边栏点击时候传回发生更改后的页数
     */
    choicePage(data) {
      
      if (this.isMoving == false) {
        this.prePage = this.currentPage;
        this.currentPage = data;
        this.turnPage();
      } else {
        if (this.correctTimeoutID) {
          clearTimeout(this.correctTimeoutID);
        }
        this.correctTimeoutID = setTimeout(choicePage.bind(this, data), 1300);
      }
    },
    pathAnimate() {
      let scrollTop = $(window).scrollTop();
      let screenHeight = $(window).height();
      let pages = Math.ceil(scrollTop / (screenHeight / 2));
      let state = '';
      switch(pages) {
        case 1: {
          state = 'studio';
          break;
        }
        case 2:
        case 3: {
          state = 'front';
          break;
        }
        case 4: 
        case 5: {
          state = 'end';
          break;
        }
        case 6:
        case 7: {
          state = 'mobile';
          break;
        }
        case 8:
        case 9: {
          state = 'embedded';
          break;
        }
        case 10:
        case 11: {
          state = 'data';
          break;
        }
        case 12:
        case 13: {
          state = 'game';
          break;
        }
        case 14: {
          state = 'design';
          break;
        }
      }
      this.$store.state[state] = scrollTop;
      this.$store.state.pages = scrollTop / screenHeight;
    }
  },
  
}
</script>

<style>
@font-face {
  font-family: 'SourceHanSansCN-Regular';
  src: url('assets/fonts/SourceHanSansCN-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'SourceHanSansCN-Light';
  src: url('assets/fonts/SourceHanSansCN-Light.otf') format('opentype');
}
#app {
    width: 100%;
    height: 100%;
}
/*
初始化css
*/
* {margin:0; padding:0;} 
body {
  /* font-size: 15px; */
  font-family: "Microsoft YaHei";   
  font-weight: 500;
  color: #000000;
  overflow:scroll;
  overflow-y:hidden;
  overflow-x:hidden;
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
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}


/* 下面是跳转到各个页面时候点击跳往报名表的按钮的样式 */
/* .studio-join {
  background: linear-gradient(to bottom right, rgba(102, 45, 145, 50%) , rgba(102, 45, 145, 100%));
  box-shadow: 0 0 8px 4px rgba(102, 45, 145, 24%);
}
.front-join {
  background: linear-gradient(to bottom right, rgba(255, 51, 51, 50%) , rgba(255, 51, 51, 100%));
  box-shadow: 0 0 8px 4px rgba(255, 51, 51, 24%);
}
.end-join {
  background: linear-gradient(to bottom right, rgba(43, 139, 225, 50%) , rgba(43, 139, 225, 100%));
  box-shadow: 0 0 8px 4px rgba(43, 139, 225, 24%);
}
.data-join {
  background: linear-gradient(to bottom right, rgba(241, 90, 36, 50%) , rgba(241, 90, 36, 100%));
  box-shadow: 0 0 8px 4px rgba(241, 90, 36, 24%);
}
.embedded-join {
  background: linear-gradient(to bottom right, rgba(57, 181, 74, 50%) , rgba(57, 181, 74, 100%));
  box-shadow: 0 0 8px 4px rgba(57, 181, 74, 24%);
}
.design-join {
  background: linear-gradient(to bottom right, rgba(255, 123, 172, 50%) , rgba(255, 123, 172, 100%));
  box-shadow: 0 0 8px 4px rgba(255, 123, 172, 24%);
}
.game-join {
  background: linear-gradient(to bottom right, rgba(198, 156, 109, 50%) , rgba(198, 156, 109, 100%));
  box-shadow: 0 0 8px 4px rgba(198, 156, 109, 24%);
}
.mobile-join {
  background: linear-gradient(to bottom right, rgba(255, 239, 0, 50%) , rgba(255, 239, 0, 100%));
  box-shadow: 0 0 8px 4px rgba(255, 239, 0, 24%);
} */

/* ↑导航栏样式 */

</style>
