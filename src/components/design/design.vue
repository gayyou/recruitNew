<template>
    <div class="page container"
      v-lazy:background-image="$store.state.isPhone ? require('../../assets/images/background/phonebg/design_phone_bg.jpg') : require('../../assets/images/background/design_background.jpg')"
    >
      <img class="design-bulb-layer" v-lazy="$store.state.isPhone ? require('../../assets/images/background/phonebg/design_bulb_layer.png') : require('../../assets/images/background/design_bulb-layer.png')">
      <div class="left-layer"
        v-lazy:background-image="$store.state.isPhone ? require('../../assets/images/background/phonebg/design_layer.png') : require('../../assets/images/background/design_left_layer.png')"
      ></div>
      <section class="design-svg-container">
        <img class="design-bg-bulb bg-bulb" v-lazy="require('../../assets/images/icons/design_bg_bulb.png')" alt="">
        <img class="design-bulb bulb" :class="$store.state.pages >= 6.9 ? 'fade-in' : 'fade-out'" v-lazy="require('../../assets/images/icons/design_bulb.png')" alt="">
        <svg
          xmlns:dc="http://purl.org/dc/elements/1.1/"
          xmlns:cc="http://creativecommons.org/ns#"
          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          xmlns:svg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
          :width="$store.state.screenUnit.screenWidth + 'px'"
          :height="$store.state.isPhone ? ($store.state.screenUnit.screenWidth * 1.6 + 'px') : (0.478 * $store.state.screenUnit.screenWidth + 'px')"
          viewBox="0 0 210 297"
          version="1.1"
          id="design-svg"
          inkscape:version="0.92.3 (2405546, 2018-03-11)"
          sodipodi:docname="设计.svg">
          <defs
            id="defs579">
            <linearGradient
              id="design-end-line"
              spreadMethod="pad"
              gradientTransform="matrix(357.71666,0,0,-357.71666,398.37369,7.7883034)"
              gradientUnits="userSpaceOnUse"
              y2="0.1"
              x2="0.15"
              y1="0.5"
              x1="0"
              >
              <stop
                id="stop196"
                offset="0"
                style="stop-opacity:1;stop-color:#c69c6d" />
              <stop
                id="stop198"
                offset="1"
                style="stop-opacity:1;stop-color:#ff7bac" />
            </linearGradient>
          </defs>
          <sodipodi:namedview
            id="base"
            pagecolor="#ffffff"
            bordercolor="#666666"
            borderopacity="1.0"
            inkscape:pageopacity="0.0"
            inkscape:pageshadow="2"
            inkscape:zoom="0.35"
            inkscape:cx="-98.571429"
            inkscape:cy="560"
            inkscape:document-units="mm"
            inkscape:current-layer="layer1"
            showgrid="false"
            inkscape:window-width="1920"
            inkscape:window-height="1001"
            inkscape:window-x="-9"
            inkscape:window-y="-9"
            inkscape:window-maximized="1" />
          <metadata
            id="metadata582">
            <rdf:RDF>
              <cc:Work
                rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                  rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title></dc:title>
              </cc:Work>
            </rdf:RDF>
          </metadata>
          <g
            v-if="!$store.state.isPhone"
            inkscape:label="Layer 1"
            inkscape:groupmode="layer"
            id="layer1">
            <!-- 底线 -->
            <path
              inkscape:connector-curvature="0"
              id="path174"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 85.344726,92.40848 c 10.05099,-3.81847 20.102344,-3.81847 30.153684,0 2.60456,0.98954 5.28426,-1.24672 4.7378,-3.97898 l -4.62385,-23.12035 c -1.44851,-7.24111 -7.80627,-12.4534 -15.19097,-12.4534 -7.384344,0 -13.742454,5.21229 -15.190614,12.4534 l -4.62421,23.12035 c -0.5461,2.73226 2.1336,4.96852 4.73816,3.97898 z" />
            <path
              inkscape:connector-curvature="0"
              id="path56"
              style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
              d="m 108.00891,52.841529 -2.25178,-7.524397 c -0.14641,-0.488245 -0.59549,-0.822678 -1.10526,-0.822678 h -7.65633 c -0.50977,0 -0.95921,0.334433 -1.10526,0.822678 l -2.29658,7.673975 c 0.65193,-0.331964 1.55752,-0.682978 2.72098,-1.044928 l 1.53987,-5.144558 h 5.93866 l 1.51554,5.063772 c 0.9271,0.225072 1.82597,0.554566 2.70016,0.976136" />
            <!-- <path
              inkscape:connector-curvature="0"
              id="path178"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 94.174856,54.3276 c 4.253444,-1.51588 8.506894,-1.51588 12.760684,0 l -2.55235,-8.52734 h -7.65633 z" /> -->
            <path
              inkscape:connector-curvature="0"
              id="path182"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 104.83122,62.2045 h -8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path186"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 104.83122,65.3795 h -8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path190"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 104.83122,68.5545 h -8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path192"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 96.36455,80.19612 h 8.46667 v -5.64444 h -8.46667 z" />
            <path
              inkscape:connector-curvature="0"
              id="path202"
              style="fill:none;stroke:#c8c2cc;stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 100.77428,0 V 45" />
            <!-- 流动 -->
            <path
              inkscape:connector-curvature="0"
              id="path202"
              style="fill:none;stroke:url(#design-end-line);stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 100.77428,0 V 45" />
            <path
              inkscape:connector-curvature="0"
              id="path174"
              style="fill:none;stroke:#ff7bac;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 85.344726,92.40848 c 10.05099,-3.81847 20.102344,-3.81847 30.153684,0 2.60456,0.98954 5.28426,-1.24672 4.7378,-3.97898 l -4.62385,-23.12035 c -1.44851,-7.24111 -7.80627,-12.4534 -15.19097,-12.4534 -7.384344,0 -13.742454,5.21229 -15.190614,12.4534 l -4.62421,23.12035 c -0.5461,2.73226 2.1336,4.96852 4.73816,3.97898 z" />
            <path
              inkscape:connector-curvature="0"
              id="path178"
              style="fill:none;stroke:#ff7bac;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 94.174856,54.3276 c 4.253444,-1.51588 8.506894,-1.51588 12.760684,0 l -2.55235,-8.52734 h -7.65633 z" />
            <path
              inkscape:connector-curvature="0"
              id="path182"
              style="fill:none;stroke:#ff7bac;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 104.83122,62.2045 h -8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path186"
              style="fill:none;stroke:#ff7bac;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 104.83122,65.3795 h -8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path190"
              style="fill:none;stroke:#ff7bac;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 104.83122,68.5545 h -8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path192"
              style="fill:none;stroke:#ff7bac;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 96.36455,80.19612 h 8.46667 v -5.64444 h -8.46667 z" />
          </g>
          <g
            v-if="$store.state.isPhone"
            inkscape:label="Layer 1"
            inkscape:groupmode="layer"
            id="layer1">
            <!-- 底线 -->
            <path
              inkscape:connector-curvature="0"
              id="path570"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 108.23671,63 0,-40 110,0" />
            <path
              inkscape:connector-curvature="0"
              id="path174"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 100.538838,87.0419 c 5.025672,-1.90923 10.051342,-1.90923 15.077012,0 1.30246,0.49495 2.64231,-0.62335 2.3689,-1.98931 l -2.3121,-11.56017 c -0.7239,-3.62056 -3.90313,-6.22689 -7.59531,-6.22689 -3.69217,0 -6.871052,2.60633 -7.595302,6.22689 l -2.31211,11.56017 c -0.27305,1.36596 1.0668,2.48426 2.36891,1.98931 z" />
            <path
              inkscape:connector-curvature="0"
              id="path56"
              style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
              d="m 111.5,67.7 -1.18322,-3.95359 c -0.0892,-0.2988 -0.36442,-0.50341 -0.67627,-0.50341 h -3.82799 c -0.31186,0 -0.58632,0.20461 -0.67593,0.50341 l -1.15781,3.86857 c 0.44238,-0.22895 1.00965,-0.4244 1.6517,-0.59832 l 0.70732,-2.36255 h 2.77742 l 0.71932,2.40277 c 0.59196,0.15628 1.14264,0.37783 1.66546,0.64312" />
            <!-- <path
              inkscape:connector-curvature="0"
              id="path178"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 101.95406,98.00157 c 2.12655,-0.75777 4.2538,-0.75777 6.38034,0 l -1.276,-4.26367 h -3.82834 z" /> -->
            <path
              inkscape:connector-curvature="0"
              id="path182"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 110.28224,71.93998 h -4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path186"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 110.28224,73.52748 h -4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path190"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 110.28224,75.11498 h -4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path192"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 106.04891,80.93582 h 4.23333 v -2.82222 h -4.23333 z" />
            <!-- 流动 -->
            <path
              inkscape:connector-curvature="0"
              id="path570"
              style="fill:none;stroke:url(#design-end-line);stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 215.23671,23 -107,0 0,41 " />
            <path
              inkscape:connector-curvature="0"
              id="path174"
              style="fill:none;stroke:#ff7bac;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 100.538838,87.0419 c 5.025672,-1.90923 10.051342,-1.90923 15.077012,0 1.30246,0.49495 2.64231,-0.62335 2.3689,-1.98931 l -2.3121,-11.56017 c -0.7239,-3.62056 -3.90313,-6.22689 -7.59531,-6.22689 -3.69217,0 -6.871052,2.60633 -7.595302,6.22689 l -2.31211,11.56017 c -0.27305,1.36596 1.0668,2.48426 2.36891,1.98931 z" />
            <path
              inkscape:connector-curvature="0"
              id="path178"
              style="fill:none;stroke:#ff7bac;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 104.95406,68.00157 c 2.12655,-0.75777 4.2538,-0.75777 6.38034,0 l -1.276,-4.26367 h -3.82834 z" />
            <path
              inkscape:connector-curvature="0"
              id="path182"
              style="fill:none;stroke:#ff7bac;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 110.28224,71.93998 h -4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path186"
              style="fill:none;stroke:#ff7bac;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 110.28224,73.52748 h -4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path190"
              style="fill:none;stroke:#ff7bac;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 110.28224,75.11498 h -4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path192"
              style="fill:none;stroke:#ff7bac;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 106.04891,80.93582 h 4.23333 v -2.82222 h -4.23333 z" />
          </g>
        </svg>
      </section>
      <section class="design-intro-container">
        <div class="design-word-bg bg-part-one"></div>
        <div class="design-word-bg bg-part-two"></div>
        <div class="design-intro intro-part-one" v-if="!$store.state.isPhone">
          <div class="major-name">设计</div>
          <div class="major-intro">
            设计组的主要研究方向是手机游戏和网页的界面设计及交互，游戏原画设计以及平面设计。我们旨在锻炼成员的创新能力、创意思想，培养成员的视觉设计和交互设计能力。
          </div>
          <div class="turn-page">
            <img v-lazy="require('../../assets/images/icons/design_arrow.png')" alt="">
            <span>向上滚动了解更多</span>
          </div>
        </div>
        <div class="design-intro intro-part-two" v-if="!$store.state.isPhone">
          <div class="major-intro">
            除此之外，设计组也在着手3D模型的设计以及3D打印机的使用，产出的智能打印机和智能头盔已经斩获多个奖项，更是在挑战杯校赛中协助取得特等奖、一等奖的好成绩。想用你的创意思维点燃技术的光芒吗？设计组在这里等你！
          </div>
        </div>
        <div class="design-intro" v-if="$store.state.isPhone">
          <div class="major-name">设计</div>
          <div class="major-intro">
            设计组的主要研究方向是手机游戏和网页的界面设计及交互，游戏原画设计以及平面设计。我们旨在锻炼成员的创新能力、创意思想，培养成员的视觉设计和交互设计能力。<br>除此之外，设计组也在着手3D模型的设计以及3D打印机的使用，产出的智能打印机和智能头盔已经斩获多个奖项，更是在挑战杯校赛中协助取得特等奖、一等奖的好成绩。想用你的创意思维点燃技术的光芒吗？设计组在这里等你！
          </div>
        </div>
      </section>
    </div>
</template>

<script>
import pathUtil from '../../../utils/pathAnimate.js';
export default {
  mounted() {
    this.$store.state.loadedCount++;
  },
  watch: {
    '$store.state.design': {
      handler(newValue, oldValue) {
        this.pathAnimate(newValue, oldValue)
      },
      deep: true
    },
    '$store.state.pages': (pages) => {
      if (pages < 6) {
        return;
      }
      let pathList = $('#design-svg path');
      if (pathList.length <= 7) {
        // 出现一个问题
        return;
      }
      pathUtil.correctEndPath(pathList[7], pathList.slice(8, 14), pages, 6.5, 0.3);
    }
  },
  methods: {
    pathAnimate(newValue, oldValue) {
      let insidePercent;
      let height = $(window).height();
      let percent = ($(window).scrollTop() % height) / height;   // 计算翻页时候翻过当前页面的百分之几
      let pathList = $('#design-svg path');
      if (percent >= 0.5 && percent <= 1) {
        insidePercent = pathUtil.getEndInsidePer(percent, 0.8);
        if (percent < 0.8) {
          // 这条线需要动画是反过来的，这是设计师画的方向总是从灯座发起的
          pathUtil.lineAnimate(pathList[7], insidePercent);
        } else {
          pathUtil.socketAnimate(pathList.slice(8, 14), insidePercent, false);
        }
      }
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 740px) {
  #design-svg {
    position: absolute;
    top: 0;
    left: 0;
  }
  .design-bg-bulb {
    top: 3.2rem;
    left: 7.65rem;
  }
  .left-layer {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 9.2rem;
    left: 0;
    top: 0;
    background: center right no-repeat;
    background-size: cover;
  }
  .design-bulb-layer {
    position: absolute;
    z-index: 2;
    height: 100%;
    top: 0.15rem;
    left: 7.15rem;
    width: 2.23rem;
    height: 7.26rem;
  }
  .design-svg-container {
    position: absolute;
    z-index: 5;
    top: 0;
    width: 100%;
    height: 47.8vw;
  }
  .design-intro-container {
    z-index: 4;
  }
  .design-word-container {
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .design-word-bg {
    position: absolute;
    background-color: rgba(255, 123, 172, .3);
  }
  .bg-part-one {
    top: 2.5rem;
    left: 3.55rem;
    width: 3.15rem;
    height: 3.55rem;
  }
  .bg-part-two {
    top: 2.9rem;
    width: 3.2rem;
    height: 3.7rem;
    right: 3rem;
  }
  .major-name {
    position: absolute;
    z-index: 5;
    font-size: 0.72rem;
    color: #ffb2cf;
    top: -0.64rem;
    left: 0.16rem;
  }
  .major-intro {
    display: block;
    font-size: 0.32rem;
    color: #e6cfd7;
  }
  .design-bulb {
    position: absolute;
    width: 5.5rem;
    height: 5.5rem;
    left: 50%;
    top: 2.3rem;
    transform: translateX(-52%);
  }
  .design-intro {
    z-index: 5;
    position: absolute;
    width: 4rem;
  }
  .design-intro::after {
    content: "";
    display: block;
    clear: both;
  }
  .intro-part-one {
    border-left: 0.09rem solid #ffb2cf;
    padding-left: 0.48rem;
    top: 2.2rem;
    left: 2rem;
  }
  .intro-part-one>.major-intro {
    margin-top: 0.48rem;
  }
  .intro-part-two>.major-intro {
    margin-top: 0.48rem;
    color: #33292c!important;
  }
  .intro-part-two {
    top: 2.08rem;
    right: 2.5rem;
  }
  .turn-page>img {
    transform: rotateX(180deg);
  }
  .turn-page>span {
    color: #cca3af;
  }
}
@media only screen and (max-width: 740px) {
  section {
    position: absolute;
    z-index: 5;
  }
  .left-layer {
    position: absolute;
    width: 100%;
    height: 10.14rem;
    z-index: 1;
    top: 0;
    left: 0;
    background: bottom right no-repeat;
    background-size: cover;
  }
  .design-bulb-layer {
    display: block;
    position: absolute;
    z-index: 2;
    width: 7.77rem;
    height: 7.6rem;
    top: 1.9rem;
    right: 0;
    /* transform: translateX(-50%); */
  }
  #design-svg {
    position: absolute;
    top: 0;
    left: 0;
  }
  .design-bg-bulb {
    left: 50%;
    transform: translateX(-46%);
    top: 5.8rem;
  }
  .design-bulb {
    position: absolute;
    width: 5.5rem;
    height: 5.5rem;
    top: 4.9rem;
    left: 50%;
    transform: translateX(-47%);
  }
  .major-name {
    position: absolute;
    font-size: 0.72rem;
    color: #ffb2cf;
    top: -0.64rem;
    left: 0.16rem;
  }
  .major-intro {
    display: block;
    font-size: 0.36rem;
    color: #4a4a4a;
    margin-top: 0.48rem;
    margin-bottom: 0.24rem;
  }
  .design-intro {
    z-index: 111;
    position: absolute;
    border-left: 0.09rem solid #ffb2cf;
    padding-left: 0.48rem;
    width: 7.8rem;
    left: 1.38rem;
    top: 10.3rem;
  }
  .design-intro::after {
    display: block;
    clear: both;
    content: "";
  }
}
.container {
  background: center center no-repeat;
  background-size: cover;
}
</style>