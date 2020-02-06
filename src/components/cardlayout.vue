<template>
  <div>
    <h1>Cards</h1>
    <v-container>
      <v-row>
        <v-col v-for="n in 9" :key="n" cols="12" sm="4">
          <Card />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'App',
  components: {
    Card,
  },
  data: () => ({
    //
  }),
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
