<template>
  <transition name="slide">
    <div class="singer-detail" @click="goBackList" >{{singer.name}}</div>  
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import {getSingerDetail} from '@/api/singer'
import {ERR_OK} from '@/api/config'
export default {
  created() {
    this._getSingerDetail()
  },
  computed: {
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
        if(res.code === ERR_OK) {
          console.log(res)
        }
      })
    },
    goBackList(){
      console.log(this.$refs.singer)
      this.$router.push({path:'/singer'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/variable.styl'
  .singer-detail
    position: fixed
    bottom: 0
    top: 0
    right: 0
    left: 0
    background-color: $color-background
    z-index: 30000

  .slide-enter-active,.slide-leave-active
    transition: all 0.3s
  .slide-enter , .slide-leave-to
    transform: translate3d(100%,0,0)  
</style>
