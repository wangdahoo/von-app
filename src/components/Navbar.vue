<template>
  <div class="navbar">

    <div class="navbar-inner" :class="{'navbar-from-center-to-left': transition, 'navbar-on-left': done}">
      <div class="left"></div>
      <div class="center sliding">Home</div>
      <div class="right"></div>
    </div>

    <div class="navbar-inner" :class="{'navbar-on-right': !transition, 'navbar-from-right-to-center': transition && !done}">
      <div class="left">
        <a class="back link" @click="back()">
          <i class="icon icon-back"></i><span>Back</span>
        </a>
      </div>
      <div class="center sliding">About</div>
      <div class="right">
        <a class="link icon-only">
          <i class="icon icon-bars"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>
  import $ from 'jquery'

  export default{
    data() {
      return {
        transition: false,
        done: false
      }
    },
    
    ready() {
      let d2 = ( $(window).width() - $('.navbar-inner:eq(1) > .center').width() - 20 ) / 2
      $('.navbar-inner:eq(1) > .center').css({
        'transform': 'translate3d(' + d2 + 'px, 0, 0)'
      })

      setTimeout(() => {
        this.transition = true

        let d1 = ( $(window).width() - $('.navbar-inner:eq(0) > .center').width() - 20 ) / 2
        $('.navbar-inner:eq(0) > .center').css({
          'transform': 'translate3d(-' + d1 + 'px, 0, 0)'
        })

        $('.navbar-inner:eq(1) > .center').css({
          'transform': 'translate3d(0, 0, 0)'
        })

        setTimeout(() => {
          this.done = true
        }, 400)
      }, 500)


    },

    methods: {
      back() {
        $('#app').addClass('transition-reverse');

        setTimeout(() => {
          $('#app').removeClass('transition-reverse');
        }, 500)
        $router.go({ path: '/' })
      }
    }
  }
</script>
