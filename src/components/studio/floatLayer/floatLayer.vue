<template>
  <section class="studio-right-float"
    :class="active ? 'studio-float-active' : ''"
    v-lazy:background-image="$store.state.isPhone ? require('../../../assets/images/background/phonebg/studio_phone_bg.jpg') : require('../../../assets/images/background/float-bg.png')"
  >
    <section class="section-left">
      <div class="image-container" @click="showImg" v-if="$store.state.isPhone">
        <li index="1"><img src="../../../assets/images/background/award_pla.jpg" alt="" index="1"></li>
        <li index="2"><img src="../../../assets/images/background/award_paper.jpg" alt="" index="2"></li>
        <li index="3"><img src="../../../assets/images/background/group_photo.jpg" alt="" index="3"></li>
      </div>
      <div class="words-container">
        <span><b>大学生“小平科技创新团队”“QG工作室”</b> 于2005年11月成立，由团队负责人计算机学院副院长谢光强老师创建，现有在校学生40多人，宗旨为负责发掘和培养创新型人才，大力提高学生科研创新、团队协作的能力。</span>
        <span>“QG工作室”承担大学生创新创业训练计划（国家级）、广东省大学生科技创新培育专项资金（重点）等各类科技项目<b>40多项，申请专利和软件著作权等成果30余项，获得国家、省、校级各类科技竞赛奖项180余项，其中省级以上奖项60多项。工作室成员代表广东省获得第十四届“挑战杯”全国大学生课外学术科技作品竞赛“智慧城市”专项赛决赛“特等奖”（全国共三项）、第十二届“挑战杯”全国大学生课外学术科技作品竞赛终审决赛“一等奖”</b>，均刷新了学校在“挑战杯”竞赛中获奖层次的记录！<b>工作室所获成果收到了广东卫视、广州日报、新快报等主流媒体的广泛关注和报道，接受了广东卫视并介绍了项目的主要内容和成果，采访内容在《广东新闻联播》中头条播出，作品还获得了广东省教育厅推荐，代表广东省参加第十届全国大学生创新创业年会。</b></span>
        <span>“QG工作室”在学校的大力支持下，经过十几年的建设，形成了自己独特的文化和传承，<b>工作室把团队精神的培养上升到与学术与科研能力并重，团队具有很强的凝聚力和战斗力，培养了大批多品学兼优、专业知识扎实、能独当一面的创新型人才</b>，获得了丰硕的成果，团队成为广东工业大学“标志性获奖团队”，<b>于2017年被授予以邓小平同志命名的大学生“小平科技创新团队”称号，该项称号是由共青团中央、全国青联、全国学联、全国少工委、中国青少年科技创新奖励基金颁发（全国共50支，广东省仅2支）。</b></span>
        <span>团队的毕业生曾获得<b>“广东工业大学十佳优秀毕业生”</b>，<b>“广东工业大学十佳创新支星”</b>称号，<b>大部分毕业生进入了华为、阿里巴巴、百度、腾讯等知名IT公司及企事业单位工作，成为了核心技术骨干，获得用人单位的肯定和好评，</b>曾获得<b>百度“最佳个人”（该奖项颁发为一年一度，颁发给百度优秀杰出员工，名额仅五个），腾讯“优秀员工”、“腾讯微信事业群绩效突出者”、另有部分毕业生或“推免”留校深造或到海内外高校继续攻读硕（博）士，或在毕业后进行了创业，获得了初步的成功！</b></span>
      </div>
      <div class="image-container" @click="showImg" v-if="!$store.state.isPhone">
        <li index="1"><img src="../../../assets/images/background/award_pla.jpg" alt="" index="1"></li>
        <li index="2"><img src="../../../assets/images/background/award_paper.jpg" alt="" index="2"></li>
        <li index="3"><img src="../../../assets/images/background/group_photo.jpg" alt="" index="3"></li>
      </div>
    </section>
    <div class="right-arrow-container"
      @click="hideLayer"
      v-if="!$store.state.isPhone"
    >
      <img src="../../../assets/images/icons/left_arrow.png" alt="">
    </div>
    <div class="enlarge-img">
      <div class="close-video" @mousedown="showImgLayer" @touchend="hideImgLayer" @mouseup="hideImgLayer" @mouseleave="hideImgLayer">
        <img style="display: none" :src="$store.state.isPhone ? require('../../../assets/images/icons/phone_close.png') : require('../../../assets/images/icons/icon_roundclose.png')" alt="">
        <img :src="$store.state.isPhone ? require('../../../assets/images/icons/phone_close.png') : require('../../../assets/images/icons/icon_roundclose_fill.png')" alt="">
      </div>
      <div class="center-img">
        <img :src="imgSrc" alt="">
      </div>      
    </div>
    <div class="close-layers" v-if="$store.state.isPhone" @touchend="hideLayer">
      <img :src="$store.state.isPhone ? require('../../../assets/images/icons/phone_close.png') : require('../../../assets/images/icons/icon_roundclose_fill.png')" alt="">
    </div>
  </section>  
</template>

<script>
export default {
  props: [
    'active'
  ],
  data() {
    return {
      imgSrc: null
    }
  },
  mounted() {
    // alert($('.studio-right-float').height())
    $('.studio-right-float')[0].onmousewheel = (event) => {
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    }
    $('.studio-right-float')[0].ontouchend = (event) => {
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    }
    $('.studio-right-float')[0].ontouchmove = (event) => {
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    }
    $('.studio-right-float')[0].ontouchstart = (event) => {
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    }
    $('.enlarge-img')[0].ontouchend = (event) => {
      event.preventDefault()
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    }
    $('.enlarge-img')[0].ontouchmove = (event) => {
      event.preventDefault()
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    }
    $('.enlarge-img')[0].ontouchstart = (event) => {
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
      event.preventDefault()
    }
  },
  methods: {
    hideLayer(event) {
      this.$emit('hideFloat', false);
    },
    showImg(event) {
      if (event.target.tagName == "DIV") {
        return;
      }
      let index = parseInt(event.target.getAttribute('index'));
      let imgList = $('.image-container img');
      this.imgSrc = imgList[index - 1].getAttribute('src');
      $('.enlarge-img')[0].style.display = 'block';
    },
    showImgLayer(event) {
      event.preventDefault();
      let imgList = $('.close-video img');
      imgList[0].style.display = 'block';
      imgList[1].style.display = 'none';
      
    },
    hideImgLayer(event) {
      event.preventDefault();
      let imgList = $('.close-video img');
      imgList[0].style.display = 'none';
      imgList[1].style.display = 'block';
      // 关闭播放
      if (event.type === 'mouseup' || event.type === 'touchend') {
        $('.enlarge-img')[0].style.display = 'none';
      }
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 740px) {
  .section-left {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 18.76rem;
  }
  .close-video {
    cursor: pointer;
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
    width: 1rem;
    height: 1rem;
  }
  .close-video>img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .center-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 9.6rem;
    height: 6.56rem;
  }
  .center-img>img {
    position: absolute;
    top: 0;
    left: 0;
    width: 9.6rem;
    height: 6.56rem;
  }
  .enlarge-img {
    display: none;
    position: absolute;
    z-index: 12;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, .9);
  }
  .studio-right-float {
    position: absolute;
    right: -19.2rem;
    top: 0;
    z-index: 1000;
    width: 19.2rem;
    height: 100%;
    background-color: #fff;
    transition: transform 1s ease;
    background: center center no-repeat;
  }
  .studio-float-active {
    transform: translateX(-19.2rem);
  }
  .right-arrow-container {
    position: absolute;
    width: 0.48rem;
    height: 100%;
    background: url(../../../assets/images/background/studio_right_float.png) center right no-repeat;
    right: 0;
    top: 0;
    cursor: pointer;
  }
  .right-arrow-container>img {
    position: absolute;
    display: block;
    right: 0.1rem;
    top: 50%;
    width: 0.27rem;
    height: 0.5rem;
    transform: translateY(-50%);
  }
  .words-container {
    position: relative;
    width: 17.5rem;
    margin: 0.7rem auto;
  }
  .words-container::after {
    content: "";
    display: block;
    clear: both;
  }
  .words-container>span>b {
    color: #8600e6;
  }
  .words-container>span {
    font-size: 0.24rem;
    display: block;
    color: #333332;
    text-indent: 0.48rem;
  }
  .image-container {
    margin: 0.5rem auto;
    width: 9rem;
  }
  .image-container>li {
    cursor: pointer;
    position: relative;
    float: left;
    width: 2.4rem;
    height: 1.64rem;
    margin-left: 0.88rem;
  }
  .image-container>li>img {
    width: 100%;
    height: 100%;
  }
  .image-container>li:nth-child(1) {
    margin-left: 0!important;
  }
}
@media only screen and (max-width: 740px) {
  .enlarge-img {
    display: none;
    position: absolute;
    z-index: 12;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, .9);
  }
  .studio-right-float {
    position: absolute;
    overflow:auto!important;
    /* overflow-y: scroll!important; */
    top: -100vh;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100vh;
    transition: transform 1s ease;
    background: center center no-repeat;
  }
  .studio-float-active {
    transform: translateY(100vh);
  }
  .image-container {
    position: relative;
    width: 8.8rem;
    margin: 1.8rem auto 0 auto;
  }
  .image-container::after {
    content: "";
    display: block;
    clear: both;
  }
  .image-container>li {
    position: relative;
    float: left;
    width: 4rem;
    height: 2.73rem;
    margin-left: 0.8rem;
  }
  .image-container>li:nth-child(1) {
    margin-left: 0rem;
  }
  .image-container>li:nth-child(3) {
    margin: 0.48rem 2.3rem;
  }
  .image-container>li>img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .words-container {
    font-size: 0.36rem;
    color: #454348;
    width: 9rem;
    margin: 0.36rem auto;
  }
  .words-container::after {
    content: "";
    display: block;
    clear: both;
  }
  .words-container>span {
    display: block;
  }
  .close-layers,
  .enlarge-img>.close-video {
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    top: 0.3rem;
    left: 0.6rem;
  }
  .close-layers>img {
    width: 100%;
    height: 100%;
  }
  .enlarge-img img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
  b {
    color: #8600e6;
  }
}
</style>
