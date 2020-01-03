import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'

import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import toast from './components/common/toast'

import './assets/css/iconfont.css'

// 阻止启动生产消息
Vue.config.productionTip = false
// 添加事件总线对象
Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)
// 解决移动端300ms延迟
FastClick.attach(document.body)
// 安装懒加载插件
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store,
  toast,
}).$mount('#app')
