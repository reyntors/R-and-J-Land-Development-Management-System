import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from './components/Pages/LANDING PAGE/LandingPage.vue'
import SellPage from './components/Pages/SELL PAGE/SellView.vue'
import ProvidePage from './components/Pages/PROVIDE PAGE/ProvidePage.vue'
import ProjectPage from './components/Pages/PROJECT PAGE/ProjectPage.vue'
import CareerPage from './components/Pages/CAREER PAGE/CareerPage.vue'
import CustomerService from './components/Pages/CUSTOMER SERVICE PAGE/CustomerService.vue'
import InquireNowPage from './components/Pages/INQUIRE_NOW PAGE/InquireNowPage.vue'
import AccountPage from './components/Pages/ACCOUNT PAGE/AccountPage.vue'



//GUEST FORMS NEW PAGE
import GuestFormPage from './components/Pages/FORM PAGE/GuestFormPage.vue'
import GuestLetterOfIntent from './components/Forms Used/LetterOfIntent.vue'
import GuestContractDetails from './components/Pages/FORM PAGE/GuestForms/GuestContractDetails.vue'
import GuestBIRtinRequest from './components/Pages/FORM PAGE/GuestForms/GuestBirTinRequest.vue'
import GuestIndividualBuyerDeclaration from './components/Pages/FORM PAGE/GuestForms/GuestIndividualBuyerDeclaration.vue'

//ADMIN & STAFF PAGE
import PersonnelHomePage from './components/Pages/PERSONNEL PAGE/PersonnelPage.vue'
import PersonnelReports from './components/Pages/PERSONNEL PAGE/ReportsView/ReportsView.vue'
import PersonnelInquiries from './components/Pages/PERSONNEL PAGE/InquiriesView/InquiriesView.vue'
import PersonnelSubdivision from './components/Pages/PERSONNEL PAGE/SubdivisionView/SubdivisionView.vue'
import PersonnelClient from './components/Pages/PERSONNEL PAGE/ClientsView/ClientView.vue'
import PersonnelForm from './components/Pages/PERSONNEL PAGE/EmptyForms/EmptyForms.vue'

import store from './store/store.js'

const route = createRouter({

        history: createWebHistory(),
        routes: [
            {path: '/', redirect: '/home'},
            {path:'/home', component: LandingPage},
            {path: '/sell', component: SellPage},
            {path: '/provide', component: ProvidePage},
            {path:'/projects', component: ProjectPage},
            {path:'/careers', component: CareerPage},
            {path:'/customer-service', component: CustomerService},
            {path:'/inquire', component: InquireNowPage},
            // {path:'/account', component: AccountPage},

            //guest authorized
            {path:'/account', component: AccountPage, meta: {requiresAuthGuest: true}},
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
        // this.$store.commit('resetHomeId')
        store.commit('auth/getLocalStorage')
        store.commit('resetHomeId')
        // store.dispatch('mySettings/getMyAccountSettings')

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