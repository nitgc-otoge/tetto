import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
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
      name: 'about',
      path: '/about',
      component: About
    },
  ]
})

export default router