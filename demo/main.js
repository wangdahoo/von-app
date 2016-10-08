import Vue from 'vue'
import VueApp from 'vue-app'

// components
import Index from './components/Index.vue'
import About from './components/About.vue'

const routers = {
  '/': {
    component: Index,
    navbar: {
      title: '应用首页'
    }
  },

  '/about': {
    component: About,
    navbar: {
      title: '关于我们',
      showBackLink: true,
      rightItem: '<a class="link icon-only"><i class="icon icon-bars"></i></a>'
    }
  }
}

Vue.use(VueApp, {routers: routers, defaultRouterUrl: '/'})
