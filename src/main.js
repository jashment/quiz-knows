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

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

export const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const authUser = JSON.parse(sessionStorage.getItem('firebaseUserData'))
    if (!authUser) {
      next({ name: 'register' })
    }
    else if (to.meta.teacherAuth) {
      const authUser = JSON.parse(sessionStorage.getItem('firebaseUserData'))
      if (authUser.role === 'Teacher') {
        next()
      }
    }
    else {
      const authUser = JSON.parse(sessionStorage.getItem('firebaseUserData'))
      if (authUser.role === 'Student') {
        next()
      }
    }
  } else {
    next()
  }
})


new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount("#app");
