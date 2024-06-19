<!-- views/Downloads.vue -->
<template>
    <v-container>
       <Breadcrumbs :items="breadcrumbs" />
   <v-row>
     <v-col>
       <h1>DOWNLOADS</h1>
       <hr class="solid" />
       <v-row>
        <v-col cols="12" md="4">
          <button @click="downloadFile(file.url)">
        <img src="/images/download.jpg" alt="Download Icon" class="download-img"/>
      </button>

          <p class="download-text">BROCHURE</p>
        </v-col>
        <v-col cols="12" md="4">
          <button @click="downloadFile(file.url)">
        <img src="/images/download.jpg" alt="Download Icon" class="download-img"/>
      </button>
          <p class="download-text">PPT</p>
        </v-col>
        <v-col cols="12" md="4">
          <button @click="downloadFile(file.url)">
        <img src="/images/download.jpg" alt="Download Icon" class="download-img"/>
      </button>
          <p class="download-text" >LEAFLET</p>
        </v-col>
       </v-row>
       <hr class="solid" />
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
   name: 'Downloads',
   components: {
     Breadcrumbs,
   },
   data() {
     return {
       breadcrumbs: [
         { text: 'Home', to: '/' },
         { text: 'Downloads', to: '/downloads' },
       ],
     };
   },
 };
 </script>

 <style>
  .download-img{
    padding-left: 80px;
  }

 .download-text{
  text-align: center;
  padding: 20px;
  font: Inter;
  font-size: 20px;
 }
</style>
 