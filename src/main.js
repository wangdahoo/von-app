import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// components
import Index from './components/Index.vue'
import About from './components/About.vue'

const routers = {
  '/': {
    component: Index
  },

  '/about': {
    component: About
  }
}

import Navbar from './components/Navbar.vue'

let app = Vue.extend({
  components: {
    Navbar
  }
})
let router = new VueRouter({
  history: false
})

router.map(routers)

// router.beforeEach(() => {
//
// })
//
// router.afterEach(() => {
//
// })

router.redirect({
  '*': '/'
})

router.start(app, '#app')

window.$router = router
