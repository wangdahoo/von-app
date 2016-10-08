<template>
  <div class="navbar">

    <div class="navbar-inner"
         :class="{'navbar-from-center-to-left': state == 1, 'navbar-on-left': state == 2}">
      <div class="left">
        <a v-if="navbars[0] && navbars[0].showBackLink" class="link back" @click="back()">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </div>
      <div class="center sliding" :style="{transform: 'translate3d(-' + x0 + 'px,0,0)'}">
        {{ navbars[0] && navbars[0].title }}
      </div>
      <div class="right">
        {{{ navbars[0] && navbars[0].rightItem }}}
      </div>
    </div>

    <div class="navbar-inner" :class="{'navbar-on-right': state == 0, 'navbar-from-right-to-center': state == 1}">
      <div class="left">
        <a v-if="navbars[1] && navbars[1].showBackLink" class="link back" @click="back()">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </div>
      <div class="center sliding" :style="{transform: 'translate3d(' + x1 + 'px,0,0)'}">
        {{ navbars[1] && navbars[1].title }}
      </div>
      <div class="right">
        {{{ navbars[1] && navbars[1].rightItem }}}
      </div>
    </div>

  </div>
</template>
<style>

</style>
<script>
  import classie from '../classie'
  import Vue from 'vue'

  function d(n) {
    return (document.body.offsetWidth - document.querySelectorAll('.navbar-inner > .center')[n].offsetWidth - 20) / 2
  }

  export default{
    data() {
      return {
        navbars: [],
        state: 0, // 0: setup, 1: transition, 2: end
        x0: 0,
        x1: 0
      }
    },

    created() {
      this.$on('PageTransitionEvent', (data) => {
//        console.log(data.navbars)
        this.navbars = data.navbars
        Vue.nextTick(() => {
          this.setup()
          setTimeout(this.transition)
        })
      })
    },
    
    ready() {

    },

    methods: {
      setup(reverse) {
        this.state = 0
        this.x0 = 0
        this.x1 = d(1)
      },

      transition() {
        this.state = 1
        this.x0 = d(0)
        this.x1 = 0
        setTimeout(this.transitionEnd, 400)
      },

      transitionEnd() {
        this.state = 2
        this.x1 = 0
      },

      back() {
        classie.addClass(document.getElementById('app'), 'transition-reverse')
        setTimeout(() => {
          classie.removeClass(document.getElementById('app'), 'transition-reverse')
        }, 500)
        $router.go({ path: '/' })
      }
    }
  }
</script>
