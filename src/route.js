import {createRouter, createWebHistory} from 'vue-router'

import HomePage from './components/Pages/HomePage/HomePage.vue'
import AboutPage from './components/Pages/AboutPage/AboutPage.vue'
import ProjectPage from './components/Pages/ProjectPage/ProjectPage.vue'
import GalleryPage from './components/Pages/GalleryPage/GalleryPage.vue'
import FormPage from './components/Pages/FormPage/FormPage.vue'
import ContactPage from './components/Pages/ContactPage/ContactPage.vue'

const route = createRouter({

        history: createWebHistory(),
        routes: [
            {path: '/', redirect: '/home'},
            {path:'/home', component: HomePage},
            {path:'/about', component: AboutPage},
            {path:'/projects', component: ProjectPage},
            {path:'/gallery', component: GalleryPage},
            {path:'/forms', component: FormPage},
            {path:'/contact', component: ContactPage},
            {path:'/:notFound(.*)', component: null}
        ]
    })


export default route