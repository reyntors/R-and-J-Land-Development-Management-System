<template>
    <container-widget id="land-for-sale" class="containerMap" title="We Sell" typeBG="1">


        <!-- <h2>SUBDIVISION NAME</h2> -->
        
        <div class="description">
            <section class="section1">
              <map-overview></map-overview>
            </section>
            <section class="section2">
              <h4 style="text-align: center;">Welcome to Subdivision name</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quae commodi ab suscipit magni, eaque reprehenderit quis perferendis quam illum vero nihil blanditiis cum, explicabo repudiandae debitis incidunt. Officiis, est.</p>
              <br>
              <ul>
                <li>Definition 1</li>
                <li>Definition 2</li>
                <li>Definition 3</li>
              </ul>
            </section>
        </div>

        <div class="mapContainer mb-5 ">
          <section class="section"> 
            <map-svg @showDetails="openDetails" v-if="doneRequestSubdivision"></map-svg>
            <blur-loading v-else></blur-loading>
          </section>
          
          <pop-up class="popUp" v-if="showPopup" :details="selectedLotDetails" @closeDetails="closeDetails" @reserveNow="reserveNow"></pop-up>
          <legend-tab></legend-tab>
        </div>

    </container-widget> 
</template>

<script>
import MapOverview from '@/components/Pages/SELL PAGE/SUBDIVISION/MapOverview.vue'
import MapSvg from '@/components/Pages/SELL PAGE/SUBDIVISION/MapSvg.vue'
import PopUp from './sub component/PopUp.vue'
import LegendTab from './sub component/LegendTab.vue'
import { toast } from 'vue3-toastify'
export default {
  components: {
    MapOverview,
    MapSvg,
    PopUp,
    LegendTab
   },
  data(){
    return{
      selectedLotDetails: null, //var for the details of selected lot
      showPopup: false, //var of visiblity of pop up
      doneRequestSubdivision: false, //var for identifying successful request for the subdivision
    }
  },
  methods: {

    openDetails(item){  //open pop up
      console.log(item)
      this.showPopup = true;
      this.selectedLotDetails = item;
      // window.scrollTo(this.XSubdivisionCont, this.YSubdivisionCont)
    },
    closeDetails(){ //close pop up
      this.showPopup = false
    },

    reserveNow(){  //click reserve now
      // console.log(details)
      const isGuest = this.$store.getters['auth/authorizationRoleGuest']
      if(isGuest){  //test if the user log in or not
        const isSubmitLetterOfintent = this.$store.getters['auth/submittedLetterOfIntentGetter']
        const isSubmitBuyerInfoSheet = this.$store.getters['auth/submittedBuyerInfoGetter']
        if(!isSubmitLetterOfintent && !isSubmitBuyerInfoSheet){
          this.$router.push('/guest-forms/letter-of-intent')
        }else if(!isSubmitLetterOfintent && isSubmitBuyerInfoSheet){
          this.$router.push('/guest-forms/letter-of-intent')
        }else if(isSubmitLetterOfintent && !isSubmitBuyerInfoSheet){
          this.$router.push('/guest-forms/buyer-info-sheet')
        }else{
          toast.info('Submitted Already a Reservation Reservation')
          toast.info('Only Once allowed to Avoid Spamming.')
        }
        
      }else{
        this.$store.commit('auth/toggleLoginForm',true)     //toggle the variable that will open the form
      }
    },

  },

  async mounted(){
    this.doneRequestSubdivision = false
    try{
      await this.$store.dispatch('subdivision/getPropertyList')   //request list of subdivision lots
      await new Promise(resolve => setTimeout(resolve,1000))
    }catch(error){
      toast.error(error)
    }
    this.doneRequestSubdivision = true
  }
}
</script>

  <style scoped>
.description{
  min-height: 60vh;
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: .5rem;
  margin-bottom: 1rem;
}
.description .section1{
  position: relative;
}
.description .section2{
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
}
.description .section2 p {
  line-height: 2rem;
}
@media only screen and (max-width:1200px){
  .description{
    grid-template-columns: 1fr;
  }
  .description .section1{
    min-height: 500px;
  }
}

.mapContainer{
  /* overflow: auto; */
  background-color: white;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 1rem 2px rgba(0, 0, 0, 0.196);
  position: relative;
  margin-top: 2rem;
  border-radius: 1rem;
}
.mapContainer .section{
  overflow: auto;
  min-height: 920px;
}
/* Scrollbar Track */
::-webkit-scrollbar {
  width: 12px; /* Set the width of the scrollbar */
  border-bottom-left-radius: 3rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  /* background: #555; Change color on hover */
  opacity: 1;
  
}

/* Scrollbar Handle */
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 3rem; /* Optional: add rounded corners to the handle */
}

/* Scrollbar Track */
::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1); /* Set the color of the track */
}

  </style>