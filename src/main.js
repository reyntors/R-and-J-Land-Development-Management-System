import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import { createApp } from 'vue'
// import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';
import App from './App.vue'
import router from './route.js'
import store from './store/store.js'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faBars,faX,faSearch,faPesoSign, faLeftLong, faRightLong, faCircleUser, faCaretDown, 
    faCaretUp, faArrowLeftLong, faPlus,faMagnifyingGlass,faGear,faTrashCan,faCaretLeft,faCaretRight,
    faEnvelopeCircleCheck,faEnvelopeOpen, faEnvelope, faChevronDown, faXmark, faArrowUpFromBracket,
    faEyeSlash,faEye,faFilter,faUserXmark,faMinus,faFilePen,faUserCheck
    } from '@fortawesome/free-solid-svg-icons'

import { faFacebook, faWhatsapp, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faBars,faX,faSearch,faPesoSign,faLeftLong, faRightLong,faCircleUser,
    faCaretDown,faCaretUp,faArrowLeftLong,faPlus,faMagnifyingGlass,faGear,faTrashCan,
    faCaretLeft,faCaretRight,faEnvelopeCircleCheck,faEnvelopeOpen,faFacebook, faWhatsapp,faEnvelope,faChevronDown,
    faFacebookSquare,faXmark,faArrowUpFromBracket,faEyeSlash,faEye,faFilter,faUserXmark,faMinus,faFilePen,faUserCheck
    )


import TheHeader from './components/Reusable/Header and Footer/TheHeader.vue'
import TheFooter from './components/Reusable/Header and Footer/TheFooter.vue'
import FormCard from './components/Reusable/Form SubComponents/FormCard.vue'
import ProgressLoading from './components/Reusable/LoadingScreens/ProgressLoading.vue'
import FormThumbnail from './components/Reusable/Form SubComponents/FormThumbnail.vue'
import SubmitFormButton from './components/Reusable/Form SubComponents/SubmitFormButton.vue'
import DotLoading from './components/Reusable/LoadingScreens/DotLoading.vue'
import BlurLoading from './components/Reusable/LoadingScreens/BlurLoading.vue'
// import LoginLoading from './components/Reusable/LoadingScreens/LoginLoading.vue'


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
app.component('dot-loading',DotLoading)
app.component('blur-loading',BlurLoading)
// app.component('login-loading',LoginLoading )

app.mount('#app')