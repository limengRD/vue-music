<template>
  <div class="recommend">
    <scroll class="recommend-content" :data="list" ref="scroll">
      <div>
        <!-- 轮播图 -->
        <div class="slider-wrapper">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in recommends" :key="index" >
              <a :href="item.linkUrl">
                <img @load="loadImg" class="my-swipeimg" :src="item.picUrl" alt="">
              </a>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <!-- 列表 -->
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li class="item" v-for="(item,index) in list" :key="index">
              <div class="icon">
                <img v-lazy="item.imgurl" width="60" height="60" alt="">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading"  v-show="!list.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
import {getRecommend,getDiscList} from '@/api/recommend'
import {ERR_OK} from '@/api/config'
import Scroll from '@/base/scroll/scroll'
import Loading from '@/base/loading/loading'

export default {
  data(){
    return {
      recommends:[],
      list:[]
    }
  },
  components:{
    Scroll,
    Loading
  },
  created() {
    this._getRecommend(),
    this._getDiscList()
  },
  methods:{
    _getRecommend() {
      getRecommend().then((res) => {
        if(res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    },
    _getDiscList() {
      getDiscList().then((res) => {
        console.log(res)
        if(res.code === ERR_OK) {
          this.list = res.data.list
        }
      })
    },
    loadImg() {
      if(!this.checkLoading)
      this.$refs.scroll.refresh()
      this.checkLoading = true
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 @import "~@/common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
    .slider-wrapper
      .mint-swipe
        height: 150px
      .my-swipeimg
        width: 100% 
    .recommend-list
      .list-title
        text-align: center
        height: 65px
        line-height 65px
        font-size: $font-seize-medium
        color: $color-theme
      .item
        display: flex
        box-sizing: border-box
        align-items: center
        padding: 0 20px 20px 20px
        .icon
          flex: 0 0 60px
          padding-right: 20px
        .text
          display: flex
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 20px
          overflow: hidden
          font-size: $font-size-medium
          .name
            margin-bottom: 10px
            color: $color-text
          .desc
            color: $color-text-d
    .loading
      width: 100%
      position: absolute 
      top: 50%
      transfrom: translateY(-50%)

</style>
