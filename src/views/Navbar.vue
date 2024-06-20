<template>
  <div>
    <v-app-bar app dark color="#2f2f2f" class="navbar-with-green-bar">
      <!-- Mobile Menu Icon -->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
      <img src="/images/logo.png" alt="" width="100"  style="object-fit: contain;margin-left: 1%;">
      <v-toolbar-title  @click="navigateTo('')" class="toolbar-title">
    
        <h5 >SMART RAILWAY SIDING</h5>
       </v-toolbar-title>
   
      <!-- Desktop Menu Items -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text @click="navigateTo('features')" :class="{ 'active-button-text': isActiveRoute('features') }">FEATURES</v-btn>
        <v-divider vertical class="vertical-divider"></v-divider>
        <v-btn text @click="navigateTo('downloads')" :class="{ 'active-button-text': isActiveRoute('downloads') }">DOWNLOADS</v-btn>
        <v-divider vertical class="vertical-divider"></v-divider>
        <v-btn text @click="navigateTo('about')" :class="{ 'active-button-text': isActiveRoute('about') }">ABOUT</v-btn>
        <v-divider vertical class="vertical-divider"></v-divider>
        <v-btn text @click="navigateTo('contacts')" :class="{ 'active-button-text': isActiveRoute('contacts') }">CONTACT</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary class="d-md-none">
      <v-list>
        <v-list-item @click="drawer = false">
          <v-btn text block @click="navigateTo('')">HOME</v-btn>
        </v-list-item>
        <v-list-item @click="drawer = false">
          <v-btn text block @click="navigateTo('features')">FEATURES</v-btn>
        </v-list-item>
        <v-list-item @click="drawer = false">
          <v-btn text block @click="navigateTo('downloads')">DOWNLOADS</v-btn>
        </v-list-item>
        <v-list-item @click="drawer = false">
          <v-btn text block @click="navigateTo('about')">ABOUT</v-btn>
        </v-list-item>
        <v-list-item @click="drawer = false">
          <v-btn text block @click="navigateTo('contacts')">CONTACT</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
  </template>
  
  
  

  <script>
  export default {
    data() {
      return {
        drawer: false,
      };
    },
    methods:{
      navigateTo(path){
        this.$router.push("/" + path);
      },
      isActiveRoute(route) {
        return this.$route.path === "/" + route;
      }
    }
  };
  </script>

<style scoped>

.navbar-with-green-bar {
  position: relative;
}
.vertical-divider{
  margin-top: 4%;
  margin-bottom: 4%;
  opacity: 1;
}
.vertical-divider :last-child{
  display: none;
}
.navbar-with-green-bar::after {
  content: '';
  display: block;
  width: 100%;
  height: 7px; /* Adjust the height as needed */
  background-color: green;
  position: absolute;
  bottom: 0;
  left: 0;
}

.active-button-text {
  color: green !important;
}
</style>
