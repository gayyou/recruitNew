<template>
    <div class="page container"
      v-lazy:background-image="$store.state.isPhone ? require('../../assets/images/background/phonebg/mobile_phone_bg.jpg') : require('../../assets/images/background/mobile_background.jpg')"
    >
      <img class="mobile-bulb-layer" v-lazy="$store.state.isPhone ? require('../../assets/images/background/phonebg/mobile_bulb_layer.png') : require('../../assets/images/background/mobile_bulb_layer.png')">
      <div class="right-layer"
        v-lazy:background-image="$store.state.isPhone ? require('../../assets/images/background/phonebg/mobile_layer.png') : require('../../assets/images/background/mobile_top_layer.png')"
      ></div>
      <section class="mobile-svg-container">
          <img class="mobile-bg-bulb bg-bulb" v-lazy="require('../../assets/images/icons/mobile_bg_bulb.png')" alt="">
          <img class="mobile-bulb bulb" :class="$store.state.pages >= 2.9 ? 'fade-in' : 'fade-out'" v-lazy="require('../../assets/images/icons/mobile_bulb.png')" alt="">
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
            id="mobile-svg"
            inkscape:version="0.92.3 (2405546, 2018-03-11)"
            sodipodi:docname="1231232绘图-3.svg">
            <defs
              id="defs884">
              <linearGradient
                id="linearGradient179"
                spreadMethod="pad"
                gradientTransform="matrix(358.06943,0,0,-358.06943,44.891588,-305.98233)"
                gradientUnits="userSpaceOnUse"
                y2="0"
                x2="1"
                y1="0.5"
                x1="0.5">
                <stop
                  id="stop174"
                  offset="0"
                  style="stop-opacity:1;stop-color:#2b8be1" />
                <stop
                  id="stop176"
                  offset="1"
                  style="stop-opacity:1;stop-color:#ffef00" />
              </linearGradient>
              <linearGradient
                id="mobile-start-line-phone"
                spreadMethod="pad"
                gradientTransform="matrix(358.06943,0,0,-358.06943,44.891588,-305.98233)"
                gradientUnits="userSpaceOnUse"
                y2="0"
                x2="0"
                y1="0"
                x1="0.7">
                <stop
                  id="stop174"
                  offset="0"
                  style="stop-opacity:1;stop-color:#2b8be1" />
                <stop
                  id="stop176"
                  offset="1"
                  style="stop-opacity:1;stop-color:#ffef00" />
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
              id="metadata1775">
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
                id="path344"
                style="fill:none;stroke:#c8c2cc;stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="M -16.9790633,145.339301 -50.479,145.339301 -50.479,50 -210,50 V 50" />
              <path
                inkscape:connector-curvature="0"
                id="path300"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 31.2790633,130.339301 c -3.81847,10.051344 -3.81847,20.102335 0,30.153679 0.98954,2.604558 -1.24671997,5.284258 -3.97898,4.737806 l -23.1203503,-4.62421 c -7.24112,-1.448154 -12.45341,-7.806266 -12.45341,-15.190259 0,-7.384697 5.21229,-13.74281 12.45341,-15.190963 l 23.1203503,-4.624211 c 2.73226003,-0.5461 4.96852,2.1336 3.97898,4.738158 z" />
              <path
                inkscape:connector-curvature="0"
                id="path56"
                style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
                d="m -8.8,138.48287 -7.524044,2.25178 c -0.488244,0.14641 -0.82303,0.59549 -0.82303,1.10526 v 7.65633 c 0,0.50977 0.334433,0.95885 0.822677,1.1049 l 7.673975,2.29694 c -0.331964,-0.65229 -0.682978,-1.55716 -1.044575,-2.72062 l -5.144911,-1.53988 v -5.93866 l 5.063772,-1.51553 c 0.225073,-0.92746 0.554567,-1.82633 0.976136,-2.70052" />
              <!-- <path
                inkscape:connector-curvature="0"
                id="path304"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m -7.801817,139.169259 c -1.51589,4.253794 -1.51589,8.507236 0,12.760677 l -8.52734,-2.552347 v -7.656335 z" /> -->
              <path
                inkscape:connector-curvature="0"
                id="path308"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="M 2.924957,149.82597 V 141.359303" />
              <path
                inkscape:connector-curvature="0"
                id="path312"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="M 5.749957,149.82597 V 141.359303" />
              <path
                inkscape:connector-curvature="0"
                id="path316"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="M 8.574957,149.82597 V 141.359303" />
              <path
                inkscape:connector-curvature="0"
                id="path318"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 20.933297,149.825786 h -5.64444 V 141.35912 h 5.64444 z" />
              <path
                inkscape:connector-curvature="0"
                id="path322"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 175.23168,130.162912 c 3.81811,10.051344 3.81811,20.102335 0,30.153678 -0.98954,2.604559 1.24672,5.284259 3.97863,4.737807 l 23.12035,-4.624211 c 7.24147,-1.448154 12.45376,-7.806266 12.45376,-15.190258 0,-7.384697 -5.21229,-13.742811 -12.45376,-15.190964 l -23.12035,-4.624211 c -2.73191,-0.5461 -4.96817,2.1336 -3.97863,4.738159 z" />
              <path
                inkscape:connector-curvature="0"
                id="path92"
                style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
                d="m 214.8,152.9 7.52439,-2.25178 c 0.48825,-0.14641 0.82268,-0.59549 0.82268,-1.10526 v -7.65633 c 0,-0.50977 -0.33443,-0.95885 -0.82268,-1.1049 l -7.67397,-2.29694 c 0.33232,0.65229 0.68298,1.55751 1.04493,2.72098 l 5.14456,1.53987 v 5.93866 l -5.06378,1.51553 c -0.22472,0.92746 -0.55456,1.82598 -0.97613,2.70017" />
              <!-- <path
                inkscape:connector-curvature="0"
                id="path326"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 213.31238,139.99287 c 1.51624,4.253794 1.51624,8.507235 0,12.760676 l 8.5277,-2.552346 v -7.656336 z" /> -->
              <path
                inkscape:connector-curvature="0"
                id="path330"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="M 205.43588,149.64958 V 141.182913" />
              <path
                inkscape:connector-curvature="0"
                id="path334"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="M 202.26088,149.64958 V 141.182913" />
              <path
                inkscape:connector-curvature="0"
                id="path338"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="M 199.08588,149.64958 V 141.182913" />
              <path
                inkscape:connector-curvature="0"
                id="path340"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 187.44403,149.649397 h 5.64445 v -8.466666 h -5.64445 z" />
                <path
                inkscape:connector-curvature="0"
                id="path344"
                style="fill:none;stroke:#c8c2cc;stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="M 222.99147,146.339301 253.79147,146.339301 253.79147,241.66 430,241.66 V 241.66" />
              <!-- 流动 -->
              <path
                inkscape:connector-curvature="0"
                id="path344"
                style="fill:none;stroke:url(#linearGradient179);stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M -210,50 -50.479,50 -50.479,145.339301 -15.2790633,145.339301" />
              <path 
                inkscape:connector-curvature="0"
                id="path300"
                style="fill:none;stroke:#ffef00;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 31.2790633,130.339301 c -3.81847,10.051344 -3.81847,20.102335 0,30.153679 0.98954,2.604558 -1.24671997,5.284258 -3.97898,4.737806 l -23.1203503,-4.62421 c -7.24112,-1.448154 -12.45341,-7.806266 -12.45341,-15.190259 0,-7.384697 5.21229,-13.74281 12.45341,-15.190963 l 23.1203503,-4.624211 c 2.73226003,-0.5461 4.96852,2.1336 3.97898,4.738158 z" />
              <path
                inkscape:connector-curvature="0"
                id="path304"
                style="fill:none;stroke:#ffef00;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m -7.801817,139.169259 c -1.51589,4.253794 -1.51589,8.507236 0,12.760677 l -8.52734,-2.552347 v -7.656335 z" />
              <path
                inkscape:connector-curvature="0"
                id="path308"
                style="fill:none;stroke:#ffef00;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 2.924957,149.82597 V 141.359303" />
              <path
                inkscape:connector-curvature="0"
                id="path312"
                style="fill:none;stroke:#ffef00;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 5.749957,149.82597 V 141.359303" />
              <path
                inkscape:connector-curvature="0"
                id="path316"
                style="fill:none;stroke:#ffef00;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 8.574957,149.82597 V 141.359303" />
              <path
                inkscape:connector-curvature="0"
                id="path318"
                style="fill:none;stroke:#ffef00;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 20.933297,149.825786 h -5.64444 V 141.35912 h 5.64444 z" />
              <path
                inkscape:connector-curvature="0"
                id="path322"
                style="fill:none;stroke:#ffef00;stroke-width:2.82222199;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 175.23168,130.162912 c 3.81811,10.051344 3.81811,20.102335 0,30.153678 -0.98954,2.604559 1.24672,5.284259 3.97863,4.737807 l 23.12035,-4.624211 c 7.24147,-1.448154 12.45376,-7.806266 12.45376,-15.190258 0,-7.384697 -5.21229,-13.742811 -12.45376,-15.190964 l -23.12035,-4.624211 c -2.73191,-0.5461 -4.96817,2.1336 -3.97863,4.738159 z" />
              <path
                inkscape:connector-curvature="0"
                id="path326"
                style="fill:none;stroke:#ffef00;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 213.31238,139.99287 c 1.51624,4.253794 1.51624,8.507235 0,12.760676 l 8.5277,-2.552346 v -7.656336 z" />
              <path
                inkscape:connector-curvature="0"
                id="path330"
                style="fill:none;stroke:#ffef00;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 205.43588,149.64958 V 141.182913" />
              <path
                inkscape:connector-curvature="0"
                id="path334"
                style="fill:none;stroke:#ffef00;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 202.26088,149.64958 V 141.182913" />
              <path
                inkscape:connector-curvature="0"
                id="path338"
                style="fill:none;stroke:#ffef00;stroke-width:2.30716658;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 199.08588,149.64958 V 141.182913" />
              <path
                inkscape:connector-curvature="0"
                id="path340"
                style="fill:none;stroke:#ffef00;stroke-width:2.9181776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 187.44403,149.649397 h 5.64445 v -8.466666 h -5.64445 z" />
                <path
                inkscape:connector-curvature="0"
                id="path344"
                style="fill:none;stroke:#fcee21;stroke-width:5.64444399;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 220.79147,146.339301 253.79147,146.339301 253.79147,241.66 430,241.66 V 241.66" />
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
                id="path1107"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="M 170.0,148.62067 H 214.03567" />
              <path
                inkscape:connector-curvature="0"
                id="path1085"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 145.52381,140.88764 c 1.90924,5.02567 1.90924,10.05134 0,15.07701 -0.49459,1.3021 0.62371,2.64195 1.98967,2.3689 l 11.55981,-2.3121 c 3.62091,-0.72425 6.22689,-3.90313 6.22689,-7.59531 0,-3.69217 -2.60598,-6.87105 -6.22689,-7.5953 l -11.55981,-2.31211 c -1.36596,-0.27305 -2.48426,1.0668 -1.98967,2.36891 z" />
              <path
                inkscape:connector-curvature="0"
                id="path56"
                style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
                d="m 44.321529,144.85408 -3.95358,1.18322 c -0.298803,0.0893 -0.503414,0.36406 -0.503414,0.67592 v 3.82834 c 0,0.31151 0.204611,0.58632 0.503414,0.67593 l 3.868561,1.15781 c -0.228953,-0.44238 -0.424392,-1.00965 -0.598311,-1.65241 l -2.362553,-0.70697 v -2.77742 l 2.402769,-0.71896 c 0.156281,-0.59231 0.377825,-1.14264 0.643114,-1.66546" />
              <!-- <path
                inkscape:connector-curvature="0"
                id="path1089"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 164.56417,145.30268 c 0.75777,2.1269 0.75777,4.2538 0,6.38034 l 4.26367,-1.27599 v -3.82835 z" /> -->
              <path
                inkscape:connector-curvature="0"
                id="path1093"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 160.62573,150.63086 v -4.23333" />
              <path
                inkscape:connector-curvature="0"
                id="path1097"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 159.03823,150.63086 v -4.23333" />
              <path
                inkscape:connector-curvature="0"
                id="path1101"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 157.45073,150.63086 v -4.23333" />
              <path
                inkscape:connector-curvature="0"
                id="path1103"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 151.62982,150.63079 h 2.82223 v -4.23333 h -2.82223 z" />
              <path
                inkscape:connector-curvature="0"
                id="path1063"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 64.047541,140.97583 c -1.90924,5.02567 -1.90924,10.05134 0,15.07702 0.49459,1.3021 -0.62336,2.64195 -1.98932,2.3689 l -11.560172,-2.31211 c -3.620558,-0.72425 -6.22688,-3.90313 -6.22688,-7.5953 0,-3.69218 2.606322,-6.87106 6.22688,-7.59531 l 11.560172,-2.3121 c 1.36596,-0.27305 2.48391,1.0668 1.98932,2.3689 z" />
              <path
                inkscape:connector-curvature="0"
                id="path90"
                style="opacity:0.5;fill:#bdccd4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.35277775"
                d="m 164.90467,152.18163 3.95358,-1.18322 c 0.2988,-0.0893 0.50341,-0.36442 0.50341,-0.67628 v -3.82799 c 0,-0.31185 -0.20461,-0.58667 -0.50341,-0.67592 l -3.86856,-1.15782 c 0.2293,0.44239 0.42439,1.00965 0.59831,1.65206 l 2.36255,0.70697 v 2.77742 l -2.40277,0.71931 c -0.15628,0.59196 -0.37747,1.14265 -0.64311,1.66547" />
              <!-- <path
                inkscape:connector-curvature="0"
                id="path1067"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 45.007169,145.39088 c -0.75812,2.12689 -0.75812,4.25379 0,6.38034 l -4.263672,-1.276 v -3.82835 z" /> -->
              <path
                inkscape:connector-curvature="0"
                id="path1071"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 48.945439,150.71906 v -4.23334" />
              <path
                inkscape:connector-curvature="0"
                id="path1075"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 50.532939,150.71906 v -4.23334" />
              <path
                inkscape:connector-curvature="0"
                id="path1079"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 52.120439,150.71906 v -4.23334" />
              <path
                inkscape:connector-curvature="0"
                id="path1081"
                style="fill:none;stroke:#c8c2cc;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="m 57.941171,150.71899 h -2.82222 v -4.23334 h 2.82222 z" />
              <path
                inkscape:connector-curvature="0"
                id="path1107"
                style="fill:none;stroke:#c8c2cc;stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:0.5"
                d="M 39.9,148.62067 H 0" />
              <!-- 流动 -->
              <path
                inkscape:connector-curvature="0"
                id="path1107"
                style="fill:none;stroke:url(#mobile-start-line-phone);stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 214.03567,148.62067 H 168.82774" />
              <path
                inkscape:connector-curvature="0"
                id="path1085"
                style="fill:none;stroke:#ffef00;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 145.52381,140.88764 c 1.90924,5.02567 1.90924,10.05134 0,15.07701 -0.49459,1.3021 0.62371,2.64195 1.98967,2.3689 l 11.55981,-2.3121 c 3.62091,-0.72425 6.22689,-3.90313 6.22689,-7.59531 0,-3.69217 -2.60598,-6.87105 -6.22689,-7.5953 l -11.55981,-2.31211 c -1.36596,-0.27305 -2.48426,1.0668 -1.98967,2.36891 z" />
              <path
                inkscape:connector-curvature="0"
                id="path1089"
                style="fill:none;stroke:#ffef00;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 164.56417,145.30268 c 0.75777,2.1269 0.75777,4.2538 0,6.38034 l 4.26367,-1.27599 v -3.82835 z" />
              <path
                inkscape:connector-curvature="0"
                id="path1093"
                style="fill:none;stroke:#ffef00;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 160.62573,150.63086 v -4.23333" />
              <path
                inkscape:connector-curvature="0"
                id="path1097"
                style="fill:none;stroke:#ffef00;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 159.03823,150.63086 v -4.23333" />
              <path
                inkscape:connector-curvature="0"
                id="path1101"
                style="fill:none;stroke:#ffef00;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 157.45073,150.63086 v -4.23333" />
              <path
                inkscape:connector-curvature="0"
                id="path1103"
                style="fill:none;stroke:#ffef00;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 151.62982,150.63079 h 2.82223 v -4.23333 h -2.82223 z" />
              <path
                inkscape:connector-curvature="0"
                id="path1063"
                style="fill:none;stroke:#ffef00;stroke-width:1.411111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 64.047541,140.97583 c -1.90924,5.02567 -1.90924,10.05134 0,15.07702 0.49459,1.3021 -0.62336,2.64195 -1.98932,2.3689 l -11.560172,-2.31211 c -3.620558,-0.72425 -6.22688,-3.90313 -6.22688,-7.5953 0,-3.69218 2.606322,-6.87106 6.22688,-7.59531 l 11.560172,-2.3121 c 1.36596,-0.27305 2.48391,1.0668 1.98932,2.3689 z" />
              <path
                inkscape:connector-curvature="0"
                id="path1067"
                style="fill:none;stroke:#ffef00;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 45.007169,145.39088 c -0.75812,2.12689 -0.75812,4.25379 0,6.38034 l -4.263672,-1.276 v -3.82835 z" />
              <path
                inkscape:connector-curvature="0"
                id="path1071"
                style="fill:none;stroke:#ffef00;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 48.945439,150.71906 v -4.23334" />
              <path
                inkscape:connector-curvature="0"
                id="path1075"
                style="fill:none;stroke:#ffef00;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 50.532939,150.71906 v -4.23334" />
              <path
                inkscape:connector-curvature="0"
                id="path1079"
                style="fill:none;stroke:#ffef00;stroke-width:1.15358329;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 52.120439,150.71906 v -4.23334" />
              <path
                inkscape:connector-curvature="0"
                id="path1081"
                style="fill:none;stroke:#ffef00;stroke-width:1.4590888;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 57.941171,150.71899 h -2.82222 v -4.23334 h 2.82222 z" />
              <path
                inkscape:connector-curvature="0"
                id="path1107"
                style="fill:none;stroke:url(#mobile-start-line-phone);stroke-width:2.82222199;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 41.03567,148.62067 H 0" />
            </g>
          </svg>
      </section>
      <section class="mobile-info-container">
        <div class="mobile-word-center">
          <div class="mobile-word-bg part-one-bg"></div>
          <div class="info-part-two">
            <div class="major-name">移动</div>
            <span class="major-intro-two">
              智能手机应用开发小组，简称移动组。小组在结构上前前后后经历了三次变革，主攻方向从Android应用/游戏开发变为Android应用/后台开发再到现在的纯Android应用开发。
            </span>
          </div>
          <!-- <div class="mobile-word-bg part-two-bg"></div> -->
          <div class="info-part-one">
            <span class="major-intro-one">
              我们与各大中小型企业、创业公司保持着紧密的合作，国内最早一批手机卡牌类游戏就<br v-if="$store.state.isPhone">出自我们之手，并被ChinaJoy邀请参会。
            </span>
            <div class="turn-page">
              <img v-lazy="require('../../assets/images/icons/mobile_arrow.png')" alt="">
              <span>向下滚动了解更多</span>
            </div>
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
    '$store.state.mobile': {
      handler(newValue, oldValue) {
        this.pathAnimate(newValue, oldValue)
      },
      deep: true
    },
    '$store.state.pages': (pages) => {
      if (pages < 2 || pages > 3.5) {
        return;
      }
      let pathList = $('#mobile-svg path');
      if (pathList.length <= 14) {
        // 出现一个问题
        return;
      }
      pathUtil.correctEndPath(pathList[14], pathList.slice(15, 21), pages, 2.5, 0.4);
      pathUtil.correctStartPath(pathList[27], pathList.slice(21, 27), pages, 3, 0.1);
    }
  },
  methods: {
    pathAnimate(newValue, oldValue) {
      let insidePercent;
      let height = $(window).height();
      let percent = ($(window).scrollTop() % height) / height;   // 计算翻页时候翻过当前页面的百分之几
      let pathList = $('#mobile-svg path');
      if (percent >= 0.5 && percent <= 1) {
        insidePercent = pathUtil.getEndInsidePer(percent, 0.9);
        if (percent < 0.9) {
          // 这条线需要动画是反过来的，这是设计师画的方向总是从灯座发起的
          pathUtil.lineAnimate(pathList[14], insidePercent);
        } else {
          pathUtil.socketAnimate(pathList.slice(15, 21), insidePercent, false);
        }
      } else {
        insidePercent = pathUtil.getStartInsidePer(percent, 0.1);
        if (percent < 0.1) {
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
  .mobile-bulb-layer {
    position: absolute;
    z-index: 1;
    width: 10.92rem;
    height: 2.98rem;
    left: 50%;
    top: 50%;
    transform: translateX(-50.5%) translateY(-84%);
  }
  .right-layer {
    position: absolute;
    z-index: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 52.5vh;
    background: bottom center no-repeat;
    background-size: cover;
  }
  .mobile-bg-bulb {
    top: 50%;
    left: 50%;
    transform: translateX(-52%) translateY(-53%);
    z-index: 3;
  }
  #mobile-svg {
    position: absolute;
    width: 100vw;
    z-index: 3;
    top: 50%;
    transform: translateY(-50%);
  }
  .mobile-bulb {
    z-index: 4;
    position: absolute;
    width: 5.5rem;
    height: 5.5rem;
    top: 50%;
    left: 50%;
    transform: translateX(-51%) translateY(-51.5%);
    /* left: 6.8rem;
    top: 1.9rem; */
  }
  .mobile-word-bg {
    position: absolute;
    z-index: 0;
    background-color: rgba(252, 238, 33, .3);
  }
  .part-one-bg {
    left: 1.64rem;
    bottom: 0.5rem;
    width: 4.5rem;
    height: 2rem;
  }
  .part-two-bg {
    top: 0.55rem;
    right: 0.5rem;
    width: 7rem;
    height: 1.4rem;
  }
  .mobile-svg-container {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
  .mobile-info-container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  .mobile-word-center {
    position: relative;
    width: 13rem;
    height: 8.5rem;
  }
  .info-part-one {
    position: absolute;
    z-index: 1;
    width: 9.7rem;
    border-left: 0.09rem solid #FFF77F;
    padding-left: 0.48rem;
    bottom: 0.3rem;
  }
  .info-part-two {
    position: absolute;
    z-index: 1;
    width: 9.7rem;
    border-left: 0.09rem solid #FFF77F;
    padding-left: 0.48rem;
    right: -0.2rem;
    top: 0.3rem;
  }
  .major-intro-one {
    color: #333229!important;
  }
  .info-part-one::after,
  .info-part-two::after {
    content: "";
    clear: both;
    display: block;
  }
  .major-name {
    position: absolute;
    font-size: 0.72rem;
    color: #DDE500;
    top: -0.66rem;
    left: 0.16rem;
  }
  .major-intro-two {
    margin-top: 0.48rem;
    text-align: end;
  }
  .major-intro-one, .major-intro-two {
    display: block;
    font-size: 0.32rem;
    color: #e6e3cf;
  }
}
@media only screen and (max-width: 740px) {
  .right-layer {
    position: absolute;
    width: 100%;
    height: 50%;
    z-index: 1;
    bottom: 0;
    left: 0;
    background: top center no-repeat;
    background-size: cover;
  }
  .mobile-bulb-layer {
    display: block;
    position: absolute;
    z-index: 2;
    width: 10.77rem;
    height: 3.62rem;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-35%);
  }
  section {
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  #mobile-svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .mobile-bg-bulb {
    top: 50%;
    left: 50%;
    transform: translateX(-50.4%) translateY(-50.5%);
  }
  .mobile-bulb {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 5.5rem;
    height: 5.5rem;
  }
  .info-part-one {
    position: absolute;
    z-index: 11;
    width: 7.3rem;
    border-left: 0.09rem solid #FFF77F;
    padding-left: 0.48rem;
    left: 1.6rem;
    top: 50%;
    transform: translateY(100%);
  }
  .info-part-two {
    position: absolute;
    z-index: 1;
    width: 7.3rem;
    border-left: 0.09rem solid #FFF77F;
    padding-left: 0.48rem;
    left: 1.6rem;
    top: 50%;
    transform: translateY(-200%);
  }
  .mobile-word-center {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .major-intro-one, .major-intro-two {
    display: block;
    font-size: 0.36rem;
    color: #e6e3cf;
  }
  .major-intro-two {
    margin-top: 0.40rem;
    color: #4a4a4a;
  }
  .major-name {
    position: absolute;
    font-size: 0.72rem;
    color: #DDE500;
    top: -0.66rem;
    left: 0.16rem;
  }
  .turn-page span {
    color: #DDE500;
  }
}
.container {
  background: center center no-repeat;
  background-size: cover;
}
</style>