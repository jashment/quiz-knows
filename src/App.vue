<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
    >
      <v-toolbar-title class="headline text-uppercase">
        <span>Cinema</span>
        <span class="font-weight-light">Portal</span>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div
          id="navbarSupportedContent"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav mr-auto" />
          <ul class="navbar-nav ml-auto">
            <template v-if="user.loggedIn"> 
       <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <span v-on="on">
   <router-link to="/settings">
           <v-avatar color="blue" size="38">
      <span class="white--text headline">{{ user.data.image }}</span>
 </v-avatar>
    </router-link> 
      </span>
      </template>
      <span>Profile Settings</span>
    </v-tooltip>
              <div class="nav-item">
                {{ user.data.displayName }} 
              </div>
              <li class="nav-item">
                <v-btn text>
                  <a
                    class="nav-link"
                    @click.prevent="signOut"
                  >Sign out</a>
                </v-btn>
              </li>
            </template>
            <template v-else>
              <li class="nav-item">
                <v-btn text>
                  <router-link
                    to="/login"
                    class="nav-link"
                  >
                    Login
                  </router-link>
                </v-btn>
              </li>
              <li class="nav-item">
                <v-btn text>
                  <router-link
                    to="/register"
                    class="nav-link"
                  >
                    Register
                  </router-link>
                </v-btn>
              </li>
            </template>
          </ul>
        </div>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <app-home>
        <router-view />
      </app-home>
      <!-- <Logger /> -->
      <!-- <Login /> -->
    </v-content>
  </v-app>
</template>

<script>
import Home from "./components/Home";
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  name: "App",
  components: {
    // Card,
    appHome: Home
    // Logger,
    // Login,
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
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
.nav-item {
  list-style-type: none;
  display: inline-block;
  padding: 0.75rem 0.25rem;
}
</style>
