import * as types from './mutations-types'
import state from './state'

const mutations = {
  [types.SET_SINGER](state,singer) {
    state.singer = singer
  }
}

export default mutations