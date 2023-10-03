import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import { createApp } from 'vue'
// import { toast } from 'vue3-toastify'
import App from './App.vue'
import router from './route.js'
import store from './store/store.js'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faBars,faX,faSearch,faPesoSign, faLeftLong, faRightLong, faCircleUser, faCaretDown, faCaretUp, faArrowLeftLong, faPlus,faMagnifyingGlass, faGear } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faBars,faX,faSearch,faPesoSign,faLeftLong, faRightLong,faCircleUser,faCaretDown,faCaretUp,faArrowLeftLong,faPlus,faMagnifyingGlass,faGear)


import TheHeader from './components/Reusable/TheHeader.vue'
import TheFooter from './components/Reusable/TheFooter.vue'
import FormCard from './components/Reusable/FormCard.vue'
import ProgressLoading from './components/Reusable/ProgressLoading.vue'
import FormThumbnail from './components/Reusable/FormThumbnail.vue'
import SubmitFormButton from './components/Reusable/SubmitFormButton.vue'


const app = createApp(App)

app.use(router)
app.use(store)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('the-header',TheHeader)
app.component('the-footer',TheFooter)
app.component('form-card',FormCard)
app.component('progress-loading',ProgressLoading)
app.component('form-thumbnail', FormThumbnail)
app.component('submit-form-button',SubmitFormButton)

app.mount('#app')