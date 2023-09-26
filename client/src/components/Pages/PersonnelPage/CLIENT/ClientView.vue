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
            <tr v-for="client in clientsComputed" :key="client.id">
            
                <td>{{ client.fullname }}</td>
                <td>{{ client.email }}</td>
                <td>{{ client.address }}</td>
                <td><span>Show</span>/<span>Update</span></td>
              
            </tr>
          </table>
        </article>        
      </div>


      <addnew-client v-if="addFormVisibleComputed" @go-back="toggleShowAddForm"/>
    </div>

    
  </template>
  
  <script>
import AddnewClient from './AddnewClient.vue'

  export default {

      components: {
        AddnewClient
      },

      data(){
        return{
          addFormVisible: false,
        }
      },

      methods:{
        toggleShowAddForm(){
          this.addFormVisible = !this.addFormVisible
        }
      },
  
      computed: {
        addFormVisibleComputed(){
          return this.addFormVisible
        },
        clientsComputed(){
          return this.$store.getters['client/clientsGetter']
        }
      }
  }
  </script>
  
  <style scoped>
.c-container{
      flex-grow: 1;
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
    padding: 0 1rem;
  }
  .searchPart div{
    background-color: #31A72A;
    padding: .5rem;
    font-weight: 600;
    box-shadow: 0 0 1px 1px rgb(0, 0, 0);
    cursor: pointer;
    margin: 5px 0;
  }
  .searchPart div:hover{
    background-color: #30a72a8e;
  }
  
  .displayPart{
    height: 90%;
    width:100%;
    /* background-color: bisque; */
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
  table tr:nth-child(even){
    background-color: bisque;
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