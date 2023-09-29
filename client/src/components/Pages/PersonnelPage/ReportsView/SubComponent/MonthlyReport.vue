<template>
    <div class="Monthly-cont">
        <header>
           <img src="@/assets/logo.png"> 
           <font-awesome-icon class="icon" icon="fa-solid fa-x" fade @click="close"/>
        </header>
        <div>
         <span>
            <section>
                <strong>Date From: </strong> 
                <input type="date" v-model="dateFrom">                  
            </section>
            <section>
                <strong>Date To: </strong> 
                <input type="date" v-model="dateTo">                  
            </section>         
         </span>
         <span>
            <p>*Generate Custom report</p>
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
            dateFrom: null,
            dateTo: null,
        }
    },
    methods: {
        close(){
            this.$emit('close-dialog')
        },
        generate(){
            if(this.dateFrom && this.dateTo){
               this.$store.dispatch('report/CustomReport',{'from': this.dateFrom, 'to': this.dateTo}) 
            }else{
                console.log('empty')
            }
            
        }
    },
}
</script>
<style>
.Monthly-cont{
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

.Monthly-cont header{
    display: flex;
    justify-content: center;
    position: relative;
}
.Monthly-cont header img{
    width: 30%;
}
.Monthly-cont header .icon{
    position: absolute;
    right: 0;
    /* top: 5%; */
    cursor: pointer;
    padding: .3rem;
}
.Monthly-cont header .icon:active{
    animation: none;
    background-color: rgba(0, 0, 0, 0.2);
}

.Monthly-cont div{
    flex-grow: 1;
    /* padding: 1rem; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.Monthly-cont  input{
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
}

.Monthly-cont div > span:nth-child(2){
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 3px;
}

.Monthly-cont div > span:nth-child(2) p{
    font-style: oblique;
    font-size: small;
}
.Monthly-cont div > span:nth-child(2) button{
    padding: .2rem;
    border: none;
    background-color: #31A72A;
    color: white;
}
</style>