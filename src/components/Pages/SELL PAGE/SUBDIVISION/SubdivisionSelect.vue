<template>
  <div class="shade"/>

  <div class="select-cont">
    <section class="leftSwipe">
        <!-- {{ item.image }} -->
        <select-swipe :image-list="item.image"></select-swipe>
    </section>
    <div class="labels">
        <section class="icon-cont">
            <font-awesome-icon class="select-subd-close" icon="fa-solid fa-x" @click="close"/>
        </section>
        <section class=" input">
            <label>Lot Number:</label><input v-model="lotNumber" readonly>
        </section>
        <section class=" input">
            <label>Total Sq. Meters:</label><input v-model="totalSqm" readonly>
        </section>
        <section class=" input">
            <label>Amount/Squared:</label><input v-model="amountPerSq" readonly>
        </section>
        <section class=" input">
            <label>Status:</label><input v-model="status" readonly style="text-transform: uppercase;">
        </section>
        <section class=" input">
            <label>TOTAL AMOUNT:</label><input v-model="totalAmt" readonly>
        </section>
        <section class="button">
            <button @click="inquireNow" :disabled="disableButton">{{ buttonText }}</button>
        </section>    
    </div>

  </div>
</template>

<script>
import SelectSwipe from './SelectSwipe.vue'
export default {
    props: ['item'],
    components: {SelectSwipe},
    data(){
        return{
            lotNumber: this.item.lotNumber,
            totalSqm:this.item.totalSqm ,
            amountPerSq: this.item.amountperSquare,
            status: this.item.status,
            totalAmt: this.item.totalAmountDue,

            notAllowedSubmit: false,

        }
    },

    methods: {
        close(){
            this.$emit('close-selected')
        },

        getAllData(){
            return {
                lotNumber: this.item.lotNumber,
                totalSqm: this.item.totalSqm,
                amountperSquare: this.item.amountperSquare,
                totalAmountDue: this.item.totalAmountDue,
            }
        },

        async inquireNow(){
            const isGuest = this.$store.getters['auth/authorizationRoleGuest']
            if(isGuest){
                    this.$router.push('/guest-forms/letter-of-intent')
            }else{
                this.$store.commit('auth/toggleLoginForm',true)
            }  
        }
    },

    computed:{
        disableButton(){
            if(this.item.status !== 'sale'){
                return true
            }else{
                return false
            }
        },
        buttonText(){
            if(this.item.status !== 'sale'){
                return "Not Available"
            }else{
                return "Reserve Now"
            }
        }
    }
}
</script>

<style scoped>
.select-subd-close,
.select-subd-close:active{
    cursor: pointer;
    color: rgba(0, 0, 0, 0.3);
}
.select-subd-close:hover{
    color: black;
}
.error{
    border: 2px color red;
}
.select-cont{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 95%;
    transform: translate(-50%, -50%);
    z-index: 10;
    background-color: white;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
    padding: 1rem;
    display: flex;
    gap: .5rem;
}
.leftSwipe{
    position: relative;
    width: 100%;
    outline: 1px solid black;
}
.labels{
    background-color: white;
    display: grid;
    flex-direction: column;
}
.input{
    display: flex;
    gap: .5rem;
    justify-content: center;
    align-items: center;
    padding-left: .5rem;
}
.button{
    display: flex;
    justify-content: center;
    align-items: center;
}

button{
  border: none;
  padding: .5rem 1rem;
  border-radius: 5px;
  background-color: rgba(255, 217, 0, 0.797);
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
  animation: blink ease-in 1s infinite both alternate;
}
button:hover{
  background-color: red;
  color: white;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2), 0 0 3px 1px rgba(255, 255, 255, 0.2);
}
@keyframes blink {
  0%{
    /* box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2); */
    outline: 2px solid white;
  }
  100%{
    outline: 2px solid rgba(0, 0, 0, 0.5);
    /* box-shadow: 0 0 1px 2px rgba(255, 217, 0, 0.515); */
  }
}
/* .labels button{
    width: 100%;
    outline: none;
    border: none;
    background-color: #86D916;
    font-weight: 600;
    outline: 1px solid black;
}
.labels button:active{
    background-color: #84d9169f;
} */

label{
    white-space: nowrap;
    font-weight: 600;
}
input{
    border:none;
    border-bottom: 1px solid black;
    /* padding-left: 1rem; */
    width: 100%;
    text-align: center;
}
input:focus{
    outline: none;
}
.shade{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.734);
    z-index: 9;
}
.icon-cont{
    display: flex;
    justify-content: end;
}
textarea{
    resize: none;
    padding: 1rem;
}
</style>