<template>
  <div class="shade"/>

  <div class="select-cont">
    <section class="leftSwipe">
        <!-- {{ item.image }} -->
        <select-swipe :image-list="item.image"></select-swipe>
    </section>
    <div class="labels">
        <section class="icon-cont">
            <font-awesome-icon icon="fa-solid fa-x" @click="close"/>
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
        <textarea placeholder="leave a message here..." v-model.trim="message"></textarea>
        <button @click="inquireNow" :disabled="disableButton">Reserve</button>
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

            message: '',
        }
    },

    methods: {
        close(){
            this.$emit('close-selected')
        },

        inquireNow(){
            if(this.message.length > 10){
                const isGuest = this.$store.getters['auth/authorizationRoleGuest']
                if(isGuest){
                console.log('submiting the request')
                }else{
                this.$store.commit('auth/toggleLoginForm',true)
                }
            }else{
                console.log('message too short')
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
        }
    }
}
</script>

<style scoped>
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
.labels button{
    width: 100%;
    outline: none;
    border: none;
    background-color: #86D916;
    font-weight: 600;
    outline: 1px solid black;
}
.labels button:active{
    background-color: #84d9169f;
}

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