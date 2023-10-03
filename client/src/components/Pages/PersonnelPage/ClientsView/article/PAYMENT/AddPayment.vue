<template>
  <div></div>
  <form @submit.prevent="submit"  method="POST" enctype="multipart/form-data">
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
        <label for="attachment">Attachments</label>
        <input id="attachment" type="file" accept="image/*" @change="setAttachment">
    </section>

    <section class="c-btn">
      <button>Submit</button>  
    </section>
    
  </form>
</template>

<script>
import axios from 'axios';
import store from '@/store/store.js'
import { toast } from 'vue3-toastify'
export default {
    emits: ['exit-btn'],
    props: ['id'],
    data(){
        return{
            date: null,
            amount: null,
            purpose: 'monthly-payment',
            attachment: null,
        }
    },
    methods:{
        setAttachment(event){
            this.attachment = event.target.files[0]
            console.log("Selected file:", this.attachment);
        },
        close(){
            this.$emit('exit-btn')
        },
        async submit(){
          
            const formData = new FormData();
            formData.append('file', this.attachment); // Ensure 'file' matches your server's field name
            formData.append('date', this.date);
            formData.append('amount', this.amount);
            formData.append('purpose', this.purpose);


            console.log("I AM ATTACHMENT:",this.attachment)

            try{
                const BASE_URL = 'http://localhost:4000/'
                const token = store.getters['auth/getTokenID']

                  const response = await axios.post(`${BASE_URL}users/add-transaction/${this.id}`, formData, {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Ensure the correct content type
                 },
                });
                console.log(response.data)
                toast.success(response,1000)
                new Promise(resolve => setTimeout(resolve,1000))
                this.close()
            }catch(error){
                toast.error(error,1000)
            }          
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