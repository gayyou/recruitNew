<template>
  <header class="page-header">
      <div class="studio-icon">
        <img src="../../assets/images/icons/studio_icon.png" alt="">
      </div>
      <div class="sign-up">
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
              <circle id="svgs" opacity="1" fill="url(#grad)" cx="28px" cy="28px" r="28px"></circle>
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
  props: ['currentPage', 'prePage'],
  data() {
    return {
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
        require('../../assets/images/icons/join_studio.png'),
        require('../../assets/images/icons/join_front.png'),
        require('../../assets/images/icons/join_end.png'),
        require('../../assets/images/icons/join_mobile.png'),
        require('../../assets/images/icons/join_embedded.png'),
        require('../../assets/images/icons/join_data.png'),
        require('../../assets/images/icons/join_game.png'),
        require('../../assets/images/icons/join_design.png'),
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
  },
  methods: {
    /**
     * @author Weybn
     * @description 判断当前的浏览器对象是否是IE浏览器
     */
    isIEBrowser() {
      let explorer = window.navigator.userAgent;
      let compare = (browser) => { 
            return (explorer.indexOf(browser) >= 0); 
          };
      let ie11 = (() => ("ActiveXObject" in window))();
      if (compare("MSIE") || ie11) { 
        return true; 
      }
      if ((compare("Chrome") && !ie11) && explorer.indexOf("Edge") > -1) {
        return true;
      }
      return false;
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
    }
  },
  watch: {
    /**
     * 监听是否是翻页了
     */
    currentPage(newValue, oldValue) {
      this.switchPageIconAnimation();
    }
  } 
}
</script>

<style scoped>
/* ↓导航栏的样式 */
.page-header {
  position: fixed;
  width: 100%;
  z-index: 111;
}
.page-header::after {
  display: block;
  content: "";
  clear: both;
}
.studio-icon {
  float: left;
  width: 80.8px;
  height: 80.8px;
  padding: 19.2px;
}
.studio-icon img {
  display: block;
  width: 80.8px;
  height: 80.8px;
}
.sign-up {
  position: relative;
  float: right;
  display: flex;
  width: 91.2px;
  height: 91.2px;
  margin: 17.6px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.icon-svg {
  cursor: pointer;
  display: block;
  width: 56px;
  height: 56px; 
  border-radius: 50%;
  border: 0px;
  transition: box-shadow 1.3s ease;
}
.join-words {
  cursor: pointer;
  position: absolute;
  font-size: 13px;
  line-height: 13px;
  color: #fff;
  text-align: center;
}
.svg-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
/* 下面是IE浏览器的样式控制 */
.icon-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.icon-container img {
  cursor: pointer;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
