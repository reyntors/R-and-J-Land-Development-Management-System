import { createApp } from 'vue'
import App from './App.vue'
import router from './route.js'

import TheHeader from './components/Reusable/TheHeader.vue'
import TheFooter from './components/Reusable/TheFooter.vue'

const app = createApp(App)

app.use(router)

app.component('the-header',TheHeader)
app.component('the-footer',TheFooter)

app.mount('#app')