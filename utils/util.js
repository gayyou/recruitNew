const EventUtil = {
    
    addHandler: (function () {
        if (window.addEventListener) {
            return function () {
                arguments[0].addEventListener(arguments[1], arguments[2], false);
            };
        } else if (window.attachEvent) {
            return function () {
                arguments[0].attachEvent("on" + arguments[1], arguments[2]);
            };
        } else {
            return function () {
                arguments[0]["on" + arguments[1]] = arguments[2];
            };
        }
    })(),

    removeHandler: (function() {
        if (window.addEventListener) {
            return function () {
                arguments[0].removeEventListener(arguments[1], arguments[2]);
            };
        } else if (window.attachEvent) {
            return function () {
                arguments[0].detachEvent("on" + arguments[1], arguments[2]);
            };
        } else {
            return function () {
                arguments[0]["on" + arguments[1]] = null;
            };
        }
    })()
};
export default {
    EventUtil,
}