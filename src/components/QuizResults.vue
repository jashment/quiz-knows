<template>
  <div class="text-center mt-12">
    <v-btn @click="test">
      Test
    </v-btn>
    <!-- {{this.$store.state.resultsArr}} -->
    {{ this.$store.state.resultsArr }}
  </div>
</template>

<script>
export default {
    methods: {
        test() {
            console.log(this.$store.state.resultsArr)
        }
    }
}
</script>

<style>

</style>