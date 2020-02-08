<template>
  <div>
    <h1>Dashboard</h1>
    <center>
      <router-link to="/cardlayout">Checkout Cards</router-link>
    </center>
  </div>
</template>





<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 250px;
}
</style>
