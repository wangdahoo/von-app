require('style!css!less!./less/app.less')

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// components
import Index from './components/Index.vue'
import About from './components/About.vue'
import Navbar from './components/Navbar.vue'

const routers = {
  '/': {
    component: Index
  },

  '/about': {
    component: About
  }
}

Vue.transition('page', {enterClass: 'page-enter', leaveClass: 'page-leave'})

let app = Vue.extend({
  components: {
    Navbar: Navbar
  }
})

let router = new VueRouter({
  history: true
})

router.map(routers)

router.beforeEach(() => {

})

router.afterEach(() => {

})

router.redirect({
  '*': '/'
})

router.start(app, '#app')

window.$router = router
