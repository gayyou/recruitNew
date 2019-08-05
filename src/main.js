import Vue from 'vue'
import App from './App'
import store from './store/index'
import VueLazyload from 'vue-lazyload'
import loading from './components/loading/loading.vue'

Vue.use(VueLazyload)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  // router,
  components: { App },
  template: '<App/>'
})

let vue = new Vue({
  el: '#page-loading',
  store,
  components: { loading },
  template: '<loading/>'
})

console.log(Vue.prototype.constructor.options)
// console.log(vue);
let bVue = new Vue({
  components: { loading },
  template: '<loading/>'
})
console.log(bVue.constructor.options);