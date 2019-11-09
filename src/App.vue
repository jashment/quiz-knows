<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Quiz</span>
        <span class="font-weight-light">Knows</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <Home />
      <Logger />
      <v-container>
        <v-row>
          <v-col v-for="n in 6" :key="n" cols="12" sm="4">
            <Card />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Logger from './components/Logger'
import Home from './components/Home'
import Card from './components/Card'

export default {
  name: 'App',
  components: {
    Card,
    Home,
    Logger,
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
</style>