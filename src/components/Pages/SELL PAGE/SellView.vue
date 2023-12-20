<template>
    <the-header @navigation-scroll="scrollNavigate"></the-header>
    
    <land-for-sale></land-for-sale>
    <others-view></others-view>
    
    <!-- <the-footer/> -->
  </template>
  
  <script>
  import OthersView from '@/components/Pages/SELL PAGE/OTHERS/OthersView.vue'
  import LandForSale from '@/components/Pages/SELL PAGE/./SUBDIVISION/LandForSale.vue'

  export default {
    components:{
      LandForSale,
      OthersView 
    },  
    
    methods: {  
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
    },

    mounted() {
        this.fromPushtoScrollNavigate()
        this.setUpScrollEvent()
    },
    
    beforeUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
    }
  }
  </script>