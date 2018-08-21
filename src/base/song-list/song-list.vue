<template>
  <div class="song-list">
    <ul>
      <li @click="selectItem(item,index)" v-for="(item,index) in songs" :key="index" class="item">
        <div class="content">
          <h2 class="name">{{item.name}}</h2>
          <p class="desc">{{getDesc(item)}}</p>
        </div>
      </li>
    </ul>
  </div>  
</template>

<script>
export default {
  props: {
    songs: {
      type: Array,
      default: []
    }
  },
  methods:{
    getDesc(song) {
      return `${song.singer}。${song.album}`
    },
    selectItem(item,index) {
      this.$emit('select',item,index)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/common/stylus/variable"
  .song-list
    .item
      display: flex
      align-items: center
      height: 64px
      font-size: $font-size-medium
      box-sizing: border-box
      padding: 0 20px
    .content
      flex: 1
      line-height: 20px
      overflow: hidden
      .name
        no-wrap()
        color: $color-text
      .desc
        no-wrap()
        margin-top: 4px
        color: $color-text-d
</style>

