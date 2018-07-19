<template>
  <scroll class="listview" :data="data">
    <ul >
      <li v-for="(group,index) in data" :key="index" class="list-group">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li v-for="(item,index) in group.items" :key="index" class="list-group-item">
            <img class="avatar" :src="item.avatar" alt="">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut">
      <ul>
        <li v-for="(item,index) in " class="item">{{item}}</li>
      </ul>
    </div>
  </scroll>
</template>

<script>
import Scroll from '@/base/scroll/scroll'
export default {
  props:{
    data: {
      type: Array,
      default: []
    }
  },
  created (){
  },
  computed:{
    shortcutList() {
      return this.data.map((group) => {
        return group.title.substr(0,1)
      })
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
</style>
