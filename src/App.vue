<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from '@/components/m-header/m-header.vue'
import Tab from '@/components/tab/tab'
export default {  
  name: 'App',
  components:{
    MHeader,
    Tab
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~@/common/stylus/variable.styl"
  #app
    color: $color-theme
</style>
