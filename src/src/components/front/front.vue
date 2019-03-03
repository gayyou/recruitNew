<template>
    <div class="page container"
      v-lazy:background-image="$store.state.isPhone ? 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/phonebg/front_phone_bg.jpg' : 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/front_background.jpg'"
    >
        <img class="front-bulb-layer" v-lazy="$store.state.isPhone ? 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/phonebg/front_bulb_layer.png' : 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/bulb-layer.png'">
        <div class="right-layer"
          v-lazy:background-image="$store.state.isPhone ? 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/phonebg/front_top_layer.png' : 'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/background/front-right-layer.png'"
        ></div>
        <section class="front-svg-container">
          <img class="front-bg-bulb bg-bulb" v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/front_bg_bulb.png'" alt="">
          <img class="front-bulb bulb" :class="$store.state.pages >= 0.9 ? 'fade-in' : 'fade-out'" v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/front_bulb.png'">
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
            id="front-svg"
            inkscape:version="0.92.3 (2405546, 2018-03-11)"
            sodipodi:docname="绘图-2.svg">
            <defs
              id="defs922">
              <linearGradient
                id="linearGradient568"
                spreadMethod="pad"
                gradientTransform="matrix(357.71666,0,0,-357.71666,398.37369,7.7883034)"
                gradientUnits="userSpaceOnUse"
                y2="0.5"
                x2="0.4"
                y1="1"
                x1="0">
                <stop
                  id="stop564"
                  offset="0"
                  style="stop-opacity:1;stop-color:#662d91" />
                <stop
                  id="stop566"
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
              id="metadata925">
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
                id="path570"
                style="fill:none;stroke:#c8c2cc;stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m -49.32768,0 0,17.09722 334.09582,0 0,20.929164" />
              <path 
                inkscape:connector-curvature="0"
                id="path574"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 300.04491,84.419208 c -10.05099,-3.81846 -20.10232,-3.81846 -30.15369,0 -2.60455,0.98954 -5.28425,-1.24671 -4.73778,-3.97898 l 4.62386,-23.120346 c 1.44848,-7.241118 7.80626,-12.453409 15.19094,-12.453409 7.38436,0 13.74246,5.212291 15.19063,12.453409 l 4.6242,23.120346 c 0.5461,2.73227 -2.13325,4.96852 -4.73816,3.97898 z" />
              <path
                inkscape:connector-curvature="0"
                id="path578"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 291.21476,46.338506 c -4.25344,-1.515885 -8.50688,-1.515885 -12.76067,0 l 2.55233,-8.527344 h 7.65636 z" />
              <path
                inkscape:connector-curvature="0"
                id="path582"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 280.5584,54.215189 h 8.46667" />
              <path
                inkscape:connector-curvature="0"
                id="path586"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 280.5584,57.39019 h 8.46667" />
              <path
                inkscape:connector-curvature="0"
                id="path590"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 280.5584,60.56519 h 8.46667" />
              <path
                inkscape:connector-curvature="0"
                id="path592"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 289.02507,73.206849 h -8.46667 v -5.644442 h 8.46667 z" />
              <path
                inkscape:connector-curvature="0"
                id="path596"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 300.04491,222.95949 c -10.05099,3.81812 -20.10232,3.81812 -30.15369,0 -2.60455,-0.98988 -5.28425,1.24672 -4.73778,3.97865 l 4.62386,23.12035 c 1.44848,7.24146 7.80626,12.4534 15.19094,12.4534 7.38436,0 13.74246,-5.21194 15.19063,-12.4534 l 4.6242,-23.12035 c 0.5461,-2.73193 -2.13325,-4.96853 -4.73816,-3.97865 z" />
              <path
                inkscape:connector-curvature="0"
                id="path56"
                style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
                d="m 277.690017,262.19173 2.25178,7.52404 c 0.146403,0.4886 0.595489,0.82303 1.105253,0.82303 h 7.65634 c 0.50976,0 0.9592,-0.33443 1.10525,-0.82303 l 2.29658,-7.67362 c -0.65193,0.33196 -1.55751,0.68298 -2.72097,1.04457 l -1.53988,5.14492 h -5.938306 l -1.515534,-5.06378 c -0.927452,-0.22507 -1.82633,-0.55492 -2.700513,-0.97613" />
              <!-- <path
                inkscape:connector-curvature="0"
                id="path600"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 291.21476,266.0402 c -4.25344,1.51588 -8.50688,1.51588 -12.76067,0 l 2.55233,8.52734 h 7.65636 z" /> -->
              <path
                inkscape:connector-curvature="0"
                id="path604"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 280.5584,253.16332 h 8.46667" />
              <path
                inkscape:connector-curvature="0"
                id="path608"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 280.5584,249.98832 h 8.46667" />
              <path
                inkscape:connector-curvature="0"
                id="path612"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 280.5584,246.81332 h 8.46667" />
              <path
                inkscape:connector-curvature="0"
                id="path614"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 289.02507,235.17168 h -8.46667 v 5.64443 h 8.46667 z" />
              <path
                inkscape:connector-curvature="0"
                id="path618"
                style="fill:none;stroke:#c8c2cc;stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="M 284.96814,270.4656 284.96814,284.252 420.56814,284.252 V 284.252" />
              <!-- 流动 -->
              <path
                inkscape:connector-curvature="0"
                id="path570"
                style="fill:none;stroke:url(#linearGradient568);stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m -49.32768,0 0,17.09722 334.09582,0 0,20.929164" />
              <path
                inkscape:connector-curvature="0"
                id="path574"
                style="fill:none;stroke:#ff3333;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 300.04491,84.419208 c -10.05099,-3.81846 -20.10232,-3.81846 -30.15369,0 -2.60455,0.98954 -5.28425,-1.24671 -4.73778,-3.97898 l 4.62386,-23.120346 c 1.44848,-7.241118 7.80626,-12.453409 15.19094,-12.453409 7.38436,0 13.74246,5.212291 15.19063,12.453409 l 4.6242,23.120346 c 0.5461,2.73227 -2.13325,4.96852 -4.73816,3.97898 z" />
              <path
                inkscape:connector-curvature="0"
                id="path578"
                style="fill:none;stroke:#ff3333;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 291.21476,46.338506 c -4.25344,-1.515885 -8.50688,-1.515885 -12.76067,0 l 2.55233,-8.527344 h 7.65636 z" />
              <path
                inkscape:connector-curvature="0"
                id="path582"
                style="fill:none;stroke:#ff3333;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 280.5584,54.215189 h 8.46667" />
              <path
                inkscape:connector-curvature="0"
                id="path586"
                style="fill:none;stroke:#ff3333;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 280.5584,57.39019 h 8.46667" />
              <path
                inkscape:connector-curvature="0"
                id="path590"
                style="fill:none;stroke:#ff3333;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 280.5584,60.56519 h 8.46667" />
              <path
                inkscape:connector-curvature="0"
                id="path592"
                style="fill:none;stroke:#ff3333;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 289.02507,72.206849 h -8.46667 v -5.644442 h 8.46667 z" />
              <path
                inkscape:connector-curvature="0"
                id="path596"
                style="fill:none;stroke:#ff3333;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 300.04491,222.95949 c -10.05099,3.81812 -20.10232,3.81812 -30.15369,0 -2.60455,-0.98988 -5.28425,1.24672 -4.73778,3.97865 l 4.62386,23.12035 c 1.44848,7.24146 7.80626,12.4534 15.19094,12.4534 7.38436,0 13.74246,-5.21194 15.19063,-12.4534 l 4.6242,-23.12035 c 0.5461,-2.73193 -2.13325,-4.96853 -4.73816,-3.97865 z" />
              <path
                inkscape:connector-curvature="0"
                id="path600"
                style="fill:none;stroke:#ff3333;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 291.21476,261.0402 c -4.25344,1.51588 -8.50688,1.51588 -12.76067,0 l 2.55233,8.52734 h 7.65636 z" />
              <path
                inkscape:connector-curvature="0"
                id="path604"
                style="fill:none;stroke:#ff3333;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 280.5584,253.16332 h 8.46667" />
              <path
                inkscape:connector-curvature="0"
                id="path608"
                style="fill:none;stroke:#ff3333;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 280.5584,249.98832 h 8.46667" />
              <path
                inkscape:connector-curvature="0"
                id="path612"
                style="fill:none;stroke:#ff3333;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 280.5584,246.81332 h 8.46667" />
              <path
                inkscape:connector-curvature="0"
                id="path614"
                style="fill:none;stroke:#ff3333;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 289.02507,235.17168 h -8.46667 v 5.64443 h 8.46667 z" />
              <path
                inkscape:connector-curvature="0"
                id="path618"
                style="fill:none;stroke:#ff3333;stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 284.96814,269.81656 284.96814,284.252 420.56814,284.252 V 284.252" />
            </g>
            <!-- 手机端 -->
            <g
              v-if="$store.state.isPhone"
              inkscape:label="Layer 1"
              inkscape:groupmode="layer"
              id="layer1">
              <path
                inkscape:connector-curvature="0"
                id="path570"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 105.43671,30 0,-110" />
              <path
                inkscape:connector-curvature="0"
                id="path618"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 112.996033,53.336048 c -5.02567,-1.90924 -10.05134,-1.90924 -15.07701,0 -1.30246,0.49459 -2.64231,-0.62371 -2.3689,-1.98967 l 2.3121,-11.56017 c 0.7239,-3.62021 3.90313,-6.22653 7.59531,-6.22653 3.69217,0 6.87105,2.60632 7.5953,6.22653 l 2.31211,11.56017 c 0.27305,1.36596 -1.0668,2.48426 -2.36891,1.98967 z" />
              <path
                inkscape:connector-curvature="0"
                id="path56"
                style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
                d="m 109.15333,33.9 -1.18322,-3.95359 c -0.0892,-0.2988 -0.36442,-0.50341 -0.67627,-0.50341 h -3.82799 c -0.31186,0 -0.58632,0.20461 -0.67593,0.50341 l -1.15781,3.86857 c 0.44238,-0.22895 1.00965,-0.4244 1.6517,-0.59832 l 0.70732,-2.36255 h 2.77742 l 0.71932,2.40277 c 0.59196,0.15628 1.14264,0.37783 1.66546,0.64312" />
              <!-- <path
                inkscape:connector-curvature="0"
                id="path622"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 108.580813,41.295498 c -2.12654,-0.75776 -4.25379,-0.75776 -6.38034,0 l 1.276,-4.26367 h 3.82834 z" /> -->
              <path
                inkscape:connector-curvature="0"
                id="path626"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 103.252633,38.233948 h 4.23333" />
              <path
                inkscape:connector-curvature="0"
                id="path630"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 103.252633,39.821448 h 4.23333" />
              <path
                inkscape:connector-curvature="0"
                id="path634"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 103.252633,41.408948 h 4.23333" />
              <path
                inkscape:connector-curvature="0"
                id="path636"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 107.485963,47.229778 h -4.23333 v -2.82222 h 4.23333 z" />
              <path
                inkscape:connector-curvature="0"
                id="path640"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 112.996033,131.60611 c -5.02567,1.90923 -10.05134,1.90923 -15.07701,0 -1.30246,-0.49495 -2.64231,0.62336 -2.3689,1.98931 l 2.3121,11.56017 c 0.7239,3.62056 3.90313,6.22688 7.59531,6.22688 3.69217,0 6.87105,-2.60632 7.5953,-6.22688 l 2.31211,-11.56017 c 0.27305,-1.36595 -1.0668,-2.48426 -2.36891,-1.98931 z" />
              <path
                inkscape:connector-curvature="0"
                id="path464"
                style="opacity:0.5;fill:#bdccd4;fill-opacity:1;"
                d="m 101.53953,151.086175 1.18321,3.95358 c 0.0893,0.298803 0.36442,0.503414 0.67628,0.503414 h 3.82799 c 0.31186,0 0.58632,-0.204611 0.67592,-0.503414 l 1.15782,-3.868914 c -0.44238,0.229306 -1.00965,0.424392 -1.65206,0.598664 l -0.70696,2.362553 h -2.77742 l -0.71932,-2.403122 c -0.59196,-0.156281 -1.14265,-0.377473 -1.66546,-0.642761" />
              <!-- <path
                inkscape:connector-curvature="0"
                id="path644"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 108.580813,157.64644 c -2.12654,0.75777 -4.25379,0.75777 -6.38034,0 l 1.276,4.26367 h 3.82834 z" /> -->
              <path
                inkscape:connector-curvature="0"
                id="path648"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 103.252633,146.70803 h 4.23333" />
              <path
                inkscape:connector-curvature="0"
                id="path652"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 103.252633,145.12053 h 4.23333" />
              <path
                inkscape:connector-curvature="0"
                id="path656"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 103.252633,143.53303 h 4.23333" />
              <path
                inkscape:connector-curvature="0"
                id="path658"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 107.485963,137.71219 h -4.23333 v 2.82223 h 4.23333 z" />
              <path
                inkscape:connector-curvature="0"
                id="path662"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 105.457493,155.53464 v 24.69445 h 105.131937" />
              <!-- 流动 -->
              <path
                inkscape:connector-curvature="0"
                id="path570"
                style="fill:none;stroke:url(#linearGradient568);stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 105.43671,-20 0,50" />
              <path
                inkscape:connector-curvature="0"
                id="path618"
                style="fill:none;stroke:#ff3333;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 112.996033,53.336048 c -5.02567,-1.90924 -10.05134,-1.90924 -15.07701,0 -1.30246,0.49459 -2.64231,-0.62371 -2.3689,-1.98967 l 2.3121,-11.56017 c 0.7239,-3.62021 3.90313,-6.22653 7.59531,-6.22653 3.69217,0 6.87105,2.60632 7.5953,6.22653 l 2.31211,11.56017 c 0.27305,1.36596 -1.0668,2.48426 -2.36891,1.98967 z" />
              <path
                inkscape:connector-curvature="0"
                id="path622"
                style="fill:none;stroke:#ff3333;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 108.580813,34.295498 c -2.12654,-0.75776 -4.25379,-0.75776 -6.38034,0 l 1.276,-4.26367 h 3.82834 z" />
              <path
                inkscape:connector-curvature="0"
                id="path626"
                style="fill:none;stroke:#ff3333;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 103.252633,38.233948 h 4.23333" />
              <path
                inkscape:connector-curvature="0"
                id="path630"
                style="fill:none;stroke:#ff3333;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 103.252633,39.821448 h 4.23333" />
              <path
                inkscape:connector-curvature="0"
                id="path634"
                style="fill:none;stroke:#ff3333;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 103.252633,41.408948 h 4.23333" />
              <path
                inkscape:connector-curvature="0"
                id="path636"
                style="fill:none;stroke:#ff3333;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 107.485963,47.229778 h -4.23333 v -2.82222 h 4.23333 z" />
              <path
                inkscape:connector-curvature="0"
                id="path640"
                style="fill:none;stroke:#ff3333;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 112.996033,131.60611 c -5.02567,1.90923 -10.05134,1.90923 -15.07701,0 -1.30246,-0.49495 -2.64231,0.62336 -2.3689,1.98931 l 2.3121,11.56017 c 0.7239,3.62056 3.90313,6.22688 7.59531,6.22688 3.69217,0 6.87105,-2.60632 7.5953,-6.22688 l 2.31211,-11.56017 c 0.27305,-1.36595 -1.0668,-2.48426 -2.36891,-1.98931 z" />
              <path
                inkscape:connector-curvature="0"
                id="path644"
                style="fill:none;stroke:#ff3333;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 108.580813,150.64644 c -2.12654,0.75777 -4.25379,0.75777 -6.38034,0 l 1.276,4.26367 h 3.82834 z" />
              <path
                inkscape:connector-curvature="0"
                id="path648"
                style="fill:none;stroke:#ff3333;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 103.252633,146.70803 h 4.23333" />
              <path
                inkscape:connector-curvature="0"
                id="path652"
                style="fill:none;stroke:#ff3333;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 103.252633,145.12053 h 4.23333" />
              <path
                inkscape:connector-curvature="0"
                id="path656"
                style="fill:none;stroke:#ff3333;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 103.252633,143.53303 h 4.23333" />
              <path
                inkscape:connector-curvature="0"
                id="path658"
                style="fill:none;stroke:#ff3333;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 107.485963,137.71219 h -4.23333 v 2.82223 h 4.23333 z" />
              <path
                inkscape:connector-curvature="0"
                id="path662"
                style="fill:none;stroke:#ff3333;stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 105.457493,155.53464 v 24.69445 h 105.131937" />
            </g>
          </svg>
        </section>  
        <section class="front-intro">
          <div class="intro-container">
            <div class="rec-bg" v-if="!$store.state.isPhone"></div>
            <span class="major-name">前端</span>
            <span class="major-intro">
              QG工作室网络组的前端组，前端组一直紧随最前沿技术的脚步，秉承用户体验至上的原则、为用户开发满足他们需求的网站项目。制作炫酷华丽的网页，用前端三剑客（HTML、CSS、JS）开发属于自己的网页（此招新网页面便出自前端组）。同时，前端还能开发桌面应用、微信小程序和app等
            </span>
            <div class="turn-page">
              <img v-lazy="'https://qgstudio.oss-cn-shenzhen.aliyuncs.com/images/icons/front_arrow.png'" alt="">
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
    '$store.state.front': {
      handler(newValue, oldValue) {
        this.pathAnimate(newValue, oldValue)
      },
      deep: true
    },
    '$store.state.pages': (pages) => {
      if (pages > 2) {
        return;
      }
      let pathList = $('#front-svg path');
      if (pathList.length <= 14) {
        // 出现一个问题
        return;
      }
      pathUtil.correctEndPath(pathList[14], pathList.slice(15, 21), pages, 0.5, 0.4);
      pathUtil.correctStartPath(pathList[27], pathList.slice(21, 27), pages, 1, 0.2);
    }
  },
  methods: {
    pathAnimate(newValue, oldValue) {
      let insidePercent;
      let height = $(window).height();
      let percent = ($(window).scrollTop() % height) / height;   // 计算翻页时候翻过当前页面的百分之几
      let pathList = $('#front-svg path');
      if (pathList.length <= 14) {
        // 出现一个问题
        return;
      }
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
    },
  }
}
</script>

<style scoped>
@media only screen and (min-width: 740px) {
  .front-bulb-layer {
    position: absolute;
    z-index: 1;
    width: 3.17rem;
    height: 8.31rem;
    right: 1.607rem;
    top: 0.3rem;
  }
  .right-layer {
    position: absolute;
    z-index: 0;
    right: 0;
    top: 0;
    width: 4.33rem;
    height: 100%;
    background: center left no-repeat;
    background-size: cover;
  }
  .front-bg-bulb {
    right: 2.2rem;
    top: 2.95rem;
    z-index: 12;
  }
  .front-bulb {
    position: absolute;
    width: 5.5rem;
    height: 5.5rem;
    right: 1.25rem;
    top: 2.05rem;
    z-index: 13;
  }
  .front-svg-container {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    right: 0rem;
  }
  .front-svg {
    position: absolute;
    left: 0;
    top: 0;
  }
  .front-intro {
    position: absolute;
    width: 9rem;
    height: 100vh;
    left: 3.08rem;
    z-index: 1;
  }
  .intro-container {
    position: absolute;
    width: 87%;
    top: 2.7rem;
    border-left: 0.09rem solid #FF8080;
    padding-left: 0.48rem;
  }
  .intro-container::after {
    content: "";
    display: block;
    clear: both;
  }
  .major-name {
    position: absolute;
    top: -0.52rem;
    left: 0.16rem;
    font-size: 0.72rem;
    line-height: 0.72rem;
    color: #ff7f7f;
  }
  .major-intro {
    position: relative;
    display: block;
    margin-top: 0.52rem;
    font-size: 0.32rem;
    line-height: 0.52rem;
    color: #332e2e;
  }
  .rec-bg {
    position: absolute;
    width: 7rem;
    height: 3.5rem;
    top: 0.5rem;
    left: 0.7rem;
    background-color: rgba(255, 51, 51, .3);
  }
}
@media only screen and (max-width: 740px) {
  .right-layer {
    position: absolute;
    width: 100%;
    height: 10.15rem;
    z-index: 1;
    top: 0;
    left: 0;
    background: bottom center no-repeat;
    background-size: cover;
  }
  .front-bulb-layer {
    display: block;
    position: absolute;
    z-index: 2;
    width: 4.82rem;
    height: 10.58rem;
    left: 50%;
    transform: translateX(-50%);
    top: 0rem;
  }
  section {
    position: absolute;
  }
  .front-svg-container {
    z-index: 5;
    width: 100%;
    height: 100%;
  }
  .front-intro {
    z-index: 5;
    width: 100%;
    height: 100%;
  }
  .front-bg-bulb {
    left: 50%;
    transform: translateX(-50%);
    top: 4.07rem;
  }
  .front-bulb {
    position: absolute;
    display: block;
    width: 5.5rem;
    height: 5.5rem;
    left: 50%;
    transform: translateX(-50%);
    top: 3.15rem;
  }
  .major-intro {
    position: relative;
    display: block;
    margin-top: 0.52rem;
    font-size: 0.36rem;
    line-height: 0.52rem;
    color: #4a4a4a;
  }
  .intro-container {
    position: absolute;
    width: 62%;
    top: 10.5rem;
    left: 1.77rem;
    border-left: 0.09rem solid #FF8080;
    padding-left: 0.48rem;
  }
  .major-name {
    position: absolute;
    font-size: 0.72rem;
    color: #ff7f7f;
    top: -0.6rem;
    left: 0.16rem;
  }
  .rec-bg {
    position: absolute;
    width: 6rem;
    height: 4.5rem;
    top: -0.1rem;
    left: 0.75rem;
    background-color: rgba(255, 51, 51, .3);
  }
}
.container {
  background: center center no-repeat;
  background-size: cover;
}
</style>