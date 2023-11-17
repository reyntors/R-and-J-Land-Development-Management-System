<template>
    <div class="subdivision-cont">
      <!-- {{ getSubdivision }} -->
      <div class="div1">
        <h4 @click="showAll">Subdivision</h4>

        <span class="search-cont">
          <input class="search-input-field" @keydown="searchEnter" v-model.trim="searchValue" placeholder="Seach Lot no.">
          <span class="search-input-icon" @click="searchNow">
            <font-awesome-icon class="search-icon" icon="fa-solid fa-magnifying-glass" flip="horizontal" size="1x"/>             
          </span>

          <span class="suggestion-tabs" v-if="isSearching">
            <li v-for="item in listSearchSuggestions" :key="item+'a'">

                <button @click="clickSuggested(item.lotNumber)" @close-one="showAll"> {{ item.lotNumber }}</button>

            </li>          
          </span>
        </span>

      </div>

      
      <div class="div2">
        <div class="shade" v-if="updating"/>
        <progress-loading v-if="isLoading" type="spin"></progress-loading>
        <div v-else> 
          <ul v-if="showOnlyOne">
            <subdivision-card v-if="!issearchedResultEmptyComputed" :subdivision="searchResultComputed" @close-one="showAll" @updating-now="setUpdating" @reload-list="getPropertyList"/> 
            <h1 v-else>Nothing found</h1> 
          </ul>

          <ul v-else>
            <li v-for="item in getSubdivision" :key="item">
              <subdivision-card :subdivision="item" @updating-now="setUpdating" @reload-list="getPropertyList"/>            
            </li>
          </ul>          
        </div>


      </div>
    </div>
  </template>
  
  <script>
import { toast } from 'vue3-toastify'
import SubdivisionCard from './SubdivisionCard.vue'
  export default {
  components: { SubdivisionCard,},
    data(){
      return{
        updating: false,
        isLoading: true,

        searchValue: '',
        isSearching: false,
        listSearchSuggestions: [],
        showOnlyOne: false,
        focusedProperty: null,
        aw: null,
      }
    },
    methods:{
      showAll(bool){
        this.showOnlyOne = bool
      },

      setUpdating(){
        this.updating = true
      },

      searchEnter(event){
        if(event.key === 'Enter'){
          this.searchNow()
        }
      },

      getSearchSuggestions(){
        this.listSearchSuggestions = []
        this.$store.commit('subdivision/searchSuggestions',this.searchValue)
        this.listSearchSuggestions = this.$store.getters['subdivision/subdivisionSearchResultsGetter'] 
        console.log(this.listSearchSuggestions)
        this.showAll()
      },
      
      searchNow(){
        if(this.searchValue.length>0){
          console.log(this.searchValue)
          this.$store.commit('subdivision/searchNow',this.searchValue)
          this.showOnlyOne = true;
          console.log('searching now',this.searchValue)
        }else{
          console.log('empty value to search')
        }
        this.isSearching = false
          
      },

      clickSuggested(params){
        this.searchValue = params
        this.suggestedValue = params
        this.isSearching = false
      },

      async getPropertyList(){
        this.updating = false
        console.log('propertylist')
        this.isLoading = true
        try{
          await this.$store.dispatch('subdivision/getPropertyList')
          this.isLoading = false
          
        }catch(error){
          console.log(error)
          toast.error(error)
        }
        this.isLoading = false
               
      }
      
    },

    computed:{
      getSubdivision(){
        console.log(this.$store.getters['subdivision/subdivisionGetter']) 
          return this.$store.getters['subdivision/subdivisionGetter']
          // return this.$store.getters['subdivision/listLotGetter']
      },
      searchResultComputed(){
        return this.$store.getters['subdivision/searchedResultGetter']
      },
      issearchedResultEmptyComputed(){
        return this.$store.getters['subdivision/issearchedResultEmptyGetter']
      }
    },

    watch:{
      searchValue(newValue){
        if(newValue>0){
          if(this.suggestedValue === newValue){
            this.isSearching = false
          }else{
            this.isSearching = true;
          }
        }else{
          this.isSearching = false
        }

        this.getSearchSuggestions()  
      }
    },

    mounted(){
      this.getPropertyList()
    }
  }
  </script>
  
  <style scoped>
.subdivision-cont{
    width: 100%;
    min-height: 85vh;
    padding: 1rem;
    border-left: 2px solid rgba(0, 0, 0, 0.5);
    position: relative;
}
.subdivision-cont h4{
  cursor: pointer;
  margin: 0;
  padding: 0;
}
.div1{
    width:100%;
    /* height: 10%; */
    /* background-color: bisque; */
    border-bottom: 1px solid black;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}
.div1 .search-cont{
  position: relative;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
}
.div1 .search-cont input{
  padding: .5rem 1rem;
  border: none;
  border-radius: 5px;
  outline: 1px solid black;
}
.div1 .search-cont input:focus{
  box-shadow: 0 0 1px 3px gold;
}
.div1 .search-cont .search-input-icon{
  height: 100%;
  position: absolute;
  right: 0;
  padding:.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.div1 .search-cont .search-input-icon:active{
  background-color: rgba(255, 0, 0, 0.2);
}

.div2{
  padding-bottom: 3rem;
  position: relative;
  min-height: 100%;
  /* border: 5px solid black; */
}
.suggestion-tabs{
  border: 1px solid black;
  max-height: 500%;
  position: absolute;
  right: 0;
  top: 100%;
  width: 100%;
  overflow-y: auto;
  background-color: white;
  z-index: 2;
}
.suggestion-tabs button{
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  /* border: 1px solid black; */
}
li{
  list-style: none;

}

ul{
  list-style: none;
  padding: 0; 
  display: grid;
  grid-template-columns: 1fr 1fr ;
  gap: .5rem;
}
@media screen and (max-width: 425px) {
  ul{
    grid-template-columns: 1fr;
  }
  
}
@media screen and (min-width: 1024px) {
  ul{
    grid-template-columns: 1fr 1fr 1fr;
  }
  
}
.shade{
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    height: 100%;
    width: 100%;
    z-index: 2;
}
  </style>