import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './route.js'
import store from './store/store.js'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faBars,faX,faSearch,faPesoSign, faLeftLong, faRightLong} from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faBars,faX,faSearch,faPesoSign,faLeftLong, faRightLong)


import TheHeader from './components/Reusable/TheHeader.vue'
import TheFooter from './components/Reusable/TheFooter.vue'


const app = createApp(App)

app.use(router)
app.use(store)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('the-header',TheHeader)
app.component('the-footer',TheFooter)

app.mount('#app')