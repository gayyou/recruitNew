import Vue from 'vue'
import App from './App'
import store from './store/index'
import VueLazyload from 'vue-lazyload'
import loading from './components/loading/loading.vue'

Vue.use(VueLazyload, {
  preload: 2
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  // router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#page-loading',
  store,
  components: { loading },
  template: '<loading/>'
})