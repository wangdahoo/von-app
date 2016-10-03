require('style!css!less!./less/app.less')

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

Vue.transition('page', {enterClass: 'page-from-right-to-center', leaveClass: 'page-from-center-to-left'})

let app = Vue.extend({
  components: {
    // Navbar: ToolBar
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
