<template>
  <div class="cont">
    <div class="search"> 
        <input class="form-control me-2" type="number" placeholder="Search" aria-label="Search" v-model.trim="searchItem" @keyup.enter="search">
        <button class="btn btn-primary c-btn" type="submit" @click="search">Search</button>
    </div>
    <div class="resultFound" v-if="isFound">
        <button type="button" class="btn btn-warning c-btnReserve">Reserve Now!</button>
        <section>
            <strong>Lot number: </strong>{{ lotNumberComputed }}
            
        </section>

        <section>
            <strong>Total squared meters: </strong>{{ totalSqMetersComputed }}
        </section>
   
        <section>
            <strong>Amount per sqared: </strong><font-awesome-icon icon="fa-solid fa-peso-sign" />{{ amountPerSq }}
        </section>

        <section>
            <strong>Total amount due: </strong><font-awesome-icon icon="fa-solid fa-peso-sign" />{{ totalAmountDue }}
        </section>
        
        
    </div>
    <div class="resultNotFound" v-if="isNotFound">
        <h1>This lot number is not found</h1>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        //search input
        searchItem: null,

        //details
        lotNumber: null,
        totalSqMeters: null,
        amountPerSq: null,
        totalAmountDue: null,

        //conditions
        isFound: false,
        isNotFound: false,
      }
    },
    methods:{
      search(){
        const list = this.$store.getters['home/properties']
        // console.log(list)
        const result = list.find(item => item.lotNumber === this.searchItem)
        if(result){
            this.isFound = true
            this.isNotFound= false
            this.lotNumber = result.lotNumber,
            this.totalSqMeters = result.totalSqMeters,
            this.amountPerSq = result.amountPerSq.toLocaleString(),
            this.totalAmountDue = result.totalAmountDue.toLocaleString()
        }else{
            this.isFound = false
            this.isNotFound= true
        }
      }
    },
    computed:{
        lotNumberComputed(){
            return '#'+this.lotNumber
        },
        totalSqMetersComputed(){
            return this.totalSqMeters + ' squared meters'
        } ,

    }
}
</script>

<style scoped>
.cont{
    width: 80vw;
    margin: 0 auto 3rem;
}
.search{
    border: 1px solid rgba(0, 0, 0, 1);
    width: 35%;
    height: 10%;
    display: flex;
    padding: .2rem;
}
.resultFound{
    /* height: 20vh; */
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 1rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: .5rem;
    justify-content: center;
    justify-items: center;
}
.resultFound section{
    /* border: 1px solid black; */
    width: 80%;

    display: flex;
    /* justify-content: center; */
    align-content: center;
    align-items: center;
}
strong{
    margin: 0 .5rem 0 0;
}
.c-btnReserve{
    font-weight: 600;
    grid-column: span 2;
    padding: .5rem 5rem;
    box-shadow: 0 0 5px .5px rgba(0, 0, 0, 0.381);
    animation: buttonColor 1s ease-in-out infinite alternate;
}

@keyframes buttonColor {
    0%{ 
        background-color: gold;
        color:black;
    }
    100%{
        background-color: red;
        color: white;
    }
}
.resultNotFound{
    height: 15vh;
    border: 1px solid rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>