import Vue from 'vue'
import VonApp from 'von-app'

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

Vue.use(VonApp, {routers: routers, defaultRouterUrl: '/'})
