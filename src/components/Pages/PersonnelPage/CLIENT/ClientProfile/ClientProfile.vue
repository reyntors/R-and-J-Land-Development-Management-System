<template>
  <div class="c-container">
    <h3>Client Profile</h3>
    <form>
        <section>
            <label for="fullname">Fullname:</label><input type="text" id="fullname" v-model="fullname">            
        </section>
        <section>
            <label for="email">Email:</label><input type="text" id="email" v-model="email">            
        </section>
        <section>
            <label for="address">Address:</label><input type="text" id="address" v-model="address">            
        </section>

    </form>
  </div>
</template>

<script>
export default {
    emits: ['pass-data'],
    props: ['client'],
    data(){
        return{
            fullname: this.client.fullname,
            email: this.client.email,
            address: this.client.address,
        }
    },
    
    methods: {
        getDetails(){
            return {
                fullname: this.fullname,
                email: this.email,
                address: this.address,
            }
        },
        passData(){
            const payload = this.getDetails();
            this.$emit('pass-data',payload)
        }
    },



    watch:{
        fullname(dataNew){
            if(dataNew !== this.client.fullname){
                // console.log('updating name')
                this.passData();
            }      
        },
        email(dataNew){
            if(dataNew !== this.client.email){
                // console.log('updating email')
                this.passData();
            }
        },
        address(dataNew){
            if(dataNew !== this.client.address){
                // console.log('updating address')
                this.passData();
            }
        }
    }

}
</script>
