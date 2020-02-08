<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-lg-4 col-sm-4">
        <v-card class="cardComp">
          <div class="cardTop"></div>
          <v-card-title>Adobe Premier</v-card-title>
          <v-card-subtitle>Lorem Ipsum</v-card-subtitle>
          <v-card-actions>
            <v-btn color="#00beff" class="white--text" link to="/flashcardad"
              >Flashcards</v-btn
            >
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
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
