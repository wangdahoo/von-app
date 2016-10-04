<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="left">
        <a class="back link" @click="back()">
          <i class="icon icon-back"></i>
          <span>Back</span>
        </a>
      </div>
      <div class="center">Vue App</div>
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
    data(){
      return {}
    },
    
    ready() {
      window.onpopstate = function (e) {
        console.log(e);
      }
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
