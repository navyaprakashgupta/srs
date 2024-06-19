<!-- views/About.vue -->
<template>
     <v-container>
        <Breadcrumbs :items="breadcrumbs" />
        <h1>ABOUT L2M</h1>
        <v-divider class="green-divider"></v-divider>  
        <p>
          L2M Rail is seed funded and incubated by the prestigious Indian Institute of Science (IISc), Bangalore. Our access to the intellectual & infrastructural resources and Labs of IISc has helped us undertake pathbreaking, high-value research without investing in such facilities. We are also recognized under the Start-up India initiative of the Department for Promotion of Industry and Internal Trade (DPIIT), Govt. of India. We are the winners of Elevate 2018 and received grants from the Government of Karnataka for our R&D activities. We have also received CSR funds from Telecommunications Consultants India Limited (TCIL), a Government of India Enterprise. We recently received the ‘Rail Business start-up of the Year’ award announced by Urban Transport News in association with the Indian Association of Urban Rail and Mobility Industry (IAURMI).
        </p>
    <v-row >
      <v-col cols="12" md="5">
          <v-img
            src="images/aboutPica.jpg"
            alt="Information Image"
            class="responsive-img"
          ></v-img>
        </v-col>
        <v-col cols="12" md="7">
      <p>Founded in 2016 by Prof. S.K. Sinha and Mr G. S. Rao and a small group of highly committed scientists, Lab to Market Innovations Pvt. Ltd. (L2M Rail) were born with a vision to ‘create opportunities for wealth generation from academic research and development’. We have quickly outgrown that vision, and today we are a robust engineering and R&D company working on Industry 4.0 technologies based on complex Cyber-Physical Systems (CPS)—the revolutionary combination of Internet of Things (IoT), Artificial Intelligence (AI), Machine Learning, Big Data & Analytics, Cloud Computing, 5G and physical objects. We boast of ourselves as leaders in Fibre Brag Grating (FBG) sensing technology.</p>
      <br>
      <p>L2M Rail is seed funded and incubated by the prestigious Indian Institute of Science (IISc), Bangalore. Our access to the intellectual & infrastructural resources and Labs of IISc has helped us undertake pathbreaking, high-value research without investing in such facilities. We are also recognized under the  Start-up India initiative of the Department for Promotion of Industry and Internal Trade (DPIIT), Govt. of India. We are the winners of Elevate 2018 and received grants from the Government of Karnataka for our R&D activities. We have also received CSR funds from Telecommunications Consultants India Limited (TCIL), a Government of India Enterprise. We recently received the ‘Rail Business start-up of the Year’ award announced by Urban Transport News in association with the Indian Association of Urban Rail and Mobility Industry (IAURMI).</p>
    </v-col>
    </v-row>
    <v-row class="row-reverse">
      <v-col cols="12" md="8">
        <p>L2M Rail is currently developing Cyber-Physical Systems for railways aimed at safe and reliable transportation systems. The Railway CPS observes, plans, controls and manages the trains and the track-side equipment to meet operational goals without compromising safety requirements. We are proud to announce that we are the only company in India and one of the few companies worldwide operating in this multi-billion dollar niche area.</p>
        <br>
        <p>We have also started working on structural health monitoring (SHM) for monitoring mainstream civil infrastructures such as bridges, tunnels, railway infrastructures etc., using FBG sensing technology. Our future plans include working in the areas of defence, medicine and agriculture by leveraging our expertise in FBG sensing technology.</p>
      </v-col>
      <v-col cols="12" md="4">
        <v-img
            src="images/aboutPic2.jpg"
            alt="Information Image"
            class="responsive-img"
          ></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-img
            src="images/aboutPicc.jpg"
            alt="Information Image"
            class="responsive-img"
          ></v-img>
      </v-col>
      <v-col cols="12" md="8">
        <p>For a company that is only five years old, L2M Rail has already filed nine patents and developed several innovative products/solutions that can vastly enhance the safety, security and efficiency of railways. Many more are in the pipeline. Large scale commercialization of our disruptive technologies is the need of the hour to reach every train traveller in the world. At present, we are executing the government and corporate orders from India. Simultaneously, we plan to open offices in different parts of the world (USA, Canada, UK, Malaysia, Middle East) to commercialize our proven technologies.</p>
        <br>
        <br>
        <p>G.S. Rao is a serial entrepreneur, former bureaucrat (IRSSE) and the railway domain expert who served RDSO and Indian Railways with distinction. Prof. Sinha is a distinguished scientist, academician and technology expert with decades of working experience in various prestigious positions at IISc.</p>
      </v-col>
    </v-row>
    <v-row>
      <h2 class="greenBar">OUR VISION</h2>
      <p>“To create safe, reliable, efficient and sustainable systems for your tomorrow through innovation”</p>
      <h2 class="greenBar">OUR MISSION</h2>
      <p>“To become a global leader in complex Cyber-Physical Systems for railways by building the most compelling technology company of the 21st century. We use our experience, know-how and ground-breaking R&D to develop highly innovative products/solutions to move closer to our customers and in turn to the people.”</p>
      <h2 class="greenBar ">OUR CORE VALUES</h2>
      <ul class="bullets">
        <li>Creativity & Innovation</li>
        <li>Persistent improvement</li>
        <li>Personal integrity</li>
        <li>Excellence</li>
        <li>Social responsibility</li>
        <li>Environmental sustainability</li>
      </ul>  
      <h2 class="greenBar text-center">OUR ETHICS</h2>
      <p>Everybody is somebody’s customer. Therefore, in all our relationships, we will strive for:</p>
      <br>
      <br>
      <ul class="bullets">
        <li><b>Excellence</b> – We are not satisfied with the status quo and strive for continuous improvement in all that we do.</li>
        <li><b>Integrity</b> – We build loyalty through integrity and honest dealing with partners, customers and each other.</li>
        <li><b>Openness</b> – By fostering a culture of openness, we encourage communication, questioning, challenging, creativity, and imagination with our customers, partners and coworkers.</li>
        <li><b>Commitment</b> – We provide value to our customers, coworkers and partners by following through on our commitments in a timely manner.</li>
        <li><b>Life-Long Learning</b> – We encourage constant personal and professional renewal through self-directed and corporate-sponsored learning.</li>
        <li><b>Teamwork</b> – We function as a team. Some players are stronger or more adept than others, but all contribute to the victory.</li>
        <li><b>Mentoring</b> – We mentor our people so that they can mentor others.</li>
        <li><b>Leadership</b> – Everyone is a leader, and every leader is a servant. Leaders take responsibility where they are competent and defer to others where the others are competent.</li>
      </ul>
    </v-row>
    <v-divider class="green-divider"></v-divider>
    <footer class="footer-style">
          © Copyright 2022, Lab to Market Innovations Private Limited. All Rights Reserved
    </footer>
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
  <style scoped>
  p{
    font: InterRegular;
    font-size: 20px;
    
  }

  .greenBar{
    height: 50px;
    background-color: rgb(39, 163, 39);
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    font: InterSemiBold !important;
    margin: auto ;
  display: block;
  text-align: center;
  }

  .bullets{
    padding-left: 30px;
    font: InterRegular;
    font-size: 20px;
  }
  li{
    padding: 6px;
  }

  </style>