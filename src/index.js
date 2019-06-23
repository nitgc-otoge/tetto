import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

require('./style/style.scss')

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})