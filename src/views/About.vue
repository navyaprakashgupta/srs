<!-- views/About.vue -->
<template>
     <v-container>
        <Breadcrumbs :items="breadcrumbs" />
    <v-row>
      <v-col>
        <h1>ABOUT L2M</h1>
        <v-divider class="green-divider"></v-divider>  
        <p>
          L2M Rail is seed funded and incubated by the prestigious Indian Institute of Science (IISc), Bangalore. Our access to the intellectual & infrastructural resources and Labs of IISc has helped us undertake pathbreaking, high-value research without investing in such facilities. We are also recognized under the Start-up India initiative of the Department for Promotion of Industry and Internal Trade (DPIIT), Govt. of India. We are the winners of Elevate 2018 and received grants from the Government of Karnataka for our R&D activities. We have also received CSR funds from Telecommunications Consultants India Limited (TCIL), a Government of India Enterprise. We recently received the ‘Rail Business start-up of the Year’ award announced by Urban Transport News in association with the Indian Association of Urban Rail and Mobility Industry (IAURMI).
        </p>
        <p class="about-alert">
          more info about L2M from the main website
        </p>
        <v-divider class="green-divider"></v-divider>
        <footer class="footer-style">
          © Copyright 2022, Lab to Market Innovations Private Limited. All Rights Reserved
        </footer>
      </v-col>
    </v-row>
  </v-container>
    
  </template>
  
  <script>
  import Breadcrumbs from '../views/Breadcrumbs.vue';
  
  export default {
    name: 'About',
    components: {
      Breadcrumbs,
    },
    data() {
      return {
        breadcrumbs: [
          { text: 'Home', to: '/' },
          { text: 'About', to: '/about' },
        ],
      };
    },
  };
  </script>
<style>
.about-alert{
    color: red;   
    text-align: center;
    padding: 30px;
}
</style>