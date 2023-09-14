import {createRouter, createWebHistory} from 'vue-router'

import HomePage from './components/Pages/HomePage/HomePage.vue'
import VirtualView from './components/Pages/HomePage/subfolder/VirtualView.vue'

const route = createRouter({

        history: createWebHistory(),
        routes: [
            {path: '/', redirect: '/home'},
            {path:'/home', component: HomePage},
            {path:'/home/virtual', component: VirtualView}
        ]
    })


export default route