<template>
  <div class="page has-navbar" v-page="{title: 'About', showBackButton: true}">
    <div class="page-content">
      <h1>about us</h1>
      <p>
        blablabla...
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    components: {

    },

    data() {
        return {}
    },
    ready() {},
    methods: {
      back() {
        $router.back({
          path: '/'
        });
      }
    }
  }
</script>

<style>
  .page {}
</style>
