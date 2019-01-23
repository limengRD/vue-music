<template>
  <div class="music-list">
    <div class="back" @click="backSingerList">
      <i class="icon-back"></i>
    </div>
    <h1 class="title" v-html="title"></h1>
    <div class="bg-image" :style="bgImageFn" ref="bgImage">
      <div class="play-wrapper" v-show="songs.length>0" ref="playBtn" >
        <div  class="play">
          <i class="icon-play"></i>
          <span class="text">随机播放全部</span>
        </div>
      </div>
      <div class="filter"></div>
    </div>
    <div class="bg-layer" ref="layer"></div>
    <scroll @scroll="scroll" :probe-type="probeType" :listen-scroll="listenScroll" :data="songs" class="list" ref="list">
      <div class="">
        <SongList @select="selectItem" :songs="songs"></SongList>
      </div>
      <div class="loading-container">
        <loading v-show="!songs.length"></loading>
      </div>
    </scroll>
    
  </div>
</template>

<script>
import SongList from '@/base/song-list/song-list'
import Scroll from '@/base/scroll/scroll'
import Loading from '@/base/loading/loading'
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      scrollY: 0
    }
  },
  props:{
    bgImage: {
      type: String,
      default: ''
    },
    songs: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ''
    }
  },
  components:{
    SongList,
    Scroll,
    Loading
  },
  computed: {
    bgImageFn(){
      return `background:url(${this.bgImage});bakcground-repeat: no-repeat;background-size: 100%;`
    }
  },
  created() {
    this.probeType = 3
    this.listenScroll = true
  },
  mounted() {
    this.imageHeight = this.$refs.bgImage.clientHeight
    this.minScrollHeight = -this.imageHeight + 40
    this.$refs.list.$el.style.top = `${this.imageHeight}px`
  },
  methods: {
    ...mapActions([
      'selectPlay'
    ]),
    backSingerList(){
      this.$emit('ZIndex')
      this.$router.push({path:'/singer'})
    },
    selectItem(item,index) {
      this.selectPlay({
        list:this.songs,
        index
      })
    },
    // 音乐列表滚动隐藏歌手图片
    scroll(e) {
      this.scrollY = e.y
    }
  },
  watch: {
    scrollY(newY) {
      let translateY = Math.max(this.minScrollHeight, newY)
      this.$refs.layer.style['transform'] = `translate3d(0,${translateY}px,0)`
      this.$refs.layer.style['webkitTransform'] = `translate3d(0,${translateY}px,0)`
      
      if (newY < this.minScrollHeight) {
        this.$refs.bgImage.style.paddingTop = 0
        this.$refs.bgImage.style.height = '40px'
        this.$refs.bgImage.style.zIndex = 10
        this.$refs.playBtn.style.display = 'none'
      } else {
        this.$refs.bgImage.style.paddingTop = '70%'
        this.$refs.bgImage.style.height = '0px'
        this.$refs.bgImage.style.zIndex = 0
        this.$refs.playBtn.style.display = 'inline-block'
      }
      if (newY > 0) {
        let changeImageHeight = 1 + Math.abs(newY / this.imageHeight)
        this.$refs.bgImage.style['transform'] = `scale(${changeImageHeight})`
      }

    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/variable.styl'
  .music-list
    position: fixed
    bottom: 0
    top: 0
    right: 0
    left: 0
    background-color: $color-background
    .back
      position: absolute
      top: 10px
      left: 10px
      z-index: 100
    .title 
      color: $color-text
      position: absolute
      top: 10px
      left: 50%
      z-index: 100
      transform :translateX(-50%)
    .bg-image
      position: relative
      width: 100%
      height: 0
      padding-top: 70%
      // z-index: 90
      .play-wrapper
        position: absolute
        bottom: 20px
        z-index: 50
        width: 100%
        .play
          box-sizing: border-box
          width: 135px
          padding: 7px 0
          margin: 0 auto 
          border: 1px solid $color-theme
          color: $color-theme
          border-radius: 100px
          text-align: center
          .icon-play
            display: inline-block
            vertical-align: middle
            margin-right: 6px
            font-size: $font-size-medium-x
          .text
            display: inline-block
            vertical-align: middle
            font-size: $font-size-small
      .filter
        position: absolute 
        left: 0
        top: 0
        width: 100%
        height: 100%
        background: rgba(7,17,27,0.4)
    .bg-layer
      height: 100%;
      background-color: #222;
    .list
      position: fixed
      top: 0
      bottom: 0
      width: 100%
      .song-list-wrap
        width: 100%
        height: 100%
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
