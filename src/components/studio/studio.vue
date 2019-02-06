<template>
  <div class="page container">
    <section class="section-left">
      <div class="svg-background">
        <img class="studio-bulb" src="../../assets/images/icons/studio_bulb.png" alt="">
        <svg
          xmlns:dc="http://purl.org/dc/elements/1.1/"
          xmlns:cc="http://creativecommons.org/ns#"
          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          xmlns:svg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
          width="6.3rem"
          height="47.8vw"
          viewBox="0 0 210 297"
          version="1.1"
          id="svg439"
          inkscape:version="0.92.3 (2405546, 2018-03-11)"
          sodipodi:docname="绘图-1.svg">
          <defs
            id="defs433" />
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
            id="metadata436">
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
            inkscape:label="Layer 1"
            inkscape:groupmode="layer"
            id="layer1">
            <path
              inkscape:connector-curvature="0"
              id="path174"
              style="fill:none;stroke:#662d91;stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 172.77231,227.4979 -0.17639,25.92916 -169.1569438,-0.63288 v 43.31899" />
            <path
              inkscape:connector-curvature="0"
              id="path178"
              style="fill:none;stroke:#662d91;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 188.20186,181.59548 c -10.05099,3.81811 -20.10234,3.81811 -30.15368,0 -2.60456,-0.9899 -5.28426,1.24671 -4.73781,3.97862 l 4.62421,23.12035 c 1.44816,7.24147 7.80592,12.45341 15.19062,12.45341 7.38434,0 13.74245,-5.21194 15.19061,-12.45341 l 4.62421,-23.12035 c 0.5461,-2.73191 -2.13325,-4.96852 -4.73816,-3.97862 z" />
            <path
              inkscape:connector-curvature="0"
              id="path182"
              style="fill:none;stroke:#662d91;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 179.37173,219.67618 c -4.25345,1.51588 -8.50689,1.51588 -12.76068,0 l 2.55234,8.52734 h 7.65634 z" />
            <path
              inkscape:connector-curvature="0"
              id="path186"
              style="fill:none;stroke:#662d91;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 168.71537,211.79929 h 8.46666" />
            <path
              inkscape:connector-curvature="0"
              id="path190"
              style="fill:none;stroke:#662d91;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 168.71537,208.62429 h 8.46666" />
            <path
              inkscape:connector-curvature="0"
              id="path194"
              style="fill:none;stroke:#662d91;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 168.71537,205.44928 h 8.46666" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#662d91;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 177.18203,193.80765 h -8.46666 v 5.64444 h 8.46666 z" />
          </g>
        </svg>
      </div>
    </section>
    <section class="section-right">
      <div class="rectangle"></div>
      <div class="words-container">
        <span class="studio-name">QG Studio</span>
        <span class="web-type">招新网站</span>
        <span class="studio-motto">No <span>Q</span>uests, No <span>G</span>ains</span>
        <div class="turn-page">
          <img src="../../assets/images/icons/studio_arrow.png" alt="">
          <span>向下滚动查看更多</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import pathUtil from '../../../utils/pathAnimate.js';
export default {
  watch: {
    '$store.state.studio': {
      handler(newValue, oldValue) {
        this.pathAnimate(newValue, oldValue)
      },
      deep: true
    }
  },
  methods: {
    pathAnimate(newValue, oldValue) {
      setTimeout(() => {
        let height = $(window).height();
        let percent = ($(window).scrollTop() % height) / height;   // 计算翻页时候翻过当前页面的百分之几
        let pathList = $('svg path');
        if (percent <= 0.5) {
          pathUtil.pathStart(pathList, percent, 0.1);
        } else {

        }
      }, 0)

    }
  }
}
</script>

<style scoped>
.studio-bulb {
  display: block;
  position: absolute;
  width: 5.5rem;
  height: 5.5rem;
  right: -0.1rem;
  bottom: 2.1rem;
}
.container {
  position: relative;
  display: flex;
  justify-content: center;
  background: url(../../assets/images/background/studio_background.png) center center no-repeat;
  background-size: cover;
}
.studio-svg {
  position: relative;
  width: 100%;
  height: 100%;
}
.section-left {
  position: relative;
  width: 12.54rem;
  height: 100vh;
}
.section-right {
  position: relative;
  width: 6.65rem;
  height: 100vh;
}

/* section-left容器内部样式 */

.svg-background {
  position: absolute;
  width: 7.83rem;
  height: 8.26rem;
  right: 0;
  bottom: 0;
  /* background: url(../../assets/images/background/studio_word_bg.png) center center no-repeat; */
  /* background-size: cover; */
}

/* section-left容器内部样式 */

/* section-right容器内部样式 */
.rectangle {
  position: absolute;
  width: 4rem;
  height: 2.2rem;
  z-index: 10;
  background: url(../../assets/images/background/studio_word_bg.png) center center no-repeat;  
  background-size: cover;
  bottom: 3.9rem;
  left: 0.62rem;
}
.words-container {
  position: absolute;
  width: 100%;
  background: transparent;
  z-index: 11;
  bottom: 2rem;
  border-left: 0.09rem solid #AC81CD;
  padding-left: 0.16rem;
}
.words-container::after {
  content: "";
  display: block;
  clear: both;
}
.words-container>span {
  display: block;
  font-family: 'SourceHanSansCN-Regular';
}
.studio-name {
  font-size: 0.96rem;
  line-height: 0.96rem;
  color: #f9f2ff;
}
.web-type {
  margin-top: 0.16rem;
  line-height: 0.72rem;
  font-size: 0.72rem;
  color: #c8c2cc;
}
.studio-motto {
  margin-top: 0.7rem;
  font-size: 0.36rem;
  line-height: 0.36rem;
  color: #969199;
}
.studio-motto>span {
  color: #f9f2ff;
}
.turn-page {
  width: 100%;
  margin-top: 1rem;
}
.turn-page::after {
  content: "";
  display: block;
  clear: both;
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
  font-family: 'SourceHanSansCN-Light';
  margin-top: 0.58rem;
  font-size: 0.18rem;
  line-height: 0.18rem;
  color: #959098;
}
/* section-right容器内部样式 */
</style>