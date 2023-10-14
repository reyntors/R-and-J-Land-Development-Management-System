
<template>
    
    <the-header @navigation-scroll="scrollNavigate" :home-nav="idActive"></the-header>

    <carousel-component></carousel-component>
    <about-comp></about-comp>
    <model-houses></model-houses>
    <subdivision-component></subdivision-component>
    <messenger-chat></messenger-chat>

    <the-footer ></the-footer>  
</template>

<script>
import AboutComp from './ABOUT/AboutComp.vue'
import ModelHouses from './MODEL HOUSE/ModelHouses.vue'
import CarouselComponent from './CAROUSEL/CarouselComponent.vue'
import SubdivisionComponent from './SUBDIVISION/SubdivisionComponent.vue'
import MessengerChat from './MESSENGER/MessengerChat.vue'
export default {
    components: {
        CarouselComponent,
        AboutComp, 
        ModelHouses, 
        SubdivisionComponent,
        MessengerChat
    },

    data(){
        return{
            topAbout : null,
            topModelHouse : null,
            topSubdivision: null,

            idActive: '',
        }
    },

    computed:{

    },

    methods: {
        settopAbout(){
            const section = document.getElementById('about')
            const headerHeight    = document.querySelector('.header').offsetHeight;
            const sectionTop = section.getBoundingClientRect().top
            const YLocation = sectionTop + window.scrollY - headerHeight
            this.topAbout = YLocation -1             
        },
        settopModelHouse(){
            const section = document.getElementById('model-house')
            const headerHeight    = document.querySelector('.header').offsetHeight;
            const sectionTop = section.getBoundingClientRect().top
            const YLocation = sectionTop + window.scrollY - headerHeight
            this.topModelHouse =  YLocation  -1      
        },
        settopSubdivision(){
            const section = document.getElementById('subdivision')
            const headerHeight    = document.querySelector('.header').offsetHeight;
            const sectionTop = section.getBoundingClientRect().top
            const YLocation = sectionTop + window.scrollY - headerHeight
            this.topSubdivision =  YLocation -1         
        },

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
            const sectionID = this.$route.query.directTo;
            const section = document.getElementById(sectionID);
            console.log(section);
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
            if(this.scrollY >= this.topAbout && this.scrollY < this.topModelHouse){
                this.idActive = 'about'
                console.log('this is about area')
            }else if(this.scrollY >= this.topModelHouse && this.scrollY < this.topSubdivision){
                this.idActive = 'model-house'
                console.log('this is model house area')
            }else if(this.scrollY >= this.topSubdivision){
                this.idActive = 'subdivision'
                console.log('this is subdivision area')
            }else{
                this.idActive = ''
            }
        }
    },
    async mounted() {
        this.settopAbout()
        this.settopModelHouse()
        this.settopSubdivision()

        this.fromPushtoScrollNavigate()
        this.setUpScrollEvent()
    },
    beforeUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>
