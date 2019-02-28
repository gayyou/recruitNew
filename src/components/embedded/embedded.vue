<template>
    <div class="page container">
      <section class="embedded-svg-container">
        <img class="embedded-bulb bulb" :class="$store.state.pages >= 3.9 ? 'fade-in' : 'fade-out'" v-lazy="require('../../assets/images/icons/embedded_bulb.png')" alt="">
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
          id="embedded-svg"
          inkscape:version="0.92.3 (2405546, 2018-03-11)"
          sodipodi:docname="嵌入式.svg">
          <defs
            id="defs711">
            <linearGradient
              id="embedded-start-line"
              spreadMethod="pad"
              gradientTransform="matrix(356.31612,0,0,-356.31612,-1.1932326,-172.19902)"
              gradientUnits="userSpaceOnUse"
              y2="0"
              x2="1"
              y1="0"
              x1="0.7">
              <stop
                id="stop174"
                offset="0"
                style="stop-opacity:1;stop-color:#39b54a" />
              <stop
                id="stop176"
                offset="1"
                style="stop-opacity:1;stop-color:#fcee21" />
            </linearGradient>
            <linearGradient
              id="embedded-start-line-phone"
              spreadMethod="pad"
              gradientTransform="matrix(356.31612,0,0,-356.31612,-1.1932326,-172.19902)"
              gradientUnits="userSpaceOnUse"
              y2="0"
              x2="0"
              y1="0"
              x1="0.25">
              <stop
                id="stop174"
                offset="0"
                style="stop-opacity:1;stop-color:#39b54a" />
              <stop
                id="stop176"
                offset="1"
                style="stop-opacity:1;stop-color:#fcee21" />
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
            id="metadata714">
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
              d="M -40.9912934,94.10486 -40.9912934,8.800707 432.29961,8.800707 v 0" />
            <path
              inkscape:connector-curvature="0"
              id="path184"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -56.261868,140.36045 c 10.0513454,-3.81846 20.1023364,-3.81846 30.153682,0 2.604555,0.98954 5.284255,-1.24707 4.737803,-3.97898 l -4.62421,-23.12035 c -1.448152,-7.24111 -7.8059146,-12.4534 -15.1906106,-12.4534 -7.384344,0 -13.7424584,5.21229 -15.1906114,12.4534 l -4.624211,23.12035 c -0.5461,2.73191 2.1336,4.96852 4.738158,3.97898 z" />
            <path
              inkscape:connector-curvature="0"
              id="path56"
              style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
              d="m -34.00891,100.841529 -2.25178,-7.524397 c -0.14641,-0.488245 -0.59549,-0.822678 -1.10526,-0.822678 h -7.65633 c -0.50977,0 -0.95921,0.334433 -1.10526,0.822678 l -2.29658,7.673975 c 0.65193,-0.331964 1.55752,-0.682978 2.72098,-1.044928 l 1.53987,-5.144558 h 5.93866 l 1.51554,5.063772 c 0.9271,0.225072 1.82597,0.554566 2.70016,0.976136" />
            <!-- <path
              inkscape:connector-curvature="0"
              id="path188"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -47.4319096,102.27957 c 4.25379498,-1.51588 8.507236,-1.51588 12.760677,0 l -2.552346,-8.52734 h -7.656336 z" /> -->
            <path
              inkscape:connector-curvature="0"
              id="path192"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -37.2246234,110.15625 h -8.466666" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -37.2246234,113.33125 h -8.466666" />
            <path
              inkscape:connector-curvature="0"
              id="path200"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -37.2246234,116.50625 h -8.466666" />
            <path
              inkscape:connector-curvature="0"
              id="path202"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m -45.2420406,128.14793 h 8.466666 v -5.64444 h -8.466666 z" />
            <path
              inkscape:connector-curvature="0"
              id="path206"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 32.872236,229.21428 c 3.818467,-10.05099 3.818467,-20.10234 0,-30.15369 -0.989541,-2.60455 1.246717,-5.28425 3.978982,-4.7378 l 23.120352,4.62386 c 7.24111,1.4485 12.45341,7.80626 12.45341,15.19095 0,7.38434 -5.2123,13.74246 -12.45341,15.19061 l -23.120352,4.62423 c -2.732265,0.5461 -4.968523,-2.13326 -3.978982,-4.73816 z" />
            <path
              inkscape:connector-curvature="0"
              id="path92"
              style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
              d="m 72.1,221 7.52439,-2.25178 c 0.48825,-0.14641 0.82268,-0.59549 0.82268,-1.10526 v -7.65633 c 0,-0.50977 -0.33443,-0.95885 -0.82268,-1.1049 l -7.67397,-2.29694 c 0.33232,0.65229 0.68298,1.55751 1.04493,2.72098 l 5.14456,1.53987 v 5.93866 l -5.06378,1.51553 c -0.22472,0.92746 -0.55456,1.82598 -0.97613,2.70017" />
            <!-- <path
              inkscape:connector-curvature="0"
              id="path210"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 70.95312,220.38413 c 1.51588,-4.25345 1.51588,-8.50689 0,-12.76067 l 8.52734,2.55235 v 7.65633 z" /> -->
            <path
              inkscape:connector-curvature="0"
              id="path214"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 63.07622,209.72779 v 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path218"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 59.90122,209.72779 v 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path222"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 56.726217,209.72779 v 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path224"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 45.084588,209.72779 h 5.644449 v 8.46667 h -5.644449 z" />
            <path
              inkscape:connector-curvature="0"
              id="path228"
              style="fill:none;stroke:#c8c2cc;stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 80.22949,214.1375 34.03402,0 v 111.83054" />
            <!-- 流动 -->
            <path
              inkscape:connector-curvature="0"
              id="path180"
              style="fill:none;stroke:url(#embedded-start-line);stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 432.29961,8.800707 -40.9912934,8.800707 -40.9912934,94.10486 v 0" />
            <path  
              inkscape:connector-curvature="0"
              id="path184"
              style="fill:none;stroke:#39b54a;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -56.261868,140.36045 c 10.0513454,-3.81846 20.1023364,-3.81846 30.153682,0 2.604555,0.98954 5.284255,-1.24707 4.737803,-3.97898 l -4.62421,-23.12035 c -1.448152,-7.24111 -7.8059146,-12.4534 -15.1906106,-12.4534 -7.384344,0 -13.7424584,5.21229 -15.1906114,12.4534 l -4.624211,23.12035 c -0.5461,2.73191 2.1336,4.96852 4.738158,3.97898 z" />
            <path
              inkscape:connector-curvature="0"
              id="path188"
              style="fill:none;stroke:#39b54a;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -47.4319096,102.27957 c 4.25379498,-1.51588 8.507236,-1.51588 12.760677,0 l -2.552346,-8.52734 h -7.656336 z" />
            <path
              inkscape:connector-curvature="0"
              id="path192"
              style="fill:none;stroke:#39b54a;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -37.2246234,110.15625 h -8.466666" />
            <path
              inkscape:connector-curvature="0"
              id="path196"
              style="fill:none;stroke:#39b54a;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -37.2246234,113.33125 h -8.466666" />
            <path
              inkscape:connector-curvature="0"
              id="path200"
              style="fill:none;stroke:#39b54a;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -37.2246234,116.50625 h -8.466666" />
            <path
              inkscape:connector-curvature="0"
              id="path202"
              style="fill:none;stroke:#39b54a;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m -45.2420406,128.14793 h 8.466666 v -5.64444 h -8.466666 z" />
            <path
              inkscape:connector-curvature="0"
              id="path206"
              style="fill:none;stroke:#39b54a;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 32.872236,229.21428 c 3.818467,-10.05099 3.818467,-20.10234 0,-30.15369 -0.989541,-2.60455 1.246717,-5.28425 3.978982,-4.7378 l 23.120352,4.62386 c 7.24111,1.4485 12.45341,7.80626 12.45341,15.19095 0,7.38434 -5.2123,13.74246 -12.45341,15.19061 l -23.120352,4.62423 c -2.732265,0.5461 -4.968523,-2.13326 -3.978982,-4.73816 z" />
            <path
              inkscape:connector-curvature="0"
              id="path210"
              style="fill:none;stroke:#39b54a;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 70.95312,220.38413 c 1.51588,-4.25345 1.51588,-8.50689 0,-12.76067 l 8.52734,2.55235 v 7.65633 z" />
            <path
              inkscape:connector-curvature="0"
              id="path214"
              style="fill:none;stroke:#39b54a;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 63.07622,209.72779 v 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path218"
              style="fill:none;stroke:#39b54a;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 59.90122,209.72779 v 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path222"
              style="fill:none;stroke:#39b54a;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 56.726217,209.72779 v 8.46667" />
            <path
              inkscape:connector-curvature="0"
              id="path224"
              style="fill:none;stroke:#39b54a;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 45.084588,209.72779 h 5.644449 v 8.46667 h -5.644449 z" />
            <path
              inkscape:connector-curvature="0"
              id="path228"
              style="fill:none;stroke:#39b54a;stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 79.72949,214.1375 34.53402,-0.0882 v 111.83054" />
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
              id="path570"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 71.13671,185 0,-154.5 -80,0" />
            <path
              inkscape:connector-curvature="0"
              id="path268"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 63.565054,208.32736 c 5.025672,-1.90888 10.051344,-1.90888 15.076664,0 1.302455,0.4946 2.642305,-0.62335 2.369255,-1.98931 l -2.312105,-11.56017 c -0.724253,-3.620562 -3.903133,-6.226884 -7.595306,-6.226884 -3.692525,0 -6.871405,2.606322 -7.595658,6.226884 l -2.311753,11.56017 c -0.273403,1.36596 1.066447,2.48391 2.368903,1.98931 z" />
            <path
              inkscape:connector-curvature="0"
              id="path56"
              style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
              d="m 75,188.8 -1.18322,-3.95359 c -0.0892,-0.2988 -0.36442,-0.50341 -0.67627,-0.50341 h -3.82799 c -0.31186,0 -0.58632,0.20461 -0.67593,0.50341 l -1.15781,3.86857 c 0.44238,-0.22895 1.00965,-0.4244 1.6517,-0.59832 l 0.70732,-2.36255 h 2.77742 l 0.71932,2.40277 c 0.59196,0.15628 1.14264,0.37783 1.66546,0.64312" />
            <!-- <path
              inkscape:connector-curvature="0"
              id="path272"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 67.980137,189.286998 c 2.126545,-0.757767 4.253443,-0.757767 6.38034,0 L 73.08448,185.023326 h -3.828345 z" /> -->
            <path
              inkscape:connector-curvature="0"
              id="path276"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 73.308317,193.225443 H 69.074983" />
            <path
              inkscape:connector-curvature="0"
              id="path280"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 73.308317,194.81294 H 69.074983" />
            <path
              inkscape:connector-curvature="0"
              id="path284"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="M 73.308317,196.40044 H 69.074983" />
            <path
              inkscape:connector-curvature="0"
              id="path286"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 69.074983,202.22128 h 4.233334 v -2.82223 h -4.233334 z" />
            <path
              inkscape:connector-curvature="0"
              id="path290"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 112.132036,256.75461 c 1.909231,-5.02567 1.909231,-10.05134 0,-15.07702 -0.494596,-1.30245 0.62371,-2.6423 1.989664,-2.3689 l 11.560175,2.31211 c 3.620558,0.7239 6.226881,3.90313 6.226881,7.5953 0,3.69217 -2.606323,6.87106 -6.226881,7.59531 l -11.560175,2.3121 c -1.365954,0.27305 -2.48426,-1.0668 -1.989664,-2.3689 z" />
            <path
              inkscape:connector-curvature="0"
              id="path90"
              style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
              d="m 131.60467,252.88163 3.95358,-1.18322 c 0.2988,-0.0893 0.50341,-0.36442 0.50341,-0.67628 v -3.82799 c 0,-0.31185 -0.20461,-0.58667 -0.50341,-0.67592 l -3.86856,-1.15782 c 0.2293,0.44239 0.42439,1.00965 0.59831,1.65206 l 2.36255,0.70697 v 2.77742 l -2.40277,0.71931 c -0.15628,0.59196 -0.37747,1.14265 -0.64311,1.66547" />
            <!-- <path
              inkscape:connector-curvature="0"
              id="path294"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 131.172368,252.33939 c 0.758119,-2.12655 0.758119,-4.2538 0,-6.38034 l 4.264022,1.27599 v 3.82835 z" /> -->
            <path
              inkscape:connector-curvature="0"
              id="path298"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 127.23431,247.01121 v 4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path302"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 125.64681,247.01121 v 4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path306"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 124.05931,247.01121 v 4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path308"
              style="fill:none;stroke:#c8c2cc;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 118.238299,247.01121 h 2.822223 v 4.23333 h -2.822223 z" />
            <path
              inkscape:connector-curvature="0"
              id="path312"
              style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
              d="m 135.960747,249.21607 75.219793,-0.0441" />
            <!-- 流动 -->
            <path
              inkscape:connector-curvature="0"
              id="path570"
              style="fill:none;stroke:url(#embedded-start-line-phone);stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 0,30.5 71.13671,0 0,154.5" />
            <path
              inkscape:connector-curvature="0"
              id="path268"
              style="fill:none;stroke:#39b54a;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 63.565054,208.32736 c 5.025672,-1.90888 10.051344,-1.90888 15.076664,0 1.302455,0.4946 2.642305,-0.62335 2.369255,-1.98931 l -2.312105,-11.56017 c -0.724253,-3.620562 -3.903133,-6.226884 -7.595306,-6.226884 -3.692525,0 -6.871405,2.606322 -7.595658,6.226884 l -2.311753,11.56017 c -0.273403,1.36596 1.066447,2.48391 2.368903,1.98931 z" />
            <path
              inkscape:connector-curvature="0"
              id="path272"
              style="fill:none;stroke:#39b54a;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 67.980137,189.286998 c 2.126545,-0.757767 4.253443,-0.757767 6.38034,0 L 73.08448,185.023326 h -3.828345 z" />
            <path
              inkscape:connector-curvature="0"
              id="path276"
              style="fill:none;stroke:#39b54a;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 73.308317,193.225443 H 69.074983" />
            <path
              inkscape:connector-curvature="0"
              id="path280"
              style="fill:none;stroke:#39b54a;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 73.308317,194.81294 H 69.074983" />
            <path
              inkscape:connector-curvature="0"
              id="path284"
              style="fill:none;stroke:#39b54a;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="M 73.308317,196.40044 H 69.074983" />
            <path
              inkscape:connector-curvature="0"
              id="path286"
              style="fill:none;stroke:#39b54a;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 69.074983,202.22128 h 4.233334 v -2.82223 h -4.233334 z" />
            <path
              inkscape:connector-curvature="0"
              id="path290"
              style="fill:none;stroke:#39b54a;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 112.132036,256.75461 c 1.909231,-5.02567 1.909231,-10.05134 0,-15.07702 -0.494596,-1.30245 0.62371,-2.6423 1.989664,-2.3689 l 11.560175,2.31211 c 3.620558,0.7239 6.226881,3.90313 6.226881,7.5953 0,3.69217 -2.606323,6.87106 -6.226881,7.59531 l -11.560175,2.3121 c -1.365954,0.27305 -2.48426,-1.0668 -1.989664,-2.3689 z" />
            <path
              inkscape:connector-curvature="0"
              id="path294"
              style="fill:none;stroke:#39b54a;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 131.172368,252.33939 c 0.758119,-2.12655 0.758119,-4.2538 0,-6.38034 l 4.264022,1.27599 v 3.82835 z" />
            <path
              inkscape:connector-curvature="0"
              id="path298"
              style="fill:none;stroke:#39b54a;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 127.23431,247.01121 v 4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path302"
              style="fill:none;stroke:#39b54a;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 125.64681,247.01121 v 4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path306"
              style="fill:none;stroke:#39b54a;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 124.05931,247.01121 v 4.23333" />
            <path
              inkscape:connector-curvature="0"
              id="path308"
              style="fill:none;stroke:#39b54a;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 118.238299,247.01121 h 2.822223 v 4.23333 h -2.822223 z" />
            <path
              inkscape:connector-curvature="0"
              id="path312"
              style="fill:none;stroke:#39b54a;stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              d="m 135.560747,249.21607 75.219793,-0.0441" />
          </g>
        </svg>
      </section>
      <section class="embedded-intro-container">
        <div class="embedded-word-bg"></div>
        <div class="embedded-intro">
          <span class="major-name">嵌入式</span>
          <span class="major-intro">
            作为计算机学院历史最悠久、实力最强的嵌入式开发团队。小组内部有着丰富的开发资源及技术传承，主要研究方向为基于ARM+LINUX平台以及其他各类开发板的嵌入式软件开发。小组的学习之旅主要伴随着比赛，近年来获得过许多奖项，第十四届“挑战杯”全国大学生课外学术科技作品竞赛香港专项赛特等奖更是刷新了学校在挑战杯获奖层次的记录。<span v-if="$store.state.isPhone">加入我们，和我们一起刷奖吧。</span>
          </span>
          <div class="turn-page" v-if="$store.state.isPhone">
            <img v-lazy="require('../../assets/images/icons/embedded_arrow.png')" alt="">
            <span>向下滚动了解更多</span>
          </div>
        </div>
        <div class="arrow-container" v-if="!$store.state.isPhone">
          <span class="major-intro">加入我们，一起刷奖吧!</span>
          <div class="turn-page">
              <img v-lazy="require('../../assets/images/icons/embedded_arrow.png')" alt="">
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
    '$store.state.embedded': {
      handler(newValue, oldValue) {
        this.pathAnimate(newValue, oldValue)
      },
      deep: true
    },
    '$store.state.pages': (pages) => {
      if (pages < 3 || pages > 4.5) {
        return;
      }
      let pathList = $('#embedded-svg path');
      if (pathList.length <= 14) {
        // 出现一个问题
        return;
      }
      pathUtil.correctEndPath(pathList[14], pathList.slice(15, 21), pages, 3.5, 0.4);
      pathUtil.correctStartPath(pathList[27], pathList.slice(21, 27), pages, 4, 0.2);
    }
  },
  methods: {
    pathAnimate(newValue, oldValue) {
      let insidePercent;
      let height = $(window).height();
      let percent = ($(window).scrollTop() % height) / height;   // 计算翻页时候翻过当前页面的百分之几
      let pathList = $('#embedded-svg path');
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
  .embedded-word-bg {
    position: absolute;
    z-index: 1;
    right: 3.2rem;
    bottom: 3.5rem;
    background-color: rgba(57, 181, 74, .3);
    width: 6.9rem;
    height: 4.1rem;
  }
  .embedded-svg-container {
    position: absolute;
    width: 100%;
    height: 47.8vw;
    bottom: 0;
  }
  .embedded-svg-container::after,
  .embedded-intro::after,
  .arrow-container::after {
    content: "";
    display: block;
    clear: both;
  }
  .embedded-bulb {
    position: absolute;
    width: 5.5rem;
    height: 5.5rem;
    bottom: -0.15rem;
    left: 2.35rem;
  }
  .embedded-intro-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .embedded-intro,
  .arrow-container {
    position: absolute;
    z-index: 2;
    width: 8rem;
    bottom: 3.3rem;
    right: 2.2rem;
    border-left: 0.09rem solid #39b54a;
    padding-left: 0.48rem;
  }
  .arrow-container>.major-intro {
    margin-top: 0!important;
  }
  .major-name {
    position: absolute;
    font-size: 0.72rem;
    color: #7fb586;
    top: -0.6rem;
    left: 0.16rem;
  }
  .major-intro {
    display: block;
    margin-top: 0.48rem;
    font-size: 0.32rem;
    color: #cfe6d2;
  }
  .arrow-container {
    position: absolute;
    width: 5rem;
    bottom: 1rem;
    right: 3.4rem;
  }
}
@media only screen and (max-width: 740px) {
  #embedded-svg {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .embedded-bulb {
    position: absolute;
    width: 5.5rem;
    height: 5.5rem;
    bottom: 0.8rem;
    left: 1rem;
  }
  .embedded-intro-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .embedded-intro {
    position: absolute;
    z-index: 2;
    width: 5rem;
    bottom: 5.8rem;
    right: 0.57rem;
    border-left: 0.09rem solid #39b54a;
    padding-left: 0.48rem;
  }
  .major-name {
    position: absolute;
    font-size: 0.72rem;
    color: #7fb586;
    top: -0.6rem;
    left: 0.16rem;
  }
  .major-intro {
    display: block;
    margin-top: 0.48rem;
    font-size: 0.36rem;
    color: #cfe6d2;
  }
}
.container {
  background: url(../../assets/images/background/embedded_background.png) center center no-repeat;
  background-size: cover;
}
</style>