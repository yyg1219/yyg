// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import store from './store'
import axios from 'axios'
import qs from 'qs' // 它的作用是能把json格式的直接转成data所需的格式

Vue.config.productionTip = false

Vue.use(ViewUI)

Vue.prototype.$http = axios // 全局注册 使用方式为：this.$axios
Vue.prototype.qs = qs // 全局注册 使用方式为：this.qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
