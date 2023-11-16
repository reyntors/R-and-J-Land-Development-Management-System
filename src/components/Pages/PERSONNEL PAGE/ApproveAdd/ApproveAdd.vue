<template>
    <div class="addedClient-container">
  
      <div class="div1">
        <h4>Added Clients</h4>
      </div>
  
      <div class="div2">
        <table>
            <tr>
                <th>Details</th>
                <th>Date</th>
                <!-- <th>f</th> -->
            </tr>
            <tbody v-for="(item,index) in list" :key="index">
                <tr>
                    <td class="context"> {{ numberGenerate(index) }}{{ item.context }}</td>
                    <td class="date">{{ item.date }}</td>
                    <td class="option">
                        <span class="check-span" @click="approve(item.id)">
                            Approve
                           <font-awesome-icon icon="fa-solid fa-user-check" class="icon check"/> 
                        </span>
                        <span @click="reject(item.id)">
                            Reject
                            <font-awesome-icon icon="fa-solid fa-user-xmark" class="icon ex"/>
                        </span>
                        
                    </td>
                </tr>
              
            </tbody>
        </table>
  
      </div>
    </div>
  </template>
  
  <script>

  export default {
    data(){
        return{

        }
    },
    methods:{
        approve(id){
            const confirmed = confirm('are you sure to APPROVE this user?')
            if(confirmed){
                this.$store.commit('pendingClients/approve',id)
            }
            
        },
        reject(id){
            const confirmed = confirm('are you sure to REJECT this user?')
            if(confirmed){
            this.$store.commit('pendingClients/reject',id)
            }
        },
        numberGenerate(index){
          return index + 1 + '. '
        }
    },
    computed:{
        list(){
            return this.$store.getters['pendingClients/listPendingClients']
        }
    }
  }
  </script>
  
  <style scoped>
  tbody:nth-child(even){
    background-color: rgba(0, 0, 0, 0.1);
  }
  th{
    text-align: center;
    padding: .5rem;
  }
  td{
    padding: .5rem;
  }

  .option{
    /* border: 1px solid black; */
    text-align: center; 
  }
  .date{
    width: 20%;
    /* border: 1px solid black; */
    text-align: center;
  }
  .context{
    width: 50%;
    /* border: 1px solid black; */
  }
  table{
    /* border: 1px solid black; */
    width: 100%;
  }
  .addedClient-container{
    width: 100%;
      height: 85vh;
      padding: 1rem;
      border-left: 2px solid rgba(0, 0, 0, 0.5);
  }
  h4{
    margin: 0;
    padding: 0;
  }
  .div1{
      width:100%;
      height: 10%;
      /* background-color: bisque; */
      border-bottom: 1px solid black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
  }
  .div2{
      width:100%;
      height: 90%;
      /* background-color: bisque; */
      display: flex;
      justify-content: start; 
      align-items: start;
      /* padding: 1rem; */
      gap: 1rem;
      position: relative;
  }
  span{
    cursor: pointer;
    display: inline;
    gap: 5px;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    white-space: nowrap;
  }
  span:active{
    opacity: .5;
  }
  .check{
    color: blue;
  }
  .ex{
    color: red;
  }
  .check-span{
    margin-left: 1rem;
  }
  </style>