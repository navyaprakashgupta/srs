  <template>
    <v-container style="height: 30% !important;background-color:#333;">
      <Breadcrumbs :items="breadcrumbs" />
      <h1>FEATURES</h1>
      <hr class="solid" />
      <v-container class="responsive-container" style="background-color: #333;">
      <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true" :navigation="true"
        :watchSlidesProgress="true" :modules="modules" class="mySwiper">
        <swiper-slide>
          <img class="galleryimage" src="/images/feature/feature1.png" /></swiper-slide>
        <swiper-slide>
          <img class="galleryimage" src="/images/feature/feature2.png" /></swiper-slide><swiper-slide><img
            class="galleryimage" src="/images/feature/feature3.jpg" /></swiper-slide><swiper-slide><img class="galleryimage"
            src="/images/feature/feature4.jpg" /></swiper-slide><swiper-slide><img class="galleryimage"
            src="/images/feature/feature5.png" /></swiper-slide><swiper-slide><img class="galleryimage"
            src="/images/feature/feature6.jpg" /></swiper-slide><swiper-slide><img class="galleryimage"
            src="/images/feature/feature7.jpg" /></swiper-slide><swiper-slide><img class="galleryimage"
            src="/images/feature/feature8.jpg" /></swiper-slide><swiper-slide><img class="galleryimage"
            src="/images/feature/feature9.jpg" /></swiper-slide><swiper-slide><img class="galleryimage"
            src="/images/feature/feature10.jpg" /></swiper-slide><swiper-slide><img class="galleryimage"
            src="/images/feature/feature11.jpg" /></swiper-slide>
      </swiper>
      <hr class="solid" />

    </v-container>
      <swiper  :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }" :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }" :modules="modules" class="mySwiper">
        <swiper-slide class="flexy"><img class="mainFrame" src="/images/feature/feature1.png" />
          <div>
            <h2 class="heading">Railway Carriage Inspection and Wagon health monitoring</h2>
            <p class="description">Comprehensive detection of hanging parts, identification of defective EM pads,
              monitoring for missing axle covers and axle bolts, assessment of broken or missing
              spring assemblies, inspection of open wagon doors, and detection of flat wheels to
              ensure optimal safety and functionality.</p>
          </div>

        </swiper-slide>
        <swiper-slide class="flexy">
          <img class="mainFrame" src="/images/feature/feature2.png" />
          <div>
            <h2 class="heading">Operation of Points using Handheld Devices</h2>
            <p class="description">The use of handheld devices for the remote operation and control of railway points
              (switches). These devices enable railway personnel to safely and efficiently change
              track directions, monitor point positions, and ensure proper alignment and locking
              mechanisms, enhancing overall operational efficiency and safety in railway
              management.</p>
          </div>
        </swiper-slide>
        <swiper-slide class="flexy">
          <img class="mainFrame" src="/images/feature/feature3.jpg" /> 
          <div>
          <h2 class="heading">Real time Information of Signaling Infrastructure such as Point Status, Track Occupancy and
            Signal Indications (Live view of the entire yard)</h2>
          <p class="description">Access to live updates and data regarding the status of signaling infrastructure within
            the railway yard, including point status, track occupancy, and signal indications. This
            comprehensive view provides real-time monitoring of the entire yard, enabling railway
            operators to make informed decisions, ensure efficient train movements, and maintain
            safety protocols. </p>
          </div>
        </swiper-slide><swiper-slide class="flexy"><img class="mainFrame" src="/images/feature/feature4.jpg" />
        <div>
          <h2 class="heading"> Yard Utilization statistics with historic data for report generation and analysis</h2>
          <p class="description">Comprehensive tracking and analysis of yard utilization statistics, incorporating historic
            data to facilitate report generation and in-depth analysis. This enables railway operators
            to monitor yard performance over time, identify trends, optimize resource allocation, and
            improve overall efficiency and productivity in yard management.</p>
          </div>
        </swiper-slide><swiper-slide class="flexy"><img class="mainFrame" src="/images/feature/feature5.png" /> 
          <div>
          <h2 class="heading">Identification of Wagon number and Loco number.
          </h2>
          <p class="description">Advanced systems for the precise identification of wagon numbers and locomotive
            (loco) numbers. This technology enhances inventory management, tracking, and
            scheduling by ensuring accurate and efficient logging of individual wagons and
            locomotives within the railway network.</p>
          </div>
        </swiper-slide><swiper-slide class="flexy"><img class="mainFrame" src="/images/feature/feature6.jpg" />
           <div>
          <h2 class="heading"> Time in/Time out of each Rake and wagon</h2>
          <p class="description">Accurate recording of the arrival (time in) and departure (time out) times for each rake
            and wagon, facilitating precise tracking and efficient scheduling within the railway
            system.</p>
          </div>
        </swiper-slide>
        <swiper-slide class="flexy"><img class="mainFrame" src="/images/feature/feature7.jpg" /> 
      
          <h2 class="heading">Monitoring the Load of each Wagon and Wheel health:</h2>
        </swiper-slide><swiper-slide class="flexy"><img class="mainFrame" src="/images/feature/feature8.jpg" /> <div>
          <h2 class="heading">Live Information of Rolling Stock (Wagons and Locomotives)</h2>
          <p class="description">Real-time data on rolling stock, including wagon numbers, track occupancy, wagon
            types, and other essential features. This comprehensive information system enhances
            monitoring, management, and operational efficiency within the railway network.</p></div>
        </swiper-slide><swiper-slide class="flexy"><img class="mainFrame" src="/images/feature/feature9.jpg" /> <div>
          <h2 class="heading">Identification and Recording of Wagon number and type.</h2>
          <p class="description">Accurate identification and recording of each wagon's number and type, enabling
            efficient tracking, inventory management, and operational planning within the railway
            system. This system ensures precise data collection for improved logistical
            coordination and resource allocation.</p></div>
        </swiper-slide><swiper-slide class="flexy"><img class="mainFrame" src="/images/feature/feature10.jpg" /> <div>
          <h2 class="heading">Playback video of Yard movement for any Date and Time</h2>
          <p class="description">Access to recorded video footage of yard movements, allowing for playback of
            activities at any specified date and time. This feature enhances incident analysis,
            operational review, and security monitoring by providing detailed visual records of yard
            operations.</p></div>
        </swiper-slide><swiper-slide class="flexy"><img class="mainFrame" src="/images/feature/feature11.jpg" /> <div>
          <h2 class="heading">Details of Unloading times and Waiting times</h2>
          <p class="description">Comprehensive records of unloading times and waiting times for each wagon and rake,
            providing valuable insights into operational efficiency. This data helps optimize
            scheduling, reduce delays, and improve overall yard productivity.</p></div>
        </swiper-slide>
      </swiper>
      <footer class="footer-style" style="margin-top:10% !important">
        © Copyright 2022, Lab to Market Innovations Private Limited. All Rights
        Reserved
      </footer>
    </v-container>
    
  </template>
  <style>
 @media (min-width: 960px) {

  .flexy{
    display: flex;
  }
}
@media only screen and (max-width: 700px) {
  .flexy{
    display: block;
  }
  .swiper{
    height: auto !important;
  }
}
</style>
  <script>
  import { ref } from 'vue';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import Breadcrumbs from '../views/Breadcrumbs.vue';
  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';
  import 'swiper/css/thumbs';


  // import required modules
  import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

  export default {
    name: 'Features',
    components: {
      Swiper,
      SwiperSlide,
      Breadcrumbs
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
        breadcrumbs: [
          { text: 'Home', to: '/' },
          { text: 'Features', to: '/features' },
        ],
        breakpoints: {
          768: {
            slidesPerView: 2
          }
        },
      };
    },
  };
  </script>
