import Vue from 'vue'
import App from './App.vue'
import ink_layer  from './build.js'

console.log(App);

Vue.use(ink_layer);
new Vue({
  el: '#app',
  render: h => h(App)
})
