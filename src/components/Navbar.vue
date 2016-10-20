<template>
  <div class="navbar">
    <div v-if="showBackButton" class="back-button" @click="onBackButtonClick()">
      <i class="icon icon-back"></i>
    </div>

    <div v-if="!showBackButton" class="left">

    </div>

    <div class="center">
      <span class="title">{{title}}</span>
    </div>

    <div class="right">

    </div>
  </div>
</template>
<style lang='less'>
  @import '../less/_mixin';
  @themeColor: '#007aff';

  * {
    box-sizing: border-box;
  }

  .navbar {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 44px;
    z-index: 10;
    background-color: #fff;
    .hairline(bottom, #ddd);

    .back-button, .left, .right {
      width: 80px;
      height: 44px;
      position: absolute;
      top: 0;

      span {
        font-size: 16px;
        line-height: 20px;
      }

      i.icon {
        line-height: 20px;
      }
    }

    .back-button, .left {
      left: 0;
      padding: 12px 0 12px 10px;
    }

    .right {
      right: 0;
      padding: 12px 10px 12px 0;
    }

    .center {
      margin: 0 80px;
      height: 44px;
      padding: 0;
      text-align: center;

      .title {
        font-size: 18px;
        line-height: 44px;
      }
    }

    i.icon {
      display: inline-block;
      vertical-align: middle;
      background-size: 100% auto;
      background-position: center;
      background-repeat: no-repeat;
      font-style: normal;
      position: relative;
      &.icon-back {
        width: 12px;
        height: 20px;
        .encoded-svg-background("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 20'><path d='M10,0l2,2l-8,8l8,8l-2,2L0,10L10,0z' fill='@{themeColor}'/></svg>");
      }
    }

  }

</style>
<script>

  export default {
    data() {
      return {
        title: '',
        showBackButton: true
      }
    },

    created() {
      this.$on('PageTransitionEvent', ({title, showBackButton}) => {
        // console.log('PageTransitionEvent', data)
        this.title = title;
        this.showBackButton = showBackButton
      })
    },

    methods: {
      onBackButtonClick() {
        $router.nextDirection('back');
        history.go(-1);
      },

      onLeftClick() {

      },

      onRightClick() {

      }
    }
  }

</script>
