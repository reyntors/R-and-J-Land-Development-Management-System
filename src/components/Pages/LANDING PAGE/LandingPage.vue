
<template>
    
    <the-header @navigation-scroll="scrollNavigate" :home-nav="idActive"></the-header>

    <carousel-component></carousel-component>
    <about-comp></about-comp>
    <we-build></we-build>

    <the-footer ></the-footer>  
</template>

<script>
import AboutComp from './ABOUT/AboutComp.vue'

import WeBuild from './WE BUILD/WeBuild.vue'
import CarouselComponent from './CAROUSEL/CarouselComponent.vue'

export default {
    components: {
        CarouselComponent,
        AboutComp, 
        WeBuild,
    },

    data(){
        return{
            topAbout : null,
            topSustainability  : null,
            topCorpOfficers: null,
            topLicensePermits: null,

            bottomLicensePermits: null,

            topResedential: null,
            topCommercial: null,
            topAmeneties: null,
            topStructural: null,

            idActive: '',
        }
    },

    computed:{

    },

    methods: {
        setTopAbout(){
            const section = document.getElementById('about')
            const headerHeight    = document.querySelector('.header').offsetHeight;
            const sectionTop = section.getBoundingClientRect().top
            const YLocation = sectionTop + window.scrollY - headerHeight
            this.topAbout = YLocation -1             
        },
        setTopSustainability(){
            const section = document.getElementById('sustainability')
            const headerHeight    = document.querySelector('.header').offsetHeight;
            const sectionTop = section.getBoundingClientRect().top
            const YLocation = sectionTop + window.scrollY - headerHeight
            this.topSustainability =  YLocation  -1      
        },
        setTopCorpOfficers(){
            const section = document.getElementById('corp-officers')
            const headerHeight    = document.querySelector('.header').offsetHeight;
            const sectionTop = section.getBoundingClientRect().top
            const YLocation = sectionTop + window.scrollY - headerHeight
            this.topCorpOfficers =  YLocation -1
            // console.log(this.topCorpOfficers)         
        },
        setTopLicensesPermits(){
            const section = document.getElementById('licenses&permits')
            const headerHeight    = document.querySelector('.header').offsetHeight;
            const sectionTop = section.getBoundingClientRect().top             
            const YLocation = sectionTop + window.scrollY - headerHeight
            this.topLicensePermits =  YLocation -1  
            // console.log(this.topLicensePermits)  
        },

        setTopResedential(){
            const section = document.getElementById('residential-house')
            const headerHeight    = document.querySelector('.header').offsetHeight;
            const sectionTop = section.getBoundingClientRect().top              
            const YLocation = sectionTop + window.scrollY - headerHeight
            this.topResedential =  YLocation -1 
            // console.log(this.topResedential)  
        },
        setTopCommercial(){
            const section = document.getElementById('commercial-bldg')
            const headerHeight    = document.querySelector('.header').offsetHeight;
            const sectionTop = section.getBoundingClientRect().top              
            const YLocation = sectionTop + window.scrollY - headerHeight
            this.topCommercial =  YLocation -1 
        },
        setTopAmeneties(){
            const section = document.getElementById('amenities')
            const headerHeight    = document.querySelector('.header').offsetHeight;
            const sectionTop = section.getBoundingClientRect().top              
            const YLocation = sectionTop + window.scrollY - headerHeight
            this.topAmeneties =  YLocation -1 
        },
        setTopStructural(){
            const section = document.getElementById('structural-foundation')
            const headerHeight    = document.querySelector('.header').offsetHeight;
            const sectionTop = section.getBoundingClientRect().top              
            const YLocation = sectionTop + window.scrollY - headerHeight
            this.topStructural =  YLocation -1 
        },


        //scroll navigation
        scrollNavigate(id){
            const section = document.getElementById(id)
            if(section){
                const headerHeight    = document.querySelector('.header').offsetHeight;
                const sectionTop = section.getBoundingClientRect().top
                const YLocation = sectionTop + window.scrollY - headerHeight
                window.scrollTo({
                    top: YLocation,
                })                
            }
        },

        async fromPushtoScrollNavigate(){
            const sectionID = this.$route.query.to;
            const section = document.getElementById(sectionID);
            // console.log(section);
            if (section) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const sectionTop = section.getBoundingClientRect().top;
                await new Promise(resolve => setTimeout(resolve, 100))
                window.scrollTo({
                    top: sectionTop + window.scrollY - headerHeight,
                    behavior: 'smooth',
                });
            }
        },

        setUpScrollEvent(){
            window.addEventListener('scroll',this.handleScroll)
            this.scrollY = window.scrollY
        },

        handleScroll(){
            this.scrollY = window.scrollY
            if(this.scrollY >= this.topAbout && this.scrollY < this.topSustainability){
                this.$store.commit('setHomeID','about')
                console.log('about area')
            }else if(this.scrollY >= this.topSustainability && this.scrollY < this.topCorpOfficers){
                this.$store.commit('setHomeID','sustainability')
                console.log('sustainability area')
            }else if(this.scrollY >= this.topCorpOfficers && this.scrollY < this.topLicensePermits){
                this.$store.commit('setHomeID','corp-officers')
                console.log('corp-officers area')
            }else if(this.scrollY >= this.topLicensePermits && this.scrollY < this.topResedential){
                this.$store.commit('setHomeID','licenses&permits')
                console.log('license permits area')
            }

            else if(this.scrollY >= this.topResedential && this.scrollY < this.topCommercial){
                this.$store.commit('setHomeID','residential-house')
                console.log('Resedential area')
            }else if(this.scrollY >= this.topCommercial && this.scrollY < this.topAmeneties){
                this.$store.commit('setHomeID','commercial-bldg')
                console.log('Commercial area')
            }else if(this.scrollY >= this.topAmeneties && this.scrollY < this.topStructural){
                this.$store.commit('setHomeID','amenities')
                console.log('Ameneties area')
            }else if(this.scrollY >= this.topStructural){
                this.$store.commit('setHomeID','structural-foundation')
                console.log('Structural area')
            }
            else{
                this.$store.commit('setHomeID','')
                this.idActive = ''
            }
        }
    },
    async mounted() {

        this.setTopAbout()
        this.setTopSustainability()
        this.setTopCorpOfficers()
        this.setTopLicensesPermits()

        this.setTopResedential()
        this.setTopCommercial()
        this.setTopAmeneties()
        this.setTopStructural()

        this.fromPushtoScrollNavigate()
        this.setUpScrollEvent()
    },
    beforeUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>
