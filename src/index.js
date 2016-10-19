import 'style!css!less!./less/app.less'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let vm = new Vue()

let app = Vue.extend({
  components: {

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
