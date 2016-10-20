<template>
  <div class="page has-navbar" v-nav="{title: 'Index', showBackButton: false}">
    <div class="page-content">
      <a v-link="{path: '/about'}">about</a>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .page-content {
    padding: 54px 14px 14px 14px !important;
  }
</style>
