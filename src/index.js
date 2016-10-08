import 'style!css!less!../src/less/app.less'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Navbar from './components/Navbar'

class App {
  constructor(routers, defaultRouterUrl) {
    this.routers = routers
    this.defaultRouterUrl = defaultRouterUrl
  }

  start() {
    let app = Vue.extend({
      components: {
        Navbar: Navbar
      }
    })

    let router = new VueRouter({
      history: false
    })

    router.map(this.routers)

    router.beforeEach(() => {
      // todo
    })

    router.afterEach(() => {
      // todo
    })

    router.redirect({
      '*': this.defaultRouterUrl
    })

    router.start(app, '#app')

    window.$router = router
  }
}

export default {
  install(Vue, options) {
    Vue.transition('page', {enterClass: 'page-enter', leaveClass: 'page-leave'})

    const routers = options.routers
    const defaultRouterUrl = options.defaultRouterUrl

    let app = new App(routers, defaultRouterUrl)
    app.start()
  }
}
