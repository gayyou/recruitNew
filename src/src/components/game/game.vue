<template>
    <div class="page container"
      v-lazy:background-image="$store.state.isPhone ? 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/phonebg/game_phone_bg.jpg' : 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/game_background.jpg'"
    >
      <img class="game-bulb-layer" v-lazy="$store.state.isPhone ? 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/phonebg/game_bulb_layer.png' : 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/game_bulb_layer.png'">
      <div class="left-layer"
        v-lazy:background-image="$store.state.isPhone ? 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/phonebg/game_layer.png' : 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/game_right_layer.png'"
      ></div>
      <section class="game-svg-container">
        <img class="game-bg-bulb bg-bulb" v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/game_bg_bulb.png'" alt="">
        <img class="game-bulb bulb" :class="$store.state.pages >= 5.9 ? 'fade-in' : 'fade-out'" v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/game_bulb.png'" alt="">
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
            <!-- 底线 -->
            <path
              inkscape:connector-curvature="0"
              id="path180"
              style="fill:none;stroke:#c8c2cc;stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 101.58679,23.99976 101.58679,9 -210,9 V 9" />
            <path
              inkscape:connector-curvature="0"
              id="path184"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 116.58679,69.99976 c -10.051,-3.81847 -20.10234,-3.81847 -30.15369,0 -2.60455,0.98954 -5.28425,-1.24672 -4.7378,-3.97898 l 4.62421,-23.120351 c 1.44815,-7.241117 7.80591,-12.453408 15.19061,-12.453408 7.38434,0 13.74246,5.212291 15.19061,12.453408 l 4.62421,23.120351 c 0.5461,2.73226 -2.13324,4.96852 -4.73815,3.97898 z" />
            <path
              inkscape:connector-curvature="0"
              id="path56"
              style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
              d="m 108.20891,30.541529 -2.25178,-7.524397 c -0.14641,-0.488245 -0.59549,-0.822678 -1.10526,-0.822678 h -7.65633 c -0.50977,0 -0.95921,0.334433 -1.10526,0.822678 l -2.29658,7.673975 c 0.65193,-0.331964 1.55752,-0.682978 2.72098,-1.044928 l 1.53987,-5.144558 h 5.93866 l 1.51554,5.063772 c 0.9271,0.225072 1.82597,0.554566 2.70016,0.976136" />
            <!-- <path
              inkscape:connector-curvature="0"
              id="path188"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 107.75665,31.919056 c -4.25344,-1.515885 -8.50688,-1.515885 -12.76068,0 l 2.55235,-8.527343 h 7.65633 z" /> -->
            <path
              inkscape:connector-curvature="0"
              id="path192"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 97.10029,39.795737 h 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 97.10029,42.970737 h 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path200"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 97.10029,46.145737 h 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path202"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 105.56696,57.787409 h -8.46667 v -5.644444 h 8.46667 z" />
            <path
              inkscape:connector-curvature="0"
              id="path206"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 116.23401,209.48171 c -10.051,3.8181 -20.10234,3.8181 -30.15369,0 -2.60455,-0.9899 -5.28425,1.24672 -4.7378,3.97862 l 4.62421,23.12035 c 1.44815,7.24146 7.80592,12.45341 15.19061,12.45341 7.38434,0 13.74246,-5.21195 15.19061,-12.45341 l 4.62421,-23.12035 c 0.5461,-2.7319 -2.13324,-4.96852 -4.73815,-3.97862 z" />
            <path
              inkscape:connector-curvature="0"
              id="path56"
              style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
              d="m 93.990017,248.89173 2.25178,7.52404 c 0.146403,0.4886 0.595489,0.82303 1.105253,0.82303 h 7.65634 c 0.50976,0 0.9592,-0.33443 1.10525,-0.82303 l 2.29658,-7.67362 c -0.65193,0.33196 -1.55751,0.68298 -2.72097,1.04457 l -1.53988,5.14492 h -5.938306 l -1.515534,-5.06378 c -0.927452,-0.22507 -1.82633,-0.55492 -2.700513,-0.97613" />
            <!-- <path
              inkscape:connector-curvature="0"
              id="path210"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 107.40387,247.56243 c -4.25344,1.51587 -8.50688,1.51587 -12.76068,0 l 2.55235,8.52733 h 7.65634 z" /> -->
            <path
              inkscape:connector-curvature="0"
              id="path214"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 96.74751,239.68554 h 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path218"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 96.74751,236.51054 h 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path222"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 96.74751,233.33554 h 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path224"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 105.21418,221.6939 h -8.46667 v 5.64444 h 8.46667 z" />
            <path
              inkscape:connector-curvature="0"
              id="path228"
              style="fill:none;stroke:#c8c2cc;stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 100.80446,257.08322 100.80446,300 V 300" />
            <!-- 流动 -->
            <path
              inkscape:connector-curvature="0"
              id="path180"
              style="fill:none;stroke:url(#game-start-line);stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M -210,9 101.58679,9 101.58679,23.99976" />
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
              d="M 100.80446,256.48322 100.80446,280 V 300" />
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
              id="path180"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -1,80.819052 h 77.40833 l -0.0882,13.052777" />
            <path
              inkscape:connector-curvature="0"
              id="path184"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 83.968959,117.17601 c -5.02567,-1.90924 -10.05134,-1.90924 -15.07666,0 -1.30246,0.49459 -2.64231,-0.62371 -2.36926,-1.98967 l 2.31211,-11.560166 c 0.72425,-3.620209 3.90313,-6.226531 7.5953,-6.226531 3.69253,0 6.87141,2.606322 7.59566,6.226531 l 2.31176,11.560166 c 0.2734,1.36596 -1.06645,2.48426 -2.36891,1.98967 z" />
            <path
              inkscape:connector-curvature="0"
              id="path56"
              style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
              d="m 80,97.7 -1.18322,-3.95359 c -0.0892,-0.2988 -0.36442,-0.50341 -0.67627,-0.50341 h -3.82799 c -0.31186,0 -0.58632,0.20461 -0.67593,0.50341 l -1.15781,3.86857 c 0.44238,-0.22895 1.00965,-0.4244 1.6517,-0.59832 l 0.70732,-2.36255 h 2.77742 l 0.71932,2.40277 c 0.59196,0.15628 1.14264,0.37783 1.66546,0.64312" />
            <!-- <path
              inkscape:connector-curvature="0"
              id="path188"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 79.553879,98.135468 c -2.12655,-0.757767 -4.25345,-0.757767 -6.38034,0 l 1.27599,-4.263672 h 3.82835 z" /> -->
            <path
              inkscape:connector-curvature="0"
              id="path192"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 74.225699,102.073914 h 4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 74.225699,103.661414 h 4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path200"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 74.225699,105.248914 h 4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path202"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 78.459029,111.06974 h -4.23333 v -2.822216 h 4.23333 z" />
            <path
              inkscape:connector-curvature="0"
              id="path206"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 83.792569,195.91672 c -5.02567,1.90924 -10.05134,1.90924 -15.07666,0 -1.30246,-0.49459 -2.64231,0.62372 -2.36926,1.98967 l 2.31211,11.56018 c 0.72425,3.62055 3.90313,6.22688 7.5953,6.22688 3.69253,0 6.87141,-2.60633 7.59566,-6.22688 l 2.31176,-11.56018 c 0.2734,-1.36595 -1.06645,-2.48426 -2.36891,-1.98967 z" />
            <path
              inkscape:connector-curvature="0"
              id="path464"
              style="opacity:0.5;fill:#bdccd4;fill-opacity:1;"
              d="m 72.53953,215.5 1.18321,3.95358 c 0.0893,0.298803 0.36442,0.503414 0.67628,0.503414 h 3.82799 c 0.31186,0 0.58632,-0.204611 0.67592,-0.503414 l 1.15782,-3.868914 c -0.44238,0.229306 -1.00965,0.424392 -1.65206,0.598664 l -0.70696,2.362553 h -2.77742 l -0.71932,-2.403122 c -0.59196,-0.156281 -1.14265,-0.377473 -1.66546,-0.642761" />
            <!-- <path
              inkscape:connector-curvature="0"
              id="path210"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 79.377489,214.95706 c -2.12654,0.75812 -4.25344,0.75812 -6.38034,0 l 1.276,4.26402 h 3.82834 z" /> -->
            <path
              inkscape:connector-curvature="0"
              id="path214"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 74.049309,211.019 h 4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path218"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 74.049309,209.4315 h 4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path222"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 74.049309,207.844 h 4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path224"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 78.282639,202.02299 h -4.23333 v 2.82222 h 4.23333 z" />
            <path
              inkscape:connector-curvature="0"
              id="path228"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 76.077779,219.34544 v 13.99027 H 210.375" />
            <!-- 流动 -->
            <path
              inkscape:connector-curvature="0"
              id="path180"
              style="fill:none;stroke:url(#game-start-line);stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
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
              d="m 76.077779,219.34544 v 13.99027 H 210.375" />
          </g>
        </svg>
      </section>
      <section class="game-intro-container">
        <div class="game-word-bg game-bg-one"></div>
        <div class="game-word-bg game-bg-two"></div>
        <div class="game-intro game-intro-one">
          <span class="major-name">手游</span>
          <span class="major-intro" v-if="!$store.state.isPhone">
            手游组的研究方向为计算机图形学与数字媒体技术。小组以DirectX 11作为学习 方向，使用Direct3D 11开发游戏及其他智能图形程序。
          </span>
          <div class="turn-page" v-if="!$store.state.isPhone">
            <img v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/game_arrow.png'" alt="">
            <span>向下滚动了解更多</span>
          </div>
          <span class="major-intro" v-if="$store.state.isPhone">
            手游组的研究方向为计算机图形学与数字媒体技术。小组以DirectX 11作为学习方向，使用Direct3D 11开发游戏及其他智能图形程序。
          </span>
        </div>
        <div class="game-intro game-intro-two">
          <span v-if="!$store.state.isPhone" class="major-intro">
            除此之外，小组使用Unity3D游戏引擎开发多平台游戏以及体感应用。游戏制作涉及数据 库开发、网络编程，以及GPU编程等等。来吧，加入我们，来手游组开发属于你自己的游戏，甚至游戏引擎！
          </span>
          <span v-if="$store.state.isPhone" class="major-intro">
            除此之外，小组使用Unity3D游戏引擎开发多平台游戏以及体感应用。游戏制作涉及数据库开发、网络编程，以及GPU编程等等。
          </span>
        </div>
        <div v-if="$store.state.isPhone" class="game-intro game-intro-three">
          <span class="major-intro">
            来吧，加入我们，来手游组开发属于你自己的游戏，甚至游戏引擎！
          </span>
          <div class="turn-page">
            <img v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/game_arrow.png'" alt="">
            <span>向下滚动了解更多</span>
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
    '$store.state.game': {
      handler(newValue, oldValue) {
        this.pathAnimate(newValue, oldValue)
      },
      deep: true
    },
    '$store.state.pages': (pages) => {
      if (pages < 5 || pages > 6.5) {
        return;
      }
      let pathList = $('#game-svg path');
      if (pathList.length <= 14) {
        // 出现一个问题
        return;
      }
      pathUtil.correctEndPath(pathList[14], pathList.slice(15, 21), pages, 5.5, 0.4);
      pathUtil.correctStartPath(pathList[27], pathList.slice(21, 27), pages, 6, 0.2);
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
          pathUtil.lineAnimate(pathList[14], insidePercent, false);
        } else {
          pathUtil.socketAnimate(pathList.slice(15, 21), insidePercent, false);
        }
      } else {
        insidePercent = pathUtil.getStartInsidePer(percent, 0.2);
        if (percent < 0.2) {
          pathUtil.socketAnimate(pathList.slice(21, 27), insidePercent);
        } else {
          pathUtil.lineAnimate(pathList[27], insidePercent);
        }
      }
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 740px) {
  .game-bg-bulb {
    left: 7.68rem;
    bottom: 3.05rem;
  }
  .game-bulb-layer {
    position: absolute;
    z-index: 2;
    height: 100%;
    bottom: 0.09rem;
    right: 7.36rem;
    width: 3.31rem;
    height: 8.44rem;  
  }
  .left-layer {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 9.55rem;
    right: 0;
    top: 0;
    background: center left no-repeat;
    background-size: cover;
  }
  .game-word-bg {
    position: absolute;
    background-color: rgba(189, 156, 109, .3);
  }
  .game-bg-one {
    left: 3rem;
    bottom: 2.5rem;
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
    background: center center no-repeat;
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
    z-index: 5;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 47.8vw;
  }
  .game-intro {
    position: absolute;
    width: 3.8rem;
    bottom: 2.8rem;
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
    z-index: 5;
    border-left: 0.09rem solid #c4ab8b;
    padding-left: 0.48rem;
    left: 2.11rem;
    bottom: 2.3rem;
  }
  .game-intro-one>.major-intro {
    color: #4a4a4a;
  }
  .game-intro-two {
    z-index: 5;
    right: 2.3rem;
    bottom: 2.25rem;
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
  .left-layer {
    position: absolute;
    width: 100%;
    height: 8.3rem;
    z-index: 1;
    top: 5.48rem;
    left: 0;
    background: bottom right no-repeat;
    background-size: cover;
  }
  .game-bulb-layer {
    display: block;
    position: absolute;
    z-index: 2;
    width: 4.79rem;
    height: 7.51rem;
    top: 5.45rem;
    left: 1.58rem;
  }
  #game-svg {
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
  .game-bg-bulb {
    left: 2.16rem;
    top: 7.4rem;
  }
  .game-bulb {
    position: absolute;
    width: 5.5rem;
    height: 5.5rem;
    left: 1.25rem;
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
    color: #4a4a4a;
  }
  .game-intro-two>.major-intro,
  .game-intro-three>.major-intro {
    margin: 0.24rem 0;
  }
  .game-intro-three>.major-intro {
    color: #4a4a4a;
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
    top: 6.5rem;
    right: 0.86rem;
    width: 2.8rem;
  }
  .game-intro-three {
    top: 13.5rem;
    left: 1.39rem;
    width: 7.8rem;
  }
}
.container {
  background: center center no-repeat;
  background-size: cover;
}
</style>