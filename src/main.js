import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
