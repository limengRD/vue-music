<template>
  <div class="player">
    <div class="normal-player" v-show="fullScreen">
      <div class="background">
        <img width="100%" height="100%" src="" alt="">
      </div>

      <div class="top">
        <div class="back">
          <i class="icon-back"></i>
        </div>
        <h1 class="title">跨借鉴就看见</h1>
        <h2 class="subtitle">费大幅度发</h2>
      </div>

      <div class="middle">
        <div class="middle-l" ref="middleL">
          <div class="cd-wrapper" ref="cdWrapper">
            <div class="cd">
              <img class="image">
            </div>
          </div>
          <div class="playing-lyric-wrapper">
            <div class="playing-lyric"></div>
          </div>
        </div>
        <div class="lyric-wrapper">
          <div>
            <p></p>
          </div>
        </div>
      </div>

    </div>
    <div class="mini-player" v-show="!fullScreen"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'fullScreen',
      'playlist'
    ])
  }
}
</script>

<style lang="stylus">
  @import "~@/common/stylus/variable"
  @import "~@/common/stylus/mixin"
  .player
    .normal-player
      position: fixed
      left: 0
      right: 0
      top: 0
      bottom: 0
      z-index: 150
      background: $color-background
      .bakcground
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
        z-index: -1
        opacity: 0.6
        filter: blur(20px)
      .top
        position: relative
        margin-bottom: 25px
        .back
          position absolute
          top: 0
          left: 6px
          z-index: 50
          .icon-back
            display: block
            padding: 9px
            font-size: $font-size-large-x
            color: $color-theme
            transform: rotate(-90deg)
        .title
          width: 70%
          margin: 0 auto
          text-align: center
          line-height: 40px
          no-wrap()
          font-size: $font-size-large
          color: $color-text
        .subtitle
          line-height: 20px
          text-align: center

</style>
