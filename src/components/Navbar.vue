<template>
  <div class="navbar">
    <div v-if="showBackButton" class="back-button" @click="backButtonClicked()">
      <i class="icon icon-back"></i>
    </div>

    <div class="center">
      <span class="title">{{title}}</span>
    </div>

    <div v-if="showMenuButton" class="menu-button" @click="menuButtonClicked()">
      {{{ menuButtonText }}}
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

    .back-button, .menu-button {
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

    .back-button {
      left: 0;
      padding: 12px 0 12px 10px;
      text-align: left;
    }

    .menu-button {
      right: 0;
      padding: 12px 10px 12px 0;
      text-align: right;
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

      &.icon-bars {
        width: 21px;
        height: 14px;
        .encoded-svg-background("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 14'><path fill='@{themeColor}' d='M0,0h2v2H0V0z M4,0h17v1H4V0z M0,6h2v2H0V6z M4,6h17v1H4V6z M0,12h2v2H0V12z M4,12h17v1H4V12z'/></svg>");
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2ddpx) {
            .encoded-svg-background("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42 26'><path fill='@{themeColor}' d='M0,0h4v4H0V0z M8,1h34v2H8V1z M0,11h4v4H0V11z M8,12h34v2H8V12z M0,22h4v4H0V22z M8,23h34v2H8V23z'/></svg>");
            height: 13px;
        }
      }
    }

  }
</style>
<script>
  export default {
    data() {
      return {
        title: '',
        showBackButton: true,
        onBackButtonClick: undefined,
        showMenuButton: false,
        onMenuButtonClick: undefined,
        menuButtonText: '<i class="icon icon-bars"></i>'
      }
    },

    created() {
      this.$on('PageTransitionEvent', (data) => {

        this.title = data.title
        this.showBackButton = data.showBackButton
        this.onBackButtonClick = data.onBackButtonClick
        this.showMenuButton = data.showMenuButton
        this.onMenuButtonClick = data.onMenuButtonClick
        if (data.menuButtonText)
          this.menuButtonText = data.menuButtonText
      })
    },

    methods: {
      backButtonClicked() {
        if (this.onBackButtonClick) {
          this.onBackButtonClick()
          return
        }

        $router.nextDirection('back')
        history.go(-1)
      },

      menuButtonClicked() {
        if (this.onMenuButtonClick) {
          this.onMenuButtonClick()
        }
      }
    }
  }

</script>
