<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import MHeader from '@/components/m-header/m-header.vue'
import Tab from '@/components/tab/tab'
import Player from '@/components/player/player'
export default {  
  name: 'App',
  components:{
    MHeader,
    Tab,
    Player
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~@/common/stylus/variable.styl"
  #app
    color: $color-theme
</style>
