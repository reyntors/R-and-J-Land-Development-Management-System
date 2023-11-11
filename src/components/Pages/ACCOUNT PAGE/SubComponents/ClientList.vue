<template>
    <div class="searcClient-cont">
      <!-- <section class="back-cont">
          <font-awesome-icon class="back-icon" icon="fa-solid fa-arrow-left-long" size="2x" @click="back"/>
      </section> -->
  
      <div class="body">
          
          <section class="searchSection">
              <input placeholder="Search name here..." v-model.trim="searchValue" @keydown="searchKeyboard">
              <span> 
                  <font-awesome-icon class="search-icon" icon="fa-solid fa-magnifying-glass" flip="horizontal" size="1x"/>                
              </span>             
          </section>
  
          <!-- {{ searchResultComputed }} -->
          <!-- <div class="display-nofound" v-if="!isSearchExist && searchTrue">
              <h2 style="text-align: center; font-weight: 600; margin-top: 2rem;">Nothing Found</h2>    
          </div> -->
          
  
  
          <div class="grid">
              <ul>
                  
                  <div v-if="listPending.length>0">
                      <li v-for="item in listPending" :key="item.userId" @click="select(item)">
                          {{ item.fullname }}
                      </li>                    
                  </div>
                  <li v-else>Nothing Found</li>
  
              </ul>   
  
              <div class="display-results">
                  <section class="default-info-signup" >
                      <div>
                          <section class="form-style">
                              <label for="userIDSearch">ID</label>:<input type="text" id="userIDSearch" readonly v-model="userId"> 
                          </section>                
                          <section class="form-style">
                              <label for="usernameSearch">Username</label>:<input type="text" id="usernameSearch" readonly v-model="username"> 
                          </section>
                          <section class="form-style">
                              <label for="fullnameSearch">Fullname</label>:<input type="text" id="fullnameSearch" readonly v-model="fullname"> 
                          </section>
                          <section class="form-style">
                              <label for="addressSearch">Home Address</label>:<input type="text" id="addressaddressSearch" readonly v-model="homeAddress">
                          </section>
                          <section class="form-style">
                              <label for="emailSearch">Email</label>:<input type="text" id="emailSearch" readonly v-model="email">
                          </section>
                          <section class="form-style">
                              <label for="fbSearch">Facebook Account</label>:<input type="text" id="fbSearch" readonly v-model="fbAccount">
                          </section> 
                          <!-- <section class="button">
                              <button @click="addNow" :disabled="userId===''">Add <font-awesome-icon icon="fa-solid fa-plus" /></button>        
                          </section>   -->
                      </div>    
                  </section>  
          
  
                  
              </div>
          </div>
  
          
      </div>
  
  
  
    </div>
  </template>
  
  <script>
  export default{
      emits: ['go-back'],
      data(){
          return{
              userId: '',
              username: '',
              fullname: '',
              email: '',
              homeAddress: '',
              fbAccount: '',
  
              searchValue: '',
              list: [],
  
              searchedID: '',
              searchResult: null,
  
              searchTrue: false,
          }
      },
      methods: {
          back(){
              this.$emit('go-back')
          },
          searchKeyboard(event){
              if(event.key === 'Enter'){
                  this.search();
              }
          },
  
          select(param){
                  this.userId = param.userId
                  this.username = param.username
                  this.fullname = param.fullname
                  this.email  =param.email
                  this.homeAddress = param.homeAddress
                  this.fbAccount = param.fbAccount           
          },
  
          search(value){
              this.$store.commit('client/searchGuest',value)
          },
          async addNow(){
              await this.$store.dispatch('client/addClient',this.userId)
              this.back();
          }
      },
      computed:{
          searchResultComputed(){
              return  this.searchTrue       
          },
          listPending(){
              return this.$store.getters['client/pendingClients']
          },
          isSearchExist(){
              return this.$store.getters['client/searchResultGetter']
          }
      },
  
      watch:{
          searchValue(newVal){
              this.search(newVal)
          }
      },
  }
  </script>
  
  
  <style scoped>
  .searcClient-cont{
      height: 100%;
      width: 90%;
      margin: auto;
      display: flex;
      flex-direction: column;
  }
  .back-icon{
      cursor: pointer;
  }
  .back-icon:hover{
      scale: 1.2
  }
  .back-icon:active{
      scale: .8
  }
  /* .back-cont{
      width:90%;
      height: 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .5rem 1rem;
  } */
  .body{
      padding: .5rem;
      display: flex;
      flex-direction: column;
      height: 90%;
  }
  
  .body .searchSection{
      /* border: 5px solid black; */
      display: flex;
      flex-direction: column;
      width: 50%;
      position: relative;
  }
  .body .searchSection input{
      /* outline: 1px solid black; */
      border: none;
      border-radius: 5px;
      padding: .5rem;
      padding-right: 4rem;
      height: 100%;
      width: 100%;
  }
  .body .searchSection input:focus{
      outline: 1px solid rgba(0, 0, 0, 0.653);
  }
  .body .searchSection span{
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%); 
      height: 100%;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
  }
  
  .body .searchSection span .search-icon{
      scale: 1.5;
      padding: 0 1rem;   
  }
  
  .grid{
      display: grid;
      grid-template-columns: 50% 50%;
      margin-top: .5rem;
      flex-grow: 1;   
      /* height: 90%; */
      box-sizing: border-box  ;
      overflow-y: auto;
  }
  .grid ul{
      background-color: white;
      /* max-height: 100%; */
      overflow-y: auto;
      border: 1px solid #888;
      margin: 0;
      padding-left: 0;
      border-radius: 5px;
  }
  .grid ul::-webkit-scrollbar {
    width: .5rem; /* Width of the scrollbar */
  }
  .grid ul::-webkit-scrollbar-track {
    background: #f1f1f1; /* Color of the scrollbar track */
    border-radius: 5px;
  }
  .grid ul::-webkit-scrollbar-thumb {
    background: #888; /* Color of the scrollbar handle */
    border-radius: 5px; /* Rounded corners for the handle */
  }
  .grid ul::-webkit-scrollbar-thumb:hover {
    background: #7f7e7e; /* Color of the scrollbar handle on hover */
  }
  .grid li{
      padding: .5rem;
      width: 100%;
      display: flex;
      align-items: center ;
  } 
  .grid li:hover{
      background-color:#f1f1f1;
      cursor: default ;
  } 
  
  
  .display-results input{
      border: none;
      font-weight: 600;
      text-transform: uppercase;
      background-color: transparent;
      cursor: default;
  }
  .display-results input:focus{
      outline: none;
  }
  .body .display-nofound{
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .body .display-results{
      padding-left: 1rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  .body .display-results .default-info-signup div{
      display: flex;
      flex-direction: column;
      gap: .5rem .5rem;
  } 
  .default-info-signup section{
      display: flex;
      gap: .5rem;
  }
  .button{
      width: 50%;
      border: 1px solid black;
  }
  /* .button button{
      width: 100%;
      padding: .5rem;
      border: none;
      background-color: #31A72A;
      color: white;
      cursor: pointer;
  }
  .button button:active{
      background-color: #30a72a8e;
  } */
  </style>