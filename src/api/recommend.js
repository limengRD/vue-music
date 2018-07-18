import jsonp from '@/common/js/jsonp'
import {commonParams,options} from '@/api/config'
import axios from 'axios'
import { promises } from 'fs';

axios.defaults.baseURL="http://localhost:3000"

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({},commonParams,{
    platform: 'h5',
    uin: 0,
    needNewCode:1
  })
  return jsonp(url,data,options)
} 

export function getDiscList() {
  const data = Object.assign({},commonParams,{
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return axios({
    method: 'get',
    url:'/getDiscList',
    params:data
  }).then((res) =>{
    return Promise.resolve(res.data)
  })
}