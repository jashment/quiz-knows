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
      <Logger />
    </v-content>
  </v-app>
</template>

<script>
import Logger from './components/Logger'

export default {
  name: 'App',
  components: {
    Logger,
  },
  data: () => ({
    //
  }),
}
</script>
