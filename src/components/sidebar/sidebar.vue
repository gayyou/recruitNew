<template>
  <div class="sidebar" >
    <li v-for="(item, index) in pages"
        :key="index"
        :page="item"
        @click="switchPage"></li>
  </div>
</template>

<script>
export default {
  props: ['currentPage', 'isMoving'],
  data() {
    return {
      circleRgbas: [
        '#662d91',
        '#ff3333',
        '#2b8be1',
        '#ffef00',
        '#39b54a',
        '#f15a24',
        '#c69c6d',
        '#ff7bac',
      ],
      pages: [1, 2, 3, 4, 5, 6, 7 ,8],
      nextPage: -1,
      nextTimeoutID: null,
    }
  },
  methods: {
    switchPage(event) {
      if (this.isMoving == true) {
        if (this.nextTimeoutID) {
          clearTimeout(this.nextTimeoutID);
        }
        this.nextTimeoutID = setTimeout(this.switchPage.bind(this, event));
        return;
      }
      let list = $('.sidebar li');
      let currentPage = this.currentPage - 1;
      let nextPage = event.target.getAttribute('page') - 1;
      list[currentPage].style.backgroundColor = '#fff';
      list[currentPage].style.boxShadow = '';
      list[nextPage].style.backgroundColor = this.circleRgbas[nextPage];
      list[nextPage].style.boxShadow = '0 0 16px 1px ' + this.circleRgbas[nextPage];
      this.nextPage = nextPage + 1;
      this.$emit('choicePage', this.nextPage);
    }
  },
  watch: {
    currentPage(newValue, oldValue) {
      if (newValue == -1) {
        // 所有页数的初始值是-1，所以遇到这个说明是页数初始化，不会调用这个
        return;
      }
      let list = $('.sidebar li');
      let nextPage = newValue - 1;
      if (oldValue === -1) {
        // 第一次传值过来的时候，oldValue是undefined，这是初始化左侧圆圈
        list[nextPage].style.backgroundColor = this.circleRgbas[nextPage];
        list[nextPage].style.boxShadow = '0 0 16px 1px ' + this.circleRgbas[nextPage];
        return ;
      }
      let currentPage = oldValue - 1;
      list[currentPage].style.backgroundColor = '#fff';
      list[currentPage].style.boxShadow = '';
      list[nextPage].style.backgroundColor = this.circleRgbas[nextPage];
      list[nextPage].style.boxShadow = '0 0 16px 1px ' + this.circleRgbas[nextPage];
    }
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  z-index: 110;
  /* display: flex;
  justify-content: center; */
  width: 0.3rem;
  height: 4.88rem;
  left: 0.96rem;
  bottom: 0.6rem;
}
.sidebar li {
  cursor: pointer;
  display: block;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background-color: #fff;
  margin-bottom: 0.36rem;
  transition: background-color 1.3s ease, box-shadow 1.3s ease;
}
/* .circle-container {
  width: 100%;
} */
</style>
