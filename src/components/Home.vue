<template>
<div>
  <v-card>
    <v-navigation-drawer class="navDrawer" expand-on-hover permanent clipped floating app>
      <template v-slot:prepend>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img
                src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/27337022_10160041719275327_1001198401363381299_n.jpg?_nc_cat=108&_nc_oc=AQndJbRHtM5b8QeNPuoIq-xW0zAG2OIqKUDS3C4ZHVYohsN3InQBGUcn7RGU8xjKzIo&_nc_ht=scontent-sjc3-1.xx&oh=5f2a5c0d90b408024f2f1905d68f515e&oe=5E2FC739"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link two-line>
            <v-list-item-content>
              <v-list-item-title class="title">Grant Shoop</v-list-item-title>
              <v-list-item-subtitle>grantshoop@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </template>
  
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item link to="/dashboard">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
            <v-icon></v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/grades">
          <v-list-item-icon>
            <v-icon>mdi-percent</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Grades</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/tests">
          <v-list-item-icon>
            <v-icon>mdi-file-document-edit</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Tests</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/quizzes">
          <v-list-item-icon>
            <v-icon>mdi-brain</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Quizzes</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/settings">
          <v-list-item-icon>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
   <router-view></router-view>
   </div>
</template>
<script>
// import Logger from './Logger'
export default {
  // components: {
  //   Logger,
  // },
}
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