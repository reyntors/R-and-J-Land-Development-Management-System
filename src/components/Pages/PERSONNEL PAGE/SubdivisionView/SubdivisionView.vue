<template>
    <div class="subdivision-cont">
      <!-- {{ getSubdivision }} -->
      <div class="div1">
        <h4 @click="showAll(false)">Subdivision</h4>
        <span class="search-cont">
          <input class="search-input-field" @keydown="searchEnter" v-model.trim="searchValue" placeholder="Seach Lot no.">
          <span class="search-input-icon" @click="searchNow">
            <font-awesome-icon class="search-icon" icon="fa-solid fa-magnifying-glass" flip="horizontal" size="1x"/>             
          </span>

          <span class="suggestion-tabs" v-if="isSearching && listSearchSuggestions.length!= 0">
            <li v-for="(item,index) in listSearchSuggestions" :key="index">
                <button @click="clickSuggested(item)" @close-one="showAll(false)"> {{ suggestionTexts(item) }}</button>
            </li>          
          </span>
        </span>

      </div>

      
      <div class="div2">
        <div class="shade" v-if="updating"/>
        <progress-loading v-if="isLoading" type="spin"></progress-loading>
        <div v-else> 
          <ul  class="singleCard" :class="{showCards:showOnlyOne}">
            <subdivision-card v-if="!issearchedResultEmptyComputed" :subdivision="searchResultComputed" @close-one="showAll" @updating-now="setUpdating" @reload-list="getPropertyList"/> 
            <h1 v-else>Nothing found</h1> 
          </ul>

          <ul class="multipleCard" :class="{showCards:!showOnlyOne}">
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
        isLoading: false,

        searchValue: '',  //var holder for search value
        isSearching: false,   
        listSearchSuggestions: [],  //var holder for search suggestions results
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
        console.log(this.listSearchSuggestions.length)
        this.showAll()
      },
      
      searchNow(){   //search the lot in the list
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
               
      },
      suggestionTexts(item){
        const result = item.match(/[a-zA-Z]+|[0-9]+/g);
        return result [0] + ' ' + result[1]
      }
      
    },

    computed:{
      getSubdivision(){ //get list of subdivision
        return this.$store.getters['subdivision/subdivisionGetter']
      },
      searchResultComputed(){
        return this.$store.getters['subdivision/searchedResultGetter']
      },
      issearchedResultEmptyComputed(){
        return this.$store.getters['subdivision/issearchedResultEmptyGetter']
      },

    },

    watch:{
      searchValue(newValue){
        if(newValue.length>0){
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

    // mounted(){
    //   this.getPropertyList()
    // }
  }
  </script>
  
  <style scoped>
.subdivision-cont{
    width: 80vh;
    flex-grow: 1;
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
  box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
.div1 .search-cont input{
  padding: .5rem 1rem;
  border: none;
  border-radius: 5px;
  outline: none;
  text-transform: capitalize;
  transition: outline .3s ease-in;
}
.div1 .search-cont input:focus{
  outline: 5px solid rgba(0, 0, 255, 0.1);
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
  width: 100%;
  /* min-height: 100%; */
  /* border: 5px solid black; */
}
.suggestion-tabs{
  /* border: 1px solid black; */
  max-height: 500%;
  position: absolute;
  right: 0;
  top: calc(100% + 5px);
  width: 100%;
  overflow-y: auto;
  background-color: white;
  z-index: 2;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  background-image: linear-gradient(to bottom,rgba(0, 0, 255, 0.1),white);
  outline: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.1);
}
li{
  /* animation: stretch .2s ease-in; */
}
.suggestion-tabs button{
  width: 100%;
  border: none;
  /* border-bottom: 1px solid black; */
  background-color: rgba(255, 255, 255, 0.8);
  outline: none;
  /* transition: all .3s ease-in-out; */
  text-transform: capitalize;
  padding: .2rem;
}
.suggestion-tabs button:hover{
  color: black;
  background-color: rgba(0, 0, 0, 0.1);
}
li{
  list-style:none;
}

/* ul{
  list-style: none;
  padding: 0; 
  display: grid;
  grid-template-columns: 1fr 1fr ;
  gap: .5rem;
} */

.shade{
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    height: 100%;
    width: 100%;
    z-index: 2;
}
.div2 .multipleCard,
.div2 .singleCard{
  display: none;
}
.div2 .showCards{
  list-style: none;
  padding: 0; 
  display: grid;
  grid-template-columns: 1fr 1fr ;
  gap: .5rem;
}
@keyframes stretch {
  0%{
    height: 100%;
    opacity: 0;
  }
  100%{
    height: 500%;
    opacity: 1;
  }
}
::-webkit-scrollbar {
  width: 10px; /* Set the width of the scrollbar */
  border-bottom-left-radius: 3rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  /* background: #555; Change color on hover */
  opacity: 1;
  
}

/* Scrollbar Handle */
::-webkit-scrollbar-thumb {
  /* background-image: linear-gradient(120deg, rgba(0, 0, 0, 0.5),white,rgba(0, 0, 0, 0.5)); */
  background-color: rgba(0, 0, 255, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3rem; /* Optional: add rounded corners to the handle */
}

/* Scrollbar Track */
::-webkit-scrollbar-track {
  background: rgba(165, 42, 42, 0.2); /* Set the color of the track */
  border-bottom-left-radius: 3rem;
}


@media screen and (max-width: 425px) {
  .div2 .multipleCard,
  .div2 .singleCard{
    grid-template-columns: 1fr;
  }
  
}
@media screen and (min-width: 1024px) {
  .div2 .singleCard,
  .div2 .multipleCard{
    grid-template-columns: 1fr 1fr 1fr;
  }
  
}

  </style>