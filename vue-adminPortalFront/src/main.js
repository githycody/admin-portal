import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
 
import 'bootstrap/dist/css/bootstrap.min.css'
 
Vue.config.productionTip = false
 
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

createApp(App).mount('#app')
