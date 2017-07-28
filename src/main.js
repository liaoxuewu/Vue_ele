// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import app from './app.vue'
import VueResource from 'vue-resource'

import './mock/mockServer'

import './common/stylus/index.styl'

// 声明使用vue插件
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app),
  router
})

