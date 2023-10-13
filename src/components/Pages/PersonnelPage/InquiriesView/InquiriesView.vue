<template>
    <div class="inquiries-cont">
      <div class="div1">
        <h4>Inquiries</h4>
      </div>

      <div class="div2">
        <progress-loading v-if="isLoading" type="spin"></progress-loading>
        <table v-else>
          <tbody v-for="(item,index) in listInquiries" :key="index">
            <tr @click="showCard(index)" :class="{shade: !item.mark}">
              <td class="name">{{ item.name }}</td>
              <td class="about">{{ item.subject }} {{ item.context }}</td>
              <td class="date">               
                <span class="dateText">
                  {{ item.date }}
                </span>
              </td>
            </tr>
            <inquiries-card
              v-if="index=== focusedID"
              :obj="item"
              @close-card="closeCard"
            />
 
   
          </tbody>
        </table>
        
      </div>

      
    </div>
  </template>
  
  <script>
  import InquiriesCard from './InquiriesCard.vue';
  export default {
    components: {InquiriesCard},
    data(){
      return{
        isLoading: true,
        focusedID: null,
      }
    },
    methods: {
      showCard(id){
        this.focusedID = id
        console.log(this.focusedID)
      },
      closeCard(){
        this.focusedID = null
      },

    },
    computed:{
      listInquiries(){
        return this.$store.getters['inquiries/listInquiriesGetter']
      }
    },

    async mounted(){
      this.isLoading = true
      // await new Promise(resolve => setTimeout(resolve,1000))
      await this.$store.dispatch('inquiries/getInquiriesList')
      this.isLoading = false
    }
  
  }
  </script>
  
  <style scoped>
.shade{
  background-color: rgb(118, 187, 232,.3);
  font-weight: 600;
}
.visible{
  display: block;
}
.inquiries-cont{
    width: 100%;
    height: 85vh;
    padding: 1rem;
}
.inquiries-cont .div1{
    width:100%;
    height: 10%;
    background-color: bisque;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}
.inquiries-cont .div2{
    width:100%;
    height: 90%;
    background-color: bisque;
    display: flex;
    justify-content: start;
    align-items: flex-start;
    /* padding: 1rem; */
    gap: 1rem;
    position: relative;
    overflow-y: auto;
    border: 1px solid black;
}
.inquiries-cont .div2 table{
  width: 100%;
  table-layout: fixed;
}
tr{
  border-bottom: 1px solid black;
  cursor: pointer;
  width: 100%;
}
td{
  padding: .5rem;
}
.trash-icon{
  visibility: hidden;
}
.trash-icon:hover{
  color: #b0bbcf;
}
.trash-icon:active{
  color: black;
}
tr:hover{
  box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.64);
}
tr:hover .trash-icon{
  visibility: visible;
}
.name{
  padding-left: 1rem;
  width: 20%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.about{
  /* border: 1px solid black; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 60%;
  padding: 0 2rem 0 1rem;
}
.date{
  width:15%;
  text-align: center;
}
  </style>