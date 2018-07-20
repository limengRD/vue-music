// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/common/stylus/index.styl'
import Vuelazyload from 'vue-lazyload'

//绑定在body 所有的标签都没有300毫秒的延迟
fastclick.attach(document.body)

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(Vuelazyload,{
  loading: require('./common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
