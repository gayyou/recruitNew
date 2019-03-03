let throttle = (fn, wait) => {
  let previous = new Date().getTime();

  return function() {
    let now = new Date().getTime();
    let context = this;

    if (now - previous >= wait) {
        fn.apply(context, arguments);
        previous = now; // 执行后更新 previous 值
    }
  }
}

module.exports = throttle;