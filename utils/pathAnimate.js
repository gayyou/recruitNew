/**
 * @description 这一页的代码的流程如下：
 * 先由设定的分割百分比求出内部百分比，然后根据内部百分比来进行动画的演示。
 */

/**
 * 
 * @param {path Dom} path path标签
 * @param {*} totalLength 总长度
 * @param {*} drawLength 需要画的长度
 */
const animate = (path, totalLength, drawLength, reverse = false) => {
  if (reverse) {
    path.style.strokeDashoffset = drawLength - totalLength;  // 这个是画的长度的动画效果
  } else {
    path.style.strokeDashoffset = totalLength - drawLength;  // 这个是画的长度的动画效果
  }
  if (0 == drawLength) {
    // 这是针对于IE浏览器在缩短电线长度后无法完全缩短的情况做兼容
    path.style.strokeOpacity = 0;
  } else {
    path.style.strokeOpacity = 1;
  }
  if (drawLength >= totalLength ) {
    path.style.strokeDasharray = "none";
  } else {
    path.style.strokeDasharray = totalLength;
  }
};

const pathAnimateUtil = {
  /**
   * @author Weybn
   * @description 对灯泡所有的path进行动画效果
   * @param {JQDom} DomList 
   * @param {Number} insidePercent 内部百分比，主要用作动画过程
   * @param {Boolean} reverse 默认是false，这个是判断需不需要反过来动画。设置这个的原因是设计稿电线方向总是从灯座开始的，灯座动画效果也是从一个方向开始的
   */
  socketAnimate(DomList, insidePercent, reverse = false) {
    if (insidePercent > 0.88) {
      // 由于监听页面滚动的函数式具有隔一定时间监听的，所以一般不会在监听到刚好在分割百分比的时候，所以需要有一定的完善处理
      insidePercent = 1;
    }
    if (insidePercent < 0.1) {
      insidePercent = 0;
    }
    for (let i = 0; i < DomList.length; i++) {
      let path = DomList[i];
      let totalLength = path.getTotalLength();
      let drawLength = totalLength * insidePercent;
      animate(path, totalLength, drawLength, reverse);
    }
  },
  /**
   * @author Weybn
   * @description 对电线的动画效果进行控制
   * @param {Dom} path dom节点
   * @param {Number} insidePercent 内部百分比
   * @param {Boolean} reverse 默认是false，这个是判断需不需要反过来动画。设置这个的原因是设计稿电线方向总是从灯座开始的，灯座动画效果也是从一个方向开始的
   */
  lineAnimate(path, insidePercent, reverse = false) {
    if (insidePercent < 0.05) {
      insidePercent = 0;
    }
    if (insidePercent > 0.9) {
      insidePercent = 1;
    }
    let totalLength = path.getTotalLength();
    let drawLength = totalLength * insidePercent;
    animate(path, totalLength, drawLength, reverse);
  },
  /**
   * @author Weybn
   * @description 开始的动画的进度百分比
   * @param {Number} percent 当前百分比
   * @param {Number} divisionPercent 分割百分比
   */
  getStartInsidePer(percent, divisionPercent) {
    let insidePercent;
    if (percent <= divisionPercent) {
      insidePercent = percent / divisionPercent
    } else {
      insidePercent = (percent - divisionPercent) / (0.5 - divisionPercent);
    }
    return insidePercent;
  },
  /**
   * @description 得到后半段动画的进度百分比
   * @param {*} percent 
   * @param {*} divisionPercent 
   */
  getEndInsidePer(percent, divisionPercent) {
    let insidePercent;
    if (percent <= divisionPercent) {
      insidePercent = (percent - 0.5) / (divisionPercent - 0.5);
    } else {
      insidePercent = (percent - divisionPercent) / (1 - divisionPercent);
    }
    return insidePercent;
  },
  /**
   * @author Weybn
   * @description 对path动画残余进行监听（残余的原因是监听窗口滚动频率太低）
   * @param {*} line 
   * @param {*} socket 
   * @param {*} pages 
   * @param {*} startpages 
   * @param {*} divisionPercent 
   */
  correctEndPath(line, socket, pages, startpages, divisionPercent) {
    if (pages > startpages + divisionPercent) {
      this.lineAnimate(line, 1);
      if (pages >= startpages + 0.5) {
        this.socketAnimate(socket, 1);
      }
    } else {
      this.socketAnimate(socket, 0);
      if (pages < startpages) {
        this.lineAnimate(line, 0);
      }
    }
  },
  correctStartPath(line, socket, pages, startpages, divisionPercent) {
    if (pages < startpages + divisionPercent) {
      this.lineAnimate(line, 0);
      if (pages < startpages) {
        this.socketAnimate(socket, 0);
      }
    } else {
      this.socketAnimate(socket, 1);
      if (pages > startpages + 0.5) {
        this.lineAnimate(line, 1);
      }
    }
  }
}

module.exports = pathAnimateUtil;