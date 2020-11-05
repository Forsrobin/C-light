import Vue from 'vue'
import App from './App.vue'
import AudioVisual from 'vue-audio-visual'
import VueRouter from 'vue-router'
import router from './router'
import VueSlider from 'vue-slider-component'
import VueSocketIO from 'vue-socket.io'
import 'vue-slider-component/theme/default.css'

 
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


Vue.use(new VueSocketIO({
  debug: false,
  connection: "http://192.168.1.52:3000",
}))

Vue.use(VueRouter)
Vue.use(AudioVisual)
Vue.component('VueSlider', VueSlider)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
