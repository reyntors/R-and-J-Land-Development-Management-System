<template>
    <div class="properties-cont">
      <div class="div1">
        <h4>Properties</h4>
        <span>
          <input @keydown="searchEnter" v-model="searchValue" placeholder="Seach Lot no.">
          <span @click="searchNow">
            <font-awesome-icon class="search-icon" icon="fa-solid fa-magnifying-glass" flip="horizontal" size="1x"/>             
          </span>
        </span>
      </div>

      <div class="div2">
        <ul>
          <li v-for="(item,index) in getPorperties" :key="index">
            <property-card :property="item"/>            
          </li>
        </ul>

      </div>
    </div>
  </template>
  
  <script>
import PropertyCard from './PropertyCard.vue'
  export default {
  components: { PropertyCard },
    data(){
      return{
        searchValue: null,
      }
    },
    methods:{
      searchEnter(event){
        if(event.key === 'Enter'){
          this.searchNow()
        }
      },
      searchNow(){
        console.log(this.searchValue)
      },   
    },

    computed:{
      getPorperties(){
        return this.$store.getters['properties/propertiesGetter']
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
.div1 > span{
  position: relative;
  border: 1px solid black;
  display: flex;
  align-items: center;
}
.div1 span input{
  padding-right: 2rem;
  padding-left: 1rem;
}
.div1 span span{
  height: 100%;
  position: absolute;
  right: 0;
  padding:.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.div1 span span:active{
  background-color: rgba(255, 0, 0, 0.2);
}

ul{
  list-style: none;
  padding: 0; 
  display: grid;
  grid-template-columns: 1fr 1fr ;
  gap: .5rem;
}

  </style>