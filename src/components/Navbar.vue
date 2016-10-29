<template>
  <div class="navbar">
    <div v-if="showBackButton" class="back-button" @click="backButtonClicked()" transition="fade">
      {{{ backButtonText }}}
    </div>

    <div v-if="showMenuButton" class="menu-button" @click="menuButtonClicked()" transition="fade">
      {{{ menuButtonText }}}
    </div>

  </div>
</template>
<style lang='less'>
  @import '../less/_mixin';
  @themeColor: '#007aff';
  @transitionDuration: .4s;

  .navbar {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 44px;
    z-index: 10;
    background-color: #fff;
    .hairline(bottom, #ddd);

    .back-button, .menu-button {
      position: absolute;
      top: 0;
      width: 80px;
      height: 44px;
      line-height: 44px;
      z-index: 12;

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
      padding: 0 0 0 10px;
      text-align: left;
    }

    .menu-button {
      right: 0;
      padding: 0 10px 0 0;
      text-align: right;
    }

    .center {
      position: absolute;
      top: 0px;
      left: 0;
      width: 100%;
      height: 44px;
      padding: 0;
      text-align: center;
      z-index: 11;

      .title {
        display: inline-block;
        font-size: 18px;
        line-height: 44px;
        /*transition: all @transitionDuration cubic-bezier(.42, 0, .58, 1);*/
        /*-webkit-transition: all @transitionDuration cubic-bezier(.42, 0, .58, 1);*/
        transition: all @transitionDuration ease;
        -webkit-transition: all @transitionDuration ease;
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

    .fade-transition {
      transition: all @transitionDuration ease;
      -webkit-transition: all @transitionDuration ease;
      opacity: 1;
    }

    .fade-enter, .fade-leave {
      opacity: 0;
    }

  }
</style>
<script>
  import channel from '../services/channel'

  function getTitleTransitionDistance(t) {
    return (document.body.offsetWidth - t.offsetWidth) / 2 - 10
  }

  function centerElement(navbar, title, direction) {
    let centerId = Math.random().toString(36).substring(3, 8)
    let c = document.createElement('div')
    c.id = centerId
    c.className = 'center'
    let t = document.createElement('span')
    t.className = 'title'
    t.innerHTML = title

    let reverse = direction == 'back'
    t.style.opacity = 0
    t.style.transform = 'translate3d(' + (reverse ? '-' : '') + getTitleTransitionDistance(t) + 'px,0,0)'
    t.style.webkitTransform = 'translate3d(' + (reverse ? '-' : '') + getTitleTransitionDistance(t) + 'px,0,0)'

    if (!navbar.querySelector('.center')) {
      t.style.opacity = 1
      t.style.transform = 'translate3d(0,0,0)'
      t.style.webkitTransform = 'translate3d(0,0,0)'
    }

    c.appendChild(t)
    navbar.appendChild(c)
    return document.getElementById(centerId)
  }

  function titleIn(t) {
    t.style.opacity = 1
    t.style.transform = 'translate3d(0,0,0)'
    t.style.webkitTransform = 'translate3d(0,0,0)'
  }

  function titleOut(t, direction) {
    let reverse = direction == 'back'
    t.style.opacity = 0
    t.style.transform = 'translate3d(' + (reverse ? '' : '-') + getTitleTransitionDistance(t) + 'px,0,0)'
    t.style.webkitTransform = 'translate3d(' + (reverse ? '' : '-') + getTitleTransitionDistance(t) + 'px,0,0)'
  }

  export default {
    data() {
      return {
        title: '',
        showBackButton: false,
        onBackButtonClick: undefined,
        showMenuButton: false,
        onMenuButtonClick: undefined,
        backButtonText: '<i class="icon icon-back"></i>',
        menuButtonText: '<i class="icon icon-bars"></i>',
      }
    },

    created() {
      // center leave
      let cl;

      channel.$on('PageTransitionEvent', (data) => {
        let direction = document.querySelector('[von-app]').getAttribute('transition-direction')
        this.title = data.title

        let c = centerElement(this.$el, this.title, direction)

        setTimeout(() => {
          titleIn(c.querySelector('.title'))
          if (cl) {
            titleOut(cl.querySelector('.title'), direction)
          }

          setTimeout(() => {
            if (cl) this.$el.removeChild(cl)
            cl = c
          }, 500)
        })

        // nav item & click event handler
        this.showBackButton = data.showBackButton
        this.onBackButtonClick = data.onBackButtonClick
        if (data.backButtonText)
          this.backButtonText = data.backButtonText

        this.showMenuButton = data.showMenuButton
        this.onMenuButtonClick = data.onMenuButtonClick
        if (data.menuButtonText)
          this.menuButtonText = data.menuButtonText
      })
    },

    ready() {
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
