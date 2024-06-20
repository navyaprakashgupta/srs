<!-- views/Downloads.vue -->
<template>
  <v-container>
    <Breadcrumbs :items="breadcrumbs" />
    
      
        <h1>DOWNLOADS</h1>
        <hr class="solid" />
        <v-row>
          <v-col cols="12" md="4">
            <button @click="downloadPdf('https://www.clickdimensions.com/links/TestPDFfile.pdf')" class="download-img">
              <img src="/images/download.jpg" alt="Download Icon" />
            </button>

            <p class="download-text">BROCHURE</p>
          </v-col>
          <v-col cols="12" md="4">
            <button @click="downloadPdf(file.url)" class="download-img">
              <img src="/images/download.jpg" alt="Download Icon" />
            </button>
            <p class="download-text">PPT</p>
          </v-col>
          <v-col cols="12" md="4">
            <button @click="downloadPdf(file.url)" class="download-img">
              <img src="/images/download.jpg" alt="Download Icon" />
            </button>
            <p class="download-text">LEAFLET</p>
          </v-col>
        </v-row>
        <hr class="solid" />
        <footer class="footer-style">
          © Copyright 2022, Lab to Market Innovations Private Limited. All Rights Reserved
        </footer>
      
    
  </v-container>
</template>
 
<script>
import Breadcrumbs from '../views/Breadcrumbs.vue';

export default {
  name: 'Downloads',
  components: {
    Breadcrumbs,
  },
  methods: {
    downloadPdf() {
      // create element <a> for download PDF
      const link = document.createElement('a');
      link.href = this.pdfUrl;
      link.target = '_blank';
      link.download = this.pdfFileName;

      // Simulate a click on the element <a>
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
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
.download-img {
  /* padding-left: 80px; */
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.download-text {
  text-align: center;
  padding: 20px;
  font: Inter;
  font-size: 20px;
}
</style>
 