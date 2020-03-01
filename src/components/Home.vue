<template>
  <div>
    <v-card>
      <v-navigation-drawer class="navDrawer" expand-on-hover permanent clipped floating app>
        <template v-slot:prepend>
          <v-list>
            <v-list-item link two-line>
              <v-list-item-content>
                <v-list-item-title class="title">{{ user.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon>mdi-menu-down</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </template>

        <v-divider />
        <v-list nav>
          <v-list-item link :to="item.to" v-for="item in items" :key="item.to">
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
export default {
  name: "App",
  data() {
    return {
      items: [
        {
          title: "Register",
          icon: "mdi-account-plus-outline",
          disabled: false,
          to: "register"
        },
        { title: "Login", icon: "mdi-login", disabled: false, to: "login" },
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
          title: "Settings",
          icon: "mdi-settings",
          disabled: false,
          to: "/settings"
        },
        {
          title: "Flashcards",
          icon: "mdi-card-text",
          disabled: false,
          to: "/flashcards"
        }
      ],
      user: { name: "Grant Shoop", email: "grant@gmail.com" },
      right: null
    };
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
</style>
