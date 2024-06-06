import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/sass/style.scss'

const app = createApp(App)

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components

const vuetify = createVuetify({
  components,
  directives,
})


app.use(router)
app.use(vuetify)
app.mount('#app')
