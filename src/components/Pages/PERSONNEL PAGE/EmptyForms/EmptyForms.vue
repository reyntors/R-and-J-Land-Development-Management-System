<template>
    <div class="empty-forms-cont">
      <div class="div1">
        <h4>Empty Forms</h4>
      </div>
      <div class="div2">
        <ul class="grid">
          <li v-for="(file, index) in list" :key="index">
            <a :href="file.url" :download="file">
                  <form-thumbnail :imgThumbTitle="file.thumbTitle" :title="file.filename"></form-thumbnail>
                </a> 
          </li>
        </ul>
  

     
      </div>

    </div>
  </template>
  
  <script>
  // import { toast } from 'vue3-toastify'
  export default {
      data(){
        return{
          isLoading: false,
        }
      },
      computed:{
        list(){
          // console.log(this.$store.getters['rawForms/objectsOfDonwloadableGetter'])
          return this.$store.getters['rawForms/rawFormsDownloadableGetter']
        }
      },

      methods: {
        show(url){
          window.open(url)
        }
      },

      // async mounted(){
      //   this.isLoading = true
      //   try{
      //     await this.$store.dispatch('rawForms/getRawFormsList') 
      //     this.isLoading = false
      //   }catch(error){
      //     console.log(error)
      //     toast.error(error)
      //   }
        
      // }
  }
  </script>
  
  <style scoped>
.empty-forms-cont{
  width: 80vh;
  flex-grow: 1;
  height: 90vh;
  padding: 1rem;
  border-left: 2px solid rgba(0, 0, 0, 0.5);
  position: relative;
}
h4{
  padding: 0;
  margin: 0;
}
.div1{
    width:100%;
    height: 10%;
    border-bottom: 1px solid black;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}
.div2{
    width:100%;
    height: 90%;
    background-color: transparent;
    padding: 1rem;
    overflow-y: auto;
    position: relative;
}
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
.div2 .grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
}
@media only screen and (max-width:1350px) {
    .div2 .grid{
      grid-template-columns: 1fr 1fr 1fr;
    }
}
@media only screen and (max-width:1000px) {
    .div2 .grid{
      grid-template-columns: 1fr 1fr;
      padding: 0 1rem;
    }
}

  </style>