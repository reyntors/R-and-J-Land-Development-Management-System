import {createRouter, createWebHistory} from 'vue-router'

import HomePage from './components/Pages/HomePage/HomePage.vue'
import AboutPage from './components/Pages/AboutPage/AboutPage.vue'
import ProjectPage from './components/Pages/ProjectPage/ProjectPage.vue'
import GalleryPage from './components/Pages/GalleryPage/GalleryPage.vue'
import FormPage from './components/Pages/FormPage/FormPage.vue'
import ContactPage from './components/Pages/ContactPage/ContactPage.vue'

import store from './store/store.js'

const route = createRouter({

        history: createWebHistory(),
        routes: [
            {path: '/', redirect: '/home'},
            {path:'/home', component: HomePage},
            {path:'/about', component: AboutPage},
            {path:'/projects', component: ProjectPage},
            {path:'/gallery', component: GalleryPage},
            {path:'/contact', component: ContactPage},
            {path:'/forms', component: FormPage, meta: {requiredAuth: true}},
            {path:'/:notFound(.*)', component: null}
        ]
    });

    route.beforeEach(function(to,_,next){
        
        //get the localStorage in case HARD REFRESH
        store.commit('auth/getLocalStorage')

        //this condition sets the path that required the user to be authenticated before they can access it
        if(to.meta.requiredAuth && !store.getters['auth/authGetter']){
            next('/home');
            console.log('NOT AUTHENTICATED NOT ALLOWED TO ACCESS THIS ROUTE')
        }else if(to.meta.requiredAuth && store.getters['auth/authGetter']){
            console.log('AUTHENTICATED and ALLOWED TO ACCESS THIS ROUTE')
            next();
        }
        else{
            console.log('DIRECTED TO FREE ACCESS ROUTE')
            next()
        }
    })


export default route