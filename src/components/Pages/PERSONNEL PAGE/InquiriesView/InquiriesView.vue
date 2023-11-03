<template>
    <div class="inquiries-cont" id="inquiries-cont">
      <div class="div1" id="listInquiryHeader">
        <h4>Inquiries</h4>
      </div>

      <div class="div2" id="listInquiryContainer">
        <progress-loading v-if="isLoading" type="spin"></progress-loading>
        <table v-else>
          <tbody v-for="(item,index) in listInquiries" :key="index" >
            <tr @click="showCard(item.inquiryId)" :class="{shade: item.mark || item.approvalStatus ==='approved' || item.approvalStatus ==='rejected'}">
              <td class="name">{{ item.name }}</td>
              <td class="about">{{ item.subject }} {{ item.context }}</td>
              <td class="date">               
                <span class="dateText">
                  {{ item.date }}
                </span>
              </td>
            </tr>
            <tr >
              <td colspan="3" v-if="item.inquiryId === focusedID" style="padding: 1rem;" :class="classLiMaker(item.mark,index)">
                <inquiries-card             
                  :obj="item"
                  @close-card="closeCard"
                  :class-name="classLiMaker(item.mark,index)"
                />
              </td>
            </tr>
            
            
 
   
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
      closeCard(){
        this.focusedID = null
      },
      classLiMaker(mark,index){
        const className = mark+'_'+index
        // console.log(className)
        return className
      },
      showCard(id){
        this.focusedID = id
      },
    },
    computed:{
      listInquiries(){
        return this.$store.getters['inquiries/listInquiriesGetter']
      },
    },

    async mounted(){
      this.isLoading = true
      // await new Promise(resolve => setTimeout(resolve,1000))
      await this.$store.dispatch('inquiries/getInquiriesList')
      this.isLoading = false
      // this.setUpScrollEvent()
    }
    // beforeUnmount(){
    //       window.removeEventListener('scroll',this.handleScroll)
    //   }
  
  }
  </script>
  
  <style scoped>
.shade{
  font-weight: 500;
  background-color: transparent;

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
    min-height: 85vh;
    background-color: bisque;
    display: flex;
    justify-content: start;
    align-items: flex-start;
    position: relative;
    /* overflow-y: auto; */
    /* border: 5px solid black; */
}
.inquiries-cont .div2 table{
  width: 100%;
  table-layout: fixed;
}
tr{
  border-bottom: 1px solid black;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  background-color: rgb(118, 187, 232,.3);
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
  padding: .5rem;
  width: 20%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.about{
  padding: .5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 60%;
  padding: 0 2rem 0 1rem;
}
.date{
  padding: .5rem;
  width:15%;
  text-align: center;
}
  </style>