<template>
  <div>
    <section>
        <font-awesome-icon class="icon" icon="fa-solid fa-arrow-left-long" size="2x" @click="back"/>
        <button @click="addNow">Add <font-awesome-icon icon="fa-solid fa-plus" /></button>
    </section>
    <form>
        <label for="fullname">Fullname</label><input type="text" id="fullname" v-model="fullname">
        <label for="email">Email</label><input type="text" id="email" v-model="email">
        <label for="address">Address</label><input type="text" id="address" v-model="address">
    </form>

  </div>
</template>

<script>
export default{
    emits: ['go-back'],
    data(){
        return{
            fullname: '',
            email: '',
            address: '',
        }
    },
    methods: {
        back(){
            this.$emit('go-back')
        },

        getAllData(){
            return{
                id: new Date(),
                fullname: this.fullname,
                email: this.email,
                address: this.address
            }
        },
        addNow(){
            const payload = this.getAllData()
            this.$store.commit('client/addClient',payload)
            this.back();
        }
    }
}
</script>


<style scoped>
div{
    height: 100%;
    width: 100%;
    background-color: bisque;
    padding: 0 1rem;
}
section{
    height: 10%;
    padding-left: .5rem;
    display: flex;
    justify-content: start;
    align-items: center;
}
div > section:nth-child(1){
    display: flex;
    justify-content: space-between;
}
div > section:nth-child(1) button{
    background-color: #31A72A;
    padding: .5rem 1rem;
    font-weight: 600;
    box-shadow: 0 0 1px 1px rgb(0, 0, 0);
    cursor: pointer;
    margin: 5px 0;
    color: white;
    border: none;
}
div > section:nth-child(1) button:hover{
    background-color: #30a72a8e;
}
div > section:nth-child(1) button:active{
    color: black;
}
section .icon{
    cursor: pointer;
}
section .icon:hover{
    color: blue;
    scale: 1.2;
}
section .icon:active{
    color: rgba(0, 0, 0, 0.427);
}
</style>