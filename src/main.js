// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/common/stylus/index.styl'

//绑定在body 所有的标签都没有300毫秒的延迟
fastclick.attach(document.body)

Vue.config.productionTip = false
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
