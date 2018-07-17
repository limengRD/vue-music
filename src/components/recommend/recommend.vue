<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item,index) in recommends" :key="index" >
            <a :href="item.linkUrl">
              <img class="my-swipeimg" :src="item.picUrl" alt="">
            </a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {getRecommend} from '@/api/recommend'
import {ERR_OK} from '@/api/config'
export default {
  data(){
    return {
      recommends:[]
    }
  },
  created() {
    this._getRecommend()
  },
  methods:{
    _getRecommend() {
      getRecommend().then((res) => {
        console.log
        if(res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    }
  }
}
</script>

<style>
  .mint-swipe {
    height: 150px;
  }
  .my-swipeimg {
    width: 100%;
  }
</style>
