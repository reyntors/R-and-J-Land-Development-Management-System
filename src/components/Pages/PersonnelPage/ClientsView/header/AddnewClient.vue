<template>
  <div>
    <section>
        <font-awesome-icon class="icon" icon="fa-solid fa-arrow-left-long" size="2x" @click="back"/>
        
    </section>

    <section class="searchSection">
        <input placeholder="Search ID" v-model="searchedID" @keydown="searchKeyboard">
        <div @click="search">
         <font-awesome-icon class="search-icon" icon="fa-solid fa-magnifying-glass" flip="horizontal" size="1x"/>   
        </div>
        
    </section>

    <!-- {{ searchResultComputed }} -->

    <p v-if="!searchResultComputed" style="text-align: center; font-weight: 600; margin-top: 2rem;">Nothing Found</p>


    <section class="form">
        <form v-if="searchResultComputed">
            <label for="fullname">Fullname</label><input type="text" id="fullname" v-model="fullname">
            <label for="email">Email</label><input type="text" id="email" v-model="email">
            <label for="address">Address</label><input type="text" id="address" v-model="address">
        </form>        
    </section>

    <section class="button" v-if="searchResultComputed">
        <button @click="addNow">Add <font-awesome-icon icon="fa-solid fa-plus" /></button>        
    </section>

  </div>
</template>

<script>
export default{
    emits: ['go-back'],
    data(){
        return{
            id: '',
            fullname: '',
            email: '',
            address: '',

            searchedID: '',
            searchResult: null,
            searchTrue: false,
        }
    },
    methods: {
        back(){
            this.$emit('go-back')
        },
        searchKeyboard(event){
            if(event.key === 'Enter'){
                this.search();
            }
        },

        search(){
            this.$store.commit('client/searchClient',this.searchedID)
            const result = this.$store.getters['client/searchResultGetter']
            if(result){
                console.log('true')
                this.searchTrue = true;
                this.id = result.id
                this.fullname = result.fullname
                this.email  =result.email
                this.address = result.address
            }else{
                this.searchTrue = false;
                console.log('false')
            }
        },

        addNow(){
            const payload = {
                profile:{
                    id: this.id,
                    fullname: this.fullname,
                    email: this.fullname,
                    address: this.address                    
                },
                accountDetails: {

                },
                paymentDetails: {

                },
                accountingDetails:{

                },
                transaction:[
                     
                ],
                letterIntent:{

                },
                individualDeclaration: {

                },
                BirTinReques: {

                },
                ContractDetails: {

                },
                scannedFiles:[

                ]
            }
            this.$store.commit('client/addClient',payload)
            this.back();
        }
    },
    computed:{
        searchResultComputed(){
            return  this.searchTrue       
        },
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
.searchSection{
    height: 10%;
    width: 20%;
}
.searchSection input{
    width: 80%;
    height: 100%;
    padding: .5rem;
    margin: 0;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border: 1px solid black;
}
.searchSection input:focus{
    border-right: none;
}
.searchSection div{
    height: 100%;
    width: 20%;
    border: 1px solid black;
    border-left: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #31A72A;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
}
.searchSection div:hover{
    background-color: #30a72a8e;
}
.searchSection .search-icon{
    color: white;
}
.searchSection div:hover .search-icon{
    color: black;
}

.form form{
    margin-top: 1rem;
    display: flex;
    gap: .5rem;
}
.form input{
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;;
}

.button button{
    padding: .5rem 1rem;
    border: none;
    border-radius: 10px;
    background-color: #31A72A;
    color: white;
    box-shadow: 0 0 3px 1px black;
    
}
</style>