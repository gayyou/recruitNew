<template>
    <div class="page container">
      <section class="game-svg-container">
        <img class="game-bulb bulb" :class="$store.state.pages >= 5.9 ? 'fade-in' : 'fade-out'" src="../../assets/images/icons/game_bulb.png" alt="">
        <svg
          xmlns:dc="http://purl.org/dc/elements/1.1/"
          xmlns:cc="http://creativecommons.org/ns#"
          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          xmlns:svg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
          width="100%"
          :height="$store.state.isPhone ? '160vw' : '47.8vw'"
          viewBox="0 0 210 297"
          version="1.1"
          id="game-svg"
          inkscape:version="0.92.3 (2405546, 2018-03-11)"
          sodipodi:docname="手游.svg">
          <defs
            id="defs878">
            <linearGradient
              id="game-start-line"
              spreadMethod="pad"
              gradientTransform="matrix(183.11071,0,0,-183.11071,-21.053875,-427.71585)"
              gradientUnits="userSpaceOnUse"
              y2="0"
              x2="1"
              y1="0.6"
              x1="0">
              <stop
                id="stop174"
                offset="0"
                style="stop-opacity:1;stop-color:#f15a24" />
              <stop
                id="stop176"
                offset="1"
                style="stop-opacity:1;stop-color:#c69c6d" />
            </linearGradient>
            <linearGradient
              id="game-end-line"
              spreadMethod="pad"
              gradientTransform="matrix(357.71666,0,0,-357.71666,398.37369,7.7883034)"
              gradientUnits="userSpaceOnUse"
              y2="0.5"
              x2="0.5"
              y1="0"
              x1="0.9"
              >
              <stop
                id="stop196"
                offset="0"
                style="stop-opacity:1;stop-color:#ff7bac" />
              <stop
                id="stop198"
                offset="1"
                style="stop-opacity:1;stop-color:#c69c6d" />
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
            id="metadata881">
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
            <path
              inkscape:connector-curvature="0"
              id="path180"
              style="fill:none;stroke:url(#game-start-line);stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 101.58679,23.99976 101.58679,5 -210,5 V 5" />
            <path
              inkscape:connector-curvature="0"
              id="path184"
              style="fill:none;stroke:#c69c6d;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 116.58679,69.99976 c -10.051,-3.81847 -20.10234,-3.81847 -30.15369,0 -2.60455,0.98954 -5.28425,-1.24672 -4.7378,-3.97898 l 4.62421,-23.120351 c 1.44815,-7.241117 7.80591,-12.453408 15.19061,-12.453408 7.38434,0 13.74246,5.212291 15.19061,12.453408 l 4.62421,23.120351 c 0.5461,2.73226 -2.13324,4.96852 -4.73815,3.97898 z" />
            <path
              inkscape:connector-curvature="0"
              id="path188"
              style="fill:none;stroke:#c69c6d;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 107.75665,31.919056 c -4.25344,-1.515885 -8.50688,-1.515885 -12.76068,0 l 2.55235,-8.527343 h 7.65633 z" />
            <path
              inkscape:connector-curvature="0"
              id="path192"
              style="fill:none;stroke:#c69c6d;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 97.10029,39.795737 h 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#c69c6d;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 97.10029,42.970737 h 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path200"
              style="fill:none;stroke:#c69c6d;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 97.10029,46.145737 h 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path202"
              style="fill:none;stroke:#c69c6d;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 105.56696,57.787409 h -8.46667 v -5.644444 h 8.46667 z" />
            <path
              inkscape:connector-curvature="0"
              id="path206"
              style="fill:none;stroke:#c69c6d;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 116.23401,209.48171 c -10.051,3.8181 -20.10234,3.8181 -30.15369,0 -2.60455,-0.9899 -5.28425,1.24672 -4.7378,3.97862 l 4.62421,23.12035 c 1.44815,7.24146 7.80592,12.45341 15.19061,12.45341 7.38434,0 13.74246,-5.21195 15.19061,-12.45341 l 4.62421,-23.12035 c 0.5461,-2.7319 -2.13324,-4.96852 -4.73815,-3.97862 z" />
            <path
              inkscape:connector-curvature="0"
              id="path210"
              style="fill:none;stroke:#c69c6d;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 107.40387,247.56243 c -4.25344,1.51587 -8.50688,1.51587 -12.76068,0 l 2.55235,8.52733 h 7.65634 z" />
            <path
              inkscape:connector-curvature="0"
              id="path214"
              style="fill:none;stroke:#c69c6d;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 96.74751,239.68554 h 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path218"
              style="fill:none;stroke:#c69c6d;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 96.74751,236.51054 h 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path222"
              style="fill:none;stroke:#c69c6d;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 96.74751,233.33554 h 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path224"
              style="fill:none;stroke:#c69c6d;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 105.21418,221.6939 h -8.46667 v 5.64444 h 8.46667 z" />
            <path
              inkscape:connector-curvature="0"
              id="path228"
              style="fill:none;stroke:url(#game-end-line);stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 100.80446,256.48322 100.80446,300 V 300" />
          </g>
          <!-- 手游 -->
          <g
            v-if="$store.state.isPhone"
            inkscape:label="Layer 1"
            inkscape:groupmode="layer"
            id="layer1">
            <path
              inkscape:connector-curvature="0"
              id="path180"
              style="fill:none;stroke:url(#game-start-line);stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -1,80.819052 h 77.40833 l -0.0882,13.052777" />
            <path
              inkscape:connector-curvature="0"
              id="path184"
              style="fill:none;stroke:#c69c6d;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 83.968959,117.17601 c -5.02567,-1.90924 -10.05134,-1.90924 -15.07666,0 -1.30246,0.49459 -2.64231,-0.62371 -2.36926,-1.98967 l 2.31211,-11.560166 c 0.72425,-3.620209 3.90313,-6.226531 7.5953,-6.226531 3.69253,0 6.87141,2.606322 7.59566,6.226531 l 2.31176,11.560166 c 0.2734,1.36596 -1.06645,2.48426 -2.36891,1.98967 z" />
            <path
              inkscape:connector-curvature="0"
              id="path188"
              style="fill:none;stroke:#c69c6d;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 79.553879,98.135468 c -2.12655,-0.757767 -4.25345,-0.757767 -6.38034,0 l 1.27599,-4.263672 h 3.82835 z" />
            <path
              inkscape:connector-curvature="0"
              id="path192"
              style="fill:none;stroke:#c69c6d;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 74.225699,102.073914 h 4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#c69c6d;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 74.225699,103.661414 h 4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path200"
              style="fill:none;stroke:#c69c6d;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 74.225699,105.248914 h 4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path202"
              style="fill:none;stroke:#c69c6d;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 78.459029,111.06974 h -4.23333 v -2.822216 h 4.23333 z" />
            <path
              inkscape:connector-curvature="0"
              id="path206"
              style="fill:none;stroke:#c69c6d;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 83.792569,195.91672 c -5.02567,1.90924 -10.05134,1.90924 -15.07666,0 -1.30246,-0.49459 -2.64231,0.62372 -2.36926,1.98967 l 2.31211,11.56018 c 0.72425,3.62055 3.90313,6.22688 7.5953,6.22688 3.69253,0 6.87141,-2.60633 7.59566,-6.22688 l 2.31176,-11.56018 c 0.2734,-1.36595 -1.06645,-2.48426 -2.36891,-1.98967 z" />
            <path
              inkscape:connector-curvature="0"
              id="path210"
              style="fill:none;stroke:#c69c6d;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 79.377489,214.95706 c -2.12654,0.75812 -4.25344,0.75812 -6.38034,0 l 1.276,4.26402 h 3.82834 z" />
            <path
              inkscape:connector-curvature="0"
              id="path214"
              style="fill:none;stroke:#c69c6d;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 74.049309,211.019 h 4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path218"
              style="fill:none;stroke:#c69c6d;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 74.049309,209.4315 h 4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path222"
              style="fill:none;stroke:#c69c6d;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 74.049309,207.844 h 4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path224"
              style="fill:none;stroke:#c69c6d;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 78.282639,202.02299 h -4.23333 v 2.82222 h 4.23333 z" />
            <path
              inkscape:connector-curvature="0"
              id="path228"
              style="fill:none;stroke:url(#game-end-line);stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 76.077779,219.34544 v 20.99027 H 210.375" />
          </g>
        </svg>
      </section>
      <section class="game-intro-container">
        <div class="game-word-bg game-bg-one"></div>
        <div class="game-word-bg game-bg-two"></div>
        <div class="game-intro game-intro-one">
          <span class="major-name">手游</span>
          <span class="major-intro">
            手游组的研究方向为计算机
            图形学与C++编程。小组以
            DirectX作为学习方向，使
            用DirectX开发PC端3D
            游戏及其他智能图
            形程序。
          </span>
        </div>
        <div class="game-intro game-intro-two">
          <span v-if="!$store.state.isPhone" class="major-intro">
            除此之外，小组使用Unity3D游
            戏引擎开发Android、ios等移动
            端游戏以及体感应用，所制作的
            体感应用在全国移动互联网上获
            得二等奖的名次。目前小组正尝
            试虚拟现实方向的研究。来吧，
            加入我们，来手游组开发属于你
            自己的游戏！
          </span>
          <span v-if="$store.state.isPhone" class="major-intro">
            除此之外，小组使用Unity3D游
            戏引擎开发Android、ios等移动
            端游戏以及体感应用，所制作的
            体感应用在全国移动互联网上获
            得二等奖的名次。
          </span>
        </div>
        <div v-if="$store.state.isPhone" class="game-intro game-intro-three">
          <span class="major-intro">
            目前小组正尝试虚拟现实方向的研究。<br>
            来吧，加入我们，来手游组开发属于你
            自己的游戏！
          </span>
          <div class="turn-page">
            <img src="../../assets/images/icons/game_arrow.png" alt="">
            <span>向下滚动了解更多</span>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
import pathUtil from '../../../utils/pathAnimate.js';
export default {
  watch: {
    '$store.state.game': {
      handler(newValue, oldValue) {
        this.pathAnimate(newValue, oldValue)
      },
      deep: true
    },
    '$store.state.pages': (pages) => {
      let pathList = $('#game-svg path');
      pathUtil.correctEndPath(pathList[0], pathList.slice(1, 7), pages, 5.5, 0.4);
      pathUtil.correctStartPath(pathList[13], pathList.slice(7, 13), pages, 6, 0.2);
    }
  },
  methods: {
    pathAnimate(newValue, oldValue) {
      let insidePercent;
      let height = $(window).height();
      let percent = ($(window).scrollTop() % height) / height;   // 计算翻页时候翻过当前页面的百分之几
      let pathList = $('#game-svg path');
      if (percent >= 0.5 && percent <= 1) {
        insidePercent = pathUtil.getEndInsidePer(percent, 0.9);
        if (percent < 0.9) {
          // 这条线需要动画是反过来的，这是设计师画的方向总是从灯座发起的
          pathUtil.lineAnimate(pathList[0], insidePercent, true);
        } else {
          pathUtil.socketAnimate(pathList.slice(1, 7), insidePercent, false);
        }
      } else {
        insidePercent = pathUtil.getStartInsidePer(percent, 0.2);
        if (percent < 0.2) {
          pathUtil.socketAnimate(pathList.slice(7, 13), insidePercent, true);
        } else {
          pathUtil.lineAnimate(pathList[13], insidePercent);
        }
      }
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 740px) {
  .game-word-bg {
    position: absolute;
    background-color: rgba(189, 156, 109, .3);
  }
  .game-bg-one {
    left: 3.8rem;
    bottom: 3.9rem;
    width: 2.8rem;
    height: 3.2rem;
  }
  .game-bg-two {
    bottom: 2.95rem;
    right: 3rem;
    height: 3.3rem;
    width: 3.95rem;
  }
  .container {
    background: url(../../assets/images/background/game_background.png) center center no-repeat;
    background-size: cover;
  }
  .major-name {
    position: absolute;
    color: #c4ab8b;
    font-size: 0.72rem;
    top: -0.64rem;
    left: 0.16rem;
  }
  .major-intro {
    display: block;
    color: #e6dbcf;
    font-size: 0.32rem;
  }
  .game-intro-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .game-svg-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 47.8vw;
  }
  .game-intro {
    position: absolute;
    width: 6rem;
    bottom: 2.5rem;
  }
  .game-bulb {
    position: absolute;
    width: 5.5rem;
    height: 5.5rem;
    left: 50%;
    bottom: 2.1rem;
    transform: translateX(-51.5%);  
  }
  .game-intro-one {
    border-left: 0.09rem solid #c4ab8b;
    padding-left: 0.48rem;
    left: 3.11rem;
  }
  .game-intro-two {
    right: 1.2rem;
    bottom: 2.65rem;
  }
  .game-intro::after {
    content: "";
    display: block;
    clear: both;
  }
  .game-intro>.major-intro {
    margin-top: 0.54rem;
  }
}
@media only screen and (max-width: 740px) {
  #game-svg {
    position: absolute;
    top: 0;
    left: 0;
  }
  section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .game-bulb {
    position: absolute;
    width: 5.5rem;
    height: 5.5rem;
    left: 1.3rem;
    top: 6.5rem;
  }
  .major-name {
    position: absolute;
    color: #c4ab8b;
    font-size: 0.72rem;
    top: -0.64rem;
    left: 0.16rem;
  }
  .game-intro-one>.major-intro {
    margin-top: 0.48rem;
    margin-bottom: 0.24rem;
  }
  .game-intro-two>.major-intro,
  .game-intro-three>.major-intro {
    margin: 0.24rem 0;
  }
  .major-intro {
    display: block;
  }
  .game-intro-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .game-svg-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 47.8vw;
  }
  .game-intro {
    position: absolute;
  }
  .game-intro-one,
  .game-intro-two,
  .game-intro-three {
    border-left: 0.09rem solid #c4ab8b;
    padding-left: 0.48rem;
    color: #e6dbcf;
    font-size: 0.36rem;
  }
  .game-intro-one {
    left: 1.38rem;
    top: 2.51rem;
    width: 7.8rem;
  }
  .game-intro-two {
    top: 6.25rem;
    right: 0.86rem;
    width: 2.8rem;
  }
  .game-intro-three {
    top: 14.5rem;
    left: 1.39rem;
    width: 7.8rem;
  }
}
.container {
  background: url(../../assets/images/background/game_background.png) center center no-repeat;
  background-size: cover;
}
</style>