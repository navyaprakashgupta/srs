<!-- views/Downloads.vue -->
<template>
  <v-container>
    <Breadcrumbs :items="breadcrumbs" />
        <h1>DOWNLOADS</h1>
        <hr class="solid" />
        <v-row>
          <v-col cols="12" md="6">
            <button @click="downloadPdf('https://firebasestorage.googleapis.com/v0/b/srsweb-e9a21.appspot.com/o/srs.pdf?alt=media&token=19909962-7649-4d13-990c-e0c386ee5686')" class="download-img">
              <img src="/images/download.jpg" alt="Download Icon" />
            </button>

            <p class="download-text">BROCHURE</p>
          </v-col>
          <v-col cols="12" md="6">
            <button @click="downloadPdf('/assets/pdf/pamphlet.pdf')" class="download-img">
              <img src="/images/download.jpg" alt="Download Icon" />
            </button>
            <p class="download-text">PPT</p>
          </v-col>
          <!-- <v-col cols="12" md="4">
            <button @click="downloadPdf(file.url)" class="download-img">
              <img src="/images/download.jpg" alt="Download Icon" />
            </button>
            <p class="download-text">LEAFLET</p>
          </v-col> -->
        </v-row>
        <hr class="solid " />
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
    async downloadPdf(downloadURL) {
     let url = downloadURL;
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        const downloadUrl = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'srs'; // You can change the filename here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(downloadUrl);
    } catch (error) {
        console.error('Error downloading the file', error);
    }
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
  padding-top: 10%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.download-text {
  text-align: center;
  padding: 20px;
  font: Inter;
  font-size: 20px;
  padding-bottom: 20px;
}

</style>
 