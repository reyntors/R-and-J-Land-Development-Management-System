<template>
  <div class="c-container">
    
    <div class="header">
        <h3>Client Profile</h3>
        <button @click="toggleEdit">{{ editBtnText }}</button>
    </div>
    <form>
        <section>
            <label for="fullname">Fullname:</label><input type="text" id="fullname" v-model="fullname" :readonly="!editableComputed">            
        </section>
        <section>
            <label for="email">Email:</label><input type="text" id="email" v-model="email" :readonly="!editableComputed">            
        </section>
        <section>
            <label for="address">Address:</label><input type="text" id="address" v-model="address" :readonly="!editableComputed">            
        </section>
    </form>
    <button @click="saveNow">Save</button>
  </div>
</template>

<script>
export default {
    emits: ['pass-data'],
    props: ['client'],
    data(){
        return{
            editable: false,
            editOccured: false,

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
        toggleEdit(){
            this.editable = !this.editable
        },
        passData(){
            const payload = this.getDetails();
            this.$emit('pass-data',payload)
        },
        saveNow(){
            if(this.editOccured){
                const obj = {
                id: this.client.id,
                fullname: this.fullname,
                email: this.email,
                address: this.address,
                }
                this.$store.commit('client/updateClient',obj)
            }else{
                console.log('no changes')
            }
        },
    },

    computed:{
        editableComputed(){
            return this.editable
        },
        editBtnText(){
            if(this.editable === false){
                return 'Edit'
            }else{
                return 'Cancel'
            }
        }
    },

    watch:{
        fullname(dataNew){
            if(dataNew !== this.client.fullname){
                // console.log('updating name')
                this.editOccured = true;
            }else{
                this.editOccured = false
            }      
        },
        email(dataNew){
            if(dataNew !== this.client.email){
                // console.log('updating email')
                this.editOccured = true;
            }else{
                this.editOccured = false
            }
        },
        address(dataNew){
            if(dataNew !== this.client.address){
                // console.log('updating address')
                this.editOccured = true;
            }else{
                this.editOccured = false
            }
        }
    }

}
</script>


<style scoped>
.c-container{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
}
.c-container .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    margin-bottom: 1rem;

    /* border: 1px solid black; */
}
.c-container .header button{
    padding: 2px .5rem;
    background-color: #31A72A;
    color:white;
}
.c-container .header button:hover{
    background-color: #30a72a8e;
}
.c-container .header button:active{
    color: black;
}
</style>