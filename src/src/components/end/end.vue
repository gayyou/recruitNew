<template>
    <div class="page container"
      v-lazy:background-image="$store.state.isPhone ? 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/phonebg/end_phone_bg.jpg' : 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/end_background.jpg'"
    >
      <img class="end-bulb-layer" 
        v-lazy="$store.state.isPhone ? 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/phonebg/end_bulb_layer.png' : 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/end_bulb-layer.png'"
      >
      <div class="left-layer"
        v-lazy:background-image="$store.state.isPhone ? 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/phonebg/end_bottom_layer.png' : 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/end_left_layer.png'"
      ></div>
      <section class="end-svg-container">
        <img class="end-bg-bulb bg-bulb" v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/end_bg_bulb.png'" alt="">
        <img class="end-bulb bulb" :class="$store.state.pages >= 1.9 ? 'fade-in' : 'fade-out'" v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/end_bulb.png'">
        <svg
          id="end-svg"
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
          inkscape:version="0.92.3 (2405546, 2018-03-11)"
          sodipodi:docname="后台3.svg">
          <defs
            id="defs884">
            <linearGradient
              id="linearGradient178"
              spreadMethod="pad"
              gradientTransform="matrix(358.06943,0,0,-358.06943,44.891588,-305.98233)"
              gradientUnits="userSpaceOnUse"
              y2="0"
              x2="1"
              y1="0"
              x1="0">
              <stop
                id="stop174"
                offset="0"
                style="stop-opacity:1;stop-color:#298ce2" />
              <stop
                id="stop176"
                offset="1"
                style="stop-opacity:1;stop-color:#ff3333" />
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
            id="metadata887">
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
              d="m 417.334784,12.261216 -472.248592,0 0,23.190382" />
            <path 
              inkscape:connector-curvature="0"
              id="path184"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -70.637038,80.798571 c 10.05134,-3.81847 20.10234,-3.81847 30.15368,0 2.60456,0.98954 5.28426,-1.24672 4.7378,-3.97898 l -4.62421,-23.120352 c -1.44815,-7.241117 -7.80591,-12.453409 -15.19061,-12.453409 -7.38434,0 -13.74245,5.212292 -15.19061,12.453409 l -4.62421,23.120352 c -0.5461,2.73226 2.1336,4.96852 4.73816,3.97898 z" />
            <path
              inkscape:connector-curvature="0"
              id="path56"
              style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
              d="m -48.00891,41.241529 -2.25178,-7.524397 c -0.14641,-0.488245 -0.59549,-0.822678 -1.10526,-0.822678 h -7.65633 c -0.50977,0 -0.95921,0.334433 -1.10526,0.822678 l -2.29658,7.673975 c 0.65193,-0.331964 1.55752,-0.682978 2.72098,-1.044928 l 1.53987,-5.144558 h 5.93866 l 1.51554,5.063772 c 0.9271,0.225072 1.82597,0.554566 2.70016,0.976136" />
            <!-- <path
              inkscape:connector-curvature="0"
              id="path188"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -61.466998,42.717869 c 4.25379,-1.515888 8.50723,-1.515888 12.76067,0 l -2.55234,-8.527347 h -7.65634 z" /> -->
            <path
              inkscape:connector-curvature="0"
              id="path192"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -51.123528,50.594549 h -8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -51.123528,53.769549 h -8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path200"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -51.123528,56.944549 h -8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path202"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -59.656858,68.586211 h 8.46667 v -5.644444 h -8.46667 z" />
            <path
              inkscape:connector-curvature="0"
              id="path206"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -70.637038,221.83886 c 10.05134,3.8181 20.10234,3.8181 30.15368,0 2.60456,-0.9899 5.28426,1.24672 4.7378,3.97862 l -4.62421,23.12035 c -1.44815,7.24146 -7.80591,12.45341 -15.19061,12.45341 -7.38434,0 -13.74245,-5.21195 -15.19061,-12.45341 l -4.62421,-23.12035 c -0.5461,-2.7319 2.1336,-4.96852 4.73816,-3.97862 z" />
            <path
              inkscape:connector-curvature="0"
              id="path56"
              style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
              d="m -62.490017,261.09173 2.25178,7.52404 c 0.146403,0.4886 0.595489,0.82303 1.105253,0.82303 h 7.65634 c 0.50976,0 0.9592,-0.33443 1.10525,-0.82303 l 2.29658,-7.67362 c -0.65193,0.33196 -1.55751,0.68298 -2.72097,1.04457 l -1.53988,5.14492 h -5.938306 l -1.515534,-5.06378 c -0.927452,-0.22507 -1.82633,-0.55492 -2.700513,-0.97613" />
            <!-- <path
              inkscape:connector-curvature="0"
              id="path210"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -61.466998,260.91955 c 4.25379,1.5159 8.50723,1.5159 12.76067,0 l -2.55234,8.52736 h -7.65634 z" /> -->
            <path
              inkscape:connector-curvature="0"
              id="path214"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -51.123528,253.04266 h -8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path218"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -51.123528,249.86766 h -8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path222"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -51.123528,246.69266 h -8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path224"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -59.656858,235.05102 h 8.46667 v 5.64447 h -8.46667 z" />
            <path
              inkscape:connector-curvature="0"
              id="path228"
              style="fill:none;stroke:#c8c2cc;stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -54.913808,269.39594 0,15 -150,0 v 0" />
            <!-- 流动 -->
            <path
              inkscape:connector-curvature="0"
              id="path180"
              style="fill:none;stroke:url(#linearGradient178);stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 417.334784,12.261216 -472.248592,0 0,23.190382" />
            <path
              inkscape:connector-curvature="0"
              id="path184"
              style="fill:none;stroke:#298ce2;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -70.637038,80.798571 c 10.05134,-3.81847 20.10234,-3.81847 30.15368,0 2.60456,0.98954 5.28426,-1.24672 4.7378,-3.97898 l -4.62421,-23.120352 c -1.44815,-7.241117 -7.80591,-12.453409 -15.19061,-12.453409 -7.38434,0 -13.74245,5.212292 -15.19061,12.453409 l -4.62421,23.120352 c -0.5461,2.73226 2.1336,4.96852 4.73816,3.97898 z" />
            <path
              inkscape:connector-curvature="0"
              id="path188"
              style="fill:none;stroke:#298ce2;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -61.466998,42.717869 c 4.25379,-1.515888 8.50723,-1.515888 12.76067,0 l -2.55234,-8.527347 h -7.65634 z" />
            <path
              inkscape:connector-curvature="0"
              id="path192"
              style="fill:none;stroke:#298ce2;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -51.123528,50.594549 h -8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#298ce2;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -51.123528,53.769549 h -8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path200"
              style="fill:none;stroke:#298ce2;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -51.123528,56.944549 h -8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path202"
              style="fill:none;stroke:#298ce2;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -59.656858,68.586211 h 8.46667 v -5.644444 h -8.46667 z" />
            <path
              inkscape:connector-curvature="0"
              id="path206"
              style="fill:none;stroke:#298ce2;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -70.637038,221.83886 c 10.05134,3.8181 20.10234,3.8181 30.15368,0 2.60456,-0.9899 5.28426,1.24672 4.7378,3.97862 l -4.62421,23.12035 c -1.44815,7.24146 -7.80591,12.45341 -15.19061,12.45341 -7.38434,0 -13.74245,-5.21195 -15.19061,-12.45341 l -4.62421,-23.12035 c -0.5461,-2.7319 2.1336,-4.96852 4.73816,-3.97862 z" />
            <path
              inkscape:connector-curvature="0"
              id="path210"
              style="fill:none;stroke:#298ce2;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -61.466998,260.91955 c 4.25379,1.5159 8.50723,1.5159 12.76067,0 l -2.55234,8.52736 h -7.65634 z" />
            <path
              inkscape:connector-curvature="0"
              id="path214"
              style="fill:none;stroke:#298ce2;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -51.123528,253.04266 h -8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path218"
              style="fill:none;stroke:#298ce2;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -51.123528,249.86766 h -8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path222"
              style="fill:none;stroke:#298ce2;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -51.123528,246.69266 h -8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path224"
              style="fill:none;stroke:#298ce2;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -59.656858,235.05102 h 8.46667 v 5.64447 h -8.46667 z" />
            <path
              inkscape:connector-curvature="0"
              id="path228"
              style="fill:none;stroke:#298ce2;stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -54.913808,269.39594 0,15 -180,0 v 0" />
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
              d="m 105.903218,167.49916 0.08819,-12.964583 106.131952,0.08819" />
            <path
              inkscape:connector-curvature="0"
              id="path184"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 98.364675,190.803165 c 5.025672,-1.908879 10.051344,-1.908879 15.077016,0 1.302456,0.494593 2.642306,-0.623359 2.368903,-1.989312 L 113.498488,177.253677 c -0.7239,-3.620559 -3.903133,-6.226881 -7.595305,-6.226881 -3.692172,0 -6.871053,2.606322 -7.595306,6.226881 l -2.312105,11.560176 c -0.27305,1.365953 1.0668,2.483905 2.368903,1.989312 z" />
            <path
              inkscape:connector-curvature="0"
              id="path188"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 102.779901,171.762796 c 2.126545,-0.757767 4.253795,-0.757767 6.380339,0 l -1.275997,-4.263672 h -3.828345 z" />
            <path
              inkscape:connector-curvature="0"
              id="path192"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 108.108078,175.701243 H 102.874744" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 108.108078,177.288743 H 102.874744" />
            <path
              inkscape:connector-curvature="0"
              id="path200"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 108.108078,178.876243 H 102.874744" />
            <path
              inkscape:connector-curvature="0"
              id="path202"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 103.874745,184.697068 h 4.233334 v -2.82222 h -4.233334 z" />
            <path
              inkscape:connector-curvature="0"
              id="path206"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 98.364675,269.07323 c 5.025672,1.90923 10.051344,1.90923 15.077016,0 1.302456,-0.4946 2.642306,0.62371 2.368903,1.98966 l -2.312106,11.56018 c -0.7239,3.62056 -3.903133,6.22688 -7.595305,6.22688 -3.692172,0 -6.871053,-2.60632 -7.595306,-6.22688 l -2.312105,-11.56018 c -0.27305,-1.36595 1.0668,-2.48426 2.368903,-1.98966 z" />
            <path
              inkscape:connector-curvature="0"
              id="path464"
              style="opacity:0.5;fill:#bdccd4;fill-opacity:1;"
              d="m 102.23953,288.286175 1.18321,3.95358 c 0.0893,0.298803 0.36442,0.503414 0.67628,0.503414 h 3.82799 c 0.31186,0 0.58632,-0.204611 0.67592,-0.503414 l 1.15782,-3.868914 c -0.44238,0.229306 -1.00965,0.424392 -1.65206,0.598664 l -0.70696,2.362553 h -2.77742 l -0.71932,-2.403122 c -0.59196,-0.156281 -1.14265,-0.377473 -1.66546,-0.642761" />
            <!-- <path
              inkscape:connector-curvature="0"
              id="path210"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 101.779901,256.11356 c 2.126545,0.75812 4.253795,0.75812 6.380339,0 l -1.275997,4.26402 h -3.828345 z" /> -->
            <path
              inkscape:connector-curvature="0"
              id="path214"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 108.108078,284.1755 H 102.874744" />
            <path
              inkscape:connector-curvature="0"
              id="path218"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 108.108078,282.588 H 102.874744" />
            <path
              inkscape:connector-curvature="0"
              id="path222"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 108.108078,281.0005 H 102.874744" />
            <path
              inkscape:connector-curvature="0"
              id="path224"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 103.874745,275.17948 h 4.233334 v 2.82223 h -4.233334 z" />
            <path
              inkscape:connector-curvature="0"
              id="path228"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 105.903218,292.50194 0.08819,18.34444 h 106.131952" />
            <!-- 流动 -->
            <path
              inkscape:connector-curvature="0"
              id="path180"
              style="fill:none;stroke:url(#linearGradient178);stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 211,154.49916 -105,0 0,12.964583" />
            <path
              inkscape:connector-curvature="0"
              id="path184"
              style="fill:none;stroke:#298ce2;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 98.364675,190.803165 c 5.025672,-1.908879 10.051344,-1.908879 15.077016,0 1.302456,0.494593 2.642306,-0.623359 2.368903,-1.989312 L 113.498488,177.253677 c -0.7239,-3.620559 -3.903133,-6.226881 -7.595305,-6.226881 -3.692172,0 -6.871053,2.606322 -7.595306,6.226881 l -2.312105,11.560176 c -0.27305,1.365953 1.0668,2.483905 2.368903,1.989312 z" />
            <path
              inkscape:connector-curvature="0"
              id="path188"
              style="fill:none;stroke:#298ce2;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 102.779901,171.762796 c 2.126545,-0.757767 4.253795,-0.757767 6.380339,0 l -1.275997,-4.263672 h -3.828345 z" />
            <path
              inkscape:connector-curvature="0"
              id="path192"
              style="fill:none;stroke:#298ce2;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 108.108078,175.701243 H 102.874744" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#298ce2;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 108.108078,177.288743 H 102.874744" />
            <path
              inkscape:connector-curvature="0"
              id="path200"
              style="fill:none;stroke:#298ce2;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 108.108078,178.876243 H 102.874744" />
            <path
              inkscape:connector-curvature="0"
              id="path202"
              style="fill:none;stroke:#298ce2;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 103.874745,184.697068 h 4.233334 v -2.82222 h -4.233334 z" />
            <path
              inkscape:connector-curvature="0"
              id="path206"
              style="fill:none;stroke:#298ce2;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 98.364675,269.07323 c 5.025672,1.90923 10.051344,1.90923 15.077016,0 1.302456,-0.4946 2.642306,0.62371 2.368903,1.98966 l -2.312106,11.56018 c -0.7239,3.62056 -3.903133,6.22688 -7.595305,6.22688 -3.692172,0 -6.871053,-2.60632 -7.595306,-6.22688 l -2.312105,-11.56018 c -0.27305,-1.36595 1.0668,-2.48426 2.368903,-1.98966 z" />
            <path
              inkscape:connector-curvature="0"
              id="path210"
              style="fill:none;stroke:#298ce2;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 102.779901,288.11356 c 2.126545,0.75812 4.253795,0.75812 6.380339,0 l -1.275997,4.26402 h -3.828345 z" />
            <path
              inkscape:connector-curvature="0"
              id="path214"
              style="fill:none;stroke:#298ce2;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 108.108078,284.1755 H 102.874744" />
            <path
              inkscape:connector-curvature="0"
              id="path218"
              style="fill:none;stroke:#298ce2;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 108.108078,282.588 H 102.874744" />
            <path
              inkscape:connector-curvature="0"
              id="path222"
              style="fill:none;stroke:#298ce2;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 108.108078,281.0005 H 102.874744" />
            <path
              inkscape:connector-curvature="0"
              id="path224"
              style="fill:none;stroke:#298ce2;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 103.874745,275.17948 h 4.233334 v 2.82223 h -4.233334 z" />
            <path
              inkscape:connector-curvature="0"
              id="path228"
              style="fill:none;stroke:#298ce2;stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 105.903218,292.50194 0.08819,18.34444 h 106.131952" />
          </g>
        </svg>
      </section>
      <section class="end-info-container">
        <div class="rec-bg"></div>
        <div class="info-container">
          <span class="major-name">后台</span>
          <span class="major-intro">
            后台是一个与数据和信息打交道的方向，负责着各类数据的处理与传输。无论是网页端、移动端还是嵌入式端，都需要后台技术的支持。QG后台组基于Java语言，自成立以来致力于后台服务器的开发，成功为工作室多数项目提供了坚实的后台技术支持，慢慢成长为一支团结可靠的队伍。有责任心、有热情的你如果对后台有兴趣，就加入我们吧！
          </span>
          <div class="turn-page">
            <img v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/end_arrow.png'" alt="">
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
    '$store.state.end': {
      handler(newValue, oldValue) {
        this.pathAnimate(newValue, oldValue);
      },
      deep: true
    },
    '$store.state.pages': (pages) => {
      if (pages < 1 || pages > 2.5) {
        return;
      }
      let pathList = $('#end-svg path');
      if (pathList.length <= 14) {
        // 出现一个问题
        return;
      }
      pathUtil.correctEndPath(pathList[14], pathList.slice(15, 21), pages, 1.5, 0.4);
      pathUtil.correctStartPath(pathList[27], pathList.slice(21, 27), pages, 2, 0.3);
    }
  },
  methods: {
    pathAnimate(newValue, oldValue) {
        let insidePercent;
        let height = $(window).height();
        let percent = ($(window).scrollTop() % height) / height;   // 计算翻页时候翻过当前页面的百分之几
        let pathList = $('#end-svg path');
        if (percent >= 0.5 && percent <= 1) {
          insidePercent = pathUtil.getEndInsidePer(percent, 0.9);
          if (percent < 0.9) {
            // 这条线需要动画是反过来的，这是设计师画的方向总是从灯座发起的
            pathUtil.lineAnimate(pathList[14], insidePercent);
          } else {
            pathUtil.socketAnimate(pathList.slice(15, 21), insidePercent, false);
          }
        } else {
          insidePercent = pathUtil.getStartInsidePer(percent, 0.3);
          if (percent < 0.3) {
            pathUtil.socketAnimate(pathList.slice(21, 27), insidePercent, false);
          } else {
            pathUtil.lineAnimate(pathList[27], insidePercent, false);
          }
        }
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 740px) {
  .end-bulb-layer {
    position: absolute;
    z-index: 2;
    height: 100%;
    bottom: -0.3rem;
    left: 2.26rem;
    width: 2.80rem;
    height: 9.45rem;
  }
  .left-layer {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 5.08rem;
    left: 0;
    top: 0;
    background: center right no-repeat;
    background-size: cover;
  }
  .end-bg-bulb {
    bottom: 2.69rem;
    left: 2.78rem;
  }
  .end-bulb {
    position: absolute;
    width: 5.5rem;
    height: 5.5rem;
    bottom: 1.75rem;
    left: 1.85rem;
  }
  .rec-bg {
    position: absolute;
    left: 0rem;
    bottom: 2.75rem;
    width: 7.5rem;
    height: 3.7rem;
    background-color: rgba(41, 140, 226, .3);
  }
  .end-svg-container {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
  }
  .end-svg-container>svg {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .end-info-container {
    position: absolute;
    width: 11rem;
    height: 100vh;
    right: 0;
  }
  .info-container {
    position: absolute;
    width: 8.4rem;
    left: -0.8rem;
    bottom: 1.8rem;
    border-left: 0.09rem solid #71ade2;
    padding-left: 0.48rem;
  }
  .info-container::after {
    content: "";
    display: block;
    clear: both;
  }
  .major-name {
    position: absolute;
    font-size: 0.72rem;
    left: 0.16rem;
    top: -0.70rem;
    color: #71ade2;
  }
  .major-intro {
    display: block;
    margin-top: 0.46rem;
    color: #2e3133;
    font-size: 0.32rem;
  }
}
@media only screen and (max-width: 740px) {
  #end-svg {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .end-bulb-layer {
    position: absolute;
    z-index: 2;
    width: 7.86rem;
    height: 8.79rem;
    bottom: -0.21rem;
    right: 0;
  }
  .left-layer {
    position: absolute;
    z-index: 1;
    height: 8.9rem;
    width: 100%;
    left: 0;
    bottom: 0;
    background: center top no-repeat;
    background-size: cover;
  }
  .end-bg-bulb {
    left: 50%;
    transform: translateX(-50%);
    bottom: 2.7rem;
  }
  .end-bulb {
    z-index: 11;
    position: absolute;
    width: 5.5rem;
    height: 5.5rem;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1.76rem;
  }
  .end-info-container {
    z-index: 5;
  }
  .end-svg-container {
    z-index: 5;
  }
  .info-container {
    z-index: 5;
    position: absolute;
    width: 100%;
    bottom: 8.8rem;
    left: 1.66rem;
    border-left: 0.09rem solid #71ade2;
    padding-left: 0.48rem;
  }
  .info-container::after {
    content: "";
    display: block;
    clear: both;
  }
  .major-name {
    position: absolute;
    font-size: 0.72rem;
    left: 0.16rem;
    top: -0.70rem;
    color: #71ade2;
  }
  .major-intro {
    display: block;
    margin-top: 0.46rem;
    color: #4a4a4a;
    font-size: 0.32rem;
    width: 7rem;
  }
  .turn-page {
    margin-top: 0.48rem;
  }
}
.container {
  background: center center no-repeat;
  background-size: cover;
}
</style>