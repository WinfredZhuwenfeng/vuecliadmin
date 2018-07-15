// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './assets/css/index.css'
// import echarts from '../node_modules/echarts/dist/echarts.js'
Vue.config.productionTip = false

Vue.use({
  install (Vue, options) {
    Vue.prototype.router = router
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
