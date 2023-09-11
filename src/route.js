import {createRouter, createWebHistory} from 'vue-router'

import HomePage from './components/Pages/HomePage/HomePage.vue'

const route = createRouter({

        history: createWebHistory(),
        routes: [
            {path: '/', redirect: '/home'},
            {path:'/home', component: HomePage}
        ]
    })


export default route