<template>
    <div class="inquiries-cont">
      <div class="div1">
        <h4>Inquiries</h4>
      </div>

      <div class="div2">
        <table>
          <tr v-for="(item,index) in request" :key="index">
            <td class="name">{{ item.name }}</td>
            <td class="about">{{ item.subject }}{{ item.message }}</td>
            <td class="date">
              
              <span class="dateText">
                {{ item.date }}
              </span>

              <font-awesome-icon class="trash-icon" icon="fa-solid fa-trash-can" />

            </td>
          </tr>
        </table>
      </div>

      
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{
        request: [
          {
            id: 1,
            name: "Karl Borromeo",
            subject: "Donwpayment",
            message: "fsdaf we af ewr w fd asf ser fkarr ahhaa rewq vvur ",
            date: '2023-10-3'
          },
          {
            id: 2,
            name: "Reynard Torculas",
            subject: "Donwpayment",
            message: "fsdaf we af ewr w fd asf ser fkarr ahhaa rewq ",
            date: '2023-10-1'
          },
          {
            id: 3,
            name: "Jhaerix Borromeo",
            subject: "Donwpayment",
            message: "hello po I am interfdfdfs",
            date: '2023-9-30'
          },
          
        ]
      }
    }
  
  }
  </script>
  
  <style scoped>
.inquiries-cont{
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
.div2{
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
}
table{
  width: 100%;
}
tr{
  border: 1px solid black;
  cursor: pointer;
}
td{
  border: 1px solid black;
  padding: .5em 0;
}
.name{
  width:25%;
  text-align: start;
  padding-left: 1rem;
}
.about{
  width:55%;
  white-space: nowrap;
  overflow: hidden;
  width: 100px; /* Set a fixed width for the container */
}
.date{
  width:20%;
  position: relative;
  text-align: center;
  background-color: transparent;
}
table tr:nth-child(-n+5){
  background-color: rgba(0, 0, 0, 0.2);
  font-weight: 700;
}
.trash-icon{
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  scale: 1.2;
  margin-right: 1rem;
  display: none;
}
tr:hover{
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 1);
}
tr:active{
  color: rgba(255, 255, 255, 0.321);
}
tr:hover .trash-icon{
  display: block;
}

  </style>