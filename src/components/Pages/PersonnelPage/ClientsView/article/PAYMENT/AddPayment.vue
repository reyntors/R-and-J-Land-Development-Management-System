<template>
  <div></div>
  <form @submit.prevent="" enctype="multipart/form-data">
    <section class="form-controls-icon">
        <font-awesome-icon class="icon" icon="fa-solid fa-x" @click="close"/>
    </section>
    <section class="form-controls">
        <label for="date">Date</label>
        <input type="date" v-model="date">
    </section>
    <section class="form-controls">
        <label for="amount">Amount</label>
        <input type="number" v-model="amount">
    </section>
    <section class="form-controls">
        <label for="purpose">Purpose</label>
        <select id="purpose" v-model="purpose">
            <option value="downpayment">Downpayment</option>
            <option value="reservation">Reservation</option>
            <option value="monthly-payment">Monthly Payment</option>
        </select>
        
    </section>
    <section class="form-controls">
        <label for="attachement">Attachements</label>
        <input id="attachement" type="file" @change="setAttachement">
    </section>

    <section class="c-btn">
      <button @click="submit">Submit</button>  
    </section>
    
  </form>
</template>

<script>
export default {
    emits: ['exit-btn'],
    data(){
        return{
            date: null,
            amount: null,
            purpose: 'monthly-payment',
            attachement: null,
        }
    },
    methods:{
        setAttachement(event){
            this.attachement = event.target.files[0]
        },
        close(){
            this.$emit('exit-btn')
        },
        submit(){
            const form = new FormData()
            form.append('date',this.date)
            form.append('amountPaid',this.amount)
            form.append('purpose',this.purpose)
            form.append('attachement',this.attachement)

            this.$store.commit('client/addPayment',form)
            form.forEach(element => console.log(element))

            try{
                //request here
            }catch(error){
                //error
            }

            this.close()
        }
    }

}
</script>

<style scoped>
div{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2)
}
form{
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    width: 95%;

    padding: 1rem;
}
.form-controls{
    margin-left: 1rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
}
.c-btn{
    margin-top: 1rem;
    display: flex;
    justify-content: center;
}

.form-controls-icon{
    display: flex;
    justify-content: end;
}
.form-controls-icon .icon{
    /* border: 1px solid rgba(0, 0, 0, 0.486); */
    padding: .5rem;
    border-radius: 100%;
    cursor: pointer;
    
}
.form-controls-icon .icon:hover{
    scale: 1.1;
    outline: 1px solid black;
}
.form-controls-icon .icon:active{
    /* box-shadow: none; */
    box-shadow: 0 0 2px 1px black;
    /* outline: 1px solid black; */
}
</style>