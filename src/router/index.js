import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Music from '../pages/Music.vue'
import Teaser from '../pages/Teaser.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      name: 'teaser',
      path: '/',
      component: Teaser
    },
    {
      name: 'music',
      path: '/music',
      component: Music
    },
  ]
})

export default router