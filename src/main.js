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


// const userId = firebase.auth().currentUser.uid

// const firebaseUser = firebase.database().ref(`users/${userId}`).once("value")
//   .then(snapshot => {
//     let authUserData = snapshot.val();
//     return authUserData
//   })
router.beforeEach((to, from, next) => {

  if (to.meta.requireAuth) {
    const authUser = window.sessionStorage.getItem('firebaseUserData')
    if (!authUser) {
      next({ name: 'register' })
    }
    else if (to.meta.teacherAuth) {
      const authUser = window.sessionStorage.getItem('firebaseUserData')
      if (authUser.data.role === 'Teacher') {
        next()
      } else {
        next('/quizzes')
      }
    }
    else {
      const authUser = window.sessionStorage.getItem('firebaseUserData')
      if (authUser.data.role === 'Student') {
        next()
      } else {
        next('/register')
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
