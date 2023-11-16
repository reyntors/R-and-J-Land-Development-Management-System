<template>
  <div class="report-container">

    <div class="div1">
      <h4>Reports</h4>
    </div>

    <div class="div2">
      
      
      <article class="card">
        <header>
          <h4>Collection Reports</h4>
        </header>
        <section>  

          <button @click="openWindow('daily')">
            DAILY REPORT
          </button>

          <button @click="openWindow('weekly')">
            WEEKLY REPORT
          </button>
          <button @click="openWindow('monthly')">
            MONTHLY REPORT
          </button>

          <button @click="openWindow('custom')">
            CUSTOM REPORT
          </button>
          

        </section>
      </article>

      <daily-report v-if="openReport" @close-window="closeWindow" :type="type"/>

    </div>
  </div>
</template>

<script>
import DailyReport from './SubComponent/WindowReport.vue'
export default {
    components: {
        DailyReport,
    },
    data(){
      return{
        dailyVisible: false,
        monthlyVisible: false,

        openReport : false,
        type: "",
      }
    },
    methods: {
      closeWindow(){
        this.openReport = false
      },
      openWindow(param){
        this.type = param
        this.openReport = true
      }
    },
}
</script>

<style scoped>
.report-container{
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
    align-items: start;
    padding: 1rem;
    gap: 1rem;
    position: relative;
}
.card{
  outline: 1px solid black;
}
.card header{
  /* border: 1px solid black; */
  padding: .5rem 2rem;
}
.card header h4{
  margin: 0;
  padding: 0;
}

.card section{
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: .5rem;
}
.card button{
  padding: .5rem;
  margin: .5rem;
  background-color: #31A72A;
  color: white;
  border: none;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.5);
}
.card button:active{
  box-shadow: none;
}














/* 
.div2 article{
    /* border-radius: 10px; 
    box-shadow: 0 0 3px 1px black;
    text-align: center;
    height: 50%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
}
.div2 article:active{
  box-shadow: none;
}
.div2 article header{
    padding: .5rem;
    font-weight: 700;
    background-color: blue;
    color: white;
    /* border-top-left-radius: 10px; */
    /* border-top-right-radius: 10px; 
    
}
.div2 article section{
    color: white;
    font-weight: 500;
    height: 100%;
    display: flex;
    border-top: 1px solid black;
    align-items: center;
    justify-content: center;
    /* border-bottom-right-radius: 10px; */
    /* border-bottom-left-radius: 10px; 
    background: linear-gradient(66deg,#0000ff3c,#31a72a,#ffffff);
    background-size: 180% 180%;
    animation: gradient-animation 3s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}  */
</style>