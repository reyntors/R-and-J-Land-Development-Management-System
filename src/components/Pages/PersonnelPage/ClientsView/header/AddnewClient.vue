<template>
  <div class="searcClient-cont">
    <section class="back-cont">
        <font-awesome-icon class="back-icon" icon="fa-solid fa-arrow-left-long" size="2x" @click="back"/>
    </section>

    <div class="body">
        
        <section class="searchSection">
            <input placeholder="Search ID" v-model="searchedID" @keydown="searchKeyboard">
            <font-awesome-icon class="search-icon" icon="fa-solid fa-magnifying-glass" flip="horizontal" size="1x" @click="search"/>              
        </section>

        <!-- {{ searchResultComputed }} -->
        <div class="display-nofound" v-if="!searchResultComputed">
            <h2 style="text-align: center; font-weight: 600; margin-top: 2rem;">Nothing Found</h2>    
        </div>
        

        <div class="display-results" v-if="searchResultComputed">
            <section class="default-info-signup" >
                    //create acc info default
                <div>
                    <section class="form-style">
                    <label for="userIDSearch">ID</label>:<input type="text" id="userIDSearch" v-model="userId"> 
                    </section>                
                    <section class="form-style">
                    <label for="usernameSearch">Username</label>:<input type="text" id="usernameSearch" v-model="username"> 
                    </section>
                    <section class="form-style">
                    <label for="fullnameSearch">Fullname</label>:<input type="text" id="fullnameSearch" v-model="fullname"> 
                    </section>
                    <section class="form-style">
                        <label for="addressSearch">Home Address</label>:<input type="text" id="addressaddressSearch" v-model="homeAddress">
                    </section>
                    <section class="form-style">
                        <label for="emailSearch">Email</label>:<input type="text" id="emailSearch" v-model="email">
                    </section>
                    <section class="form-style">
                        <label for="fbSearch">Facebook Account</label>:<input type="text" id="fbSearch" v-model="fbAccount">
                    </section> 
                </div>    
            </section>  
    
            
            <section class="form-submitted">
                //shown here the forms the client submitted
            </section>

            <section class="button">
                    <button @click="addNow">Add <font-awesome-icon icon="fa-solid fa-plus" /></button>        
            </section>  
        </div>
        
    </div>



  </div>
</template>

<script>
export default{
    emits: ['go-back'],
    data(){
        return{
            userId: '',
            username: '',
            fullname: '',
            email: '',
            homeAddress: '',
            fbAccount: '',

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

                this.userId = result.userId
                this.username = result.username
                this.fullname = result.fullname
                this.email  =result.email
                this.homeAddress = result.homeAddress
                this.fbAccount = result.fbAccount
            }else{
                this.searchTrue = false;
                console.log('false')
            }
        },

        addNow(){
            const payload = {
                profile:{
                    id: this.userID,
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
            this.$store.dispatch('client/addClient',payload)
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
.searcClient-cont{
    height: 100%;
    border: 1px dashed black;
    display: flex;
    flex-direction: column;
    background-color: bisque;
}
.back-icon{
    cursor: pointer;
}
.back-icon:hover{
    scale: 1.2
}
.back-icon:active{
    scale: .8
}
.back-cont{
    width:100%;
    height: 10%;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 1rem;
}
.body{
    height: 100%;
    overflow-y: auto;
    padding: .5rem;
    display: flex;
    flex-direction: column;
}

.body .searchSection{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    width: 20%;
    min-width: 200px;
    position: relative;
}
.body .searchSection input{
    outline: 1px solid black;
}
.body .searchSection input:focus{
    outline: 2px solid rgba(0, 0, 0, 0.653);
}
.body .searchSection .search-icon{
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%); 
    padding: .5rem; 
    cursor: pointer;
}
.body .searchSection .search-icon:hover,
.body .searchSection .search-icon:active
{
    background-color: rgba(0, 0, 0, 0.2);
}

.body .display-nofound{
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.body .display-results{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.body .display-results .default-info-signup div{
    display: flex;
    flex-direction: column;
    gap: .5rem .5rem;
}
</style>