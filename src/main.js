import Vue from 'vue'
import App from './App.vue'
import './index.css'
import './assets/tailwind.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
