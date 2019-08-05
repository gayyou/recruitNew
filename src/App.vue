<template>
  <div id="app">
    <!-- <div class="loading-container" v-if="!pageLoaded">
      <loading></loading>
    </div> -->
    <to-sign :currentPage="currentPage" 
             :prePage="prePage" 
             :isLoad="isLoad"
             v-on:choicePage="choicePage"
             ></to-sign>
    <sidebar v-if="!$store.state.isPhone"
             :currentPage="currentPage" 
             :isMoving="isMoving" 
             class="sidebar" 
             v-on:choicePage="choicePage"
             :style="$store.state.pages > 0.1 ? 'display: block' : 'display: none'"
             :class="$store.state.pages > 0.9 ? 'fade-in' : 'fade-out'"
             ></sidebar>
    <studio id="studio" v-on:choicePage="choicePage" :isLoad="isLoad"></studio>
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
import loading from './components/loading/loading.vue';
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
import throttle from '../utils/throttle.js';
import Velocity from 'velocity-animate'

export default {
  name: 'App',
  components: {
    loading,
    studio,
    front,
    end,
    datas,
    design,
    embedded,
    game,
    mobile,
    'to-sign': toSign,
    sidebar,
  },
  data() {
    return {
      touchStartY: NaN,
      touchEndY: NaN,
      currentPage: -1,  // 当前显示的页数
      isMoving: false,   // 判断是否移动，是作为动画的开关，可以很好地限制重复调用翻页动画效果
      prePage: -1,
      pageLoaded: false,
      isLoad: false,
      timeStart: null,
      turnPageTime: 0,
    };
  },
  mounted() {
    window.a = this;
    console.log('vue', this)
    let pageList = $('.page');
    let height = $(window).height();
    this.$store.state.pages = $(window).scrollTop() / $(window).height() - 0.1;
    this.$store.state.isPhone = $(window).width() < 740 ? true : false;  // 判断是否为手机
    this.$store.state.rootEm = window.rem;  // 兼容性设置页面的根单位大小
    this.$store.state.screenUnit.screenWidth = parseInt($(window).width());
    for (let i = 0; i < pageList.length; i++) {
      pageList[i].style.height = height;
    }
    $('#app')[0].style.height = height;
    const that = this;
    const browser = this.getBrowser();
    let timeout;
    if (this.$store.state.isPhone) {
      timeout = 16;
    } else {
      timeout = 10;
    }
    let scrollListenFn = throttle(() => {
      this.pathAnimate();
    }, timeout);
    if (browser === 'firefox') {
      util.addHandler(document, 'DOMMouseScroll', this.scrollPage); 
    } else {
      util.addHandler(document, 'mousewheel', this.scrollPage); 
    }
    // 添加事件监听
    // util.addHandler(window, 'resize', this.correctPage);
    util.addHandler(window, 'scroll', (event) => {
      scrollListenFn();
      // this.pathAnimate();
    });
    util.addHandler(window, 'resize', () => {
      // 修改页面宽度的时候判断是否为手机
      this.$store.state.isPhone = $(window).width() < 740 ? true : false;
      this.setRootUnit();   // 设置单位，兼容火狐浏览器
      this.correctPage();  // 纠正页面
    })
    // 下面是监听窗口的触摸
    // window.addEventListener('touchmove', (event) => {
    //   event.preventDefault();
    // }, { passive: false });
    window.addEventListener('touchstart', (event) => {
      event.preventDefault();
      this.touchStartY = event.changedTouches[0].pageY;
    });
    window.addEventListener('touchend', (event) => {
      event.preventDefault();
      this.touchEndY = event.changedTouches[0].pageY;
      this.movePage();
    });

    // util.addHandler(window, 'touchstart', (event) => {
      
    // })
    // util.addHandler(window, 'touchmove', (event) => {
    //   event.preventDefault();
    // });
    // util.addHandler(window, 'touchend', (event) => {
    //   event.preventDefault();
    // })
    // this.$nextTick(() => {
    //   // 结束加载动画
    //   console.log('123')
    //   this.pageLoaded = true;
    // })
    this.currentPage = Math.floor(($(window).scrollTop() + 1) / $(window).height()) + 1;
    this.prePage = this.currentPage;
    this.turnPage();
    // 当页面加载完毕的时候进行
  },
  watch: {
    '$store.state.isPhone': (newVal, oldVal) => {
      if (typeof oldVal != null) {
        if ((newVal === true && oldVal === false) || (newVal === false && oldVal === true)) {
          window.location.reload();
        }
      }
    },
    '$store.state.isLoad': (newVal) => {
        this.isLoad = newVal;
    }
  },
  methods: {
    getBrowser() {
      let UserAgent = navigator.userAgent.toLowerCase();
      let browser = null;
      let browserArray = {
        IE: window.ActiveXObject || "ActiveXObject" in window, // IE
        Chrome: UserAgent.indexOf('chrome') > -1 && UserAgent.indexOf('safari') > -1, // Chrome浏览器
        Firefox: UserAgent.indexOf('firefox') > -1, // 火狐浏览器
        Opera: UserAgent.indexOf('opera') > -1, // Opera浏览器
        Safari: UserAgent.indexOf('safari') > -1 && UserAgent.indexOf('chrome') == -1, // safari浏览器
        UC: /ucbrowser/.test(UserAgent),  // uc浏览器
        Edge: UserAgent.indexOf('edge') > -1, // Edge浏览器
        QQBrowser: /qqbrowser/.test(UserAgent), // qq浏览器
        WeixinBrowser: /MicroMessenger/i.test(UserAgent) // 微信浏览器
      };
      for (var i in browserArray) {
        if (browserArray[i]) {
          browser = i;
        }
      }
      if (!browser) {
        browser = '';
      }
      browser = browser.toLowerCase();
      if (browser == 'chrome') {
        // 区分低版本chrome和高版本chrome
        let cores = UserAgent.split(' ');
        for (let i = 0; i < cores.length; i++) {
          if (cores[i].indexOf('chrome') > -1) {
            if (parseInt(cores[i].split('/')[1]) < 68) {
              browser = 'lowChrome'
            }
          }
        }
      }
      this.$store.state.browserName = browser;
      return browser;
    },
    setRootUnit() {
      // 设置根单位
      this.$store.state.rootEm = window.rem;
      this.$store.state.screenUnit.screenWidth = parseInt($(window).width());
    },
    movePage() {
      if (this.isMoving == true) {
        return;
      }
      let distance = this.touchEndY - this.touchStartY;
      if (distance < 50 && distance > -50) {
        // 防止误触
        return;
      }
      if (distance > 0) {
        // 向下滑，即想要查看上面的内容
        if (this.currentPage > 1) {
            this.prePage = this.currentPage;
            this.currentPage--;
        } else {
          // 当小于等于第一页的时候会返回，防止重复调用this.turnPage这个方法
          return;
        }
      } else {
        // 向上滑，想要查看下面的内容
        if (this.currentPage < 8) {
            this.prePage = this.currentPage;
            this.currentPage++;
        } else {
          return;
        }
      }
      this.turnPage();
    },
    scrollPage(event) {
      // 鼠标滚轮事件的监听事件
      if (this.isMoving == true) {
        return;
      }
      event.preventDefault();
      let detail = event.wheelDelta || event.detail;
      let scrollTop = $(window).scrollTop;
      if (this.$store.state.browserName === 'firefox') {
        detail = -detail;
      }
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
      // 翻页动画
      this.isMoving = true;
      
      // console.log(window.Velocity)
      // window.Velocity($('html,body'), {
      //   scrollTop: (this.currentPage - 1) * $(window).height()
      // }, 1300, () => {
      //   this.isMoving = false;
      // })
      // window.Velocity($('#end'), 'scroll', {
      //   container: $('body'), 
      //   duration: 1300, 
      //   easing: 'ease-out'
      // })
      // let currentTime = new Date().getTime
      // if ()
      let height = (this.currentPage - 1) * $(window).height();
      $('#app').velocity("scroll", { 
        offset: height,
        duration: 1300, 
        easing: "ease-out",
        mobileHA: false,
        complete: () => {
          this.isMoving = false;
        }
      })
 
      // $('body').velocity({
      //   scrollTop: (this.currentPage - 1) * $(window).height()
      // }, 1300, () => {
      //   this.isMoving = false;
      // });
      // $('html,body').animate({
      //   scrollTop: (this.currentPage - 1) * $(window).height()
      // }, 1300, () => {
      //   this.isMoving = false;
      // });
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
#app {
  width: 100%;
  height: 100vh;
  /* min-width: 1200px; */
}
/*
初始化css
*/
* {
  margin:0; 
  -webkit-overflow-scrolling: touch;
  padding:0;
  } 
body {
  touch-action: none;
  /* font-size: 15px; */
  font-family: "SourceHanSansCN-Regular";   
  font-weight: 500;
  color: #000000;
  overflow:scroll;
  overflow-y:hidden;
  overflow-x:hidden;
  /* min-width: 1200px; */
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
  font-family: "SourceHanSansCN-Regular";
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.loading-container {
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.sidebar {
  transition: opacity .75s ease;
}
.page-header {
  z-index: 998;
}

/* 下面是公共的样式 */
@media only screen and (min-width: 740px) {
  .bg-bulb {
    position: absolute;
    width: 3.65rem;
    height: 3.65rem;
  }
  .turn-page {
    position: relative;
    margin-top: 0.35rem;
    width: 100%;
  }
  .turn-page>img {
    float: left;
    display: block;
    width: 0.68rem;
    height: 0.76rem;
  }
  .turn-page>span {
    float: left;
    display: block;
    margin-top: 0.58rem;
    font-size: 0.18rem;
    line-height: 0.18rem;
    color: #4a4a4a;
  }
}
@media only screen and (max-width: 740px) {
  .bg-bulb {
    position: absolute;
    width: 3.65rem;
    height: 3.65rem;
  }
  .turn-page>img {
    display: block;
    float: left;
    width: 0.75rem;
    height: 0.75rem;
  }
  .turn-page>span {
    display: block;
    float: left;
    font-size: 0.26rem;
    line-height: 0.26rem;
    margin-top: 0.5rem;
    margin-left: 0.16rem;
    color: #4d4545;
  }
  section {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}
.turn-page {
  margin-top: 0.46rem;
}
.turn-page::after {
  content: "";
  display: block;
  clear: both;
}
.bulb {
  transition: opacity .75s ease; 
}
.fade-out {
  opacity: 0!important;
  /* z-index: -9; */
}
.fade-in {
  opacity: 1!important;
  /* z-index: 1; */
}
</style>
