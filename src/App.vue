<template>
  <v-app>
    <v-app-bar app clipped-left>
      <v-toolbar-title class="headline text-uppercase">
        <span>Quiz</span>
        <span class="font-weight-light">Knows</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <app-home>
       <router-view></router-view>
       
      </app-home>
      <!-- <Logger />
      <Login />
      <v-container>
        <v-row>
          <v-col v-for="n in 9" :key="n" cols="12" sm="4">
            <Card />
          </v-col>
        </v-row>
      </v-container> -->
    </v-content>
  </v-app>
</template>

<script>
// import Logger from './components/Logger'
import Home from './components/Home'
// import Card from './components/Card'
// import Login from './components/Login'

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
</style>