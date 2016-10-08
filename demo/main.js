import Vue from 'vue'
import VueApp from 'vue-app'

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

Vue.use(VueApp, {routers: routers, defaultRouterUrl: '/'})
