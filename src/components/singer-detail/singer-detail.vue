<template>
  <transition name="slide">
    <music-list :title="title" :bgImage="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import {getSingerDetail} from '@/api/singer'
import {ERR_OK} from '@/api/config'
import {createSonge} from '@/common/js/song'
import MusicList from '@/components/music-list/music-list'

export default {
  data() {
    return{
      songs:[]
    }
  },
  created() {
    this._getSingerDetail()
  },
  components: {
    MusicList 
  },
  computed: {
    title() {
      return this.singer.name
    },
    bgImage(){
      return this.singer.avatar
    },
    ...mapGetters([
      'singer'
    ])
  },
  methods:{
    _getSingerDetail(){
      if(!this.singer.id) {
        this.$router.push('/singer')
      }
      getSingerDetail(this.singer.id).then((res) =>{
        console.log(res)
        let ret = []
        if(res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.data.list)
          console.log(this.songs)
        }
      })
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach((item) => {
        if(item.musicData.songid && item.musicData.albummid){
          ret.push(createSonge(item.musicData))
        }
      })
      return ret
    },
    goBackList(){
      this.$emit('ZIndex')
      this.$router.push({path:'/singer'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/variable.styl'


  .slide-enter-active,.slide-leave-active
    transition: all 0.3s
  .slide-enter , .slide-leave-to
    transform: translate3d(100%,0,0)  
</style>
