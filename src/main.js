import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { routes } from "./routes";
import store from "../store";

import * as firebase from "firebase";
import { firebaseConfig } from "./firebase/credentials";

Vue.config.productionTip = false;
Vue.use(VueRouter);

firebase.initializeApp(firebaseConfig);
const currUser = firebase.auth().currentUser
if (currUser) {
  const currUserId = currUser.uid
  let userData = {}


  firebase.database().ref(`users/${currUserId}`).once('value').then(snapshot => {
    userData = { snapshot }
    console.log(userData)
  })
  console.log(userData)
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      store.dispatch("fetchUser", userData);
    }
  });
}
export const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount("#app");
