<template>
  <div class="container mt-10">
    <div class="row">
      <div class="col-md-4 col-lg-4 col-sm-4">
        <v-card class="cardComp">
          <v-img
            src="https://uploads.toolfarm.com/app/uploads/2019/04/03113532/PPRO-generic.jpg"
          />
          <!-- <div class="cardTop">
          </div> -->
          <v-card-title>Adobe Premier</v-card-title>
          <v-card-actions class="justify-center">
            <v-btn
              color="#00beff"
              class="white--text"
              link
              to="/flashcardsap"
            >
              Start Practice
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div class="col-md-4 col-lg-4 col-sm-4">
        <v-card
          class="cardComp"
        >
          <v-img
            src="https://i.udemycdn.com/course/750x422/1916872_2598_4.jpg"
          />
          <!-- <div class="cardTop">
             
          </div> -->
          <v-card-title>Davinci Resolve</v-card-title>
          <v-card-actions class="justify-center">
            <v-btn
              color="#00beff"
              class="white--text"
              link
              to="/flashcardsdr1"
            >
              Start Practice
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div class="col-md-4 col-lg-4 col-sm-4">
        <v-card
          class="cardComp"
        >
          <v-img
            src="https://i.udemycdn.com/course/750x422/50134_528c_7.jpg"
          />
          <!-- <div class="cardTop">
             
          </div> -->
          <v-card-title>Avid Media</v-card-title>
          <v-card-actions class="justify-center">
            <v-btn
              color="#00beff"
              class="white--text"
              link
              to="/flashcardsam1"
            >
              Start Practice
            </v-btn>
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
