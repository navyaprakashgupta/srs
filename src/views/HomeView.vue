<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <v-img :height="650" cover contain src="images/home.jpg" >
           <div class="overlay"></div>
            <v-row class="fill-height" justify="center">
              <v-col cols="12" class="content">
                <h1 class="display-1">REVOLUTIONIZE YOUR</h1>
                <h1 class="display-2">RAILWAY OPERATIONS</h1>
                <h2 class="display-3">ONE SOLUTION, INFINITE POSSIBILITIES</h2>
              </v-col>
              <div
                style="cursor: pointer"
                @click="goto('InfoText')"
                class="triangle triangle-simple"
              ></div>
            </v-row>
          </v-img>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <div class="InfoText" ref="InfoText">
            <p class="font-Medium">
              L2M, an IISC start up is determined to change Industrial Railway
              Siding into Smart
            </p>
            <p class="font-Medium">
              Railway Siding. Seamlessly integrating the digital and physical
              realms to ensure safe and
            </p>
            <p class="font-Medium">efficient transportation networks.</p>
            <p class="font-Medium">
              Smart railway network will provide real-time insights, automate
              processes, and improve
            </p>
            <p class="font-Medium">
              decision-making, ultimately empowering you to streamline
              operations and
            </p>
            <p class="font-Medium">maximize productivity.</p>
            <br>
            <v-btn color="green" class="text-center" @click="learnMore('features')">LEARN MORE</v-btn>
          </div>
          
          
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <h2 class="text-center card-header">FEATURES OF OUR PRODUCT</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <div class="right-data">
            <h2 class="header2">INFORMATION AT YOUR FINGERTIPS</h2>
            <hr class="solid">
            <p class="font-regular">
              Time in / Time out of each Train and Wagon
            </p>
            <p class="font-regular">Wagon Number and weight of each Wagon</p>
            <p class="font-regular">
              Real-time Information of Track Occupation
            </p>
            <p class="font-regular">
              Real-time Information of Shunting Engines
            </p>
            <p class="font-regular">
              Real-time Information of the movement of Crew
            </p>
            <p class="font-regular">Real-time Information about Point Status</p>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            src="images/home1.jpeg"
            alt="Information Image"
            class="responsive-img"
          ></v-img>
        </v-col>
      </v-row>
      <v-row class="row-reverse">
        <v-col cols="12" md="6">
          <v-img
            src="images/pic2.jpg"
            alt="Information Image"
            class="responsive-img"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <div class="left-data">
            <h2 class="header2">DATA FOR DECISIONS</h2>
            <hr class="solid" />
            <p class="font-regular">Management Information System on a</p>
            <p class="font-regular">state-of-the-art dashboard</p>
            <p class="font-regular">Automatic Generation of Key Performance</p>
            <p class="font-regular">Indices</p>
            <p class="font-regular">Utilization of various assets including</p>
            <p class="font-regular">shunting locos, wagons, points, crew,</p>
            <p class="font-regular">track</p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <div class="right-data">
            <h2 class="header2">MASTER SAFETY & SIMPLYFY OPERATIONS</h2>
            <hr class="solid" />
            <p class="font-regular">Real-time Alerts before Trail Through</p>
            <p class="font-regular">Real-time Alerts before Accidents</p>
            <p class="font-regular">
              Automatic Application of Brakes during emergencies
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <img
            src="/images/home3.jpg"
            alt="Information Image"
            class="responsive-img"
          />
        </v-col>
      </v-row>
      <v-row class="row-reverse">
        <v-col cols="12" md="6">
          <img
            src="/images/home4.jpg"
            alt="Information Image"
            class="responsive-img"
          />
        </v-col>
        <v-col cols="12" md="6">
          <div class="left-data">
            <h2 class="header2">ASSET CARE MADE EASY</h2>
            <hr class="solid" />
            <p class="font-regular">Wagon Health Monitoring</p>
            <p class="font-regular">Evidence of asset health</p>
          </div>
        </v-col>
      </v-row>
      <hr class="solid" />
      <footer class="footer-style">
        © Copyright 2022, Lab to Market Innovations Private Limited. All Rights
        Reserved
      </footer>
    </v-container>
  </v-app>
</template>

<script >
export default {
  data() {
    return {
      showText: false,
    };
  },
  methods: {
    learnMore(path) {
      // Handle learn more action
      this.$router.push("/" + path);
    },
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>
<style scoped>
.responsive-img {
  width: 100%;
  height: 400px;
  object-fit: contain;
}

@media (max-width: 768px) {
  .responsive-img{
    height: 200px;
  }
}
.card-header {
  margin: 2%;
  background-color: rgb(82, 90, 91);
}

.display-1 {
  font: Inter !important;
  font-size: 70px;
  margin-top: 140px;
  margin-left: 90px;
}

.display-2 {
  font: Inter;
  font-size: 70px;
  margin-left: 90px;
}
.text-center {
  margin-left: auto;
  margin-right: auto;
  display: block;
}


.display-3 {
  font: InterLight !important;
  font-size: 30px;
  margin-left: 90px;
}

.InfoText {
  margin: 30px !important;
}
.font-Medium {
  font-style:InterMedium !important;
  font-size: 26px;

}

.left-data {
  float: right;
}

.header2 {
  font: InterSemiBold !important;
  font-size: 32px;
  padding: 20 20 0 0;
}
.right-data {
  float: left;
}

.font-regular {
  font: InterRegular !important;
  font-size: 28px;
  padding-left: 15px;
}
hr.solid {
  border-top: 3px solid darkgreen;
  margin-bottom: 30px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Adjust the opacity here */
}


.content {
  position: relative;
  z-index: 2;
  color: white;
  
}
</style>