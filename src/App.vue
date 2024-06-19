<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  
  <v-app>
    <Navbar  ref="Navbar" />
    <v-main>
      <!-- Your main content here -->
      <RouterView />
      <v-btn
        class="app-button"
        color="blue-lighten-2"
        icon="mdi-arrow-up"
        variant="text"
        @click="goto('Navbar')"
      ></v-btn>
    </v-main>
  </v-app>
</template>


<script>
import Navbar from './views/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  methods:{
    goto(refName) {
        var element = this.$refs[refName];
        var top = element.offsetTop;
        window.scrollTo(0, top);
    }
  }
};
</script>
<style scoped>
.app-button {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding: 4px;
  cursor: pointer;
  position: fixed;
  background: #ffffff;
  right: 40px;
  bottom: 40px;
  z-index: 999 !important;
}
</style>
