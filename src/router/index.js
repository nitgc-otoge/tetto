import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Music from '../pages/Music.vue'
import Credit from '../pages/Credit.vue'
import { createBrotliDecompress } from 'zlib';

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'music',
      path: '/music',
      component: Music
    },
    {
      name: 'credit',
      path: '/credit',
      component: Credit
    }
  ]
})

export default router