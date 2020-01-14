<template>
  <div>
    <div class="container top-text">
      <v-row>
        <v-col style="margin-left: 30px;">Assignment</v-col>
        <v-col style="margin-left: 50px;">Date</v-col>
        <v-col style="margin-left: 30px;">Score</v-col>
        <v-col>Out of</v-col>
        <v-col>Time</v-col>
      </v-row>
    </div>

    <div class="container">
      <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header
              ><v-col cols="3">Adobe Photoshop</v-col>
              <v-col cols="3">Aug 27, 2019</v-col>
              <v-col cols="2">45</v-col>
              <v-col cols="2">50</v-col>
              <v-col cols="2">12 min 24 sec</v-col>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>

      <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header
              ><v-col cols="3">Adobe Premier</v-col>
              <v-col cols="3">Sept 2, 2019</v-col>
              <v-col cols="2">39</v-col>
              <v-col cols="2">50</v-col>
              <v-col cols="2">9 min 13 sec</v-col></v-expansion-panel-header
            >
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>

      <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header
              ><v-col cols="3">DaVinci Resolve</v-col>
              <v-col cols="3">Sept 19, 2019</v-col>
              <v-col cols="2">47</v-col>
              <v-col cols="2">50</v-col>
              <v-col cols="2">11 min 51 sec</v-col></v-expansion-panel-header
            >
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>

      <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header
              ><v-col cols="3">Avid Media Composer</v-col>
              <v-col cols="3">Oct 11, 2019</v-col>
              <v-col cols="2">50</v-col>
              <v-col cols="2">50</v-col>
              <v-col cols="2">7 min 27 sec</v-col></v-expansion-panel-header
            >
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>

      <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header
              ><v-col cols="3">Adobe Indesign</v-col>
              <v-col cols="3">Nov 30, 2019</v-col>
              <v-col cols="2">47</v-col>
              <v-col cols="2">50</v-col>
              <v-col cols="2">8 min 19 sec</v-col></v-expansion-panel-header
            >
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </div>
  </div>
</template>

<script></script>

<style scoped>
h1 {
  text-align: center;
}

.v-expansion-panel {
  margin: 15px 0;
  background: #14ced2; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #00f4ff 0%,
    #0cafff 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #00f4ff 0%,
    #0cafff 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #00f4ff 0%,
    #0cafff 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#14ced2', endColorstr='#63b1e3',GradientType=0 ); /* IE6-9 */
}

.top-text {
  margin-top: 30px;
  padding: 0 5px;
}
</style>
