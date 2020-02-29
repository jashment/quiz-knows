import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { routes } from './routes'
import store from '../store'

import * as firebase from 'firebase'
import { firebaseConfig } from './firebase/credentials'

import store from './store/store'

Vue.config.productionTip = false
Vue.use(VueRouter)

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

export const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
