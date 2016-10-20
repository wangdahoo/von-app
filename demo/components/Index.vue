<template>
  <div class="page has-navbar" v-page="{title: 'Index', showBackButton: false}">
    <div class="page-content">
      <!-- <h1>Index page</h1> -->
      <a v-link="{path: '/about'}">about</a>
    </div>
  </div>
</template>

<script>
  export default {
    components: {

    },

    data () {
      return {}
    },
    ready () {

    },
    methods: {}
  }
</script>

<style scoped>
  .page {

  }
</style>
