import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Radio, RadioGroup, RadioButton } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './element-variables.scss'
import $ from 'jquery';
import global from './global'

Vue.use(Radio);
Vue.use(RadioGroup)
Vue.use(RadioButton)

Vue.config.productionTip = false
Vue.prototype.url = global.url

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
