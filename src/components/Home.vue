<template>
  <div>
    <v-card>
      <v-navigation-drawer class="navDrawer" expand-on-hover permanent clipped floating app>
        <v-divider />
        <v-list v-if="user.loggedIn && user.data.role === 'Teacher'" nav>
          <v-list-item v-for="item in items" :key="item.to" link :to="item.to">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
              <v-icon />
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list v-if="user.loggedIn && user.data.role === 'Student'" nav>
          <v-list-item v-for="item in studentItems" :key="item.to" link :to="item.to">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
              <v-icon />
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list v-if="!user.loggedIn" nav>
          <v-list-item v-for="item in noAuthItems" :key="item.to" link :to="item.to">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
              <v-icon />
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
    <router-view />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      items: [
        { title: "Quizzes", icon: "mdi-brain", disabled: false, to: "/" },
        {
          title: "Grades",
          icon: "mdi-percent",
          disabled: false,
          to: "/grades"
        },
        {
          title: "Create Quiz",
          icon: "mdi-plus",
          disabled: false,
          to: "/teacher/create-quiz"
        },
        {
          title: "Students",
          icon: "mdi-account-multiple-check",
          disabled: false,
          to: "/teacher/students"
        },

        {
          title: "Flashcards",
          icon: "mdi-card-text",
          disabled: false,
          to: "/flashcards"
        }
      ],
      studentItems: [
        { title: "Quizzes", icon: "mdi-brain", disabled: false, to: "/" },
        {
          title: "Grades",
          icon: "mdi-percent",
          disabled: false,
          to: "/grades"
        },
        {
          title: "Flashcards",
          icon: "mdi-card-text",
          disabled: false,
          to: "/flashcards"
        }
      ],
      noAuthItems: [
        {
          title: "Flashcards",
          icon: "mdi-card-text",
          disabled: false,
          to: "/flashcards"
        }
      ],
      right: null
    };
  },
  computed: {
    ...mapGetters(["user"])
  }
};
</script>
<style scoped>
.navDrawer {
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

.v-list-item__title,
.theme--dark.v-icon {
  color: #424242;
}

.v-list .v-list-item--active {
  color: #949494;
}
</style>
