<template>
  <v-card class="cardComp">
    <div class="cardTop"></div>
    <v-card-title>Quizzes</v-card-title>
    <v-card-subtitle>Take quizzes to improve score and time</v-card-subtitle>
    <v-card-actions>
      <v-btn color="#00beff" class="white--text">View Quizzes</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {}
</script>

<style scoped>
.cardComp {
  margin: auto;
}
div.cardTop {
  padding-top: 100px;
  background: linear-gradient(to bottom, #00f4ff 0%, #0cafff 100%);
}
button {
  margin: auto;
}
div.cardComp.v-card {
  border-radius: 15px;
}
</style>