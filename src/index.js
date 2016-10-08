import 'style!css!less!../src/less/app.less'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Navbar from './components/Navbar'

let vm = new Vue()

let app = Vue.extend({
  components: {
    Navbar: Navbar
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

class VueApp {
  constructor(routers, defaultRouterUrl) {
    this.routers = routers
    this.defaultRouterUrl = defaultRouterUrl
  }

  start() {

    let router = new VueRouter({
      history: false
    })

    router.map(this.routers)

    router.beforeEach((t) => {
      //  console.log(t.to, t.from);
      let navbars = [t.from.navbar || {}, t.to.navbar]
      vm.$emit('PageTransitionEvent',
        {reverse: window.nextTransition == 'back', navbars: navbars})
      t.next()
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

    let app = new VueApp(routers, defaultRouterUrl)
    app.start()
  }
}
