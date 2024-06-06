<!-- views/Downloads.vue -->
<template>
    <v-container>
       <Breadcrumbs :items="breadcrumbs" />
   <v-row>
     <v-col>
       <h1>DOWNLOADS</h1>
       <v-divider></v-divider>  
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
 