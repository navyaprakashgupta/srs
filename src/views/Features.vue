<template>
  <v-container style="height: 60% !important;background-color:#333;">
    <Breadcrumbs :items="breadcrumbs" />
    <h1>Features</h1>
    <v-divider class="green-divider"></v-divider>
    <swiper :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }" :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }" :modules="modules" class="mySwiper">
      <swiper-slide><img class="mainFrame" src="https://swiperjs.com/demos/images/nature-1.jpg" />
        <h2 class="heading">Railway Carriage Inspection and Wagon health monitoring</h2>
        <p class="description">Comprehensive detection of hanging parts, identification of defective EM pads,
          monitoring for missing axle covers and axle bolts, assessment of broken or missing
          spring assemblies, inspection of open wagon doors, and detection of flat wheels to
          ensure optimal safety and functionality</p>
      </swiper-slide>
      <swiper-slide>
        <img class="mainFrame" src="https://swiperjs.com/demos/images/nature-2.jpg" />
        <h2 class="heading">Railway Carriage Inspection and Wagon health monitoring</h2>
        <p class="description">Comprehensive detection of hanging parts, identification of defective EM pads,
          monitoring for missing axle covers and axle bolts, assessment of broken or missing
          spring assemblies, inspection of open wagon doors, and detection of flat wheels to
          ensure optimal safety and functionality</p>
      </swiper-slide>
      <swiper-slide>
        <img class="mainFrame" src="https://swiperjs.com/demos/images/nature-3.jpg" />
        <h2 class="heading">Railway Carriage Inspection and Wagon health monitoring</h2>
        <p class="description">Comprehensive detection of hanging parts, identification of defective EM pads,
          monitoring for missing axle covers and axle bolts, assessment of broken or missing
          spring assemblies, inspection of open wagon doors, and detection of flat wheels to
          ensure optimal safety and functionality</p>
      </swiper-slide><swiper-slide><img class="mainFrame"
          src="https://swiperjs.com/demos/images/nature-4.jpg" />
          <h2 class="heading">Railway Carriage Inspection and Wagon health monitoring</h2>
          <p class="description">Comprehensive detection of hanging parts, identification of defective EM pads,
monitoring for missing axle covers and axle bolts, assessment of broken or missing
spring assemblies, inspection of open wagon doors, and detection of flat wheels to
ensure optimal safety and functionality</p>
        </swiper-slide><swiper-slide><img class="mainFrame"
          src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide><swiper-slide><img class="mainFrame"
          src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide><swiper-slide><img class="mainFrame"
          src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide><swiper-slide><img class="mainFrame"
          src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide><swiper-slide><img class="mainFrame"
          src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide><swiper-slide><img class="mainFrame"
          src="https://swiperjs.com/demos/images/nature-10.jpg" /></swiper-slide>
    </swiper>

  </v-container>
  <v-container class="responsive-container" style="background-color: #333;margin-bottom: -10%;">
    <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true" :navigation="true"
      :watchSlidesProgress="true" :modules="modules" class="mySwiper">
      <swiper-slide>
        <img class="galleryimage" src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide>
      <swiper-slide>
        <img class="galleryimage" src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide><swiper-slide><img
          class="galleryimage" src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide><swiper-slide><img
          class="galleryimage" src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide><swiper-slide><img
          class="galleryimage" src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide><swiper-slide><img
          class="galleryimage" src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide><swiper-slide><img
          class="galleryimage" src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide><swiper-slide><img
          class="galleryimage" src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide><swiper-slide><img
          class="galleryimage" src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide><swiper-slide><img
          class="galleryimage" src="https://swiperjs.com/demos/images/nature-10.jpg" /></swiper-slide>
    </swiper>
    <hr class="solid" />
      <footer class="footer-style" style="margin-top:10% !important">
        © Copyright 2022, Lab to Market Innovations Private Limited. All Rights
        Reserved
      </footer>
  </v-container>
  
</template>
<script>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs],
      breakpoints:{
        768:{
          slidesPerView:2
        }
      },
    };
  },
};
</script>
