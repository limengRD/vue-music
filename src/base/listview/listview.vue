<template>
  <scroll class="listview" :data="data" ref="listview">
    <ul >
      <li v-for="(group,index) in data" :key="index" class="list-group" ref="listgroup">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li v-for="(item,index) in group.items" :key="index" class="list-group-item" @click="selectItem(item)" >
            <img class="avatar" :src="item.avatar" alt="">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut" @touchmove.stop.prevent="onShortcutTuchMove">
      <ul>
        <li @touchstart="onShortcutTouchStart" v-for="(item,index) in shortcutList" :data-index="index" class="item">{{item}}</li>
      </ul>
    </div>
  </scroll>
</template>

<script>
import Scroll from '@/base/scroll/scroll'
import {getData} from '@/common/js/dom.js'
export default {
  props:{
    data: {
      type: Array,
      default: []
    }
  },
  created (){
    this.touch = {}
  },
  computed:{
    shortcutList() {
      return this.data.map((group) => {
        return group.title.substr(0,1)
      })
    }
  },
  methods: {
    onShortcutTouchStart(e){
      let index = getData(e.target,'index')
      let firstTouch = e.touches[0]
      this.touch.y1 = firstTouch.pageY
      this.touch.anchorIndex = index
      this.$refs.listview.scrollToElement(this.$refs.listgroup[index],0)
    },
    onShortcutTuchMove(e) {
      let firstTouch = e.touches[0]
      this.touch.y2 = firstTouch.pageY
      let delta = (this.touch.y2 - this.touch.y1) / 22
      let index = delta + parseInt(this.touch.anchorIndex)
      index = Math.floor(index)
      this.$refs.listview.scrollToElement(this.$refs.listgroup[index],0)
    },
    selectItem(item) {
      this.$emit('select',item)
    }
  },
  components: {
    Scroll
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/variable'
  .listview
    height: 100%
    .list-group
      display: flex
      flex-direction: column
      padding-bottom: 30px
    .list-group-title
      height: 30px
      line-height 30px
      padding-left: 20px
      font-size: $font-size-small
      color: $color-text-l
      background-color: $color-highlight-background
    .list-group-item
      display: flex
      align-items: center
      padding: 20px 0 0 20px
      .avatar
        width: 60px
        height: 60px
        border-radius: 50%
      .name 
        margin-left: 20px
        font-size: $font-size-medium
        color: $color-text-l
    .list-shortcut
      position: absolute
      right: 0
      top: 50%
      transform: translateY(-50%)
      width: 20px
      padding: 20px 0
      border-radius: 10px
      text-align: center
      background: $color-background-d
      font-family: Helvetica
      .item
        color: $color-text-l
        font-size: $font-size-small
        margin-top: 10px
</style>
