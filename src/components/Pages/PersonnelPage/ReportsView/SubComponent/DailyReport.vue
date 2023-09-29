<template>
    <div class="daily-cont">
        <header>
           <img src="@/assets/logo.png"> 
           <font-awesome-icon class="icon" icon="fa-solid fa-x" fade @click="close"/>
        </header>
        <div>
         <span>
            <strong>Date now: </strong> 
            <input type="date" v-model="dateNow" readonly>             
         </span>
         <span>
            <p>*Generate daily report</p>
            <button @click="generate">Generate</button>
         </span>
        </div>
        
    </div>
</template>

<script>
export default{
    emits:['close-dialog'],
    data(){
        return {
            dateNow: null
        }
    },
    methods: {
        close(){
            this.$emit('close-dialog')
        },
        generate(){
            const payload = this.dateNow
            this.$store.dispatch('report/dailyRequest',payload)
        }
    },
    created(){
        const dateNow = new Date();
        const dateString = dateNow.toISOString().split('T')[0];
        this.dateNow = dateString
    }
}
</script>
<style>
.daily-cont{
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 300px;    
    width: 30%;
    max-width: 500px;

    min-height: 200px;
    height: 40%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: .5rem;
}

.daily-cont header{
    display: flex;
    justify-content: center;
    position: relative;
}
.daily-cont header img{
    width: 30%;
}
.daily-cont header .icon{
    position: absolute;
    right: 0;
    /* top: 5%; */
    cursor: pointer;
    padding: .3rem;
}
.daily-cont header .icon:active{
    animation: none;
    background-color: rgba(0, 0, 0, 0.2);
}

.daily-cont div{
    flex-grow: 1;
    /* padding: 1rem; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.daily-cont  input{
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
}

.daily-cont div > span:nth-child(2){
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 3px;
}

.daily-cont div > span:nth-child(2) p{
    font-style: oblique;
    font-size: small;
}
.daily-cont div > span:nth-child(2) button{
    padding: .2rem;
    border: none;
    background-color: #31A72A;
    color: white;
}
</style>