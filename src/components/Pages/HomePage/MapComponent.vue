<template>
    <div id="map" class="containerMap">
        <h2>Phase 1 Location</h2>

        <div class="locationBody">
          <img src="https://sanjoserealestatelosgatoshomes.com/wp-content/uploads/2019/10/Plat-Map-Camden-at-Union-broad-area-Cambrian-Park-Estates-e1579214890424-700x440.jpg">
        </div>

        <div class="searchCont">
          <input placeholder="search lot no." type="text" v-model.trim="searchValue" @keydown="enterKey">
          <font-awesome-icon class="search-icon" icon="fa-solid fa-magnifying-glass" size="2x" @click="searchNow"/>
        </div>
        
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
              <button v-if="selectedItem.status === 'sale'">
                Inquire Now
              </button>
          </div>

          <section class="buttons">
              <button @click="filter('all')" :class="{focus:allSelected}">All</button>              
              <button @click="filter('sale')" :class="{focus:saleSelected}">For Sale</button>
              <button @click="filter('sold')" :class="{focus:soldSelected}">Sold</button>
              <button @click="filter('reserved')" :class="{focus:rsrvSelected}">Reserved</button>
          </section>

          <section class="grid">
              <li v-for="item in allList" :key="item.block_Lot_No">
                <img :src="item.imageUrl" @click="selected(item)">
              </li>
          </section>
        </div>
    </div> 
</template>

<script>
export default {
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
    }
  },
  computed: {
    allList(){
      return this.$store.getters['subdivision/deepCopySubdivisionListGetter']
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
      this.$store.commit('subdivision/filterList',params)
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
    }

  },

  mounted(){
    const subdivision = document.getElementById('subdivison')
    const x = subdivision.offsetLeft
    const y = subdivision.offsetTop
    this.XSubdivisionCont = x
    this.YSubdivisionCont = y

    this.$store.commit('subdivision/initDeepCopySubdivisionList')
  }
}
</script>

  <style scoped>
  .containerMap{
      width: 100%;
      /* border: 1px dashed black; */
      margin: 2rem auto 1rem;
  }
  .containerMap h2{
    text-align: center;
    padding: 1rem 0;
    font-weight: 500;
    font-size: clamp(2rem, 3vw, 4rem);
  }
  .locationBody{
    border: 1px solid black;
    width: 100%;
    margin: .2rem 0;
    display: flex;
    padding: 1rem;
  }
  .locationBody img{
    width: 100%;
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
  .subdivision{
    width: 95%;
    margin: auto;
  }

  .subdivision .buttons{
    display: flex;
    justify-content: center;
    gap: .5rem;
    padding: .5rem;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .subdivision .buttons button{
    padding: .2rem;
    width: 20%;
    min-width: 80px;
    border-radius: 10px;
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
    border: none;
    outline: 1px solid black;
    padding: .5rem;
    background-color: #31A72A;
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
  .subdivision .grid li{
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
  }
  .subdivision .grid img{
    width: 100%;
    /* padding: .2rem; */
  }

  </style>