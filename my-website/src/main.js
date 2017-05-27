import Vue from 'vue'
import Ele from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(Ele);
new Vue({
  el: '#app',
  render: h => h(App)
})
