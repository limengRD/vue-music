<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Chichen Music</h1>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable"
  @import "~@/common/stylus/mixin"

  .m-header
    position: relative
    height: 44px
    z-index: 10
    text-align: center
    color: @color-theme
    font-size: 0
    background-color: $color-background
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      margin-right: 9px
      bg-image('logo')
      background-size: 30px 32px
    .text
      display: inline-block
      vertival-align: top 
      line-height: 44px
      font-size: $font-size-large

</style>
