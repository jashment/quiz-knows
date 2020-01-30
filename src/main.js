import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { routes } from './routes'

import * as firebase from 'firebase'
import { firebaseConfig } from './firebase/credentials'

Vue.use(VueRouter)

firebase.initializeApp(firebaseConfig)

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
