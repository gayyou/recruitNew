<template>
  <div class="page container" 
    @mouseover="indexChoiceLeave"
    v-lazy:background-image="$store.state.isPhone ? 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/phonebg/studio_phone_bg.jpg' : 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/studio_background.jpg'"
  >
    <views id="video-container"></views>
    <img class="bulb-layer" v-lazy="$store.state.isPhone ? 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/phonebg/studio_bulb_layer.png' : 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/studio_bulb_layer.jpg'">
    <div class="studio-layer"
      v-if="$store.state.isPhone"
      v-lazy:background-image="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/phonebg/studio_bottom_layer.png'"
    
    
    
    
    
    ></div>
    <section class="choice-page" v-if="!$store.state.isPhone" @click="indexChoicePage">
      <div class="round-container" @mouseleave="indexChoiceLeave" @mouseover="indexChoiceOver">
        <li>
          <img :src="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/front_bulb.png'" alt="" index="1">
        </li>
        <li><img :src="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/end_bulb.png'" alt="" index="2" class="btn-active"></li>
        <li><img :src="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/mobile_bulb.png'" alt="" index="3"></li>
        <li><img :src="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/embedded_bulb.png'" alt="" index="4"></li>
        <li><img :src="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/data_bulb.png'" alt="" index="5"></li>
        <li><img :src="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/game_bulb.png'" alt="" index="6"></li>
        <li><img :src="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/design_bulb.png'" alt="" index="7"></li>
      </div>
      <div class="round-bg-container" @click="indexChoicePage" @mouseover="indexChoiceOver" >
        <li>
          <img v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/front_bg_bulb.png'" alt="" index="1">
          <span class="group-name" style="color: #ff3333">前端组</span>
        </li>
        <li>
          <img v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/end_bg_bulb.png'" alt="" index="2">
          <span class="group-name" style="color: #2b8be1">后台组</span>
        </li>
        <li>
          <img v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/mobile_bg_bulb.png'" alt="" index="3">
          <span class="group-name" style="color: #DDE500">移动组</span>
        </li>
        <li>
          <img v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/embedded_bg_bulb.png'" alt="" index="4">
          <span class="group-name" style="color: #39b54a">嵌入式组</span>
        </li>
        <li>
          <img v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/data_bg_bulb.png'" alt="" index="5">
          <span class="group-name" style="color: #f15a24">数据挖掘组</span>
        </li>
        <li>
          <img v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/game_bg_bulb.png'" alt="" index="6">
          <span class="group-name" style="color: #c69c6d">手游组</span>
        </li>
        <li>
          <img v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/design_bg_bulb.png'" alt="" index="7">
          <span class="group-name" style="color: #ff7bac">设计组</span>
        </li>
      </div>
      <div class="center-container" @click="centerToSignUp">
        <img v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/join_studio.png'" alt=""  @click="centerToSignUp">
      </div>
    </section>
    <section class="section-left">
      <div class="svg-background"
      >
        <div class="video-svg-container" 
          @click="seeVideo"
          @mouseover="videoAnimation"
          >
          <svg
            v-if="!$store.state.isPhone"
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            xmlns:cc="http://creativecommons.org/ns#"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            width="100%"
            height="100%"
            viewBox="0 0 210 297"
            version="1.1"
            id="video-svg"
            inkscape:version="0.92.3 (2405546, 2018-03-11)"
            sodipodi:docname="绘图-5.svg">
            <defs
              id="defs62">
              <clipPath
                id="clipPath26"
                clipPathUnits="userSpaceOnUse">
                <path
                  inkscape:connector-curvature="0"
                  id="path24"
                  d="M 0,970 H 1920 V 0 H 0 Z" />
              </clipPath>
            </defs>
            <sodipodi:namedview
              id="base"
              pagecolor="#ffffff"
              bordercolor="#666666"
              borderopacity="1.0"
              inkscape:pageopacity="0.0"
              inkscape:pageshadow="2"
              inkscape:zoom="0.98994949"
              inkscape:cx="528.34156"
              inkscape:cy="445.69388"
              inkscape:document-units="mm"
              inkscape:current-layer="layer1"
              showgrid="false"
              inkscape:window-width="1920"
              inkscape:window-height="1001"
              inkscape:window-x="1911"
              inkscape:window-y="-9"
              inkscape:window-maximized="1" />
            <metadata
              id="metadata65">
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
              <g
                transform="matrix(0.35277777,0,0,-0.35277777,-240.34245,316.15079)"
                inkscape:label="播放按钮"
                id="g18">
                <g
                  id="g20">
                  <g
                    clip-path="url(#clipPath26)"
                    id="g22">
                    <g
                      transform="translate(1047,485)"
                      id="g28">
                      <path
                        inkscape:connector-curvature="0"
                        id="path30"
                        style="fill:none;stroke:#ffffff;stroke-width:8;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                        d="m 0,0 c 0,-55.229 -44.771,-100 -100,-100 -55.229,0 -100,44.771 -100,100 0,55.229 44.771,100 100,100 C -44.771,100 0,55.229 0,0 Z" />
                    </g>
                    <g
                      transform="translate(929.0498,514.9009)"
                      id="g32">
                      <path
                        inkscape:connector-curvature="0"
                        id="path34"
                        style="fill:none;stroke:#ffffff;stroke-width:4;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                        d="M 0,0 54,-31.177 0,-62.354 Z" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <img class="studio-bulb" 
          v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/studio_bulb.png'" alt=""
          >
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
          id="studio-svg"
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
            v-if="!$store.state.isPhone"
            inkscape:label="Layer 1"
            inkscape:groupmode="layer"
            id="layer1">
            <!-- 下面是底线 -->
            <path
              inkscape:connector-curvature="0"
              id="path174"
              style="fill:none;stroke:#c8c2cc;stroke-width:5.44444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 105.57231,208.2979 -0.17639,24.12916 -155.1569438,-0.63288 v 43.31899" />
            <path
              inkscape:connector-curvature="0"
              id="path178"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 120.08162,160.59548 c -10.05099,3.81811 -20.10234,3.81811 -30.15368,0 -2.60456,-0.9899 -5.28426,1.24671 -4.73781,3.97862 l 4.62421,23.12035 c 1.44816,7.24147 7.80592,12.45341 15.19062,12.45341 7.38434,0 13.74245,-5.21194 15.19061,-12.45341 l 4.62421,-23.12035 c 0.5461,-2.73191 -2.13325,-4.96852 -4.73816,-3.97862 z" />
            <path
              inkscape:connector-curvature="0"
              id="path56"
              style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
              d="m 98.290017,199.99173 2.25178,7.52404 c 0.146403,0.4886 0.595489,0.82303 1.105253,0.82303 h 7.65634 c 0.50976,0 0.9592,-0.33443 1.10525,-0.82303 l 2.29658,-7.67362 c -0.65193,0.33196 -1.55751,0.68298 -2.72097,1.04457 l -1.53988,5.14492 h -5.938306 l -1.515534,-5.06378 c -0.927452,-0.22507 -1.82633,-0.55492 -2.700513,-0.97613" />
            <!-- <path
              inkscape:connector-curvature="0"
              id="path182"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 111.97173,198.67618 c -4.25345,1.51588 -8.50689,1.51588 -12.76068,0 l 2.55234,8.52734 h 7.65634 z" /> -->
            <path
              inkscape:connector-curvature="0"
              id="path186"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 101.31537,190.79929 h 8.46666" />
            <path
              inkscape:connector-curvature="0"
              id="path190"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 101.31537,187.62429 h 8.46666" />
            <path
              inkscape:connector-curvature="0"
              id="path194"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 101.31537,184.44928 h 8.46666" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 109.78203,172.80765 h -8.46666 v 5.64444 h 8.46666 z" />
            <!-- 下面是流动 -->
            <path
              inkscape:connector-curvature="0"
              id="path174"
              style="fill:none;stroke:#662d91;stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 105.57231,206.4979 -0.17639,25.92916 -155.1569438,-0.63288 v 43.31899" />
            <path
              inkscape:connector-curvature="0"
              id="path178"
              style="fill:none;stroke:#662d91;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 119.80186,160.59548 c -10.05099,3.81811 -20.10234,3.81811 -30.15368,0 -2.60456,-0.9899 -5.28426,1.24671 -4.73781,3.97862 l 4.62421,23.12035 c 1.44816,7.24147 7.80592,12.45341 15.19062,12.45341 7.38434,0 13.74245,-5.21194 15.19061,-12.45341 l 4.62421,-23.12035 c 0.5461,-2.73191 -2.13325,-4.96852 -4.73816,-3.97862 z" />
            <path
              inkscape:connector-curvature="0"
              id="path182"
              style="fill:none;stroke:#662d91;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 111.97173,198.67618 c -4.25345,1.51588 -8.50689,1.51588 -12.76068,0 l 2.55234,8.52734 h 7.65634 z" />
            <path
              inkscape:connector-curvature="0"
              id="path186"
              style="fill:none;stroke:#662d91;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 101.31537,190.79929 h 8.46666" />
            <path
              inkscape:connector-curvature="0"
              id="path190"
              style="fill:none;stroke:#662d91;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 101.31537,187.62429 h 8.46666" />
            <path
              inkscape:connector-curvature="0"
              id="path194"
              style="fill:none;stroke:#662d91;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 101.31537,184.44928 h 8.46666" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#662d91;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 109.78203,172.80765 h -8.46666 v 5.64444 h 8.46666 z" />
          </g>
          <!-- 下面是手机端的 -->
          <g
            v-if="$store.state.isPhone"
            inkscape:label="Layer 1"
            inkscape:groupmode="layer"
            id="layer1">
            <path
              inkscape:connector-curvature="0"
              id="path174"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 105.43671,198.54472 -0.0882,148.25091" />
            <path
              inkscape:connector-curvature="0"
              id="path178"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 113.15165,174.593136 c -5.02568,1.909234 -10.05135,1.909234 -15.07702,0 -1.30246,-0.494594 -2.642314,0.623711 -2.368904,1.989667 l 2.312104,11.560174 c 0.7239,3.620558 3.90314,6.226881 7.59531,6.226881 3.69217,0 6.87105,-2.606323 7.5953,-6.226881 l 2.31211,-11.560174 c 0.27305,-1.365956 -1.0668,-2.484261 -2.3689,-1.989667 z" />
            <path
              inkscape:connector-curvature="0"
              id="path464"
              style="opacity:0.5;fill:#bdccd4;fill-opacity:1;"
              d="m 101.83953,194.086175 1.18321,3.95358 c 0.0893,0.298803 0.36442,0.503414 0.67628,0.503414 h 3.82799 c 0.31186,0 0.58632,-0.204611 0.67592,-0.503414 l 1.15782,-3.868914 c -0.44238,0.229306 -1.00965,0.424392 -1.65206,0.598664 l -0.70696,2.362553 h -2.77742 l -0.71932,-2.403122 c -0.59196,-0.156281 -1.14265,-0.377473 -1.66546,-0.642761" />
            <!-- <path
              inkscape:connector-curvature="0"
              id="path182"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 108.73642,178.633468 c -2.12654,0.758119 -4.25344,0.758119 -6.38034,0 l 1.276,4.264022 h 3.82835 z" /> -->
            <path
              inkscape:connector-curvature="0"
              id="path186"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 103.40824,189.69541 h 4.23334" />
            <path
              inkscape:connector-curvature="0"
              id="path190"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 103.40824,188.10791 h 4.23334" />
            <path
              inkscape:connector-curvature="0"
              id="path194"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 103.40824,186.52041 h 4.23334" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 107.64158,180.699394 h -4.23334 v 2.822222 h 4.23334 z" />
            <!-- 下面是流动 -->
            <path
              inkscape:connector-curvature="0"
              id="path174"
              style="fill:none;stroke:#662d91;stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 105.43671,197.54472 -0.0882,120.25091" />
            <path
              inkscape:connector-curvature="0"
              id="path178"
              style="fill:none;stroke:#662d91;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 113.15165,174.593136 c -5.02568,1.909234 -10.05135,1.909234 -15.07702,0 -1.30246,-0.494594 -2.642314,0.623711 -2.368904,1.989667 l 2.312104,11.560174 c 0.7239,3.620558 3.90314,6.226881 7.59531,6.226881 3.69217,0 6.87105,-2.606323 7.5953,-6.226881 l 2.31211,-11.560174 c 0.27305,-1.365956 -1.0668,-2.484261 -2.3689,-1.989667 z" />
            <path
              inkscape:connector-curvature="0"
              id="path182"
              style="fill:none;stroke:#662d91;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 108.73642,193.633468 c -2.12654,0.758119 -4.25344,0.758119 -6.38034,0 l 1.276,4.264022 h 3.82835 z" />
            <path
              inkscape:connector-curvature="0"
              id="path186"
              style="fill:none;stroke:#662d91;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 103.40824,189.69541 h 4.23334" />
            <path
              inkscape:connector-curvature="0"
              id="path190"
              style="fill:none;stroke:#662d91;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 103.40824,188.10791 h 4.23334" />
            <path
              inkscape:connector-curvature="0"
              id="path194"
              style="fill:none;stroke:#662d91;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 103.40824,186.52041 h 4.23334" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#662d91;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 107.64158,180.699394 h -4.23334 v 2.822222 h 4.23334 z" />
          </g>
        </svg>
      </div>
    </section>
    <section class="section-right">
      <div class="rectangle" v-if="!$store.state.isPhone"></div>
      <div class="words-container">
        <span class="studio-name" v-if="!$store.state.isPhone">QG Studio</span>
        <span class="studio-name" v-if="$store.state.isPhone">
          QG<br>
          Studio
        </span>
        <span class="web-type">招新网站</span>
        <span class="studio-honor">小平科技创新<br v-if="$store.state.isPhone">团队</span>
        <span class="studio-motto" v-if="!$store.state.isPhone">No <span>Q</span>uests, No <span>G</span>ains</span>
        <span class="studio-motto" v-if="$store.state.isPhone">
          No <span>Q</span>uests<br>
          No <span>G</span>ains
        </span>
        <div class="turn-page">
          <img v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/studio_arrow.png'" alt="">
          <span>向下滚动查看更多</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import pathUtil from '../../../utils/pathAnimate.js';
import views from './video/video.vue';
export default {
  components: {
    views
  },
  data() {
    return {
      timeoutID: null,
      requestAniID: null,
      percent: 0
    }
  },
  mounted() {
    this.$store.state.loadedCount++;
  },
  watch: {
    '$store.state.studio': {
      handler(newValue, oldValue) {
        this.pathAnimate(newValue, oldValue);
      },
      deep: true
    },
    '$store.state.pages': (pages) => {
      if (pages > 1) {
        return;
      }
      let pathList = $('#studio-svg path');
      pathUtil.correctStartPath(pathList[7], pathList.slice(8, 14), pages, 0, 0.1);
    }
  },
  methods: {
    videoAnimation() {
      requestAnimationFrame(() => {
        
      })
    },
    requestAnimationFn(callback) {
      this.requestAniID = requestAnimationFrame(this.requestAnimationFn.bind(this, callback), 50);
    },
    videoPathAni(percent) {
      let $path = $('#video-svg path');
      pathUtil.lineAnimate($path[0], percent)
      pathUtil.lineAnimate($path[1], percent)
    },
    seeVideo(event) {
      $('.video-container')[0].style.display = 'block';
      $('#qg-video')[0].play();
    }, 
    indexChoicePage(event) {
      event.stopPropagation();
      if (!event.target.getAttribute('index')) {
        return;
      }
      let index = parseInt(event.target.getAttribute('index'));
      this.$emit('choicePage', index + 1);
    },
    indexChoiceOver(event) {
      event.stopPropagation();
      this.indexChoiceLeave(event);
      if (!event.target.getAttribute('index')) {
        return;
      }
      let index = parseInt(event.target.getAttribute('index'));
      $('.choice-page .round-container li')[index - 1].style.display = 'block';
      $('.choice-page .round-bg-container img')[index - 1].style.display = 'none';
      $('.choice-page .round-bg-container span')[index - 1].style.display = 'block';
    },
    indexChoiceLeave(event) {
      event.stopPropagation();
      let i;
      let choiceList = $('.choice-page .round-container li');
      for (i = 0; i < choiceList.length; i++) {
        choiceList[i].style.display = 'none';
        $('.choice-page .round-bg-container img')[i].style.display = 'block';
        $('.choice-page .round-bg-container span')[i].style.display = 'none';
      }
    },
    centerToSignUp(event) {
      if (this.$store.state.isPhone) {
        window.location.href = 'http://www.ed1son.cn:8080/join/join.html'
      } else {
        window.location.href = 'http://www.ed1son.cn:8080/join/mobilejoin.html'
      }
    },
    pathAnimate(newValue, oldValue) {
        let height = $(window).height();
        let percent = ($(window).scrollTop() % height) / height;   // 计算翻页时候翻过当前页面的百分之几
        let pathList = $('#studio-svg path');
        if (percent <= 0.5) {
          // 这个是执行上半部分的动画效果
          let insidePercent = pathUtil.getStartInsidePer(percent, 0.1);
          if (percent <= 0.1) {
            pathUtil.socketAnimate(pathList.slice(8, 14), insidePercent);
          } else {
            pathUtil.lineAnimate(pathList[7], insidePercent)
          }
        }
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 740px) {
  .group-name {
    display: block;
    text-align: center;
    font-size: 0.24rem;
    transform: translateY(1.2rem);
  }
  .studio-bulb {
    cursor: pointer;
    display: block;
    z-index: 110;
    position: absolute;
    width: 5.5rem;
    height: 5.5rem;
    right: 0.2rem;
    bottom: 2.6rem;
  }
  .video-svg-container:hover {
    opacity: 1!important;
  }
  .video-svg-container {
    cursor: pointer;
    display: block;
    z-index: 111;
    position: absolute;
    width: 3.65rem;
    height: 3.65rem;
    right: 1.15rem;
    bottom: 3.55rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .3);
    opacity: 0;
    transition: opacity 0.75s ease;
  }
  .video-svg-container>svg {
    position: absolute;
    left: 0.13rem;
    top: 0.05rem
  }
  /* .round-container>li>img:hover {
    animation: groupIconOver .5s ease;
  }
  @keyframes groupIconOver {
    0% {
      transform: scale(1);
    }
    60% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  } */
  .choice-page {
    position: absolute;
    z-index: 999;
    width: 3rem;
    height: 3rem;
    bottom: 3.78rem;
    left: 2.7rem;
  }
  .round-container {
    z-index: 11;
  }
  .round-bg-container {
    z-index: 10;
  }
  .round-container,
  .round-bg-container,
  .center-container {
    cursor: pointer;
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
  }
  .round-bg-container>li,
  .round-container>li {
    cursor: pointer;
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
  }
  .round-container li { 
    display: none;
    overflow: hidden;
  }
  .round-bg-container>li:nth-child(1),
  .round-container>li:nth-child(1) {
    transform: translateX(0rem) translateY(-2rem);
  }
  .round-bg-container>li:nth-child(2),
  .round-container>li:nth-child(2) {
    transform: translateX(1.56rem) translateY(-1.245rem);
  }
  .round-bg-container>li:nth-child(3),
  .round-container>li:nth-child(3) {
    transform: translateX(1.95rem) translateY(0.445rem);
  }
  .round-bg-container>li:nth-child(4),
  .round-container>li:nth-child(4) {
    transform: translateX(0.867rem) translateY(1.8rem);
  }
  .round-bg-container>li:nth-child(5),
  .round-container>li:nth-child(5) {
    transform: translateX(-0.867rem) translateY(1.8rem);
  }
  .round-bg-container>li:nth-child(6),
  .round-container>li:nth-child(6) {
    transform: translateX(-1.95rem) translateY(0.445rem);
  }
  .round-bg-container>li:nth-child(7),
  .round-container>li:nth-child(7) {
    transform: translateX(-1.56rem) translateY(-1.24rem);
  }
  .round-container>li>img {
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 150%;
    height: 150%;
    /* transition: transform .5s ease; */
  }
  .btn-active {
    animation: btn-animation 1.5s ease 0s infinite;
  }
  .round-bg-container>li>img {
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 90%;
    height: 90%;
  }
  .round-bg-container span {
    display: none;
  }
  .center-container {
    z-index: 99;
  }
  .center-container>img {
    cursor: pointer;
    position: absolute;
    z-index: 999;
    display: block;
    width: 1.9rem;
    height: 1.9rem;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .bulb-layer {
    display: block;
    position: absolute;
    width: 4.44rem;
    height: 6.85rem;
    left: 50%;
    transform: translateX(-45%);
    bottom: 0.925rem;
  }
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    background: center center no-repeat;
    background-size: cover;
  }
  .studio-svg {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .section-left {
    position: relative;
    z-index: 121;
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
    width: 100%;
    height: 8.26rem;
    right: 0;
    bottom: 0;
    /* background: url(../../assets/images/background/studio_word_bg.png) center center no-repeat; */
    /* background-size: cover; */
  }
  .svg-background>svg {
    position: absolute;
  }

  /* section-left容器内部样式 */

  /* section-right容器内部样式 */
  .rectangle {
    position: absolute;
    width: 4rem;
    height: 2.2rem;
    z-index: 10;
    background-color: rgba(102, 45, 145, .5);
    bottom: 4.9rem;
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
    margin-top: 0.46rem;
    font-size: 0.36rem;
    line-height: 0.36rem;
    color: #969199;
  }
  .studio-motto>span {
    color: #f9f2ff;
  }
  .studio-honor {
    display: block;
    margin-top: 0.7rem;
    font-size: 0.36rem;
    color: #ac81cd;
  }
  .turn-page span {
    color: #f9f2ff;
  }
  /* section-right容器内部样式 */
}
@media only screen and (max-width: 740px) {
  #studio-svg {
    position: absolute;
    bottom: 0;
  }
  .studio-layer {
    position: absolute;
    width: 100%;
    height: 10rem;
    z-index: 1;
    bottom: 0;
    left: 0;
    background: top center no-repeat;
    background-size: cover;
  }
  .bulb-layer {
    display: block;
    position: absolute;
    z-index: 2;
    width: 4.48rem;
    height: 10.62rem;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0rem;
  }
  .container {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: center center no-repeat;
    background-size: cover;
  }
  .section-right {
    z-index: 5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .section-left,
  .svg-background {
    z-index: 5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .words-container {
    width: 100%;
    height: 100%;
  }
  .words-container>span {
    position: absolute;
    display: block;
  }
  .studio-name {
    z-index: 2;
    right: 1.55rem;
    bottom: 4.08rem;
    color: #f9f2ff;
    font-size: 1rem;
    line-height: 1.15rem;
  }
  .studio-motto {
    left: 2.6rem;
    bottom: 2.8rem;
    font-size: 0.48rem;
    color: #969199;
  }
  .studio-motto>span {
    color: #f9f2ff;
  }
  .web-type {
    z-index: 1;
    font-size: 0.72rem;
    color: #c8c2cc;
    right: 1.64rem;
    bottom: 2.92rem;
  }
  .studio-bulb {
    position: absolute;
    width: 5.5rem;
    height: 5.5rem;
    left: 50%;
    transform: translateX(-50%);
    bottom: 6.7rem;
  }
  .turn-page {
    position: absolute;
    bottom: 1.33rem;
    left: 1.7rem;
  }
  .rectangle {
    position: absolute;
    width: 2.7rem;
    height: 2.7rem;
    z-index: 1;
    background-color: rgba(102, 45, 145, .5);
    bottom: 3.3rem;
    right: 1.6rem;
  }
  .studio-honor {
    position: absolute;
    color: #ac81cd;
    font-size: 0.48rem;
    left: 2rem;
    bottom: 4.8rem;
    text-align: end;
  }
  .turn-page span {
    color: #bbb6bf;
  }
}
</style>