<template>
  <div class="video-container">
      <div class="close-video" @mousedown="showLayer" @mouseup="hideLayer" @mouseleave="hideLayer">
      <img style="display: none" src="../../../assets/images/icons/icon_roundclose.png" alt="">
      <img src="../../../assets/images/icons/icon_roundclose_fill.png" alt="">
    </div>
    <video id="qg-video" src="http://pno1340uh.bkt.clouddn.com/rec_video.mp4" height="100%" width="100%" controls="controls"></video>
  </div>
</template>

<script>
export default {
  methods: {
    showLayer(event) {
      event.preventDefault();
      let imgList = $('.close-video img');
      imgList[0].style.display = 'block';
      imgList[1].style.display = 'none';
    },
    hideLayer(event) {
      event.preventDefault();
      let imgList = $('.close-video img');
      imgList[0].style.display = 'none';
      imgList[1].style.display = 'block';
      // 关闭播放
      if (event.type === 'mouseup') {
        $('.video-container')[0].style.display = 'none';
      } 
    }
  },
}
</script>

<style scoped>
.video-container {
  position: fixed;
  display: none;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
}
#qg-video {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.close-video {
  cursor: pointer;
  position: absolute;
  z-index: 3;
  right: 0.2rem;
  top: 0.2rem;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #fff;
}
.close-video>img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
