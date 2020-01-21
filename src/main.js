import Vue from 'vue'
import App from './App'
import Loading from './components/loading/loading'
import store from './store/index'
import VueLazyload from 'vue-lazyload'
import loading from './components/loading/loading.vue'

Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
/* eslint-disable no-new */

let vue = new Vue({
  store,
  render: h => h(Loading)
}).$mount('#page-loading')
