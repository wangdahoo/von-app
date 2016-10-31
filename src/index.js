import 'style!css!less!./less/app.less'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Navbar from './components/Navbar.vue'
import channel from './services/channel.vue'
import utils from './services/utils.js'

Vue.directive('nav', (data) => {
  channel.$emit('PageTransitionEvent', data)
})

let app = Vue.extend({
  components: {
    Navbar
  },

  data() {
    return {
      gradeClass: 'grade-a'
    }
  },

  ready() {
    // grade-a for ios, grade-b for android & other
    if (utils.is_ios_device()) {
      this.gradeClass = 'grade-a'
    } else {
      this.gradeClass = 'grade-b'
    }
    document.querySelector('body').className = this.gradeClass
  }
})

let VonAppConfig = {
  beforeEach: undefined,
  afterEach: undefined,
  useHistory: false
}

class VonApp {
  constructor(routers, defaultRouterUrl) {
    this.routers = routers
    this.defaultRouterUrl = defaultRouterUrl
  }

  start() {
    let router = new VueRouter({
      history: VonAppConfig.useHistory
    })

    router.map(this.routers)

    if (typeof VonAppConfig.beforeEach == 'function')
      router.beforeEach(VonAppConfig.beforeEach)
    if (typeof VonAppConfig.afterEach == 'function')
      router.afterEach(VonAppConfig.afterEach)

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

VonApp.install = (Vue, options) => {
  Vue.transition('view', {enterClass: 'view-enter', leaveClass: 'view-leave'})

  const routers = options.routers
  const defaultRouterUrl = options.defaultRouterUrl

  let vonApp = new VonApp(routers, defaultRouterUrl)
  vonApp.start()
}

VonApp.setConfig = (name, value) => {
  if (['beforeEach', 'afterEach', 'useHistory'].indexOf(name) == 1) throw 'Unknown config name.'
  VonAppConfig[name] = value
}

VonApp.getConfig = (name) => {
  if (['beforeEach', 'afterEach', 'useHistory'].indexOf(name) == 1) throw 'Unknown config name.'
  return VonAppConfig[name]
}

export default VonApp

window.VonApp = VonApp
