import {playMode} from '@/common/js/config.js'
const state = {
  singer : {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  // 播放模式
  mode: playMode.sequence,
  //当前播放得索引
  currentIndex: -1
}

export default state