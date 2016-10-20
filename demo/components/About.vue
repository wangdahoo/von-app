<template>
  <div class="page has-navbar" v-nav="{title: 'About', showBackButton: true, showMenuButton: true, onMenuButtonClick: onMenuButtonClick}">
    <div class="page-content">
      <span>blablabla...</span>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      onMenuButtonClick() {
        alert('menu button clicked!')
      }
    }
  }
</script>

<style>
  .page-content {
    padding: 54px 14px 14px 14px !important;
  }
</style>
