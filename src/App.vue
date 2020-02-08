<template>
  <v-app>
    <v-app-bar app clipped-left>
      <v-toolbar-title class="headline text-uppercase">
        <span>Cinema</span>
        <span class="font-weight-light">Portal</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto"></ul>
            <ul class="navbar-nav ml-auto">
              <template v-if="user.loggedIn">
                <div class="nav-item">{{user.data.displayName}}</div>
                <li class="nav-item">
                  <a class="nav-link" @click.prevent="signOut">Sign out</a>
                </li>
              </template>
              <template v-else>
                <li class="nav-item">
                  <router-link to="login" class="nav-link">Login</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="register" class="nav-link">Register</router-link>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <app-home>
        <router-view></router-view>
      </app-home>
      <!-- <Logger /> -->
      <!-- <Login /> -->
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home'
import { mapGetters } from 'vuex'
import firebase from 'firebase'

export default {
  name: 'App',
  components: {
    // Card,
    appHome: Home,
    // Logger,
    // Login,
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: 'home',
          })
        })
    },
  },
}
</script>

<style scoped>
div.cardComp.v-card {
  margin: auto;
}
div.container {
  /* margin-left: 5; */
  margin: 5;
}
h1 {
  text-align: center;
}
</style>
