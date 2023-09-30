<template>
    <div class="properties-cont">
      
      
      <div class="div1">
        <h4 @click="showAll">Properties</h4>

        <span class="search-cont">
          <input class="search-input-field" @keydown="searchEnter" v-model.trim="searchValue" placeholder="Seach Lot no.">
          <span class="search-input-icon" @click="searchNow">
            <font-awesome-icon class="search-icon" icon="fa-solid fa-magnifying-glass" flip="horizontal" size="1x"/>             
          </span>

          <span class="suggestion-tabs" v-if="isSearching">
            <li v-for="item in listSearchSuggestions" :key="item+'a'">

                <button @click="clickSuggested(item.block_Lot_No)" @close-one="showAll"> {{ item.block_Lot_No }}</button>

            </li>          
          </span>
        </span>

      </div>

      
      <div class="div2">
        
        <ul v-if="showOnlyOne">
          <property-card v-if="!issearchedResultEmptyComputed" :property="searchResultComputed" @close-one="showAll"/> 
          <h1 v-else>Nothing found</h1> 
        </ul>

        <ul v-else>
          <li v-for="item in getPorperties" :key="item">
            <property-card :property="item"/>            
          </li>
        </ul>

      </div>
    </div>
  </template>
  
  <script>
import PropertyCard from './PropertyCard.vue'
  export default {
  components: { PropertyCard},
    data(){
      return{
        searchValue: '',
        isSearching: false,
        listSearchSuggestions: [],
        showOnlyOne: false,
        focusedProperty: null,
        aw: null,
      }
    },
    methods:{
      showAll(){
        this.showOnlyOne = false
      },

      searchEnter(event){
        if(event.key === 'Enter'){
          this.searchNow()
        }
      },

      getSearchSuggestions(){
        this.listSearchSuggestions = []
        this.$store.commit('properties/searchSuggestions',this.searchValue)
        this.listSearchSuggestions = this.$store.getters['properties/propertiesSearchResultsGetter'] 
        this.showAll()
      },
      
      searchNow(){
        if(this.searchValue.length>0){
          this.$store.commit('properties/searchNow',this.searchValue)
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
      }
      
    },

    computed:{
      getPorperties(){
          return this.$store.getters['properties/propertiesGetter']
      },
      searchResultComputed(){
        return this.$store.getters['properties/searchedResultGetter']
      },
      issearchedResultEmptyComputed(){
        return this.$store.getters['properties/issearchedResultEmptyGetter']
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
  }
  </script>
  
  <style scoped>
.properties-cont{
  width: 100%;
    height: 85vh;
    padding: 1rem;
}
.properties-cont h4{
  cursor: pointer;
}
.div1{
    width:100%;
    height: 10%;
    background-color: bisque;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}
.div1 .search-cont{
  position: relative;
  border: 1px solid black;
  display: flex;
  align-items: center;
}
.div1 .search-cont .search-input-field{
  padding-right: 2rem;
  padding-left: 1rem;
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

.suggestion-tabs{
  border: 1px solid black;
  max-height: 500%;
  position: absolute;
  right: 0;
  top: 100%;
  width: 100%;
  overflow-y: auto;
  background-color: white;
}
.suggestion-tabs button{
  width: 100%;
  border: 1px solid black;
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

  </style>