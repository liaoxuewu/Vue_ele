import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import app from './app.vue'
import './mock/mockServer'

import "./common/styuls/index.styl"

// 声明vue插件
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(app),
  router
})
