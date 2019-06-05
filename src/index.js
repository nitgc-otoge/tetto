import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

require('./style/style.scss')

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})