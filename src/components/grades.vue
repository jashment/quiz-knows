<template>
<v-container>
    <div>
    <h1>Grades</h1>

    <v-expansion-panels>
      <v-expansion-panel v-for="result in data" :key="result.index">
        <v-expansion-panel-header>
          <p>{{ result.details.softwareType }}</p>
                <v-spacer></v-spacer>
          <p>{{ result.attempts[0].date }}</p>
                <v-spacer></v-spacer>
          <p>{{ 45 }}</p>
                <v-spacer></v-spacer>
          <p>{{ 50 }}</p>
                <v-spacer></v-spacer>
          <p>{{ result.attempts[0].time }}</p>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container class="d-flex" v-col="4" v-for="attempt in result.attempts" :key="attempt.index">
                <p>Attempt {{ attempt.id }}</p>
                <v-spacer></v-spacer>
                <p>{{ attempt.date }}</p>
                <v-spacer></v-spacer>
                <p>{{ attempt.score }}</p>
                <v-spacer></v-spacer>
                <p>{{ attempt.score }}</p>
                <v-spacer></v-spacer>
                <p>{{ attempt.time }}</p>
                <v-spacer></v-spacer>
              <v-btn text color="primary">Review</v-btn>
            </v-container> 
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</v-container>  
</template>

<script>
import { data } from '../assets/data'

export default {
  //   props: ["data"],
  data: () => ({
    data,
    attempts: data.attempts,
  }),
  methods: {
    //   runTest() {
    //       console.log(this.data)
    //   }
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 250px;
}
</style>
