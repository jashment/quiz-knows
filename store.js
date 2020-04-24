import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase'
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    resultsArr: [],
    user: {
      loggedIn: false,
      data: null
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      const uUid = firebase.auth().currentUser.uid;
      firebase
        .database()
        .ref(`users/${uUid}`)
        .once("value")
        .then(snapshot => {
          const userInfo = snapshot.val();
          state.user.data = userInfo;
          return userInfo
        })
      return data
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
          uvid: user.uvid,
          firstName: user.firstName,
          lastName: user.lastName,
          preferredOS: user.preferredOS
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
});
