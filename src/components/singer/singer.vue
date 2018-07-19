<template>
    <div class="singer">
        <list-view :data="list" v-if="list.length "></list-view>
    </div>
</template>

<script>
import {getSingerList} from '@/api/singer.js'
import {ERR_OK} from '@/api/config.js'
import Singer from '@/common/js/singer.js'
import ListView from '@/base/listview/listview'
const HOT_NAME = '热门'
const HOT_SINGER_LEN = 10
    export default {
        data() {
            return {
                singers: [],
                list:[]
            }
        },
        created() {
            this._getSingerList()
        },
        components: {
            ListView
        },
        methods:{
            _getSingerList() {
                getSingerList().then((res) => {
                    if(res.code === ERR_OK) {
                        this.list = this._normalizeSinger(res.data.list)
                    }
                })
            },
            _normalizeSinger(list) {
                let map = {
                    hot: {
                        title: HOT_NAME,
                        items: []
                    }
                }
                list.forEach((item,index) => {
                    if(index < HOT_SINGER_LEN) {
                      map.hot.items.push(new Singer({
                          id: item.Fsinger_mid,
                          name: item.Fsinger_name,
                      }))  
                    }
                    const key = item.Findex
                    if(!map[key]) {
                        map[key] = {
                            title: key,
                            items: []
                        }
                    }
                    map[key].items.push(new Singer({
                        id: item.Fsinger_mid,
                        name: item.Fsinger_name
                    }))
                })
                let hot = []
                let ret = []
                for(let key in map) {
                    let val = map[key]
                    if(val.title.match(/[a-zA-Z]/)){
                        ret.push(val)
                    } else if (val.title === HOT_NAME){
                        hot.push(val)
                    }
                }
                ret.sort((a,b) => {
                    return a.title.charCodeAt() - b.title.charCodeAt()
                })
                return hot.concat(ret)
            }
        }
    }    
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/variable.styl'    
    .singer
        position: fixed
        top: 88px
        bottom: 0
        width: 100%
        z-index: -1
        .fixed-title
            height: 30px
            line-height 30px
            padding-left: 20px
            font-size: $font-size-small
            color: $color-text-l
            background-color: $color-highlight-background
</style>

