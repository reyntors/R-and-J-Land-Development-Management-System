import {createRouter, createWebHistory} from 'vue-router'

import HomePage from './components/Pages/HomePage/HomePage.vue'

const route = createRouter({

        history: createWebHistory(),
        routes: [
            {path: '/', redirect: '/home'},
            {path:'/home', component: HomePage},
            {path:'/about', component: null},
            {path:'/gallery', component: null},
            {path:'/forms', component: null},
            {path:'/contact', component: null},
            {path:'/:notFound(.*)', component: null}
        ]
    })


export default route