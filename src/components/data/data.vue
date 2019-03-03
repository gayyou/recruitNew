<template>
    <div class="page container"
      v-lazy:background-image="$store.state.isPhone ? 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/phonebg/data_phone_bg.jpg' : 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/data_background.jpg'"
    >
      <img class="data-bulb-layer" v-lazy="$store.state.isPhone ? 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/phonebg/data_bulb_layer.png' : 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/data_bulb_layer.png'">
      <div class="left-layer"
        v-lazy:background-image="$store.state.isPhone ? 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/phonebg/data_layer.png' : 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/data_right_layer.png'"
      ></div>
      <section class="data-svg-container">
        <img class="data-bg-bulb bg-bulb" v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/data_bg_bulb.png'" alt="">
        <img v-lazy="bulb" class="data-bulb bulb" :class="$store.state.pages >= 4.9 ? 'fade-in' : 'fade-out'" alt="">
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
          id="data-svg"
          inkscape:version="0.92.3 (2405546, 2018-03-11)"
          sodipodi:docname="数据挖掘.svg">
          <defs
            id="defs711">
            <linearGradient
              id="data-start-line-phone"
              spreadMethod="pad"
              gradientTransform="matrix(358.06943,0,0,-358.06943,44.891588,-305.98233)"
              gradientUnits="userSpaceOnUse"
              y2="0"
              x2="0.9"
              y1="0"
              x1="0">
              <stop
                id="stop174"
                offset="0"
                style="stop-opacity:1;stop-color:#f15a24" />
              <stop
                id="stop176"
                offset="1"
                style="stop-opacity:1;stop-color:#39b54a" />
            </linearGradient>
            <linearGradient
              id="data-start-line"
              spreadMethod="pad"
              gradientTransform="matrix(358.06943,0,0,-358.06943,44.891588,-305.98233)"
              gradientUnits="userSpaceOnUse"
              y2="0"
              x2="0.3"
              y1="0"
              x1="0.2">
              <stop
                id="stop174"
                offset="0"
                style="stop-opacity:1;stop-color:#39b54a" />
              <stop
                id="stop176"
                offset="1"
                style="stop-opacity:1;stop-color:#f15a24" />
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
            id="metadata970">
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
              style="fill:none;stroke:#c8c2cc;stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 280.04799,208.77446 0,69.2 -530.6,0 v 0" />
            <path 
              inkscape:connector-curvature="0"
              id="path178"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 295.10116,161.21905 c -10.05099,3.81847 -20.10235,3.81847 -30.15369,0 -2.60455,-0.98954 -5.28425,1.24672 -4.73781,3.97898 l 4.62386,23.12035 c 1.44851,7.24076 7.80627,12.45341 15.19097,12.45341 7.38434,0 13.74246,-5.21265 15.1906,-12.45341 l 4.62423,-23.12035 c 0.5461,-2.73226 -2.13325,-4.96852 -4.73816,-3.97898 z" />
            <path
              inkscape:connector-curvature="0"
              id="path56"
              style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
              d="m 272.890017,200.49173 2.25178,7.52404 c 0.146403,0.4886 0.595489,0.82303 1.105253,0.82303 h 7.65634 c 0.50976,0 0.9592,-0.33443 1.10525,-0.82303 l 2.29658,-7.67362 c -0.65193,0.33196 -1.55751,0.68298 -2.72097,1.04457 l -1.53988,5.14492 h -5.938306 l -1.515534,-5.06378 c -0.927452,-0.22507 -1.82633,-0.55492 -2.700513,-0.97613" />
            <!-- <path
              inkscape:connector-curvature="0"
              id="path182"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 286.27101,199.29993 c -4.25344,1.51588 -8.50688,1.51588 -12.76067,0 l 2.55236,8.52734 h 7.65633 z" /> -->
            <path
              inkscape:connector-curvature="0"
              id="path186"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 275.61465,191.42307 h 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path190"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 275.61465,188.24807 h 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path19"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 275.61465,185.07307 h 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 284.08132,173.43141 h -8.46667 v 5.64444 h 8.46667 z" />
            <path
              inkscape:connector-curvature="0"
              id="path200"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 205.96688,72.365056 c -3.81813,10.051344 -3.81813,20.102335 0,30.153679 0.98988,2.604559 -1.24672,5.28426 -3.97862,4.737808 L 178.867899,102.632329 c -7.24147,-1.448152 -12.45341,-7.805912 -12.45341,-15.19061 0,-7.384344 5.21194,-13.742457 12.45341,-15.19061 l 23.120361,-4.624211 c 2.7319,-0.5461 4.9685,2.1336 3.97862,4.738158 z" />
            <path
              inkscape:connector-curvature="0"
              id="path204"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 167.886169,81.195014 c -1.51588,4.253794 -1.51588,8.507236 0,12.760677 l -8.52734,-2.552347 v -7.656336 z" />
            <path
              inkscape:connector-curvature="0"
              id="path208"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 175.763069,91.851547 V 83.38488" />
            <path
              inkscape:connector-curvature="0"
              id="path212"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 178.938069,91.851547 V 83.38488" />
            <path
              inkscape:connector-curvature="0"
              id="path216"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 182.11307,91.851547 V 83.38488" />
            <path
              inkscape:connector-curvature="0"
              id="path218"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 193.75469,91.851552 h -5.64445 v -8.466667 h 5.64445 z" />
            <path
              inkscape:connector-curvature="0"
              id="path174"
              style="fill:none;stroke:#c8c2cc;stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 160.8,87.695014 -46.5,0 0,-90 v 0" />
            <!-- 流动 -->
            <path
              inkscape:connector-curvature="0"
              id="path174"
              style="fill:none;stroke:#f15a24;stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 279.84799,207.47446 0,70 -530,0 v 0" />
            <path
              inkscape:connector-curvature="0"
              id="path178"
              style="fill:none;stroke:#f15a24;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 295.10116,161.21905 c -10.05099,3.81847 -20.10235,3.81847 -30.15369,0 -2.60455,-0.98954 -5.28425,1.24672 -4.73781,3.97898 l 4.62386,23.12035 c 1.44851,7.24076 7.80627,12.45341 15.19097,12.45341 7.38434,0 13.74246,-5.21265 15.1906,-12.45341 l 4.62423,-23.12035 c 0.5461,-2.73226 -2.13325,-4.96852 -4.73816,-3.97898 z" />
            <path
              inkscape:connector-curvature="0"
              id="path182"
              style="fill:none;stroke:#f15a24;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 286.27101,199.29993 c -4.25344,1.51588 -8.50688,1.51588 -12.76067,0 l 2.55236,8.52734 h 7.65633 z" />
            <path
              inkscape:connector-curvature="0"
              id="path186"
              style="fill:none;stroke:#f15a24;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 275.61465,191.42307 h 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path190"
              style="fill:none;stroke:#f15a24;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 275.61465,188.24807 h 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path194"
              style="fill:none;stroke:#f15a24;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 275.61465,185.07307 h 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#f15a24;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 284.08132,173.43141 h -8.46667 v 5.64444 h 8.46667 z" />
            <path
              inkscape:connector-curvature="0"
              id="path200"
              style="fill:none;stroke:#f15a24;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 205.96688,72.365056 c -3.81813,10.051344 -3.81813,20.102335 0,30.153679 0.98988,2.604559 -1.24672,5.28426 -3.97862,4.737808 L 178.867899,102.632329 c -7.24147,-1.448152 -12.45341,-7.805912 -12.45341,-15.19061 0,-7.384344 5.21194,-13.742457 12.45341,-15.19061 l 23.120361,-4.624211 c 2.7319,-0.5461 4.9685,2.1336 3.97862,4.738158 z" />
            <path
              inkscape:connector-curvature="0"
              id="path204"
              style="fill:none;stroke:#f15a24;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 167.886169,81.195014 c -1.51588,4.253794 -1.51588,8.507236 0,12.760677 l -8.52734,-2.552347 v -7.656336 z" />
            <path
              inkscape:connector-curvature="0"
              id="path208"
              style="fill:none;stroke:#f15a24;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 175.763069,91.851547 V 83.38488" />
            <path
              inkscape:connector-curvature="0"
              id="path212"
              style="fill:none;stroke:#f15a24;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 178.938069,91.851547 V 83.38488" />
            <path
              inkscape:connector-curvature="0"
              id="path216"
              style="fill:none;stroke:#f15a24;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 182.11307,91.851547 V 83.38488" />
            <path
              inkscape:connector-curvature="0"
              id="path218"
              style="fill:none;stroke:#f15a24;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 193.75469,91.851552 h -5.64445 v -8.466667 h 5.64445 z" />
            <path
              inkscape:connector-curvature="0"
              id="path174"
              style="fill:none;stroke:url(#data-start-line);stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 114.3,0 0,87.695014 46.5,0 v 0" />
          </g> 
          <!-- 手机端 -->
          <g
            v-if="$store.state.isPhone"
            inkscape:label="Layer 1"
            inkscape:groupmode="layer"
            id="layer1">
            <!-- 底线 -->
            <path
              inkscape:connector-curvature="0"
              id="path174"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 70.65248,133.42281 -0.17639,75.43264 H 0" />
            <path
              inkscape:connector-curvature="0"
              id="path178"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 63.025879,109.49502 c 5.025673,1.90923 10.051351,1.90923 15.076671,0 1.30245,-0.4946 2.6423,0.62371 2.36925,1.98966 l -2.3121,11.56018 c -0.72425,3.6202 -3.90314,6.22652 -7.59531,6.22652 -3.692527,0 -6.871406,-2.60632 -7.595661,-6.22652 l -2.311752,-11.56018 c -0.273402,-1.36595 1.066448,-2.48426 2.368902,-1.98966 z" />
            <path
              inkscape:connector-curvature="0"
              id="path464"
              style="opacity:0.5;fill:#bdccd4;fill-opacity:1;"
              d="m 66.7,128.93556 1.18321,3.95358 c 0.0893,0.298803 0.36442,0.503414 0.67628,0.503414 h 3.82799 c 0.31186,0 0.58632,-0.204611 0.67592,-0.503414 l 1.15782,-3.868914 c -0.44238,0.229306 -1.00965,0.424392 -1.65206,0.598664 l -0.70696,2.362553 h -2.77742 l -0.71932,-2.403122 c -0.59196,-0.156281 -1.14265,-0.377473 -1.66546,-0.642761" />
            <!-- <path
              inkscape:connector-curvature="0"
              id="path182"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 67.440963,148.53556 c 2.126546,0.75777 4.253447,0.75777 6.380347,0 l -1.276,4.26367 h -3.828349 z" /> -->
            <path
              inkscape:connector-curvature="0"
              id="path186"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 72.76915,124.59711 H 68.535809" />
            <path
              inkscape:connector-curvature="0"
              id="path190"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 72.76915,123.00961 H 68.535809" />
            <path
              inkscape:connector-curvature="0"
              id="path194"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 72.76915,121.42212 H 68.535809" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 68.535809,115.60127 h 4.233341 v 2.82222 h -4.233341 z" />
            <path
              inkscape:connector-curvature="0"
              id="path200"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 109.59286,63.068086 c 1.90923,5.025672 1.90923,10.051345 0,15.076664 -0.49459,1.30246 0.62371,2.64231 1.98967,2.36925 l 11.56017,-2.3121 c 3.62056,-0.724253 6.22688,-3.903133 6.22688,-7.595305 0,-3.692526 -2.60632,-6.871406 -6.22688,-7.595659 l -11.56017,-2.311753 c -1.36596,-0.273402 -2.48426,1.066448 -1.98967,2.368903 z" />
            <path
              inkscape:connector-curvature="0"
              id="path90"
              style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
              d="m 128.90467,74.48163 3.95358,-1.18322 c 0.2988,-0.0893 0.50341,-0.36442 0.50341,-0.67628 v -3.82799 c 0,-0.31185 -0.20461,-0.58667 -0.50341,-0.67592 l -3.86856,-1.15782 c 0.2293,0.44239 0.42439,1.00965 0.59831,1.65206 l 2.36255,0.70697 v 2.77742 l -2.40277,0.71931 c -0.15628,0.59196 -0.37747,1.14265 -0.64311,1.66547" />
            <!-- <path
              inkscape:connector-curvature="0"
              id="path204"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 128.63319,87.48317 c 0.75812,2.126544 0.75812,4.253441 0,6.380339 l 4.26403,-1.275998 v -3.828344 z" /> -->
            <path
              inkscape:connector-curvature="0"
              id="path208"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 124.69514,72.811349 V 68.578016" />
            <path
              inkscape:connector-curvature="0"
              id="path212"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 123.10764,72.811349 V 68.578016" />
            <path
              inkscape:connector-curvature="0"
              id="path216"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 121.52014,72.811349 V 68.578016" />
            <path
              inkscape:connector-curvature="0"
              id="path218"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 115.69913,72.811339 h 2.82222 v -4.233333 h -2.82222 z" />
            <path
              inkscape:connector-curvature="0"
              id="path1107"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 132.82774,70.62067 H 214.03567" />
            <!-- 流动 -->
            <path
              inkscape:connector-curvature="0"
              id="path174"
              style="fill:none;stroke:#f15a24;stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 70.65248,132.62281 -0.17639,76.23264 H 0" />
            <path
              inkscape:connector-curvature="0"
              id="path178"
              style="fill:none;stroke:#f15a24;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 63.025879,109.49502 c 5.025673,1.90923 10.051351,1.90923 15.076671,0 1.30245,-0.4946 2.6423,0.62371 2.36925,1.98966 l -2.3121,11.56018 c -0.72425,3.6202 -3.90314,6.22652 -7.59531,6.22652 -3.692527,0 -6.871406,-2.60632 -7.595661,-6.22652 l -2.311752,-11.56018 c -0.273402,-1.36595 1.066448,-2.48426 2.368902,-1.98966 z" />
            <path
              inkscape:connector-curvature="0"
              id="path182"
              style="fill:none;stroke:#f15a24;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 67.440963,128.53556 c 2.126546,0.75777 4.253447,0.75777 6.380347,0 l -1.276,4.26367 h -3.828349 z" />
            <path
              inkscape:connector-curvature="0"
              id="path186"
              style="fill:none;stroke:#f15a24;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 72.76915,124.59711 H 68.535809" />
            <path
              inkscape:connector-curvature="0"
              id="path190"
              style="fill:none;stroke:#f15a24;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 72.76915,123.00961 H 68.535809" />
            <path
              inkscape:connector-curvature="0"
              id="path194"
              style="fill:none;stroke:#f15a24;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 72.76915,121.42212 H 68.535809" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#f15a24;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 68.535809,115.60127 h 4.233341 v 2.82222 h -4.233341 z" />
            <path
              inkscape:connector-curvature="0"
              id="path200"
              style="fill:none;stroke:#f15a24;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 109.59286,63.068086 c 1.90923,5.025672 1.90923,10.051345 0,15.076664 -0.49459,1.30246 0.62371,2.64231 1.98967,2.36925 l 11.56017,-2.3121 c 3.62056,-0.724253 6.22688,-3.903133 6.22688,-7.595305 0,-3.692526 -2.60632,-6.871406 -6.22688,-7.595659 l -11.56017,-2.311753 c -1.36596,-0.273402 -2.48426,1.066448 -1.98967,2.368903 z" />
            <path
              inkscape:connector-curvature="0"
              id="path204"
              style="fill:none;stroke:#f15a24;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 128.63319,67.48317 c 0.75812,2.126544 0.75812,4.253441 0,6.380339 l 4.26403,-1.275998 v -3.828344 z" />
            <path
              inkscape:connector-curvature="0"
              id="path208"
              style="fill:none;stroke:#f15a24;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 124.69514,72.811349 V 68.578016" />
            <path
              inkscape:connector-curvature="0"
              id="path212"
              style="fill:none;stroke:#f15a24;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 123.10764,72.811349 V 68.578016" />
            <path
              inkscape:connector-curvature="0"
              id="path216"
              style="fill:none;stroke:#f15a24;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 121.52014,72.811349 V 68.578016" />
            <path
              inkscape:connector-curvature="0"
              id="path218"
              style="fill:none;stroke:#f15a24;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 115.69913,72.811339 h 2.82222 v -4.233333 h -2.82222 z" />
            <path
              inkscape:connector-curvature="0"
              id="path1107"
              style="fill:none;stroke:url(#data-start-line-phone);stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 214.03567,70.62067 H 132.82774" />
          </g>
        </svg>
      </section>
      <section class="data-intro-container">
        <div class="data-word-bg"></div>
        <div class="data-intro">
          <span class="major-name">数据挖掘</span>
          <span class="major-intro" v-if="!$store.state.isPhone">
            数据挖掘组，研究方向为大数据的存储、获取与运算以及机器学习的算法，是与当下流行的人工智能最相关的组。小组以机器学习的基本理论，使用数据分析库进行数据科学的研究和实践，利用Linux下的Hadoop、Spark等框架进行大数据的存储和运算。如果你是一个不仅喜欢编程，对数据的力量充满好奇，想要了解数据科学的话，请带上你的热情，来我们数据挖掘组报名吧！
          </span>
          <span class="major-intro" v-if="$store.state.isPhone">
            数据挖掘组，研究方向为大数据的存储、获取与运算以及机器学习的算法，是与当下流行的人工智能最相关的组。小组以机器学习的基本理论，使用数据分析库进行数据科学的研究和实践，利用Linux下的Hadoop、Spark等框架进行大数据的存储和运算。如果你是一个不仅喜欢编程，对数据的力量充满好奇，想要了解数据科学的话，请带上你的热情，来我们数据挖掘组报名吧！
          </span>
          <div class="turn-page">
            <img v-lazy="arrow" alt="">
            <span>向下滚动了解更多</span>
          </div>
        </div>
        <div class="data-come">
          <span class="major-intro">未来已来，你还不来？</span>
          </div>
      </section>
    </div>
</template>

<script>
import pathUtil from '../../../utils/pathAnimate.js';
export default {
  data() {
    return {
      bulb: 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/data_bulb.png',
      arrow: 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/data_arrow.png'
    }
  },
  mounted() {
    this.$store.state.loadedCount++;
  },
  watch: {
    '$store.state.data': {
      handler(newValue, oldValue) {
        this.pathAnimate(newValue, oldValue)
      },
      deep: true
    },
    '$store.state.pages': (pages) => {
      if (pages < 4 || pages > 5.5) {
        return;
      }
      let pathList = $('#data-svg path');
      if (pathList.length <= 14) {
        // 出现一个问题
        return;
      }
      pathUtil.correctEndPath(pathList[27], pathList.slice(21, 27), pages, 4.5, 0.3);
      pathUtil.correctStartPath(pathList[14], pathList.slice(15, 21), pages, 5, 0.1);
    }
  },
  methods: {
    pathAnimate(newValue, oldValue) {
      let insidePercent;
      let height = $(window).height();
      let percent = ($(window).scrollTop() % height) / height;   // 计算翻页时候翻过当前页面的百分之几
      let pathList = $('#data-svg path');
      if (percent >= 0.5 && percent <= 1) {
        insidePercent = pathUtil.getEndInsidePer(percent, 0.8);
        if (percent < 0.8) {
          // 这条线需要动画是反过来的，这是设计师画的方向总是从灯座发起的
          pathUtil.lineAnimate(pathList[27], insidePercent);
        } else {
          pathUtil.socketAnimate(pathList.slice(21, 27), insidePercent, false);
        }
      } else {
        insidePercent = pathUtil.getStartInsidePer(percent, 0.1);
        if (percent < 0.1) {
          pathUtil.socketAnimate(pathList.slice(15, 21), insidePercent);
        } else {
          pathUtil.lineAnimate(pathList[14], insidePercent);
        }
      }
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 740px) {
  .data-come {
    position: absolute;
    z-index: 88;
    right: 2.5rem;
    top: 7.4rem;
    width: 5rem;
    height: 2rem;
  }
  #data-svg {
    position: absolute;
    top: 0;
  }
  .data-bg-bulb {
    right: 2.38rem;
    top: 0.95rem;
  }
  .data-bulb-layer {
    position: absolute;
    z-index: 2;
    height: 100%;
    top: 0.12rem;
    right: 1.77rem;
    width: 3.59rem;
    height: 9.70rem;  
  }
  .left-layer {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 4.52rem;
    right: 0;
    top: 0;
    background: center left no-repeat;
    background-size: cover;
  }
  .data-bulb {
    position: absolute;
    z-index: 7;
    top: 0rem;
    right: 1.45rem;
    width: 5.5rem;
    height: 5.5rem;
  }
  .data-svg-container {
    position: absolute;
    z-index: 7;
    top: 0;
    width: 100%;
    height: 47.8vw;
  }
  .data-intro-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .data-intro {
    position: absolute;
    z-index: 2;
    border-left: 0.09rem solid #f29979;
    padding-left: 0.48rem;
    width: 7.5rem;
    top: 2.3rem;
    left: 3.11rem;
  }
  .data-intro::after {
    content: "";
    display: block;
    clear: both;
  }
  .major-name {
    position: absolute;
    color: #e64e17;
    font-size: 0.72rem;
    left: 0.16rem;
    top: -0.64rem;
  }
  .major-intro {
    display: block;
    margin-top: 0.48rem;
    font-size: 0.32rem;
    color: #4a4a4a;
  }
  .data-word-bg {
    position: absolute;
    z-index: 1;
    background-color: rgba(240, 90, 36, .3);
    top: 3.1rem;
    left: 4rem;
    width: 6.7rem;
    height: 4rem;
  }
}
@media only screen and (max-width: 740px) {
  .left-layer {
    position: absolute;
    width: 4.35rem;
    height: 100%;
    z-index: 1;
    bottom: 0;
    left: 0;
    background: center right no-repeat;
    background-size: cover;
  }
  .data-bulb-layer {
    display: block;
    position: absolute;
    z-index: 2;
    width: 4.24rem;
    height: 10.06rem;
    top: 2.3rem;
    left: 0rem;
  }
  #data-svg {
    position: absolute;
    top: 0;
    left: 0;
  }
  section {
    z-index: 5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .data-bg-bulb {
    top: 2.9rem;
    left: 1.81rem;
  }
  .data-bulb {
    position: absolute;
    width: 5.5rem;
    height: 5.5rem;
    top: 1.95rem;
    left: 0.9rem;
  }
  .data.intro-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .data-intro {
    position: absolute;
    z-index: 2;
    border-left: 0.09rem solid #f29979;
    padding-left: 0.48rem;
    width: 5.2rem;
    right: 0.71rem;
    top: 7.2rem;
  }
  .data-intro::after {
    content: "";
    display: block;
    clear: both;
  }
  .major-name {
    position: absolute;
    color: #f29979;
    font-size: 0.72rem;
    left: 0.16rem;
    top: -0.64rem;
  }
  .major-intro {
    display: block;
    margin-top: 0.48rem;
    font-size: 0.36rem;
    color: #4a4a4a;
  }
}
.container {
  background: center center no-repeat;
  background-size: cover;
}
</style>