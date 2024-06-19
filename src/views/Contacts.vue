<!-- src/views/ContactView.vue -->
<template>
    <v-container>
      <Breadcrumbs :items="breadcrumbs" />
      <v-row>
        <v-col>
          <h1>Contact Us</h1>
          <v-divider class="green-divider"></v-divider>  
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <form >
          <p class="Contact-Header">Feedback Form</p>
          <v-text-field label="Name" outlined></v-text-field>
          <v-text-field label="Email" outlined></v-text-field>
          <v-text-field label="Phone" outlined></v-text-field>
          <v-textarea label="Message" outlined></v-textarea>
          <v-btn color="primary" class="Submit-button">Submit</v-btn>
          <br>
        </form>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" v-for="contact in contacts" :key="contact.name">
          <v-card class="mx-auto" max-width="300" outlined>
            <div class="contact-card">
              <v-avatar size="120" class="mx-auto mb-4 green-outline" >
                <img :src="contact.image" alt="Profile picture">
              </v-avatar>
              <div class="text-center">
                <h3>{{ contact.name }}</h3>
                <p>{{ contact.phone }}</p>
                <p>{{ contact.email }}</p>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <hr class="solid"> 
    <footer class="footer-style">
          © Copyright 2022, Lab to Market Innovations Private Limited. All Rights Reserved
    </footer>
    </v-container>
    
  </template>
  
  <script>
  import Breadcrumbs from '../views/Breadcrumbs.vue';
  
  export default {
    name: 'contacts',
    components: {
      Breadcrumbs,
    },
    data() {
      return {
        breadcrumbs: [
          { text: 'Home', to: '/' },
          { text: 'Contacts', to: '/contacts' },
        ],
        contacts: [
          {
            name: 'Pradyumna',
            phone: '9483390634',
            email: 'Bd4@L2mrail.Com',
            image: '/images/homepage.jpg'
          },
          {
            name: 'Vijayashree',
            phone: '9880993413',
            email: 'Bd2@L2mrail.Com',
            image: '/images/contact2.jpg'
          },
          {
            name: 'Yeshaswi',
            phone: '9154615184',
            email: 'Bd1@L2mrail.Com',
            image: '/images/contact3.jpg'
          }
        ]
      };
    },
  };
  </script>
  
  <style scoped>

  .green-outline {
  border: 3px solid #28a745;
}
h3 {
    margin: 8px 0;
  }
  .v-card {
    background-color: #696969;
    color: #fff;
    border-radius: 10%;
    padding-top: 20px;
  }

  .contact-card{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text-center{
    background-color:white;
    color: #333;
    width: 100%;
    height: 120px;
  }
  
  .Contact-Header{
    padding: 10px;
    font-size: 25px;
  }
  
 
  .Submit-button{
    margin-left: auto;
  margin-right: auto;
  display: block;
  }

  </style>
  