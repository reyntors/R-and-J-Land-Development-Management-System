import {createRouter, createWebHistory} from 'vue-router'

import HomePage from './components/Pages/HomePage/HomePage.vue'
import ProjectPage from './components/Pages/ProjectPage/ProjectPage.vue'
import GalleryPage from './components/Pages/GalleryPage/GalleryPage.vue'


//GUEST FORMS NEW PAGE
import GuestFormPage from './components/Pages/FormPage/GuestForms/GuestFormPage.vue'
import GuestLetterOfIntent from './components/Pages/FormPage/GuestForms/GuestSubForms/GuestLetterIntent.vue'
import GuestContractDetails from './components/Pages/FormPage/GuestForms/GuestSubForms/GuestContractDetails.vue'
import GuestBIRtinRequest from './components/Pages/FormPage/GuestForms/GuestSubForms/GuestBirTinRequest.vue'
import GuestIndividualBuyerDeclaration from './components/Pages/FormPage/GuestForms/GuestSubForms/GuestIndividualBuyerDeclaration.vue'

//ADMIN & STAFF PAGE
import PersonnelHomePage from './components/Pages/PersonnelPage/PersonnelPage.vue'
import PersonnelReports from './components/Pages/PersonnelPage/ReportsView/ReportsView.vue'
import PersonnelInquiries from './components/Pages/PersonnelPage/InquiriesView/InquiriesView.vue'
import PersonnelSubdivision from './components/Pages/PersonnelPage/SubdivisionView/SubdivisionView.vue'
import PersonnelClient from './components/Pages/PersonnelPage/ClientsView/ClientView.vue'
import PersonnelForm from './components/Pages/PersonnelPage/EmptyForms/EmptyForms.vue'

import store from './store/store.js'

const route = createRouter({

        history: createWebHistory(),
        routes: [
            {path: '/', redirect: '/home'},
            {path:'/home', component: HomePage},
            {path:'/projects', component: ProjectPage},
            {path:'/gallery', component: GalleryPage},

            //guest authorized
            {path:'/guest-forms', component: GuestFormPage, meta: {requiresAuthGuest: true}},
            {path:'/guest-forms/letter-of-intent', component: GuestLetterOfIntent, meta: {requiresAuthGuest: true}},
            {path:'/guest-forms/contract-details', component: GuestContractDetails, meta: {requiresAuthGuest: true}},
            {path:'/guest-forms/bir-tin-request', component: GuestBIRtinRequest, meta: {requiresAuthGuest: true}},
            {path:'/guest-forms/individual-buyer-declaration', component: GuestIndividualBuyerDeclaration, meta: {requiresAuthGuest: true}},

            
            //personnel authorized
            {path: '/personnel', component: PersonnelHomePage, meta:{requiredAuthPersonnel:true},
                children: [
                    {path: 'client', component: PersonnelClient},
                    {path: 'subdivision', component: PersonnelSubdivision},
                    {path: 'inquiries', component: PersonnelInquiries},
                    {path: 'emptyForms', component: PersonnelForm},
                    {path: 'reports', component: PersonnelReports}
                ]
            }
        ],
        scrollBehavior(to,from,savedPosition){
            if(savedPosition){
                return savedPosition
            }else{
                return {left: 0, top: 0};
            }
        }
    });

    route.beforeEach(function(to,_,next){
        
        //get the localStorage in case HARD REFRESH
        store.commit('auth/getLocalStorage')

        //this condition sets the path that required the user to be authenticated before they can access it
        if(to.meta.requiresAuthGuest && !store.getters['auth/authorizationRoleGuest']){       
            // console.log('guest: '+store.getters['auth/authorizationRoleGuest'])
            console.log('NOT AUTHENTICATED AS GUEST and NOT ALLOWED TO ACCESS THIS ROUTE')
            next('/home');
        }
        else if(to.meta.requiresAuthGuest && store.getters['auth/authorizationRoleGuest'] && true){
            // console.log('guest: '+store.getters['auth/authorizationRoleGuest'])
            console.log('AUTHORIZED AS GUEST and ALLOWED TO ACCESS THIS ROUTE')
            next();
        }
        else if(to.meta.requiredAuthPersonnel && !store.getters['auth/authorizationPersonnel']){
            // console.log('staff: '+store.getters['auth/authorizationRoleStaff'])
            console.log('NOT AUTHORIZED AS PERSONNEL and NOT ALLOWED TO ACCESS THIS ROUTE')
            next('/home');
        }
        else if(to.meta.requiredAuthPersonnel && store.getters['auth/authorizationPersonnel']){
            // console.log('staff: '+store.getters['auth/authorizationRoleStaff'])
            console.log('AUTHORIZED AS PERSONNEL and ALLOWED TO ACCESS THIS ROUTE')
            next();
        }
        else{
            // console.log('DIRECTED TO FREE ACCESS ROUTE')
            console.log('role: ' + store.getters['auth/getRoleType'])
            // console.log('login: ' + store.getters['auth/authGetter'])
            next()
        }
    })


export default route