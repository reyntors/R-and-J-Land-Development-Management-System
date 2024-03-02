<template>
    <div class="addedClient-container">
        <h4>Added Clients</h4>
        <table>
            <thead>
                <tr>
                    <th>Staff</th>
                    <th>Client</th>
                    <th>Purpose</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <td>Action</td>
                </tr>                
            </thead>        
            <tbody>
                <tr>
                    <td>Sample Staff</td>
                    <td>Sample Client</td>
                    <td>Purpose</td>
                    <td>500000</td>
                    <td>02/18/24</td>
                    <td class="option">
                        <span class="check-span" @click="approval(item.userId,item.requestId,item.requestLegitId,'approved')">
                            Approve
                           <font-awesome-icon icon="fa-solid fa-check" class="icon check"/>
                        </span>
                        <span @click="approval(item.userId,item.requestId,item.requestLegitId,'rejected')">
                            Reject
                            <font-awesome-icon icon="fa-solid fa-xmark" class="icon ex"/>
                        </span>
                    </td>
                </tr>   
                <tr>
                    <td>Sample Staff</td>
                    <td>Sample Client</td>
                    <td>Purpose</td>
                    <td>500000</td>
                    <td>02/18/24</td>
                    <td class="option">
                        <span class="check-span" @click="approval(item.userId,item.requestId,item.requestLegitId,'approved')">
                            Approve
                           <font-awesome-icon icon="fa-solid fa-check" class="icon check"/>
                        </span>
                        <span @click="approval(item.userId,item.requestId,item.requestLegitId,'rejected')">
                            Reject
                            <font-awesome-icon icon="fa-solid fa-xmark" class="icon ex"/>
                        </span>
                    </td>
                </tr>   
                <tr>
                    <td>Sample Staff</td>
                    <td>Sample Client</td>
                    <td>Purpose</td>
                    <td>500000</td>
                    <td>02/18/24</td>
                    <td class="option">
                        <span class="check-span" @click="approval(item.userId,item.requestId,item.requestLegitId,'approved')">
                            Approve
                           <font-awesome-icon icon="fa-solid fa-check" class="icon check"/>
                        </span>
                        <span @click="approval(item.userId,item.requestId,item.requestLegitId,'rejected')">
                            Reject
                            <font-awesome-icon icon="fa-solid fa-xmark" class="icon ex"/>
                        </span>
                    </td>
                </tr>   
            </tbody>
        </table>
    </div>
  </template>
  
  <script>
  import { toast } from 'vue3-toastify'

  export default {
    data(){
        return{
            
        }
    },
    methods:{
        async approval(userId,requestId, requestLegitId,isApproved){
            console.log(isApproved)
            var confirmed = null;
            if(isApproved === 'approved'){
              confirmed = confirm('are you sure Add this user as legit Client?')
            }else{
              confirmed = confirm('are you sure to REJECT this user?')
            }
            if(confirmed){
              try{
                const response = await this.$store.dispatch('newClients/approval',{
                  userId,
                  requestId,
                  requestLegitId,
                  isApproved
                })
                toast.success(response)
              }catch(error){
                toast.error(error)
              }

            }
        },
        numberGenerate(index){
          return index + 1 + '. '
        }
    },
    computed:{
        list(){
            return this.$store.getters['newClients/listPendingClients']
        },
        isEmptyList(){
            return this.$store.getters['newClients/islistEmpty']
        }
    },
  }
  </script>
  
  <style scoped>
  .emptyList{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 5px;;
  }
   table tbody:nth-child(even){
    background-color: #30a72aa7;;

  }
  table tbody:nth-child(odd){
    background-color: rgba(255, 255, 255, 0.5);
  }
  th,td{
    text-align: center;
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
      width: 80vh;
      flex-grow: 1;
      height: 90vh;
      overflow: auto;
      padding: 1rem;
      border-left: 2px solid rgba(0, 0, 0, 0.5);
      position: relative;
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