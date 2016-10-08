<template>
  <div v-if="!reverse" class="navbar">
    <div v-if="state != 2" class="navbar-inner"
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

    <div class="navbar-inner"
         :class="{'navbar-on-right': state == 0, 'navbar-from-right-to-center': state == 1}">
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

  <!-- reversed transition -->
  <div v-if="reverse" class="navbar">
    <div class="navbar-inner"
         :class="{'navbar-from-left-to-center': state == 1, 'navbar-on-left': state == 0}">
      <div class="left">
        <a v-if="navbars[1] && navbars[1].showBackLink" class="link back" @click="back()">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </div>
      <div class="center sliding" :style="{transform: 'translate3d(-' + x1 + 'px,0,0)'}">
        {{ navbars[1] && navbars[1].title }}
      </div>
      <div class="right">
        {{{ navbars[1] && navbars[1].rightItem }}}
      </div>
    </div>

    <div v-if="state != 2" class="navbar-inner"
         :class="{'navbar-on-right': state == 2, 'navbar-from-center-to-right': state == 1}">
      <div class="left">
        <a v-if="navbars[0] && navbars[0].showBackLink" class="link back" @click="back()">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </div>
      <div class="center sliding" :style="{transform: 'translate3d(' + x0 + 'px,0,0)'}">
        {{ navbars[0] && navbars[0].title }}
      </div>
      <div class="right">
        {{{ navbars[0] && navbars[0].rightItem }}}
      </div>
    </div>
  </div>

</template>
<style>

</style>
<script>
  import classie from '../classie'
  import Vue from 'vue'

  const pageTransitionDur = 400;

  function d(n) {
    return (document.body.offsetWidth - document.querySelectorAll('.navbar-inner > .center')[n].offsetWidth - 20) / 2
  }

  export default{
    data() {
      return {
        reverse: false,
        navbars: [],
        state: 0, // 0: setup, 1: transition, 2: end
        x0: 0,
        x1: 0
      }
    },

    created() {
      this.$on('PageTransitionEvent', (data) => {
//        console.log(data.navbars)
        this.reverse = data.reverse
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
      setup() {
        this.state = 0
        Vue.nextTick(() => {
          this.x0 = 0
          this.x1 = d(1)
        })

        if (this.reverse) setTimeout(() => {
          window.nextTransition = 'forward'
        }, pageTransitionDur + 100)
      },

      transition() {
        this.state = 1
        Vue.nextTick(() => {
          this.x0 = d(0)
          this.x1 = 0
          setTimeout(this.transitionEnd, pageTransitionDur)
        })
      },

      transitionEnd() {
        this.state = 2
        this.x1 = 0
      },

      back() {
        classie.addClass(document.getElementById('app'), 'transition-reverse')
        setTimeout(() => {
          classie.removeClass(document.getElementById('app'), 'transition-reverse')
        }, pageTransitionDur + 100)
        window.nextTransition = 'back'
        $router.go({ path: '/' })
      }
    }
  }
</script>
