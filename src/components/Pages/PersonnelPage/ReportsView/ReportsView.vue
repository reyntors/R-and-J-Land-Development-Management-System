<template>
  <div class="report-container">

    <div class="div1">
      <h4>Reports</h4>
    </div>

    <div class="div2">
      
      <article @click="toggleDaily">
        <header>
          Daily Collection Reports
        </header>
        <section>  
          Collection Summary 
        </section>
      </article>

      <article @click="toggleMonthly">
        <header>
          Monthly Collection Reports
        </header>
        <section>
            Collection Summary
        </section>
      </article>

      <daily-report v-if="dailyVisibleComputed"/>
      <monthly-report v-if="monthlyVisibleComputed"/>

    </div>
  </div>
</template>

<script>
import DailyReport from './SubComponent/DailyReport.vue'
import MonthlyReport from './SubComponent/MonthlyReport.vue'
export default {
    components: {
        DailyReport,
        MonthlyReport
    },
    data(){
      return{
        dailyVisible: false,
        monthlyVisible: false,
      }
    },
    methods: {
      toggleDaily(){
        this.dailyVisible = !this.dailyVisible
        if(this.monthlyVisible){
          this.monthlyVisible = false
        }
      },
      toggleMonthly(){
        this.monthlyVisible = !this.monthlyVisible
        if(this.dailyVisible){
          this.dailyVisible = false
        }
      }
    },
    computed:{
      dailyVisibleComputed(){
        return this.dailyVisible
      },
      monthlyVisibleComputed(){
        return this.monthlyVisible
      }
    }

}
</script>

<style scoped>
.report-container{
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
    justify-content: space-evenly;
    padding: 1rem;
    gap: 1rem;
    position: relative;
}
.div2 article{
    border-radius: 10px;
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
    background-color: #31A72A;
    color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    
}
.div2 article section{
    color: white;
    font-weight: 500;
    height: 100%;
    display: flex;
    border-top: 1px solid black;
    align-items: center;
    justify-content: center;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: linear-gradient(66deg,#0000ff,#31a72a,#ffffff);
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
}
</style>