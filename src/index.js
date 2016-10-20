import 'style!css!less!./less/app.less'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Navbar from './components/Navbar.vue'

let vm = new Vue()

Vue.directive('nav', (data) => {
  vm.$emit('PageTransitionEvent', data)
})

let app = Vue.extend({
  components: {
    Navbar
  },

  created() {
    vm.$on('PageTransitionEvent', (data) => {
      this.notify('PageTransitionEvent', data)
    })
  },

  methods: {
    notify(eventName, data) {
      this.$broadcast(eventName, data)
    }
  }
})

class VonApp {
  constructor(routers, defaultRouterUrl) {
    this.routers = routers
    this.defaultRouterUrl = defaultRouterUrl
  }

  start() {
    let router = new VueRouter({
      history: false
    })

    router.map(this.routers)

    // router.beforeEach(() => {
    //
    // })
    //
    // router.afterEach(() => {
    //
    // })

    router.redirect({
      '*': this.defaultRouterUrl
    })

    router.start(app, '[von-app]')

    router.nextDirection = (direction) => {
      document.querySelector('[von-app]').setAttribute('transition-direction', direction);
    }

    router._go = router.go

    router.forward = router.go = (target) => {
      router.nextDirection('forward');
      setTimeout(() => { router._go(target) })
    }

    router.back = (target) => {
      router.nextDirection('back');
      setTimeout(() => { router._go(target) })
    }

    window.$router = router
  }
}

export default {
  install(Vue, options) {
    Vue.transition('view', {enterClass: 'view-enter', leaveClass: 'view-leave'})

    const routers = options.routers
    const defaultRouterUrl = options.defaultRouterUrl

    let app = new VonApp(routers, defaultRouterUrl)
    app.start()
  }
}
