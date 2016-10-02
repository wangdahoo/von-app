<template>
  <page>
    <h1>Index</h1>
    <a v-link="{path: '/about'}">about</a>
  </page>
</template>

<script>

  import Page from './Page.vue'
  export default {
    components: {
      Page
    },

    data () {
      return {}
    },
    ready () {

    },
    methods: {}
  }
</script>

<style>
</style>
