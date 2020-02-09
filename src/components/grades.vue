<template>
  <v-container>
    <h1 class="text-center py-12 font-weight-light">
      Grades for {{ student.name }}
    </h1>
    <v-expansion-panels>
      <v-expansion-panel v-for="quiz in quizzes" :key="quiz.index">
        <v-expansion-panel-header>{{ quiz.name }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-data-table
            :headers="headers"
            :items="attempts"
            hide-default-footer
            :sort-by="['Date', 'Score']"
            :sort-desc="[false, true]"
            multi-sort
            class="elevation-1"
          ></v-data-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      student: { name: 'Coby Yates' },
      headers: [
        {
          text: 'Attempts',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Date', value: 'Date' },
        { text: 'Score', value: 'Score' },
        { text: 'Out of', value: 'OutOf' },
        { text: 'Time', value: 'Time' },
      ],
      quizzes: [
        { name: 'Adobe Premiere' },
        { name: 'Avid Media Composer' },
        { name: 'DaVinci Resolve' },
      ],
      attempts: [
        {
          name: 'Attempt 1',
          Date: '1/24/2020',
          Score: 25,
          OutOf: 50,
          Time: '5 minutes',
        },
        {
          name: 'Attempt 2',
          Date: '1/25/2020',
          Score: 35,
          OutOf: 50,
          Time: '5 minutes',
        },
        {
          name: 'Attempt 3',
          Date: '1/25/2020',
          Score: 42,
          OutOf: 50,
          Time: '5 minutes',
        },
        {
          name: 'Attempt 4',
          Date: '1/25/2020',
          Score: 50,
          OutOf: 50,
          Time: '5 minutes',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
