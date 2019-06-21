import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Music from '../pages/Music.vue'
import Extra from '../pages/Extra.vue'
import Credit from '../pages/Credit.vue'

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
      name: 'extra',
      path: '/extra',
      component: Extra
    },
    {
      name: 'credit',
      path: '/credit',
      component: Credit
    }
  ]
})

export default router