import Vue from 'vue'
import Router from 'vue-router'

import recommend from '@/components/recommend/recommend'
import rank from '@/components/rank/rank'
import search from '@/components/search/search'
import singer from '@/components/singer/singer'
import SingerDetail from '@/components/singer-detail/singer-detail'
import player from '@/components/player/player'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path:'/recommend',
      component: recommend
    },
    {
      path:'/rank',
      component: rank
    },
    {
      path:'/search',
      component:search
    },
    {
      path:'/singer',
      component:singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/player',
      component: player
    }
  ]
})
