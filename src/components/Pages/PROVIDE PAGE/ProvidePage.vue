<template>
  <the-header @navigation-scroll="scrollNavigate"/>

  <heavy-equipment></heavy-equipment>
  <survey-services></survey-services>
  <titling-processing></titling-processing>
  <permits-licenses></permits-licenses>
  
  <the-footer/>
</template>

<script>
import TheFooter from '@/components/Reusable/Header and Footer/TheFooter.vue'
import HeavyEquipment from './Heavy Equipements/HeavyEquipment.vue'
import PermitsLicenses from './Permits and Licenses/PermitsLicenses.vue'
import SurveyServices from './Survey Services/SurveyServices.vue'
import TitlingProcessing from './Titling Processing/TitlingProcessing.vue'
export default {
  components: { 
    HeavyEquipment, 
    PermitsLicenses, 
    SurveyServices, 
    TitlingProcessing,
    TheFooter,
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
      async mounted() {
  
          this.fromPushtoScrollNavigate()
          this.setUpScrollEvent()
      },
      beforeUnmount(){
          window.removeEventListener('scroll',this.handleScroll)
      }
}
</script>