<template>
  <header class="page-header">
      <span class="button-tip" :class="showTip ? 'fade-in' : 'fade-out'">点击此回到顶部哦</span>
      <div class="studio-icon"  @click="toTop" @touchstart="toTop" @mouseover="showTips">
        <img v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/qglogo.png'" alt="">
      </div>
      <div class="sign-up" 
        @click="toSignUp" 
        @touchstart="toSignUp"
        :style="(($store.state.pages > 0.1) && !$store.state.isPhone) || $store.state.isPhone ? 'display: flex' : 'display: none'"
        >
        <div class="svg-container" v-if="!isIEBrowser()">
            <span class="join-words">Join<br>Us</span>
            <svg class="icon-svg" :style="boxShadows" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <linearGradient id="grad"  x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" :stop-color="startGradient">
                        <animate 
                          attributeName="stop-color"
                          :values="leftTopValues"
                          begin="indefinite"
                          dur="1.3s"
                          fill="freeze" />
                    </stop>
                    <stop offset="50%" :stop-color="centerGradient">
                        <animate 
                          attributeName="stop-color" 
                          :values="centerValues" 
                          begin="indefinite"
                          dur="1.3s" 
                          fill="freeze" />
                    </stop>
                    <stop offset="100%" :stop-color="endGradient">
                      <animate
                        attributeName="stop-color"
                        :values="rightBottomValues"
                        begin="indefinite"
                        dur="1.3s"
                        fill="freeze" />
                    </stop>
                  </linearGradient>
              </defs>
              <circle id="svgs" v-if="!$store.state.isPhone" opacity="1" fill="url(#grad)" :cx="(0.35 * $store.state.rootEm) + 'px'" :cy="(0.35 * $store.state.rootEm) + 'px'" :r="(0.35 * $store.state.rootEm) + 'px'"></circle>
              <circle id="svgs" v-if="$store.state.isPhone" opacity="1" fill="url(#grad)" :cx="(0.6 * $store.state.rootEm) + 'px'" :cy="(0.6 * $store.state.rootEm) + 'px'" :r="(1.2 * $store.state.rootEm) + 'px'"></circle>
            </svg>
        </div>
        <div class="icon-container" v-if="isIEBrowser()">
          <img :src="currentImage" alt="">
        </div>
      </div>
    </header>
</template>

<script>
export default {
  props: ['currentPage', 'prePage', 'isLoad'],
  data() {
    return {
      showTip: false,
      rgbas: [
        'rgba(102, 45, 145, ',
        'rgba(255, 51, 51, ',
        'rgba(43, 139, 225, ',
        'rgba(255, 239, 0, ',
        'rgba(57, 181, 74, ',
        'rgba(241, 90, 36, ',
        'rgba(198, 156, 109, ',
        'rgba(255, 123, 172, ',
      ],
      joinIcons: [
        'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/join_studio.png',
        'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/join_front.png',
        'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/join_end.png',
        'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/join_mobile.png',
        'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/join_embedded.png',
        'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/join_data.png',
        'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/join_game.png',
        'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/join_design.png',
      ],
      boxShadows: null,
      currentImage: null,
      startGradient: '',
      centerGradient: '',
      endGradient: '',
      leftTopValues: '',
      centerValues: '',
      rightBottomValues: '',
    }
  },
  mounted() {
    this.switchPageIconAnimation();   // 因为是惰性加载，所以要先运行一遍
    this.$store.state.loadedCount++;
  },
  methods: {
    /**
     * @author Weybn
     * @description 判断当前的浏览器对象是否是IE浏览器
     */
    isIEBrowser() {
      let browserName = this.getBrowser();
      if (browserName == 'chrome' || browserName == 'firefox' || browserName == 'opera') {
        // 是谷歌浏览器和火狐浏览器
        return false;
      } else {
        return true;
      }
    },
    getBrowser() {
      let UserAgent = navigator.userAgent.toLowerCase();
      let browser = null;
      let browserArray = {
        IE: window.ActiveXObject || "ActiveXObject" in window, // IE
        Chrome: UserAgent.indexOf('chrome') > -1 && UserAgent.indexOf('safari') > -1 && UserAgent.indexOf('UCBrowser') == -1, // Chrome浏览器
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
            if (parseInt(cores[i].split('/')[1]) < 70) {
              browser = 'lowChrome'
            }
          }
        }
      }
      return browser;
    },
    /**
     * @author Weybn
     * @description 当浏览器支持svg图的时候，可以利用svg图的渐变效果
     */
    switchColor() {
      let prePage = this.prePage - 1;
      let currentPage = this.currentPage - 1;
      let animateArr = $('#grad animate');
      this.startGradient = this.rgbas[prePage] + '50%);';
      this.centerGradient = this.rgbas[prePage] + '75%);';
      this.endGradient = this.rgbas[prePage] + '100%);';
      if (currentPage == prePage) {
        this.leftTopValues = this.rgbas[currentPage] + '50%);';
        this.centerValues = this.rgbas[currentPage] + '75%);';
        this.rightBottomValues = this.rgbas[currentPage] + '100%);';
      } else {
        // 下面注意是加，不要随便加分号。出过bug
        this.leftTopValues = this.rgbas[prePage] + '50%);'
                            + this.rgbas[currentPage] + '100%);'
                            + this.rgbas[currentPage] + '75%);'
                            + this.rgbas[currentPage] + '50%);';
        this.centerValues = this.rgbas[prePage] + '75%);'
                          + this.rgbas[prePage] + '50%);'
                          + this.rgbas[currentPage] + '100%);'
                          + this.rgbas[currentPage] + '75%);';
        this.rightBottomValues = this.rgbas[prePage] + '100%);'
                                + this.rgbas[prePage] + '75%);'
                                + this.rgbas[prePage] + '50%);'
                                + this.rgbas[currentPage] + '100%);';
      }
      for (let i = 0; i < animateArr.length; i++) {
        animateArr[i].beginElement();
      }
      // 上面是更改svg图的动画效果，下面是更改svg标签的盒子阴影
      this.boxShadows = 'box-shadow: 0 0 8px 6px ' + this.rgbas[currentPage] + '24%);';
    },
    /**
     * @author Weybn
     * @description IE浏览器的时候，切换图片
     */
    switchImage() {
      let prePage = this.prePage - 1;
      let currentPage = this.currentPage - 1;
      if (prePage === currentPage) {
        this.currentImage = this.joinIcons[currentPage];
      } else {
        let $iconContainer = $('.icon-container');
        $iconContainer.fadeOut(500, () => {
          this.currentImage = this.joinIcons[currentPage];
          $iconContainer.fadeIn(500);
        })
      }
    },
    /**
     * @author Weybn
     * @description 利用惰性加载，如果是IE浏览器，则会转向switchImage，如果是非IE浏览器，则会
     */
    switchPageIconAnimation() {
      if (this.isIEBrowser()) {
        this.switchPageIconAnimation = () => {
          this.switchImage();
        }
      } else {
        this.switchPageIconAnimation = () => {
          this.switchColor();
        }
      }
    },
    toTop() {
      this.$emit('choicePage', 1);
    },
    showTips() {
      this.showTip = true;
      if (this.timeoutID) {
        clearTimeout(this.timeoutID);
      }
      this.timeoutID = setTimeout(() => {
        this.showTip = false;
      }, 1000);
    },
    toSignUp(event) {
      if (event.target === $('.page-header .sign-up')[0]) {
        return;
      }
      if (!this.$store.state.isPhone) {
        // pc端跳转
        window.location.href = 'http://www.ed1son.cn:8080/join/join.html';
      } else {
        // 手机端跳转
        window.location.href = 'http://www.ed1son.cn:8080/join/mobilejoin.html';
      }
    },
  },
  watch: {
    isLoad: (newVal) => {
      if (newVal == true) {
        this.showTip = true;
        setTimeout(() => {
          this.showTip = false;
        }, 1000);
      }
    },
    currentPage(newValue, oldValue) {
      this.switchPageIconAnimation();
    },
  },
}
</script>

<style scoped>
@media only screen and (min-width: 740px) {
  /* ↓导航栏的样式 */
  .button-tip {
    position: absolute;
    display: block;
    top: 0.55rem;
    left: 1.6rem;
    z-index: 11;
    font-size: 0.18rem;
    color: #000;
    padding: 0.02rem 0.2rem;
    border-radius: 6px;
    background-color: #fff;
    border: solid 1px rgba(0, 0, 0, .3);
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, .3);
    transition: opacity 0.75s ease
  }
  .button-tip::after {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    left: -7px;
    z-index: 12;
    border-left: solid 1px rgba(0, 0, 0, .3);
    border-bottom: solid 1px rgba(0, 0, 0, .3);
    background-color: #fff;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    /* box-shadow: 0 0 4px 2px rgba(0, 0, 0, .3); */
  }
  .studio-icon {
    cursor: pointer;
    float: left;
    width: 0.808rem;
    height: 0.808rem;
    padding: 0.2rem;
  }
  .studio-icon img {
    cursor: pointer;
    display: block;
    width: 1.01rem;
    height: 1.01rem;
  }
  .sign-up {
    position: relative;
    float: right;
    display: flex;
    width: 1.2rem;
    height: 1.2rem;
    margin: 0.2rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .icon-svg {
    cursor: pointer;
    display: block;
    width: 0.7rem;
    height: 0.7rem; 
    border-radius: 50%;
    border: 0px;
    transition: box-shadow 1.3s ease;
  }
  .join-words {
    cursor: pointer;
    position: absolute;
    font-size: 0.14rem;
    line-height: 0.14rem;
    color: #fff;
    text-align: center;
  }
  .icon-container img {
    cursor: pointer;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%;
    height: 100%;
  }
}
@media only screen and (max-width: 740px) {
  .button-tip {
    position: absolute;
    display: block;
    top: 1.15rem;
    left: 2.6rem;
    z-index: 11;
    font-size: 0.18rem;
    color: #000;
    padding: 0.02rem 0.2rem;
    border-radius: 6px;
    background-color: #fff;
    border: solid 1px rgba(0, 0, 0, .3);
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, .3);
    transition: opacity 0.75s ease
  }
  .button-tip::after {
    content: "";
    display: block;
    position: absolute;
    width: 0.1rem;
    height: 0.1rem;
    left: -0.07rem;
    z-index: 12;
    border-left: solid 1px rgba(0, 0, 0, .3);
    border-bottom: solid 1px rgba(0, 0, 0, .3);
    background-color: #fff;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    /* box-shadow: 0 0 4px 2px rgba(0, 0, 0, .3); */
  }
  .studio-icon {
    float: left;
    width: 1.24rem;
    height: 1.24rem;
    padding: 0.37rem 0.28rem;
  }
  .studio-icon img {
    display: block;
    width: 1.7rem;
    height: 1.7rem;
  }
  .sign-up {
    position: relative;
    float: right;
    display: flex;
    width: 1.2rem;
    height: 1.2rem;
    margin: 0.55rem 0.55rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .icon-svg {
    cursor: pointer;
    width: 1.2rem;
    height: 1.2rem; 
    border-radius: 50%;
    border: 0px;
    transition: box-shadow 1.3s ease;
  }
  .join-words {
    cursor: pointer;
    position: absolute;
    font-size: 0.3rem;
    line-height: 0.3rem;
    color: #fff;
    text-align: center;
  }
  .icon-container img {
    cursor: pointer;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-62%);
    margin-top: 0.4rem;
    margin-right: 0.3rem;
    width: 2rem;
    height: 2rem;
  }
}
.page-header::after {
  display: block;
  content: "";
  clear: both;
}
.icon-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.page-header {
  position: fixed;
  width: 100%;
  z-index: 111;
}
.svg-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
