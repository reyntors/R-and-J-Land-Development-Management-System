<template>
    <div class="client-container" >
      <div v-if="!addFormVisibleComputed">
        <article class="searchPart">
            <h4 >Client List</h4>
            <div @click="toggleShowAddForm">
              Add New Client
            </div>
        </article>

        <progress-loading v-if="isLoading" type="spin"></progress-loading>
        <article class="displayPart" v-if="!isLoading">
          <table>

            <tr>
              <th>Fullname</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
              <th v-if="authorizationRoleAdmin">Delete</th>
            </tr>
            <tbody v-for="(client,index) in clientsComputed" :key="index">
              <tr>
                  <td class="name"> {{ client.fullname }}</td>
                  <td class="email">{{ client.email }}</td>
                  <td class="address">{{ client.homeAddress }}</td>
                  <td class="option"><span @click="showClientProfile(client)">Show/Update</span></td> 
                  <td class="delete" v-if="authorizationRoleAdmin"><span class="delBtn"><font-awesome-icon icon="fa-solid fa-user-xmark" @click="deleteNow(client.userId)"/></span></td>
              </tr>  
              <tr v-if="client === selectedClient">
                <td :colspan="columnSpanNum">
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
import { toast } from 'vue3-toastify'
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

          isLoading: true
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
        },
        async deleteNow(id){
          const confirmed = confirm('Are you sure to remove this client?')
          if(confirmed){
            try{
              await this.$store.dispatch('client/removeClient',id)
              toast.success('removed succesfully')
            }catch(error){
              toast.error(error)
            }
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
          return this.$store.getters['client/clientsGetter']
        },
        authorizationRoleAdmin(){
          return this.$store.getters['auth/authorizationRoleAdmin']
        },
        columnSpanNum(){
          const isAdmin = this.$store.getters['auth/authorizationRoleAdmin']
          if(isAdmin){
            return 5
          }else{
            return 4
          }
        }
      },   

      async mounted(){
        this.isLoading = true
        try{
          await this.$store.dispatch('client/getLegitList')  //for legit list
          // await this.$store.dispatch('client/getPendingList') //for guest pending list
          this.isLoading = false
        }catch(error){
          console.log(error)
          toast.error(error)
        }
        
      }
  }
  </script>
  
  <style scoped>
  .name{
    text-transform: capitalize;
  }
  .delBtn{
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
  }
.client-container{
      width: 100%;
      border-left: 2px solid rgba(0, 0, 0, 0.5);
      padding: 1rem;
      position: relative;
      min-height: 85vh;
  }
  .searchPart{
    width:100%;
    /* height: 10%; */
    /* background-color: bisque; */
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 1rem;
    /* border: 1px solid black; */
  }
  h4{
    padding: 0;
    margin: 0;
  }
  .searchPart div{
    background-color: #31A72A;
    padding: .5rem;
    box-shadow: 0 1px 1px 1px rgb(0, 0, 0,0.1);
    cursor: pointer;
    color: white;
    border-radius: 5px;
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
    padding-bottom: 5rem;
    /* border: 1px solid black; */
  }

  table{
    width: 100%;
    width: 100%;
  table-layout: fixed;
  }
  th{
    /* border: 1px solid black; */
    text-align: center;
    padding: .5rem;
    border-top: 1px solid black;
  }
  td{
    padding: 0 .5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  table tbody:nth-child(even){
    background-color: rgba(255, 217, 0, 0.1);
  }
  table tbody:nth-child(odd){
    background-color: rgba(0, 0, 0, 0.1);
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
  .option{
    overflow: hidden;
    text-overflow: clip;
  }

  </style>