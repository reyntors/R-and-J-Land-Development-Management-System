<template>
    <div class="c-container" >
      <div v-if="!addFormVisibleComputed">
        <article class="searchPart">
            <h4>Client List</h4>
            <div @click="toggleShowAddForm">
              Add New Client
            </div>
        </article>


        <article class="displayPart">
          <table>

            <tr>
              <th>Fullname</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
            <tbody v-for="(client,index) in clientsComputed" :key="index">
              <tr>
                  <td>{{ client.fullname }}</td>
                  <td>{{ client.email }}</td>
                  <td>{{ client.homeAddress }}</td>
                  <td><span @click="showClientProfile(client)">Show/Update</span></td> 
              </tr>  
              <tr v-if="client === selectedClient">
                <td :colspan="4">
                  <client-details-nav :client-obj="client"></client-details-nav>          
                </td>
              </tr>            
            </tbody>

          </table>
        </article>        
      </div>


      <addnew-client v-if="addFormVisibleComputed" @go-back="toggleShowAddForm"/>
    </div>
    
  </template>
  
  <script>
import AddnewClient from './header/AddnewClient.vue'
import ClientDetailsNav from './aside/ClientDetailsNav.vue'


  export default {

      components: {
            AddnewClient,
            ClientDetailsNav
      },

      data(){
        return{
          addFormVisible: false,
          profileClientVisible: false,
          selectedClient: null,
        }
      },

      methods:{
        toggleShowAddForm(){
          this.addFormVisible = !this.addFormVisible
        },
        showClientProfile(params){
          if(this.selectedClient === params){
            this.selectedClient = null
          }else{
            this.selectedClient = params
          }  
        }
      },
  
      computed: {
        addFormVisibleComputed(){
          return this.addFormVisible
        },
        profileClientVisibleComputed(){
          return this.profileClientVisible
        },
        clientsComputed(){
          // console.log(this.$store.getters['client/clientsGetter'])
          return this.$store.getters['client/clientsGetter']
        }
      },   
  }
  </script>
  
  <style scoped>
.c-container{
      /* flex-grow: 1; */
      width: 100%;
      height: 85vh;      
      padding: 1rem;
  }
  .searchPart{
    width:100%;
    height: 10%;
    background-color: bisque;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 1rem;
  }
  .searchPart div{
    background-color: #31A72A;
    padding: .5rem;
    font-weight: 600;
    box-shadow: 0 0 1px 1px rgb(0, 0, 0);
    cursor: pointer;
    /* margin: 5px 0; */
    color: white;
  }
  .searchPart div:hover{
    background-color: #30a72a8e;
  }
  .searchPart div:active{
    color: black;
  }
  
  .displayPart{
    height: 90%;
    width:100%;
  }
  table{
    width: 100%;
  }
  th{
    border: 1px solid black;
    text-align: center;
  }
  td{
    padding: 0 .2rem;
    border: 1px solid black;
  }
  table tbody:nth-child(even){
    background-color: rgba(255, 228, 196, 0.314);
  }
  tr td:nth-child(4){
    text-align: center;
  }
  td span{
    color: blue;
    cursor: pointer;
  }
  td span:hover{
    text-decoration: underline;
  }
  td span:active{
    color: black;
  }
  

  </style>