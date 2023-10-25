<template>
    <div id="land-for-sale" class="containerMap">


        <h2>SUBDIVISION NAME</h2>
        
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

        <map-svg></map-svg>

        <div id="subdivison" class="subdivision">
          <h3 v-if="selectedOne && notfound">This lot does not exist</h3>
          <div class="selected" v-if="selectedOne && !notfound">
              <font-awesome-icon class="x-icon" icon="fa-solid fa-x" @click="closeSelected"/>
              <img :src="selectedItem.imageUrl" alt="'cannot display image'">
              <section>
                  <span>
                    <label>Block and Lot No.</label>
                    <input type="text" v-model="selectedItem.block_Lot_No">  
                  </span>

                  <span>
                    <label>Total Sq. Mtrs.</label>
                    <input type="text" v-model="selectedItem.total_Sq_M">  
                  </span>

                  <span>
                    <label>Amount  per Sq.</label>
                    <input type="text" v-model="selectedItem.amount_per_Sq">  
                  </span>

                  <span>
                    <label>Total Amount</label>
                    <input type="text" v-model="selectedItem.total_Amount_Due">  
                  </span>
                  <span>
                    <label>Status</label>
                    <input type="text" v-model="selectedItem.status">  
                  </span>


              </section>
              <div class="input-inquire" v-if="selectedItem.status === 'sale'">
                <textarea placeholder="leave a message..." v-model.trim="message"/>
                <button @click="inquireNow">
                  Inquire Now
                </button>                
              </div>

          </div>

          <section class="buttons">
              <button @click="filter('all')" :class="{focus:allSelected}">All</button>              
              <button @click="filter('sale')" :class="{focus:saleSelected}">For Sale</button>
              <button @click="filter('sold')" :class="{focus:soldSelected}">Sold</button>
              <button @click="filter('reserved')" :class="{focus:rsrvSelected}">Reserved</button>
          </section>

          <subdivision-coverflow :list="listHaveImagesOnly" :group="group"></subdivision-coverflow>
        </div>
    </div> 
</template>

<script>
import SubdivisionCoverflow from '@/components/Pages/SELL PAGE/SUBDIVISION/SubdivisionCoverflow.vue'
import MapOverview from '@/components/Pages/SELL PAGE/SUBDIVISION/MapOverview.vue'
import MapSvg from '@/components/Pages/SELL PAGE/SUBDIVISION/MapSvg.vue'
export default {
  components: {
    SubdivisionCoverflow,
    MapOverview,
    MapSvg
   },
  data(){
    return{
      XSubdivisionCont: 0,
      YSubdivisionCont: 0,
      selectedOne: false,
      selectedItem: null,

      allSelected: true,
      saleSelected: false,
      soldSelected: false,
      rsrvSelected: false,

      searchValue: '',
      notfound: false,

      group: 'all'
    }
  },
  computed: {
    allList(){
      return this.$store.getters['subdivision/subdivisionGetter']
    },
    listHaveImagesOnly(){
      const list = this.allList
      const newList = []
      list.forEach( item => {
        if(item.image.length>0){
          newList.push(item)
        }
      });
      return newList
    },
    
    selectedComputed(){
      return this.selectedItem
    },

  },

  methods: {

    //start select image
    selected(item){
      this.selectedOne = true;
      this.notfound = false;
      this.selectedItem = item;
      window.scrollTo(this.XSubdivisionCont, this.YSubdivisionCont)
    },
    closeSelected(){
      this.selectedOne = false
    },
    //end select image

    //start click filter buttons
    filterBtnStyleReset(){
      this.allSelected = false
      this.saleSelected = false
      this.soldSelected = false
      this.rsrvSelected = false
    },
    applyFilterBtnStyle(params){
      if(params === 'all'){
        this.allSelected = true
      }else if(params === 'sale'){
        this.saleSelected = true
      }else if(params === 'sold'){
        this.soldSelected = true
      }else{
        this.rsrvSelected = true
      }
    },
    filter(params){
      this.filterBtnStyleReset()
      this.applyFilterBtnStyle(params)
      // this.$store.commit('subdivision/filterList',params)
      this.group = params
    },
    //end click filter buttons

    //start search
    enterKey(event){
      if(event.key === 'Enter'){
        this.searchNow()
      }    
    },
    searchNow(){
      if(this.searchValue.length >0){
        this.$store.commit('subdivision/searchNowfromGuest',this.searchValue)
        const result = this.$store.getters['subdivision/guestSearchedResultGetter']
        this.selectedOne = true;
        if(result){
          console.log(result)
          this.selectedItem = result
          this.notfound = false
        }else{
          this.notfound = true
        }
      } 
    },
    //end search

    //start send message
    inquireNow(){
      if(this.message.length > 10){
        const isGuest = this.$store.getters['auth/authorizationRoleGuest']
        if(isGuest){
          console.log('submiting the request')
        }else{
          this.$store.commit('auth/toggleLoginForm',true)
        }
      }else{
        console.log('message too short')
      }
    }

  },

  mounted(){
    this.$store.dispatch('subdivision/getPropertyList')
  }
}
</script>

  <style scoped>
.containerMap{
    width: 100%;
    margin: auto;
    padding-top: 2rem;
    border: 1px solid black;
  }
  .containerMap h2{
    text-align: center;
  }
.description{
  height: 60vh;
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
.description .section2 li{
  font-size: clamp(.5rem, 1.5vw, 1rem);
}
  .locationBody{
    border-top: 1px solid black;
    width: 100%;
    margin: .2rem 0;
    display: flex;
    padding: 1rem;
  }
  .locationBody img{
    width: 100%;
    height: 85vh;
    object-position: center;
  }
  .searchCont{
    position: relative;
    padding-left: .2rem;
    margin-bottom: .3rem;
  }

  .searchCont input{
    padding: 1rem;
    padding-left: 3rem;
    border: none;
    outline: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
  .searchCont input:focus{
    outline: 2px solid #31A72A;
  }
  .searchCont .search-icon{
    position: absolute;
    left: 0;
    left: .5rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .subdivision .buttons{
    display: flex;
    justify-content: center;
    gap: .5rem;
    padding: .5rem;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .subdivision .buttons button{
    padding: .5rem ;
    width: 10%;
    min-width: 80px;
  }
  .subdivision .selected{
    width: 95%;
    margin:  .5rem auto 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    position: relative;
  }

  .subdivision .selected section{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .subdivision .selected section span{
    display: flex;
    flex-direction: column;
  }
  .subdivision .selected section label{
    font-weight: 700;
  }
  .subdivision .selected section input{
    padding-left: .5rem;
  }
  .subdivision .selected button{
    padding: .5rem;
    color: white;
    font-weight: 500;
    height: 100%;
    display: flex;
    border-top: 1px solid black;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: linear-gradient(66deg,#0000ff3c,#31a72a,#ffffff);
    background-size: 180% 180%;
    animation: gradient-animation 3s ease infinite;
  }
  
  .subdivision .selected button:active{
    color: black;
    box-shadow: none;
  }
  .subdivision .selected img{
    width: 100%;
    height: 75vh;
    object-fit: cover;
    outline: 2px solid black;
  }
  .focus{
    border: none;
    font-weight: 700;
  }
  .x-icon{
    position: absolute;
    top:0;
    right: 0;
    padding: .5rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  .x-icon:hover{
    color: black;
  }
  .x-icon:active{
    color: white;
  }

  .subdivision .grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1024px) {
    .subdivision .grid{
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  }
  .subdivision .grid li{
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
  }
  .subdivision .grid img{
    width: 100%;
    cursor: pointer;
  }
  .subdivision .grid img:hover{
    scale: 1.009;
    outline: 2px solid orange;
    box-shadow: 0 0 5px 1px orange;
  }
  .subdivision .grid img:active{
    scale: 1;
  }
.input-inquire{
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
.input-inquire textarea{
  resize: none;
  padding: 1rem;
}


@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
  </style>