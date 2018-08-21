<template>
  <div class="music-list">
    <div class="back" @click="backSingerList">
      <i class="icon-back"></i>
    </div>
    <h1 class="title" v-html="title"></h1>
    <div class="bg-image" :style="bgImageFn" ref="bgImage">
      <div class="filter"></div>
    </div>
    <scroll :data="songs" class="list" ref="list">
      <div class="">
        <SongList @select="selectItem" :songs="songs"></SongList>
      </div>
    </scroll>
  </div>
</template>

<script>
import SongList from '@/base/song-list/song-list'
import Scroll from '@/base/scroll/scroll'
import {mapActions} from 'vuex'
export default {
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
    Scroll
  },
  computed: {
    bgImageFn(){
      return `background:url(${this.bgImage});bakcground-repeat: no-repeat;background-size: 100%;`
    }
  },
  mounted() {
    this.$refs.list.$el.style.top = `${this.$refs.bgImage.clientHeight}px`
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
      z-index: 90
      .filter
        position: absolute 
        left: 0
        top: 0
        width: 100%
        height: 100%
        background: rgba(7,17,27,0.4)
    .list
      position: fixed
      top: 0
      bottom: 0
      width: 100%
      .song-list-wrap
        width: 100%
        height: 100%
</style>
